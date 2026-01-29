import Link from 'next/link';
import { ScriptCategory } from '@/types';

interface CategoryFilterProps {
  categories: ScriptCategory[];
  activeCategory?: string;
}

export default function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="gradient-border p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span>🏷️</span>
        Categories
      </h3>

      <nav className="space-y-2">
        <Link
          href="/"
          className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            !activeCategory
              ? 'bg-primary-500/20 text-primary-300'
              : 'text-muted hover:text-white hover:bg-surface-light'
          }`}
        >
          All Categories
        </Link>

        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === category.slug
                ? 'bg-primary-500/20 text-primary-300'
                : 'text-muted hover:text-white hover:bg-surface-light'
            }`}
          >
            {category.metadata?.name || category.title}
            {category.metadata?.description && (
              <span className="block text-xs text-muted mt-0.5">
                {category.metadata.description}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}