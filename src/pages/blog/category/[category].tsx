import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBlogPosts, getBlogPostsByCategory } from '@/lib/blog';
import { BlogCategory, BLOG_CATEGORIES, BlogListItem } from '@/types/blog';
import styles from './category.module.css';

interface BlogCategoryPageProps {
  category: BlogCategory;
  posts: BlogListItem[];
  postCounts: Record<string, number>;
}

export default function BlogCategoryPage({ category, posts, postCounts }: BlogCategoryPageProps) {
  const { t } = useLanguage();
  const categoryInfo = BLOG_CATEGORIES[category];
  const categoryNameKey = categoryInfo.translationKey as any;

  return (
    <>
      <Head>
        <title>{t(categoryNameKey)} - Legal IPTV WhatsApp Blog</title>
        <meta name="description" content={`Read all ${t(categoryNameKey)} articles from our blog.`} />
        <meta property="og:title" content={`${t(categoryNameKey)} - Legal IPTV WhatsApp Blog`} />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main className={styles.container}>
        <div className={styles.header}>
          <Link href="/blog" className={styles.backLink}>{t('blogBackToBlog' as any)}</Link>
          <h1 className={styles.title}>{t(categoryNameKey)}</h1>
          <p className={styles.subtitle}>
            {t('blogArticlesInCategory' as any, { count: posts.length }).replace('{count}', posts.length.toString())}
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.postsSection}>
            <div className={styles.postsGrid}>
              {posts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {posts.length === 0 && (
              <div className={styles.emptyState}>
                <p>{t('blogNoPostsInCategory' as any)}</p>
              </div>
            )}
          </div>

          <BlogSidebar activeCategory={category} postCounts={postCounts} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: BlogCategory[] = ['iptv-apps', 'setup-guide', 'iptv-devices', 'iptv-news', 'iptv-reviews'];
  const locales = ['en', 'nl', 'fr'];
  
  return {
    paths: locales.flatMap(locale => 
      categories.map(cat => ({
        params: { category: cat },
        locale,
      }))
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogCategoryPageProps> = async ({ params, locale = 'en' }) => {
  const category = params?.category as BlogCategory;
  const language = locale as 'en' | 'nl' | 'fr';
  const posts = getBlogPostsByCategory(category, language);

  // Calculate post counts
  const allPosts = getBlogPosts(language);
  const postCounts: Record<string, number> = {};
  Object.keys(BLOG_CATEGORIES).forEach(cat => {
    postCounts[cat] = allPosts.filter(p => p.categories.includes(cat as any)).length;
  });

  return {
    props: {
      category,
      posts,
      postCounts,
    },
    revalidate: 60,
  };
};
