import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Features: React.FC = () => {
    const { language, t } = useLanguage();
    const features = translations[language].features;

    return (
        <section id="why" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>{t('featuresTitle')}</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 153, 255, 0.05) 100%)',
                            padding: '30px',
                            borderRadius: '12px',
                            border: '1px solid rgba(0, 212, 255, 0.2)',
                            transition: 'all 0.3s',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.transform = 'translateY(-5px)';
                            el.style.boxShadow = '0 15px 40px rgba(0, 212, 255, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.transform = 'translateY(0)';
                            el.style.boxShadow = 'none';
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ marginBottom: '10px', fontSize: '1.3rem' }}>
                                {feature.title}
                            </h3>
                            <p style={{ color: '#b0b0b0', lineHeight: '1.6' }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Devices Mockup */}
                <div style={{
                    marginTop: '80px',
                    textAlign: 'center'
                }}>
                    <h3 style={{
                        marginBottom: '40px',
                        fontSize: '2rem',
                        background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        {t('worksOnAllDevices')}
                    </h3>
                    <img
                        src="/images/modern-devices.svg"
                        alt="IPTV works on all devices"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            filter: 'drop-shadow(0 20px 40px rgba(0, 212, 255, 0.2))'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
