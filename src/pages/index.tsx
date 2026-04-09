import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const content = translations[language];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
  const canonicalPath = router.asPath.split('?')[0].split('#')[0];
  const canonicalUrl = `${siteUrl}${canonicalPath === '/' ? '' : canonicalPath}`;
  const ogImageUrl = `${siteUrl}/images/modern-devices.svg`;
  const localeHref = (locale: string, path: string) => {
    if (locale === 'nl') {
      return `${siteUrl}${path}`;
    }
    return `${siteUrl}/${locale}${path}`;
  };
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'StreamBe IPTV',
    url: siteUrl,
    logo: `${siteUrl}/images/modern-devices.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['nl', 'en', 'fr'],
    },
  };
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'StreamBe IPTV',
    url: siteUrl,
    inLanguage: ['nl', 'en', 'fr'],
  };

  return (
    <div>
      <Head>
        <title>{content.homeTitle}</title>
        <meta name="description" content={content.homeDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={content.homeTitle} />
        <meta property="og:description" content={content.homeDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.homeTitle} />
        <meta name="twitter:description" content={content.homeDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        {router.locales?.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={localeHref(locale, '')}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={siteUrl}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Pricing />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;