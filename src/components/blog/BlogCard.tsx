import Link from 'next/link';
import { BlogListItem } from '@/types/blog';
import { formatDate, getCategoryColor } from '@/utils/blogUtils';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  post: BlogListItem;
  featured?: boolean;
}

export default function BlogCard({ post, featured }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
        {post.image && (
          <div className={styles.imageContainer}>
            <img src={post.image} alt={post.title} className={styles.image} />
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.meta}>
            <div className={styles.categories}>
              {post.categories.map(cat => (
                <span 
                  key={cat} 
                  className={styles.category}
                  style={{ backgroundColor: getCategoryColor(cat) }}
                >
                  {cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </span>
              ))}
            </div>
            <span className={styles.date}>{formatDate(post.date)}</span>
          </div>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <div className={styles.footer}>
            <span className={styles.readTime}>{post.readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
