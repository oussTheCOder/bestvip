import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            backgroundImage: 'url(/images/hero-bg.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            padding: '100px 20px',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', maxWidth: '1200px' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: 700,
                        marginBottom: '20px',
                        background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textAlign: 'left'
                    }}>
                        {t('heroTitle')}
                    </h1>
                    <p style={{
                        fontSize: '1.3rem',
                        color: '#b0b0b0',
                        marginBottom: '40px',
                        lineHeight: '1.6',
                        textAlign: 'left'
                    }}>
                        {t('heroSubtitle')}
                    </p>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <a href="#pricing" className="cta-button" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
                            {t('heroButton1')}
                        </a>
                        <a href="#why" className="cta-button cta-button-secondary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
                            {t('heroButton2')}
                        </a>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '60px',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ margin: '20px' }}>
                            <h3 style={{ color: '#00d4ff', fontSize: '2rem' }}>{t('heroStat1')}</h3>
                            <p style={{ color: '#b0b0b0' }}>{t('heroStat1Label')}</p>
                        </div>
                        <div style={{ margin: '20px' }}>
                            <h3 style={{ color: '#00d4ff', fontSize: '2rem' }}>{t('heroStat2')}</h3>
                            <p style={{ color: '#b0b0b0' }}>{t('heroStat2Label')}</p>
                        </div>
                        <div style={{ margin: '20px' }}>
                            <h3 style={{ color: '#00d4ff', fontSize: '2rem' }}>{t('heroStat3')}</h3>
                            <p style={{ color: '#b0b0b0' }}>{t('heroStat3Label')}</p>
                        </div>
                    </div>
                </div>
                <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                    <img
                        src="/images/tv-screen.svg"
                        alt="IPTV Streaming on TV"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            filter: 'drop-shadow(0 20px 40px rgba(0, 212, 255, 0.3))'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
