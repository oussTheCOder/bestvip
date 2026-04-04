import React from 'react';

const WhatsAppCTA: React.FC = () => {
    const whatsappNumber = '+1234567890';
    const message = 'Hello, I am interested in your IPTV service!';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <h2 style={{ marginBottom: '20px' }}>💬 Questions?</h2>
            <p style={{ marginBottom: '25px', color: '#b0b0b0', fontSize: '1.1rem' }}>
                Our support team is available 24/7 to assist you
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button">
                📱 Chat on WhatsApp
            </a>
        </div>
    );
};

export default WhatsAppCTA;