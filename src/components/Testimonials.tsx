import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Testimonials: React.FC = () => {
    const { language, t } = useLanguage();

    const reviews = translations[language].testimonials;

    return (
        <section style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            background: 'rgba(0, 212, 255, 0.02)'
        }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>{t('testimonialsTitle')}</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {reviews.map((review, index) => (
                        <div key={index} style={{
                            background: 'rgba(20, 20, 30, 0.5)',
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                            borderRadius: '12px',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ marginBottom: '15px' }}>
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                                ))}
                            </div>
                            <p style={{
                                color: '#e0e0e0',
                                marginBottom: '20px',
                                lineHeight: '1.6',
                                flex: 1
                            }}>
                                "{review.comment}"
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                paddingTop: '15px',
                                borderTop: '1px solid rgba(0, 212, 255, 0.1)'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #00d4ff, #0099ff)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem'
                                }}>
                                    {review.avatar}
                                </div>
                                <div>
                                    <p style={{ color: '#ffffff', fontWeight: 700, margin: 0 }}>
                                        {review.name}
                                    </p>
                                    <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>
                                        {review.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
