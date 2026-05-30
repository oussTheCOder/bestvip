import { BlogListItem, BlogCategory, BLOG_CATEGORIES } from '@/types/blog';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// This file should only be imported in getStaticProps/getStaticPaths
if (typeof window !== 'undefined') {
  throw new Error('blog.ts should only be used in server-side code');
}

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');
type Language = 'en' | 'nl' | 'fr';

export function getBlogPosts(language: Language = 'en'): BlogListItem[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  
  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith(`.${language}.md`));
  
  const posts: BlogListItem[] = files.map(file => {
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    
    return {
      slug: file.replace(`.${language}.md`, ''),
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      categories: data.categories || [],
      featured: data.featured || false,
      image: data.image,
      readingTime: calculateReadingTime(fileContent),
    };
  });

  // Sort by date (recent first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string, language: Language = 'en') {
  const filePath = path.join(BLOG_DIR, `${slug}.${language}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);
  
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    categories: data.categories || [],
    featured: data.featured || false,
    image: data.image,
    content: htmlContent,
    readingTime: calculateReadingTime(fileContent),
  };
}

export function getBlogPostsByCategory(category: BlogCategory, language: Language = 'en'): BlogListItem[] {
  const posts = getBlogPosts(language);
  return posts.filter(post => post.categories.includes(category));
}

export function getAllBlogSlugs() {
  const languages: Language[] = ['en', 'nl', 'fr'];
  const slugs: any[] = [];
  
  if (!fs.existsSync(BLOG_DIR)) {
    return slugs;
  }
  
  languages.forEach(lang => {
    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith(`.${lang}.md`));
    files.forEach(file => {
      const slug = file.replace(`.${lang}.md`, '');
      slugs.push({
        params: {
          slug,
          lang,
        },
      });
    });
  });

  return slugs;
}

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

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
