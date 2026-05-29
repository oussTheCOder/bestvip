import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/19295664890';

    return (
        <footer
            style={{
                background: 'linear-gradient(180deg, rgba(3, 9, 19, 0.98), rgba(7, 14, 30, 1))',
                borderTop: '1px solid rgba(0, 212, 255, 0.18)',
                color: '#f3f7fb',
                padding: '64px 0 28px'
            }}
        >
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr 1fr',
                        gap: '36px',
                        alignItems: 'start'
                    }}
                >
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                            <img
                                src="/images/site-logo.png"
                                alt="StreamBe logo"
                                width={54}
                                height={54}
                                style={{ borderRadius: '16px', display: 'block' }}
                            />
                            <div>
                                <p style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>StreamBe</p>
                                <p style={{ margin: '4px 0 0', color: '#9fb0c7', fontSize: '0.95rem' }}>IPTV • Belgium & Netherlands</p>
                            </div>
                        </div>

                        <p style={{ color: '#cbd7e8', lineHeight: 1.8, marginBottom: '20px' }}>
                            {t('footerCTASubtitle')}
                        </p>

                        <Link
                            href="/#pricing"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '12px 18px',
                                borderRadius: '999px',
                                background: 'linear-gradient(135deg, #00d4ff 0%, #0aa7ff 100%)',
                                color: '#03111d',
                                fontWeight: 800,
                                textDecoration: 'none',
                                boxShadow: '0 10px 30px rgba(0, 212, 255, 0.28)'
                            }}
                        >
                            📱 {t('footerButton')}
                        </Link>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '18px', color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.5px' }}>WELCOME</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '12px' }}>
                                <Link href="/" style={{ color: '#d9e2f0', textDecoration: 'none' }}>Home</Link>
                            </li>
                            <li style={{ marginBottom: '12px' }}>
                                <Link href="/#pricing" style={{ color: '#d9e2f0', textDecoration: 'none' }}>Pricing Plan</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '18px', color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.5px' }}>CONTACT US</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '12px' }}>
                                <button
                                    onClick={() => window.open(whatsappUrl, '_blank')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: '#d9e2f0',
                                        padding: 0,
                                        font: 'inherit',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    WhatsApp
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '18px', color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.5px' }}>LEGAL</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '12px' }}>
                                <Link href="/terms-and-conditions" style={{ color: '#d9e2f0', textDecoration: 'none' }}>Terms & Conditions</Link>
                            </li>
                            <li style={{ marginBottom: '12px' }}>
                                <Link href="/refund-policy" style={{ color: '#d9e2f0', textDecoration: 'none' }}>Refund Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        marginTop: '34px',
                        paddingTop: '22px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: '16px'
                    }}
                >
                    <p style={{ margin: 0, color: '#8f93a4' }}>{t('footerCopyright')}</p>
                    <p style={{ margin: 0, color: '#8f93a4' }}>{t('footerTagline')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;