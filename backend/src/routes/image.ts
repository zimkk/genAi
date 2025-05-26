import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticate } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();

// Get all public images (gallery)
router.get('/public', async (req: any, res: any) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const offset = (page - 1) * limit;

    const images = await prisma.image.findMany({
      where: { isPublic: true },
      orderBy: { createdAt: 'desc' },
      skip: offset,
      take: limit,
      select: {
        id: true,
        title: true,
        prompt: true,
        imageUrl: true,
        thumbnailUrl: true,
        width: true,
        height: true,
        model: true,
        style: true,
        createdAt: true,
        user: {
          select: {
            username: true,
            avatar: true
          }
        }
      }
    });

    const totalImages = await prisma.image.count({
      where: { isPublic: true }
    });

    res.json({
      success: true,
      data: {
        images,
        pagination: {
          page,
          limit,
          total: totalImages,
          pages: Math.ceil(totalImages / limit)
        }
      }
    });
  } catch (error) {
    console.error('Get public images error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Internal server error' }
    });
  }
});

// Get single image
router.get('/:id', async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const image = await prisma.image.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            username: true,
            avatar: true
          }
        }
      }
    });

    if (!image) {
      return res.status(404).json({
        success: false,
        error: { message: 'Image not found' }
      });
    }

    res.json({
      success: true,
      data: { image }
    });
  } catch (error) {
    console.error('Get image error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Internal server error' }
    });
  }
});

// Update image
router.put('/:id', authenticate, async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { title, isPublic } = req.body;
    const userId = req.user.id;

    // Check if user owns the image
    const existingImage = await prisma.image.findFirst({
      where: {
        id,
        userId
      }
    });

    if (!existingImage) {
      return res.status(404).json({
        success: false,
        error: { message: 'Image not found or access denied' }
      });
    }

    const updatedImage = await prisma.image.update({
      where: { id },
      data: {
        ...(title !== undefined && { title }),
        ...(isPublic !== undefined && { isPublic })
      }
    });

    res.json({
      success: true,
      data: { image: updatedImage }
    });
  } catch (error) {
    console.error('Update image error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Internal server error' }
    });
  }
});

// Delete image
router.delete('/:id', authenticate, async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Check if user owns the image
    const existingImage = await prisma.image.findFirst({
      where: {
        id,
        userId
      }
    });

    if (!existingImage) {
      return res.status(404).json({
        success: false,
        error: { message: 'Image not found or access denied' }
      });
    }

    await prisma.image.delete({
      where: { id }
    });

    res.json({
      success: true,
      data: { message: 'Image deleted successfully' }
    });
  } catch (error) {
    console.error('Delete image error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Internal server error' }
    });
  }
});

export default router; 