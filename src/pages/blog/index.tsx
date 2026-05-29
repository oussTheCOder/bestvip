import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBlogPosts } from '@/lib/blog';
import { BlogListItem, BLOG_CATEGORIES } from '@/types/blog';
import styles from './blog.module.css';

interface BlogPageProps {
  posts: BlogListItem[];
  postCounts: Record<string, number>;
}

export default function BlogPage({ posts, postCounts }: BlogPageProps) {
  const router = useRouter();
  const { t } = useLanguage();
  const language = (router.query.lang as string) || 'en';
  
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <>
      <Head>
        <title>Blog - Legal IPTV WhatsApp</title>
        <meta name="description" content="Read the latest IPTV guides, reviews, news, and setup tutorials." />
        <meta property="og:title" content="Blog - Legal IPTV WhatsApp" />
        <meta property="og:description" content="Read the latest IPTV guides, reviews, news, and setup tutorials." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />
      
      <main className={styles.blogContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t('blogPageTitle' as any)}</h1>
          <p className={styles.subtitle}>{t('blogPageSubtitle' as any)}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.postsSection}>
            {featuredPost && (
              <section className={styles.featuredSection}>
                <BlogCard post={featuredPost} featured />
              </section>
            )}

            <section className={styles.postsGrid}>
              {regularPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </section>

            {posts.length === 0 && (
              <div className={styles.emptyState}>
                <p>{t('blogNoPostsFound' as any)}</p>
              </div>
            )}
          </div>

          <BlogSidebar postCounts={postCounts} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({ locale = 'en' }) => {
  const language = locale as 'en' | 'nl' | 'fr';
  const posts = getBlogPosts(language);

  // Calculate post counts per category
  const postCounts: Record<string, number> = {};
  Object.keys(BLOG_CATEGORIES).forEach(cat => {
    postCounts[cat] = posts.filter(p => p.categories.includes(cat as any)).length;
  });

  return {
    props: {
      posts,
      postCounts,
    },
    revalidate: 60, // ISR - revalidate every 60 seconds
  };
};
