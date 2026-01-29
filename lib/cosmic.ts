import { createBucketClient } from '@cosmicjs/sdk';
import { VideoScript, ScriptCategory } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export async function getVideoScripts(): Promise<VideoScript[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'video-scripts' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);

    return response.objects as VideoScript[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch video scripts');
  }
}

export async function getVideoScriptBySlug(slug: string): Promise<VideoScript | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'video-scripts', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);

    return response.object as VideoScript;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch video script');
  }
}

export async function getCategories(): Promise<ScriptCategory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'script-categories' })
      .props(['id', 'title', 'slug', 'metadata']);

    return response.objects as ScriptCategory[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch categories');
  }
}

export async function getScriptsByCategory(categoryId: string): Promise<VideoScript[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'video-scripts',
        'metadata.category': categoryId,
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);

    return response.objects as VideoScript[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch scripts by category');
  }
}