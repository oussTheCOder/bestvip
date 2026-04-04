module.exports = {
  reactStrictMode: true,
  env: {
    WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER,
  },
  i18n: {
    locales: ['nl', 'en', 'fr'],
    defaultLocale: 'nl',
    localeDetection: false, // We'll handle detection manually
  },
  turbopack: {
    root: __dirname,
  },
};