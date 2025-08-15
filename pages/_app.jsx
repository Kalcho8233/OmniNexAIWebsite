// pages/_app.jsx
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Favicons (cache-busted) */}
        <link rel="icon" type="image/png" sizes="48x48" href="/ai-favicon-48x48.png?v=ai3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/ai-favicon-32x32.png?v=ai3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/ai-favicon-16x16.png?v=ai3" />

        {/* Apple / PWA */}
        <link rel="apple-touch-icon" href="/ai-apple-touch-icon.png?v=ai3" />
        <link rel="manifest" href="/ai-site.webmanifest?v=ai3" />

        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="OmniNex" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
