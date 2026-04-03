import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const HowItWorks: React.FC = () => {
    const { language, t } = useLanguage();

    const steps = translations[language].howItWorksSteps;

    return (
        <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>{t('howItWorksTitle')}</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    position: 'relative'
                }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ position: 'relative', textAlign: 'center' }}>
                            {index < steps.length - 1 && (
                                <div className="step-connector" style={{
                                    position: 'absolute',
                                    top: '60px',
                                    left: '50%',
                                    transform: 'translateX(calc(-50% + 60px))',
                                    width: 'calc(100% - 120px)',
                                    height: '2px',
                                    background: 'linear-gradient(90deg, #00d4ff 0%, transparent 100%)'
                                }} />
                            )}
                            <div style={{
                                width: '120px',
                                height: '120px',
                                background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                fontSize: '3rem',
                                position: 'relative',
                                zIndex: 10,
                                boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ marginBottom: '10px', fontSize: '1.3rem' }}>
                                {language === 'nl' ? 'Stap' : 'Step'} {step.number}: {step.title}
                            </h3>
                            <p style={{ color: '#b0b0b0' }}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
