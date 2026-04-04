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
  return (
    <div>
      <Head>
        <title>{content.homeTitle}</title>
        <meta name="description" content={content.homeDescription} />
        <meta name="keywords" content={content.homeKeywords} />
        {router.locales?.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/${locale}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/nl`}
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