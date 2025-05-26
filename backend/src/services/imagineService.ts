import axios, { AxiosResponse } from 'axios';

interface ImagineGenerateImageRequest {
  prompt: string;
  negative_prompt?: string;
  style_id?: number;
  aspect_ratio?: string;
  high_resolution?: boolean;
  seed?: number;
  cfg?: number; // Guidance scale
  steps?: number;
}

interface ImagineGenerateImageResponse {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  image_url?: string;
  error?: string;
  upscaled_urls?: string[];
  metadata?: {
    prompt: string;
    style_id?: number;
    aspect_ratio?: string;
    seed?: number;
    cfg?: number;
    steps?: number;
  };
}

interface ImagineStyle {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category: string;
}

export class ImagineService {
  private baseURL: string;
  private apiKey: string;
  private axiosInstance;

  constructor() {
    this.baseURL = process.env.IMAGINE_API_BASE_URL || 'https://api.imagine.art';
    this.apiKey = process.env.IMAGINE_API_KEY || '';
    
    if (!this.apiKey) {
      throw new Error('IMAGINE_API_KEY is required');
    }

    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      timeout: 60000, // 60 seconds timeout for AI generation
    });
  }

  /**
   * Generate an image using Imagine.art API
   */
  async generateImage(params: ImagineGenerateImageRequest): Promise<ImagineGenerateImageResponse> {
    try {
      const requestData = {
        prompt: params.prompt,
        negative_prompt: params.negative_prompt,
        style_id: params.style_id || 30, // Default to Realistic style
        aspect_ratio: params.aspect_ratio || '1:1',
        high_resolution: params.high_resolution || false,
        seed: params.seed,
        cfg: params.cfg || 9.5,
        steps: params.steps || 30,
      };

      const response: AxiosResponse<ImagineGenerateImageResponse> = await this.axiosInstance.post(
        '/api/v1/text-to-image',
        requestData
      );

      return response.data;
    } catch (error: any) {
      console.error('Imagine.art API Error:', error.response?.data || error.message);
      throw new Error(
        error.response?.data?.error || 
        error.response?.data?.message ||
        'Failed to generate image with Imagine.art'
      );
    }
  }

  /**
   * Get the status of an image generation task
   */
  async getImageStatus(imageId: string): Promise<ImagineGenerateImageResponse> {
    try {
      const response: AxiosResponse<ImagineGenerateImageResponse> = await this.axiosInstance.get(
        `/api/v1/status/${imageId}`
      );

      return response.data;
    } catch (error: any) {
      console.error('Imagine.art Status Check Error:', error.response?.data || error.message);
      throw new Error(
        error.response?.data?.error || 
        error.response?.data?.message ||
        'Failed to check image status'
      );
    }
  }

  /**
   * Get available styles from Imagine.art
   */
  async getAvailableStyles(): Promise<ImagineStyle[]> {
    try {
      const response = await this.axiosInstance.get('/api/v1/styles');
      return response.data.styles || response.data || [];
    } catch (error: any) {
      console.error('Imagine.art Styles Error:', error.response?.data || error.message);
      throw new Error('Failed to fetch available styles');
    }
  }

  /**
   * Upscale an image using Imagine.art
   */
  async upscaleImage(imageId: string, scale: '2x' | '4x' = '2x'): Promise<ImagineGenerateImageResponse> {
    try {
      const response: AxiosResponse<ImagineGenerateImageResponse> = await this.axiosInstance.post(
        '/api/v1/upscale',
        {
          image_id: imageId,
          scale: scale
        }
      );

      return response.data;
    } catch (error: any) {
      console.error('Imagine.art Upscale Error:', error.response?.data || error.message);
      throw new Error(
        error.response?.data?.error || 
        'Failed to upscale image'
      );
    }
  }

  /**
   * Create image variations using Imagine.art
   */
  async createVariations(imageId: string, count: number = 4): Promise<ImagineGenerateImageResponse> {
    try {
      const response: AxiosResponse<ImagineGenerateImageResponse> = await this.axiosInstance.post(
        '/api/v1/variations',
        {
          image_id: imageId,
          count: Math.min(count, 4) // Max 4 variations
        }
      );

      return response.data;
    } catch (error: any) {
      console.error('Imagine.art Variations Error:', error.response?.data || error.message);
      throw new Error(
        error.response?.data?.error || 
        'Failed to create image variations'
      );
    }
  }

  /**
   * Image remix/editing using Imagine.art
   */
  async remixImage(imageUrl: string, prompt: string, strength: number = 0.8): Promise<ImagineGenerateImageResponse> {
    try {
      const response: AxiosResponse<ImagineGenerateImageResponse> = await this.axiosInstance.post(
        '/api/v1/remix',
        {
          image_url: imageUrl,
          prompt: prompt,
          strength: Math.min(Math.max(strength, 0.1), 1.0) // Clamp between 0.1 and 1.0
        }
      );

      return response.data;
    } catch (error: any) {
      console.error('Imagine.art Remix Error:', error.response?.data || error.message);
      throw new Error(
        error.response?.data?.error || 
        'Failed to remix image'
      );
    }
  }
} 