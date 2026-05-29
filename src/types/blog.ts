export type BlogCategory = 'iptv-apps' | 'setup-guide' | 'iptv-devices' | 'iptv-news' | 'iptv-reviews';

export interface BlogMeta {
  title: string;
  excerpt: string;
  date: string;
  categories: BlogCategory[];
  featured?: boolean;
  image?: string;
  readingTime?: string;
}

export interface BlogPost extends BlogMeta {
  slug: string;
  content: string;
}

export interface BlogListItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories: BlogCategory[];
  featured?: boolean;
  image?: string;
  readingTime?: string;
}

export const BLOG_CATEGORIES = {
  'iptv-apps': { name: 'IPTV Apps', color: '#6366f1', translationKey: 'blogAppsCategoryName' },
  'setup-guide': { name: 'Setup Guide', color: '#ec4899', translationKey: 'blogSetupGuideCategoryName' },
  'iptv-devices': { name: 'IPTV Devices', color: '#f59e0b', translationKey: 'blogDevicesCategoryName' },
  'iptv-news': { name: 'IPTV News', color: '#06b6d4', translationKey: 'blogNewsCategoryName' },
  'iptv-reviews': { name: 'IPTV Reviews', color: '#10b981', translationKey: 'blogReviewsCategoryName' },
};
