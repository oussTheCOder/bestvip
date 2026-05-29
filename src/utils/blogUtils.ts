import { BlogCategory, BLOG_CATEGORIES } from '@/types/blog';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getCategoryName(category: BlogCategory): string {
  return BLOG_CATEGORIES[category]?.name || category;
}

export function getCategoryColor(category: BlogCategory): string {
  return BLOG_CATEGORIES[category]?.color || '#666';
}
