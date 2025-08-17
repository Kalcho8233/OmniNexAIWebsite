// pages/_app.jsx
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Core Favicons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" href="/favicon.ico" />

        {/* Apple & Mobile */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Basic SEO */}
        <meta name="application-name" content="OmniNex" />
        <meta name="description" content="OmniNex — AI automation for clarity, speed, and growth." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// pages/_app.jsx
import '@n8n/chat/dist/style.css';
import '../styles/globals.css'; // ако го имаш
import N8nChat from '../components/N8nChat';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* Чатът се инжектира като floating widget */}
      <N8nChat />
    </>
  );
}

export default MyApp;
