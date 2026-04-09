import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { generateWhatsAppLink } from '../utils/whatsapp';

const Pricing: React.FC = () => {
    const { language, t } = useLanguage();
    const [isPremium, setIsPremium] = useState(false);

    const plans = isPremium ? translations[language].premiumPlans : translations[language].standardPlans;
    const whatsappNumber = process.env.WHATSAPP_NUMBER || '+19295664890';

    const handleWhatsApp = (plan: string) => {
        const planType = isPremium ? t('premiumLabel') : t('standardLabel');
        const message = t('pricingWhatsAppMessage')
            .replace('{planType}', planType)
            .replace('{plan}', plan);
        const whatsappLink = generateWhatsAppLink(whatsappNumber, message);
        window.open(whatsappLink, '_blank');
    };

    return (
        <section id="pricing" style={{ paddingTop: '80px', paddingBottom: '80px', background: 'rgba(0, 212, 255, 0.02)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{t('pricingTitle')}</h2>
                <p style={{ textAlign: 'center', color: '#b0b0b0', marginBottom: '40px', fontSize: '1.1rem' }}>
                    {t('pricingSubtitle')}
                </p>

                {/* Toggle Button */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '60px'
                }}>
                    <div style={{
                        background: 'rgba(20, 20, 30, 0.8)',
                        borderRadius: '50px',
                        padding: '5px',
                        display: 'flex',
                        border: '1px solid rgba(0, 212, 255, 0.2)'
                    }}>
                        <button
                            onClick={() => setIsPremium(false)}
                            style={{
                                padding: '12px 30px',
                                border: 'none',
                                borderRadius: '50px',
                                background: !isPremium ? 'linear-gradient(135deg, #00d4ff, #0099ff)' : 'transparent',
                                color: !isPremium ? '#000' : '#b0b0b0',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                fontSize: '1rem'
                            }}>
                            {t('standardLabel')}
                        </button>
                        <button
                            onClick={() => setIsPremium(true)}
                            style={{
                                padding: '12px 30px',
                                border: 'none',
                                borderRadius: '50px',
                                background: isPremium ? 'linear-gradient(135deg, #00d4ff, #0099ff)' : 'transparent',
                                color: isPremium ? '#000' : '#b0b0b0',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                fontSize: '1rem'
                            }}>
                            {t('premiumLabel')}
                        </button>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {plans.map((plan, index) => (
                        <div key={index}
                            style={{
                                background: index === 1
                                    ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(0, 153, 255, 0.08) 100%)'
                                    : 'rgba(20, 20, 30, 0.5)',
                                border: index === 1
                                    ? '2px solid #00d4ff'
                                    : '1px solid rgba(0, 212, 255, 0.1)',
                                borderRadius: '12px',
                                padding: '40px 30px',
                                position: 'relative',
                                transform: index === 1 ? 'scale(1.05)' : 'scale(1)',
                                transition: 'all 0.3s'
                            }}>
                            {index === 1 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                                    color: '#000',
                                    padding: '5px 20px',
                                    borderRadius: '20px',
                                    fontWeight: 700,
                                    fontSize: '0.85rem'
                                }}>
                                    {t('mostPopular')}
                                </div>
                            )}
                            <h3 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>
                                {plan.name}
                            </h3>
                            <div style={{ marginBottom: '30px' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 700, color: '#00d4ff' }}>
                                    €{plan.price}
                                </span>
                                <p style={{ color: '#b0b0b0', marginTop: '5px', fontSize: '0.95rem' }}>
                                    {plan.period}
                                </p>
                            </div>
                            <button
                                onClick={() => handleWhatsApp(plan.name)}
                                className="cta-button"
                                style={{
                                    width: '100%',
                                    marginBottom: '30px',
                                    padding: '12px 20px'
                                }}>
                                {t('orderNow')}
                            </button>
                            <div>
                                {plan.features.map((feature, fIdx) => (
                                    <p key={fIdx} style={{
                                        color: '#b0b0b0',
                                        marginBottom: '12px',
                                        fontSize: '0.95rem'
                                    }}>
                                        {feature}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
