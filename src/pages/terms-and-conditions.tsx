import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const TermsAndConditionsPage: React.FC = () => {
    const { language } = useLanguage();
    const content = translations[language];
    const router = useRouter();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://streambe.net';
    const canonicalPath = router.asPath.split('?')[0].split('#')[0];
    const canonicalUrl = `${siteUrl}${canonicalPath}`;
    const ogImageUrl = `${siteUrl}/images/site-logo.png`;

    const alternateHref = (locale: string) => {
        if (locale === 'nl') {
            return `${siteUrl}/terms-and-conditions`;
        }
        return `${siteUrl}/${locale}/terms-and-conditions`;
    };

    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: content.termsTitle,
        description: content.termsIntroText1,
        url: canonicalUrl,
        inLanguage: language,
    };

    return (
        <div>
            <Head>
                <title>{content.termsTitle}</title>
                <meta name="description" content={content.termsIntroText1} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={content.termsTitle} />
                <meta property="og:description" content={content.termsIntroText1} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:image:type" content="image/png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={content.termsTitle} />
                <meta name="twitter:description" content={content.termsIntroText1} />
                <meta name="twitter:image" content={ogImageUrl} />
                {router.locales?.map((locale) => (
                    <link
                        key={locale}
                        rel="alternate"
                        hrefLang={locale}
                        href={alternateHref(locale)}
                    />
                ))}
                <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/terms-and-conditions`} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
                />
            </Head>
            <Header />
            <main>
                <section style={{ paddingTop: '100px', paddingBottom: '60px', borderBottom: '1px solid rgba(0, 212, 255, 0.1)' }}>
                    <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                        <h1 style={{
                            fontSize: '3.5rem',
                            marginBottom: '20px',
                            background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {content.termsTitle}
                        </h1>
                        <p style={{
                            fontSize: '1.15rem',
                            color: '#b0b0b0',
                            maxWidth: '760px',
                            margin: '0 auto',
                            lineHeight: '1.9'
                        }}>
                            {content.termsIntroText1}
                        </p>
                        <p style={{
                            fontSize: '1.05rem',
                            color: '#d0d0d0',
                            maxWidth: '760px',
                            margin: '30px auto 0',
                            lineHeight: '1.8'
                        }}>
                            {content.termsIntroText2}
                        </p>
                        <p style={{
                            fontSize: '1.05rem',
                            color: '#d0d0d0',
                            maxWidth: '760px',
                            margin: '20px auto 0',
                            lineHeight: '1.8'
                        }}>
                            {content.termsIntroText3}
                        </p>
                    </div>
                </section>

                <section style={{ paddingTop: '70px', paddingBottom: '70px' }}>
                    <div className="container" style={{ maxWidth: '940px' }}>
                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.termsAcceptanceTitle}</h2>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem', marginBottom: '15px' }}>{content.termsAcceptanceText1}</p>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem' }}>{content.termsAcceptanceText2}</p>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.termsSubscriptionTitle}</h2>
                            <ul style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem', paddingLeft: '22px' }}>
                                {(content as any).termsSubscriptionPoints.map((item: string, index: number) => (
                                    <li key={index} style={{ marginBottom: '12px' }}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.termsOrdersTitle}</h2>
                            <ul style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem', paddingLeft: '22px' }}>
                                {(content as any).termsOrdersPoints.map((item: string, index: number) => (
                                    <li key={index} style={{ marginBottom: '12px' }}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.termsResponsibilitiesTitle}</h2>
                            <ul style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem', paddingLeft: '22px' }}>
                                {(content as any).termsResponsibilitiesPoints.map((item: string, index: number) => (
                                    <li key={index} style={{ marginBottom: '12px' }}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.termsAvailabilityTitle}</h2>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem', marginBottom: '15px' }}>{content.termsAvailabilityText1}</p>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem' }}>{content.termsAvailabilityText2}</p>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.termsLiabilityTitle}</h2>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem' }}>{content.termsLiabilityText}</p>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.termsSuspensionTitle}</h2>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem' }}>{content.termsSuspensionText}</p>
                        </div>

                        <div style={{ marginBottom: '80px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.termsChangesTitle}</h2>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem' }}>{content.termsChangesText}</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TermsAndConditionsPage;
