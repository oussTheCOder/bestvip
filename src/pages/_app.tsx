import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LanguageProvider } from '../contexts/LanguageContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <meta name="google-site-verification" content="BuOzxUEd2kdWZCruhT09JuNZkWqyd7is8gsO4IJlv-0" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;