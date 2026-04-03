import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const FAQ: React.FC = () => {
    const { language, t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = translations[language].faqs;

    return (
        <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>{t('faqTitle')}</h2>
                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{
                            marginBottom: '20px',
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            background: 'rgba(20, 20, 30, 0.5)'
                        }}>
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                style={{
                                    width: '100%',
                                    padding: '20px',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#ffffff',
                                    textAlign: 'left',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = 'rgba(0, 212, 255, 0.05)';
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = 'transparent';
                                }}>
                                {faq.question}
                                <span style={{
                                    fontSize: '1.5rem',
                                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s',
                                    color: '#00d4ff'
                                }}>
                                    ▼
                                </span>
                            </button>
                            {openIndex === index && (
                                <div style={{
                                    padding: '0 20px 20px',
                                    borderTop: '1px solid rgba(0, 212, 255, 0.1)',
                                    color: '#b0b0b0',
                                    lineHeight: '1.6'
                                }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
