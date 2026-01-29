import Link from 'next/link';
import { getVideoScripts, getCategories } from '@/lib/cosmic';
import ScriptCard from '@/components/ScriptCard';
import CategoryFilter from '@/components/CategoryFilter';
import HeroSection from '@/components/HeroSection';

export const revalidate = 60;

export default async function HomePage() {
  const [scripts, categories] = await Promise.all([
    getVideoScripts(),
    getCategories(),
  ]);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <CategoryFilter categories={categories} />
          </aside>

          {/* Scripts Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                All Scripts
                <span className="ml-2 text-sm font-normal text-muted">
                  ({scripts.length})
                </span>
              </h2>
            </div>

            {scripts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No scripts yet
                </h3>
                <p className="text-muted">
                  Start creating video scripts in your Cosmic dashboard.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {scripts.map((script) => (
                  <ScriptCard key={script.id} script={script} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}