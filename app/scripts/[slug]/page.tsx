// app/scripts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getVideoScriptBySlug, getVideoScripts } from '@/lib/cosmic';
import ScriptTimeline from '@/components/ScriptTimeline';
import ProductionNotes from '@/components/ProductionNotes';
import DurationBadge from '@/components/DurationBadge';

export const revalidate = 60;

export async function generateStaticParams() {
  const scripts = await getVideoScripts();
  return scripts.map((script) => ({
    slug: script.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const script = await getVideoScriptBySlug(slug);
  
  if (!script) {
    return { title: 'Script Not Found' };
  }

  return {
    title: `${script.metadata?.video_title || script.title} | Video Script Studio`,
    description: script.metadata?.hook || 'Video script details',
  };
}

export default async function ScriptPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const script = await getVideoScriptBySlug(slug);

  if (!script) {
    notFound();
  }

  const thumbnail = script.metadata?.thumbnail;
  const category = script.metadata?.category;
  const duration = script.metadata?.duration;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Scripts
        </Link>

        {/* Script Header */}
        <div className="gradient-border overflow-hidden mb-8">
          {thumbnail?.imgix_url && (
            <div className="relative h-64 md:h-80">
              <img
                src={`${thumbnail.imgix_url}?w=1200&h=640&fit=crop&auto=format,compress`}
                alt={script.metadata?.video_title || script.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>
          )}
          
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {category && (
                <span className="px-3 py-1 text-sm font-medium bg-primary-500/20 text-primary-300 rounded-full">
                  {category.metadata?.name || category.title}
                </span>
              )}
              {duration && (
                <DurationBadge duration={duration} />
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {script.metadata?.video_title || script.title}
            </h1>

            {script.metadata?.music_suggestion && (
              <div className="flex items-center gap-2 text-muted">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
                <span className="text-sm">{script.metadata.music_suggestion}</span>
              </div>
            )}
          </div>
        </div>

        {/* Script Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ScriptTimeline script={script} />
          </div>
          
          <aside>
            <ProductionNotes visualNotes={script.metadata?.visual_notes} />
          </aside>
        </div>
      </div>
    </div>
  );
}