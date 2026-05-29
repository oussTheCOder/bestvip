import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { formatDate } from '@/utils/blogUtils';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBlogPost, getAllBlogSlugs, getBlogPosts } from '@/lib/blog';
import { BlogCategory, BLOG_CATEGORIES } from '@/types/blog';
import styles from './blog-detail.module.css';

interface BlogDetailPageProps {
  post: any;
  postCounts: Record<string, number>;
}

export default function BlogDetailPage({ post, postCounts }: BlogDetailPageProps) {
  const { t } = useLanguage();

  if (!post) {
    return (
      <>
        <Header />
        <main style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h1>Post not found</h1>
          <Link href="/blog">{t('blogBackToBlog' as any)}</Link>
        </main>
        <Footer />
      </>
    );
  }

  const getCategoryName = (category: BlogCategory): string => {
    const translationKey = BLOG_CATEGORIES[category].translationKey;
    return t(translationKey as any);
  };

  return (
    <>
      <Head>
        <title>{post.title} - Legal IPTV WhatsApp</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        {post.image && <meta property="og:image" content={post.image} />}
        <meta name="article:published_time" content={post.date} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main className={styles.container}>
        <div className={styles.content}>
          <article className={styles.article}>
            <div className={styles.header}>
              <Link href="/blog" className={styles.backLink}>{t('blogBackToBlog' as any)}</Link>
              
              <div className={styles.meta}>
                <div className={styles.categories}>
                  {post.categories.map((cat: BlogCategory) => (
                    <Link key={cat} href={`/blog/category/${cat}`}>
                      <span 
                        className={styles.category}
                        style={{ backgroundColor: BLOG_CATEGORIES[cat].color }}
                      >
                        {getCategoryName(cat)}
                      </span>
                    </Link>
                  ))}
                </div>
                  <span className={styles.date}>{formatDate(post.date)}</span>
                <span className={styles.readTime}>{post.readingTime}</span>
              </div>
            </div>

            {post.image && (
              <div className={styles.imageContainer}>
                <img src={post.image} alt={post.title} className={styles.image} />
              </div>
            )}

            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.body}>
              {/* Markdown content will be rendered here */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className={styles.footer}>
              <div className={styles.tags}>
                {post.categories.map((cat: BlogCategory) => (
                  <Link key={cat} href={`/blog/category/${cat}`}>
                    <span className={styles.tag}>{getCategoryName(cat)}</span>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          <BlogSidebar postCounts={postCounts} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogSlugs();
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<BlogDetailPageProps> = async ({ params, locale = 'en' }) => {
  const slug = params?.slug as string;
  const language = locale as 'en' | 'nl' | 'fr';
  const post = getBlogPost(slug, language);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Calculate post counts
  const allPosts = getBlogPosts(language);
  const postCounts: Record<string, number> = {};
  Object.keys(BLOG_CATEGORIES).forEach(cat => {
    postCounts[cat] = allPosts.filter(p => p.categories.includes(cat as any)).length;
  });

  return {
    props: {
      post,
      postCounts,
    },
    revalidate: 60,
  };
};
