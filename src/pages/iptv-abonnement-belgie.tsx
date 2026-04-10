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
    title: 'IPTV abonnement Belgie | StreamBe',
    description:
      'Vergelijk IPTV abonnement opties voor Belgie: standaard of premium, 33.000+ kanalen, 160.000+ films en series, en snelle activatie.',
    h1: 'IPTV abonnement Belgie: welke optie past bij jou?',
    intro:
      'Op deze pagina leggen we uit hoe je het juiste IPTV abonnement kiest op basis van kijkgedrag, apparaten en gewenste ondersteuning.',
    blocks: [
      {
        title: 'Voor dagelijks kijken',
        text: 'Kies een stabiel pakket voor live tv, nieuws en sport met snelle start.',
      },
      {
        title: 'Voor gezinnen en meerdere schermen',
        text: 'Gebruik multi-device opties wanneer je op meerdere apparaten tegelijk wilt kijken.',
      },
      {
        title: 'Voor maximale kwaliteit',
        text: 'Kies premium wanneer je extra kanalen, hogere kwaliteit en prioriteit wilt.',
      },
    ],
    ctaPrimary: 'Vraag gratis test aan',
    ctaSecondary: 'Ga naar prijzen',
    trialMessage: 'Hallo, ik wil graag een gratis IPTV test van 24 uur proberen voordat ik een abonnement kies.',
    relatedTitle: 'Lees ook',
  },
  en: {
    title: 'IPTV subscription Belgium | StreamBe',
    description:
      'Compare IPTV subscription options for Belgium: standard or premium, 33,000+ channels, 160,000+ movies and series, and fast activation.',
    h1: 'IPTV subscription Belgium: which plan fits you?',
    intro:
      'This page helps you choose the right IPTV subscription based on viewing habits, devices, and support needs.',
    blocks: [
      {
        title: 'For daily viewing',
        text: 'Choose a stable package for live TV, news, and sports with a fast start.',
      },
      {
        title: 'For families and multi-screen use',
        text: 'Use multi-device options if you watch on several devices at once.',
      },
      {
        title: 'For maximum quality',
        text: 'Choose premium if you want more channels, higher quality, and priority support.',
      },
    ],
    ctaPrimary: 'Request Free Trial',
    ctaSecondary: 'Go to Pricing',
    trialMessage: 'Hi, I would like a free 24-hour IPTV trial test before choosing a subscription.',
    relatedTitle: 'Also read',
  },
  fr: {
    title: 'Abonnement IPTV Belgique | StreamBe',
    description:
      'Comparez les options d abonnement IPTV pour la Belgique : standard ou premium, 33 000+ chaines, 160 000+ films et series, activation rapide.',
    h1: 'Abonnement IPTV Belgique : quelle offre choisir ?',
    intro:
      'Cette page vous aide a choisir la bonne formule IPTV selon vos habitudes, vos appareils et le niveau de support souhaite.',
    blocks: [
      {
        title: 'Pour un usage quotidien',
        text: 'Choisissez une offre stable pour la tv en direct, les actualites et le sport.',
      },
      {
        title: 'Pour les familles et plusieurs ecrans',
        text: 'Optez pour le multi-appareils si vous regardez sur plusieurs ecrans.',
      },
      {
        title: 'Pour une qualite maximale',
        text: 'Choisissez premium pour plus de chaines et un support prioritaire.',
      },
    ],
    ctaPrimary: 'Demander le test gratuit',
    ctaSecondary: 'Voir les tarifs',
    trialMessage: 'Bonjour, je souhaite essayer un test IPTV gratuit de 24 heures avant de choisir un abonnement.',
    relatedTitle: 'A lire aussi',
  },
};

const IptvAbonnementBelgiePage: React.FC = () => {
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
        <link rel="alternate" hrefLang="nl" href={localeHref('nl', '/iptv-abonnement-belgie')} />
        <link rel="alternate" hrefLang="en" href={localeHref('en', '/iptv-abonnement-belgie')} />
        <link rel="alternate" hrefLang="fr" href={localeHref('fr', '/iptv-abonnement-belgie')} />
        <link rel="alternate" hrefLang="x-default" href={localeHref('nl', '/iptv-abonnement-belgie')} />
      </Head>

      <Header />
      <main>
        <section style={{ padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '980px' }}>
            <h1 style={{ marginBottom: '20px' }}>{content.h1}</h1>
            <p style={{ color: '#b0b0b0', fontSize: '1.1rem', marginBottom: '30px' }}>{content.intro}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '20px', marginBottom: '30px' }}>
              {content.blocks.map((block) => (
                <article key={block.title} style={{ padding: '20px', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '10px', background: 'rgba(0, 20, 40, 0.35)' }}>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{block.title}</h2>
                  <p style={{ color: '#b0b0b0' }}>{block.text}</p>
                </article>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a className="cta-button" href={trialLink} target="_blank" rel="noopener noreferrer">{content.ctaPrimary}</a>
              <Link className="cta-button cta-button-secondary" href="/#pricing">{content.ctaSecondary}</Link>
            </div>

            <h2 style={{ marginBottom: '16px' }}>{content.relatedTitle}</h2>
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              <Link href="/iptv-belgie">IPTV Belgie</Link>
              <Link href="/iptv-kopen-belgie">IPTV kopen Belgie</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IptvAbonnementBelgiePage;
