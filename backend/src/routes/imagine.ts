// @ts-nocheck
import express, { Request, Response } from 'express';import { PrismaClient } from '@prisma/client';import { authenticate } from '../middleware/auth';import { ImagineService } from '../services/imagineService';interface AuthenticatedRequest extends Request {  user: {    id: string;    email: string;  };}

const router = express.Router();
const prisma = new PrismaClient();
const imagineService = new ImagineService();

// Generate image with Imagine.art// @ts-ignorerouter.post('/generate', authenticate, async (req: any, res: any) => {
  try {
    const {
      prompt,
      negativePrompt,
      styleId,
      aspectRatio = '1:1',
      highResolution = false,
      seed,
      cfg = 9.5,
      steps = 30
    } = req.body;

        if (!prompt) {      res.status(400).json({        success: false,        error: { message: 'Prompt is required' }      });      return;    }

    // Call Imagine.art API
    const imagineResult = await imagineService.generateImage({
      prompt,
      negative_prompt: negativePrompt,
      style_id: styleId ? parseInt(styleId) : undefined,
      aspect_ratio: aspectRatio,
      high_resolution: highResolution,
      seed: seed ? parseInt(seed) : undefined,
      cfg: parseFloat(cfg),
      steps: parseInt(steps)
    });

    // Save to database
    const image = await prisma.image.create({
      data: {
        userId: req.user.id,
        prompt,
        negativePrompt,
        imageUrl: imagineResult.image_url || '',
        width: aspectRatio === '16:9' ? 1024 : aspectRatio === '9:16' ? 576 : 1024,
        height: aspectRatio === '16:9' ? 576 : aspectRatio === '9:16' ? 1024 : 1024,
        model: 'imagine-art',
        style: styleId?.toString(),
        quality: highResolution ? 'high' : 'standard',
        steps: parseInt(steps),
        seed: seed?.toString(),
        vyroImageId: imagineResult.id,
        metadata: imagineResult.metadata || {}
      }
    });

    // Log API usage
    await prisma.apiUsage.create({
      data: {
        userId: req.user.id,
        endpoint: '/api/imagine/generate',
        successful: imagineResult.status !== 'failed',
        requestData: {
          prompt,
          negativePrompt,
          styleId,
          aspectRatio,
          highResolution,
          seed,
          cfg,
          steps
        },
        responseData: imagineResult
      }
    });

    res.status(201).json({
      success: true,
      data: {
        image,
        imagineResult
      }
    });
  } catch (error: any) {
    console.error('Image generation error:', error);
    
    // Log failed API usage
    try {
      await prisma.apiUsage.create({
        data: {
          userId: req.user.id,
          endpoint: '/api/imagine/generate',
          successful: false,
          errorMessage: error.message,
          requestData: req.body
        }
      });
    } catch (logError) {
      console.error('Failed to log API usage:', logError);
    }

    res.status(500).json({
      success: false,
      error: { message: error.message || 'Image generation failed' }
    });
  }
;

// Check image generation status
router.get('/status/:imageId', authenticate, async (req: any, res: any) => {
  try {
    const { imageId } = req.params;

    // Find image in database
    const image = await prisma.image.findFirst({
      where: {
        id: imageId,
        userId: req.user.id
      }
    });

    if (!image) {
      return res.status(404).json({
        success: false,
        error: { message: 'Image not found' }
      });
    }

    // Check status with Imagine.art if we have the vyroImageId
    let imagineStatus = null;
    if (image.vyroImageId) {
      try {
        imagineStatus = await imagineService.getImageStatus(image.vyroImageId);
        
        // Update image if status changed
        if (imagineStatus.image_url && !image.imageUrl) {
          await prisma.image.update({
            where: { id: imageId },
            data: {
              imageUrl: imagineStatus.image_url,
              metadata: imagineStatus.metadata || {}
            }
          });
        }
      } catch (error) {
        console.error('Error checking Imagine.art status:', error);
      }
    }

    res.json({
      success: true,
      data: {
        image,
        imagineStatus
      }
    });
  } catch (error) {
    console.error('Status check error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Internal server error' }
    });
  }
});

