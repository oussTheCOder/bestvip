import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>IPTV Belgie Abonnement | IPTV België & Nederland | IPTV kopen</title>
        <meta name="description" content="IPTV Belgie abonnement voor België en Nederland. Bestel je abonnement iptv, iptv kopen met 24.000+ live kanalen en bekijk program iptv in topkwaliteit." />
        <meta name="keywords" content="iptv belgie, abonnement iptv, iptv kopen, program iptv, iptv abonnement, iptv belgique" />
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