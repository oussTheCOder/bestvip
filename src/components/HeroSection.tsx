import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { generateWhatsAppLink } from '../utils/whatsapp';

const HeroSection: React.FC = () => {
    const { t } = useLanguage();
    const whatsappNumber = process.env.WHATSAPP_NUMBER || '+19295664890';
    const trialMessage = t('trialWhatsAppMessage');
    const trialWhatsAppLink = generateWhatsAppLink(whatsappNumber, trialMessage);

    return (
        <section style={{
            background: '#050510',
            backgroundImage: 'linear-gradient(110deg, rgba(5, 5, 16, 0.92) 0%, rgba(5, 5, 16, 0.8) 45%, rgba(5, 5, 16, 0.55) 100%), url(/images/hero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            padding: '100px 20px',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', maxWidth: '1200px' }}>
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
                        <a href={trialWhatsAppLink} target="_blank" rel="noopener noreferrer" className="cta-button cta-button-secondary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
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
            </div>
        </section>
    );
};

export default HeroSection;
