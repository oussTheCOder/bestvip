import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const About: React.FC = () => {
    const { language, t } = useLanguage();
    const content = translations[language];

    return (
        <div>
            <Head>
                <title>{content.aboutTitle}</title>
                <meta name="description" content={content.aboutDescription} />
                <meta name="keywords" content={content.aboutKeywords} />
            </Head>
            <Header />
            <main>
                {/* Hero Section */}
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
                            {content.aboutTitle}
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#b0b0b0',
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            {content.aboutIntro}
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                    <div className="container" style={{ maxWidth: '900px' }}>
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(0, 153, 255, 0.08) 100%)',
                            border: '2px solid rgba(0, 212, 255, 0.3)',
                            borderRadius: '16px',
                            padding: '50px',
                            textAlign: 'center'
                        }}>
                            <h2 style={{
                                fontSize: '2.5rem',
                                marginBottom: '25px',
                                color: '#00d4ff'
                            }}>
                                {content.aboutMissionTitle}
                            </h2>
                            <p style={{
                                fontSize: '1.15rem',
                                color: '#d0d0d0',
                                lineHeight: '1.9',
                                maxWidth: '800px',
                                margin: '0 auto'
                            }}>
                                {content.aboutMissionText}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section style={{ paddingTop: '80px', paddingBottom: '80px', background: 'rgba(0, 20, 40, 0.3)' }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            textAlign: 'center',
                            marginBottom: '60px',
                            background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {content.aboutWhyTitle}
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '40px'
                        }}>
                            {content.aboutFeatures.map((feature: any, index: number) => (
                                <div key={index} style={{
                                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 153, 255, 0.05) 100%)',
                                    border: '1px solid rgba(0, 212, 255, 0.2)',
                                    borderRadius: '12px',
                                    padding: '35px',
                                    transition: 'all 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = 'translateY(-5px)';
                                    el.style.boxShadow = '0 15px 40px rgba(0, 212, 255, 0.2)';
                                    el.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = 'translateY(0)';
                                    el.style.boxShadow = 'none';
                                    el.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                                }}>
                                    <h3 style={{
                                        fontSize: '1.4rem',
                                        marginBottom: '15px',
                                        color: '#00d4ff'
                                    }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{
                                        color: '#b0b0b0',
                                        lineHeight: '1.7',
                                        fontSize: '1rem'
                                    }}>
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What We Offer Section */}
                <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                    <div className="container" style={{ maxWidth: '900px' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            textAlign: 'center',
                            marginBottom: '60px',
                            background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {content.aboutWhatWeOffer}
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '30px'
                        }}>
                            {content.aboutOfferings.map((offering: string, index: number) => (
                                <div key={index} style={{
                                    background: 'rgba(0, 40, 70, 0.5)',
                                    border: '1px solid rgba(0, 212, 255, 0.15)',
                                    borderRadius: '10px',
                                    padding: '25px',
                                    borderLeft: '4px solid #00d4ff'
                                }}>
                                    <p style={{
                                        color: '#d0d0d0',
                                        fontSize: '1.1rem',
                                        fontWeight: '500'
                                    }}>
                                        {offering}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section style={{ paddingTop: '80px', paddingBottom: '80px', background: 'rgba(0, 20, 40, 0.3)' }}>
                    <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                            borderRadius: '16px',
                            padding: '60px 40px',
                            color: '#000'
                        }}>
                            <h2 style={{
                                fontSize: '2.2rem',
                                marginBottom: '20px',
                                color: '#000'
                            }}>
                                {content.aboutCTAHeading}
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                marginBottom: '35px',
                                color: 'rgba(0, 0, 0, 0.8)'
                            }}>
                                {content.aboutCTAText}
                            </p>
                            <a href="/" style={{
                                display: 'inline-block',
                                padding: '16px 40px',
                                background: '#000',
                                color: '#00d4ff',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                fontWeight: '700',
                                fontSize: '1.1rem',
                                transition: 'all 0.3s',
                                border: '2px solid #000'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#1a1a1a';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#000';
                            }}>
                                {content.aboutCTAButton}
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;