import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { language, t } = useLanguage();
    const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/19295664890';

    return (
        <footer className="footer">
            <div className="container">
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>{t('footerCTA')}</h3>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ marginRight: '15px' }}>
                        📱 Contact WhatsApp
                    </a>
                </div>
                <div style={{ borderTop: '1px solid rgba(0, 212, 255, 0.2)', paddingTop: '30px' }}>
                    <p>{t('footerCopyright')}</p>
                    <p style={{ marginTop: '10px', color: '#666' }}>{t('footerTagline')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;