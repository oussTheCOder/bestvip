import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LanguageProvider } from '../contexts/LanguageContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <meta name="google-site-verification" content="BuOzxUEd2kdWZCruhT09JuNZkWqyd7is8gsO4IJlv-0" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <meta property="og:site_name" content="StreamBe" />
        <meta property="og:image" content="https://streambe.net/images/site-logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://streambe.net/images/site-logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "StreamBe",
          "url": "https://streambe.net",
          "logo": "https://streambe.net/images/site-logo.png"
        }`}} />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;