import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const RefundPolicyPage: React.FC = () => {
    const { language } = useLanguage();
    const content = translations[language];
    const router = useRouter();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://streambe.net';
    const canonicalPath = router.asPath.split('?')[0].split('#')[0];
    const canonicalUrl = `${siteUrl}${canonicalPath}`;
    const ogImageUrl = `${siteUrl}/images/site-logo.png`;

    const alternateHref = (locale: string) => {
        if (locale === 'nl') {
            return `${siteUrl}/refund-policy`;
        }
        return `${siteUrl}/${locale}/refund-policy`;
    };

    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: content.refundTitle,
        description: content.refundIntroText1,
        url: canonicalUrl,
        inLanguage: language,
    };

    return (
        <div>
            <Head>
                <title>{content.refundTitle}</title>
                <meta name="description" content={content.refundIntroText1} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={content.refundTitle} />
                <meta property="og:description" content={content.refundIntroText1} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:image:type" content="image/png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={content.refundTitle} />
                <meta name="twitter:description" content={content.refundIntroText1} />
                <meta name="twitter:image" content={ogImageUrl} />
                {router.locales?.map((locale) => (
                    <link
                        key={locale}
                        rel="alternate"
                        hrefLang={locale}
                        href={alternateHref(locale)}
                    />
                ))}
                <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/refund-policy`} />
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
                            {content.refundTitle}
                        </h1>
                        <p style={{
                            fontSize: '1.15rem',
                            color: '#b0b0b0',
                            maxWidth: '760px',
                            margin: '0 auto',
                            lineHeight: '1.9'
                        }}>
                            {content.refundIntroText1}
                        </p>
                        <p style={{
                            fontSize: '1.05rem',
                            color: '#d0d0d0',
                            maxWidth: '760px',
                            margin: '30px auto 0',
                            lineHeight: '1.8'
                        }}>
                            {content.refundIntroText2}
                        </p>
                    </div>
                </section>

                <section style={{ paddingTop: '70px', paddingBottom: '70px' }}>
                    <div className="container" style={{ maxWidth: '940px' }}>
                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.refundDigitalNoticeTitle}</h2>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem' }}>{content.refundDigitalNoticeText}</p>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.refundConditionsTitle}</h2>
                            <ul style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem', paddingLeft: '22px' }}>
                                {(content as any).refundConditionsPoints.map((item: string, index: number) => (
                                    <li key={index} style={{ marginBottom: '12px' }}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.refundNonRefundableTitle}</h2>
                            <ul style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem', paddingLeft: '22px' }}>
                                {(content as any).refundNonRefundablePoints.map((item: string, index: number) => (
                                    <li key={index} style={{ marginBottom: '12px' }}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.refundReplacementTitle}</h2>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem', marginBottom: '15px' }}>{content.refundReplacementText1}</p>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem', marginBottom: '15px' }}>{content.refundReplacementText2}</p>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem' }}>{content.refundReplacementText3}</p>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.refundProcessTitle}</h2>
                            <ul style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem', paddingLeft: '22px' }}>
                                {(content as any).refundProcessPoints.map((item: string, index: number) => (
                                    <li key={index} style={{ marginBottom: '12px' }}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.refundProcessingTitle}</h2>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem', marginBottom: '15px' }}>{content.refundProcessingText1}</p>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem' }}>{content.refundProcessingText2}</p>
                        </div>

                        <div style={{ marginBottom: '80px' }}>
                            <h2 style={{ fontSize: '2rem', color: '#00d4ff', marginBottom: '20px' }}>{content.refundContactTitle}</h2>
                            <p style={{ color: '#d0d0d0', lineHeight: '1.8', fontSize: '1rem' }}>{content.refundContactText}</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default RefundPolicyPage;
