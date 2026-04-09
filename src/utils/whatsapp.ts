export const normalizeWhatsAppNumber = (phoneNumber: string): string => {
    // wa.me requires digits only (no +, spaces, or separators)
    return phoneNumber.replace(/\D/g, '');
};

export const generateWhatsAppLink = (phoneNumber: string, message: string): string => {
    const encodedMessage = encodeURIComponent(message);
    const normalizedPhoneNumber = normalizeWhatsAppNumber(phoneNumber);
    return `https://wa.me/${normalizedPhoneNumber}?text=${encodedMessage}`;
};