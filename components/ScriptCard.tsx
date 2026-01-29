import Link from 'next/link';
import { VideoScript } from '@/types';
import DurationBadge from './DurationBadge';

interface ScriptCardProps {
  script: VideoScript;
}

export default function ScriptCard({ script }: ScriptCardProps) {
  const thumbnail = script.metadata?.thumbnail;
  const category = script.metadata?.category;
  const duration = script.metadata?.duration;
  const hook = script.metadata?.hook;

  return (
    <Link href={`/scripts/${script.slug}`} className="group">
      <article className="gradient-border overflow-hidden h-full transition-transform duration-300 group-hover:scale-[1.02]">
        {thumbnail?.imgix_url && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={`${thumbnail.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={script.metadata?.video_title || script.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            {duration && (
              <div className="absolute top-4 right-4">
                <DurationBadge duration={duration} />
              </div>
            )}
          </div>
        )}

        <div className="p-6">
          {category && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full mb-3">
              {category.metadata?.name || category.title}
            </span>
          )}

          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors">
            {script.metadata?.video_title || script.title}
          </h3>

          {hook && (
            <p className="text-muted text-sm line-clamp-2">
              {hook}
            </p>
          )}

          <div className="mt-4 flex items-center text-primary-400 text-sm font-medium">
            <span>View Script</span>
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}