// Get available styles
router.get('/styles', authenticate, async (req: any, res: any) => {
  try {
    const styles = await imagineService.getAvailableStyles();
    
    res.json({
      success: true,
      data: { styles }
    });
  } catch (error: any) {
    console.error('Get styles error:', error);
    res.status(500).json({
      success: false,
      error: { message: error.message || 'Failed to fetch styles' }
    });
  }
});

// Upscale image
router.post('/upscale/:imageId', authenticate, async (req: any, res: any) => {
  try {
    const { imageId } = req.params;
    const { scale = '2x' } = req.body;

    // Find image in database
    const image = await prisma.image.findFirst({
      where: {
        id: imageId,
        userId: req.user.id
      }
    });

    if (!image || !image.vyroImageId) {
      return res.status(404).json({
        success: false,
        error: { message: 'Image not found or not generated with Imagine.art' }
      });
    }

    // Upscale with Imagine.art
    const upscaleResult = await imagineService.upscaleImage(image.vyroImageId, scale);

    // Log API usage
    await prisma.apiUsage.create({
      data: {
        userId: req.user.id,
        endpoint: '/api/imagine/upscale',
        successful: upscaleResult.status !== 'failed',
        requestData: { imageId, scale },
        responseData: upscaleResult
      }
    });

    res.json({
      success: true,
      data: { upscaleResult }
    });
  } catch (error: any) {
    console.error('Upscale error:', error);
    res.status(500).json({
      success: false,
      error: { message: error.message || 'Failed to upscale image' }
    });
  }
});

// Create image variations
router.post('/variations/:imageId', authenticate, async (req: any, res: any) => {
  try {
    const { imageId } = req.params;
    const { count = 4 } = req.body;

    // Find image in database
    const image = await prisma.image.findFirst({
      where: {
        id: imageId,
        userId: req.user.id
      }
    });

    if (!image || !image.vyroImageId) {
      return res.status(404).json({
        success: false,
        error: { message: 'Image not found or not generated with Imagine.art' }
      });
    }

    // Create variations with Imagine.art
    const variationsResult = await imagineService.createVariations(image.vyroImageId, count);

    // Log API usage
    await prisma.apiUsage.create({
      data: {
        userId: req.user.id,
        endpoint: '/api/imagine/variations',
        successful: variationsResult.status !== 'failed',
        requestData: { imageId, count },
        responseData: variationsResult
      }
    });

    res.json({
      success: true,
      data: { variationsResult }
    });
  } catch (error: any) {
    console.error('Variations error:', error);
    res.status(500).json({
      success: false,
      error: { message: error.message || 'Failed to create variations' }
    });
  }
});

// Image remix
router.post('/remix', authenticate, async (req: any, res: any) => {
  try {
    const { imageUrl, prompt, strength = 0.8 } = req.body;

    if (!imageUrl || !prompt) {
      return res.status(400).json({
        success: false,
        error: { message: 'Image URL and prompt are required' }
      });
    }

    // Remix with Imagine.art
    const remixResult = await imagineService.remixImage(imageUrl, prompt, strength);

    // Save remix result to database
    const image = await prisma.image.create({
      data: {
        userId: req.user.id,
        prompt: `Remix: ${prompt}`,
        imageUrl: remixResult.image_url || '',
        model: 'imagine-art-remix',
        vyroImageId: remixResult.id,
        metadata: { originalImageUrl: imageUrl, strength }
      }
    });

    // Log API usage
    await prisma.apiUsage.create({
      data: {
        userId: req.user.id,
        endpoint: '/api/imagine/remix',
        successful: remixResult.status !== 'failed',
        requestData: { imageUrl, prompt, strength },
        responseData: remixResult
      }
    });

    res.status(201).json({
      success: true,
      data: {
        image,
        remixResult
      }
    });
  } catch (error: any) {
    console.error('Remix error:', error);
    res.status(500).json({
      success: false,
      error: { message: error.message || 'Failed to remix image' }
    });
  }
});

export default router; 