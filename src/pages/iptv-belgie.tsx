import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { generateWhatsAppLink } from '../utils/whatsapp';

type Locale = 'nl' | 'en' | 'fr';

const copy = {
  nl: {
    title: 'IPTV Belgie | StreamBe',
    description:
      'Ontdek IPTV Belgie met 33.000+ live kanalen, 160.000+ films en series in HD/4K en 24 uur gratis test.',
    h1: 'IPTV Belgie met snelle activatie en stabiele streaming',
    intro:
      'Deze pagina is gericht op IPTV Belgie. Je vindt hier een helder overzicht van wat je krijgt, voor wie het geschikt is en hoe je snel kunt starten.',
    points: [
      '33.000+ live kanalen voor Belgie en Nederland',
      '160.000+ films en series in HD/4K kwaliteit',
      '24 uur gratis test om eerst te proberen',
    ],
    ctaPrimary: 'Start je gratis test',
    ctaSecondary: 'Bekijk abonnementen',
    trialMessage: 'Hallo, ik wil graag een gratis IPTV test van 24 uur proberen.',
    relatedTitle: 'Gerelateerde pagina\'s',
  },
  en: {
    title: 'IPTV Belgium | StreamBe',
    description:
      'Explore IPTV Belgium with 33,000+ live channels, 160,000+ movies and series in HD/4K, plus a free 24-hour test.',
    h1: 'IPTV Belgium with fast activation and stable streaming',
    intro:
      'This page focuses on IPTV Belgium. You get a clear overview of what is included, who it is for, and how to start quickly.',
    points: [
      '33,000+ live channels for Belgium and the Netherlands',
      '160,000+ movies and series in HD/4K quality',
      'Free 24-hour test before you choose a plan',
    ],
    ctaPrimary: 'Start Free Trial',
    ctaSecondary: 'View Plans',
    trialMessage: 'Hi, I would like a free 24-hour IPTV trial test.',
    relatedTitle: 'Related pages',
  },
  fr: {
    title: 'IPTV Belgique | StreamBe',
    description:
      'Decouvrez IPTV Belgique avec 33 000+ chaines en direct, 160 000+ films et series en HD/4K et un test gratuit de 24 heures.',
    h1: 'IPTV Belgique avec activation rapide et streaming stable',
    intro:
      'Cette page est consacree a IPTV Belgique. Vous y trouverez un resume clair de l\'offre et la meilleure facon de commencer rapidement.',
    points: [
      '33 000+ chaines en direct pour la Belgique et les Pays-Bas',
      '160 000+ films et series en qualite HD/4K',
      'Test gratuit de 24 heures avant de choisir',
    ],
    ctaPrimary: 'Demarrer le test gratuit',
    ctaSecondary: 'Voir les abonnements',
    trialMessage: 'Bonjour, je souhaite essayer un test IPTV gratuit de 24 heures.',
    relatedTitle: 'Pages associees',
  },
};

const IptvBelgiePage: React.FC = () => {
  const router = useRouter();
  const locale = (router.locale as Locale) || 'nl';
  const content = copy[locale] || copy.nl;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://streambe.net';
  const canonicalPath = router.asPath.split('?')[0].split('#')[0];
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const whatsappNumber = process.env.WHATSAPP_NUMBER || '+19295664890';
  const trialLink = generateWhatsAppLink(whatsappNumber, content.trialMessage);

  const localeHref = (targetLocale: Locale, path: string) => {
    if (targetLocale === 'nl') {
      return `${siteUrl}${path}`;
    }
    return `${siteUrl}/${targetLocale}${path}`;
  };

  return (
    <div>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="alternate" hrefLang="nl" href={localeHref('nl', '/iptv-belgie')} />
        <link rel="alternate" hrefLang="en" href={localeHref('en', '/iptv-belgie')} />
        <link rel="alternate" hrefLang="fr" href={localeHref('fr', '/iptv-belgie')} />
        <link rel="alternate" hrefLang="x-default" href={localeHref('nl', '/iptv-belgie')} />
      </Head>

      <Header />
      <main>
        <section style={{ padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '980px' }}>
            <h1 style={{ marginBottom: '20px' }}>{content.h1}</h1>
            <p style={{ color: '#b0b0b0', fontSize: '1.1rem', marginBottom: '30px' }}>{content.intro}</p>

            <ul style={{ marginBottom: '30px', paddingLeft: '20px', color: '#d0d0d0' }}>
              {content.points.map((point) => (
                <li key={point} style={{ marginBottom: '10px' }}>{point}</li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a className="cta-button" href={trialLink} target="_blank" rel="noopener noreferrer">{content.ctaPrimary}</a>
              <Link className="cta-button cta-button-secondary" href="/#pricing">{content.ctaSecondary}</Link>
            </div>

            <h2 style={{ marginBottom: '16px' }}>{content.relatedTitle}</h2>
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              <Link href="/iptv-abonnement-belgie">IPTV abonnement Belgie</Link>
              <Link href="/iptv-kopen-belgie">IPTV kopen Belgie</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IptvBelgiePage;
