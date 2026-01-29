export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface ScriptCategory extends CosmicObject {
  type: 'script-categories';
  metadata: {
    name?: string;
    description?: string;
  };
}

export interface DurationOption {
  key: string;
  value: string;
}

export interface ThumbnailFile {
  url: string;
  imgix_url: string;
}

export interface VideoScript extends CosmicObject {
  type: 'video-scripts';
  metadata: {
    video_title?: string;
    duration?: DurationOption;
    category?: ScriptCategory;
    hook?: string;
    setup?: string;
    main_content?: string;
    resolution?: string;
    cta?: string;
    music_suggestion?: string;
    visual_notes?: string;
    thumbnail?: ThumbnailFile;
  };
}

export type DurationKey = '15s' | '30s' | '60s' | '90s';

export const DURATION_LABELS: Record<DurationKey, string> = {
  '15s': '15 seconds',
  '30s': '30 seconds',
  '60s': '60 seconds',
  '90s': '90 seconds',
};

export const DURATION_COLORS: Record<DurationKey, string> = {
  '15s': 'bg-green-500',
  '30s': 'bg-blue-500',
  '60s': 'bg-purple-500',
  '90s': 'bg-orange-500',
};