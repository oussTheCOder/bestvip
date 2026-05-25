import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const { language, setLanguage, t } = useLanguage();

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                            <img
                                src="/images/site-logo.png"
                                alt="StreamBe logo"
                                width={48}
                                height={48}
                                style={{ display: 'block', borderRadius: '12px' }}
                            />
                            <span style={{ marginLeft: '10px', fontSize: '1rem', color: '#fff', fontWeight: 700 }}>
                                StreamBe
                            </span>
                        </Link>
                    </div>

                    <button
                        className="menu-toggle"
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        type="button"
                    >
                        {mobileMenuOpen ? 'Close' : 'Menu'}
                    </button>

                    <nav className={mobileMenuOpen ? 'header-nav open' : 'header-nav'}>
                        <ul>
                            <li><Link href="/" onClick={closeMobileMenu}>{t('navHome')}</Link></li>
                            <li><Link href="/#pricing" onClick={closeMobileMenu}>{t('navPricing')}</Link></li>
                            <li><Link href="/#why" onClick={closeMobileMenu}>{t('navWhy')}</Link></li>
                            <li><Link href="/about" onClick={closeMobileMenu}>{t('navAbout')}</Link></li>
                        </ul>
                    </nav>

                    {/* Language Toggle */}
                    <div className="header-language">
                        <span style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>{t('languageToggle')}:</span>
                        <div style={{
                            background: 'rgba(20, 20, 30, 0.8)',
                            borderRadius: '20px',
                            padding: '2px',
                            display: 'flex',
                            border: '1px solid rgba(0, 212, 255, 0.2)'
                        }}>
                            <button
                                onClick={() => setLanguage('nl')}
                                style={{
                                    padding: '6px 12px',
                                    border: 'none',
                                    borderRadius: '20px',
                                    background: language === 'nl' ? 'linear-gradient(135deg, #00d4ff, #0099ff)' : 'transparent',
                                    color: language === 'nl' ? '#000' : '#b0b0b0',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    fontSize: '0.85rem',
                                    transition: 'all 0.3s'
                                }}>
                                {t('languageNL')}
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                style={{
                                    padding: '6px 12px',
                                    border: 'none',
                                    borderRadius: '20px',
                                    background: language === 'en' ? 'linear-gradient(135deg, #00d4ff, #0099ff)' : 'transparent',
                                    color: language === 'en' ? '#000' : '#b0b0b0',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    fontSize: '0.85rem',
                                    transition: 'all 0.3s'
                                }}>
                                {t('languageEN')}
                            </button>
                            <button
                                onClick={() => setLanguage('fr')}
                                style={{
                                    padding: '6px 12px',
                                    border: 'none',
                                    borderRadius: '20px',
                                    background: language === 'fr' ? 'linear-gradient(135deg, #00d4ff, #0099ff)' : 'transparent',
                                    color: language === 'fr' ? '#000' : '#b0b0b0',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    fontSize: '0.85rem',
                                    transition: 'all 0.3s'
                                }}>
                                {t('languageFR')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;