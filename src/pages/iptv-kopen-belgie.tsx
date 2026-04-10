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
    title: 'IPTV kopen Belgie | StreamBe',
    description:
      'IPTV kopen in Belgie? Bekijk het stappenplan: test aanvragen, pakket kiezen, activeren en direct starten met 33.000+ kanalen.',
    h1: 'IPTV kopen in Belgie: simpel stappenplan',
    intro:
      'Hier leggen we het aankoopproces duidelijk uit, zodat je zonder gedoe kunt starten met je IPTV pakket.',
    steps: [
      'Vraag eerst de 24 uur gratis test aan via WhatsApp.',
      'Kies daarna het pakket dat past bij je gebruik.',
      'Ontvang je gegevens en activeer op je apparaat.',
      'Start direct met kijken in HD/4K kwaliteit.',
    ],
    ctaPrimary: 'Vraag 24 uur gratis test aan',
    ctaSecondary: 'Bekijk abonnementen',
    trialMessage: 'Hallo, ik wil graag IPTV kopen en eerst een gratis test van 24 uur proberen.',
    relatedTitle: 'Volgende stap',
  },
  en: {
    title: 'Buy IPTV Belgium | StreamBe',
    description:
      'Want to buy IPTV in Belgium? Follow this simple process: request trial, choose a plan, activate fast, and start streaming 33,000+ channels.',
    h1: 'How to buy IPTV in Belgium: simple process',
    intro:
      'This page explains the buying process step by step so you can start quickly without confusion.',
    steps: [
      'Request a free 24-hour trial via WhatsApp first.',
      'Choose the plan that fits your viewing needs.',
      'Receive your access details and activate on your device.',
      'Start streaming in HD/4K quality right away.',
    ],
    ctaPrimary: 'Request 24-Hour Free Trial',
    ctaSecondary: 'View Plans',
    trialMessage: 'Hi, I want to buy IPTV and first try a free 24-hour test.',
    relatedTitle: 'Next step',
  },
  fr: {
    title: 'Acheter IPTV Belgique | StreamBe',
    description:
      'Acheter IPTV en Belgique ? Suivez les etapes : demander un test, choisir un forfait, activer rapidement et regarder 33 000+ chaines.',
    h1: 'Acheter IPTV en Belgique : etapes simples',
    intro:
      'Cette page explique les etapes d achat de facon claire pour demarrer rapidement.',
    steps: [
      'Demandez d abord le test gratuit de 24 heures via WhatsApp.',
      'Choisissez l offre adaptee a votre usage.',
      'Recevez vos acces et activez sur votre appareil.',
      'Regardez immediatement en qualite HD/4K.',
    ],
    ctaPrimary: 'Demander un test gratuit 24h',
    ctaSecondary: 'Voir les abonnements',
    trialMessage: 'Bonjour, je veux acheter IPTV et essayer d abord un test gratuit de 24 heures.',
    relatedTitle: 'Etape suivante',
  },
};

const IptvKopenBelgiePage: React.FC = () => {
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
        <link rel="alternate" hrefLang="nl" href={localeHref('nl', '/iptv-kopen-belgie')} />
        <link rel="alternate" hrefLang="en" href={localeHref('en', '/iptv-kopen-belgie')} />
        <link rel="alternate" hrefLang="fr" href={localeHref('fr', '/iptv-kopen-belgie')} />
        <link rel="alternate" hrefLang="x-default" href={localeHref('nl', '/iptv-kopen-belgie')} />
      </Head>

      <Header />
      <main>
        <section style={{ padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '980px' }}>
            <h1 style={{ marginBottom: '20px' }}>{content.h1}</h1>
            <p style={{ color: '#b0b0b0', fontSize: '1.1rem', marginBottom: '30px' }}>{content.intro}</p>

            <ol style={{ marginBottom: '30px', paddingLeft: '20px', color: '#d0d0d0' }}>
              {content.steps.map((step) => (
                <li key={step} style={{ marginBottom: '10px' }}>{step}</li>
              ))}
            </ol>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a className="cta-button" href={trialLink} target="_blank" rel="noopener noreferrer">{content.ctaPrimary}</a>
              <Link className="cta-button cta-button-secondary" href="/#pricing">{content.ctaSecondary}</Link>
            </div>

            <h2 style={{ marginBottom: '16px' }}>{content.relatedTitle}</h2>
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              <Link href="/iptv-belgie">IPTV Belgie</Link>
              <Link href="/iptv-abonnement-belgie">IPTV abonnement Belgie</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IptvKopenBelgiePage;
