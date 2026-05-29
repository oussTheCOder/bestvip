import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { BLOG_CATEGORIES, BlogCategory } from '@/types/blog';
import styles from './BlogSidebar.module.css';

interface BlogSidebarProps {
  activeCategory?: BlogCategory;
  postCounts?: Record<BlogCategory, number>;
}

export default function BlogSidebar({ activeCategory, postCounts }: BlogSidebarProps) {
  const { t } = useLanguage();
  const categories: BlogCategory[] = ['iptv-apps', 'setup-guide', 'iptv-devices', 'iptv-news', 'iptv-reviews'];

  const getCategoryName = (category: BlogCategory): string => {
    const translationKey = BLOG_CATEGORIES[category].translationKey;
    return t(translationKey as any);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>{t('blogCategoriesTitle' as any)}</h3>
        <nav className={styles.categoryList}>
          <Link href="/blog" className={`${styles.categoryLink} ${!activeCategory ? styles.active : ''}`}>
            <span className={styles.categoryName}>{t('blogAllPosts' as any)}</span>
            {postCounts && <span className={styles.count}>{Object.values(postCounts).reduce((a, b) => a + b, 0)}</span>}
          </Link>
          {categories.map(category => (
            <Link 
              key={category}
              href={`/blog/category/${category}`}
              className={`${styles.categoryLink} ${activeCategory === category ? styles.active : ''}`}
            >
              <span 
                className={styles.dot}
                style={{ backgroundColor: BLOG_CATEGORIES[category].color }}
              />
              <span className={styles.categoryName}>{getCategoryName(category)}</span>
              {postCounts && <span className={styles.count}>{postCounts[category] || 0}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>{t('blogAboutTitle' as any)}</h3>
        <p className={styles.aboutText}>
          {t('blogAboutText' as any)}
        </p>
      </div>
    </aside>
  );
}
