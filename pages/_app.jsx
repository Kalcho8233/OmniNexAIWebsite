import Head from "next/head";
import "../styles/globals.css";
import N8nChat from "../components/N8nChat";

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

      {/* Page content */}
      <Component {...pageProps} />

      {/* n8n Chat widget */}
      <N8nChat />
    </>
  );
}
