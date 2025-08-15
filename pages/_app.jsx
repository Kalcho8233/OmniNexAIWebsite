// pages/_app.jsx
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Favicons (cache-busted) */}
        <link rel="icon" type="image/png" sizes="32x32" href="/ai-favicon-32x32.png?v=ai2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/ai-favicon-16x16.png?v=ai2" />

        {/* Apple / PWA */}
        <link rel="apple-touch-icon" href="/ai-apple-touch-icon.png?v=ai2" />
        <link rel="manifest" href="/ai-site.webmanifest?v=ai2" />

        {/* UI color for mobile address bar */}
        <meta name="theme-color" content="#ffffff" />

        {/* Optional: SEO/UX */}
        <meta name="application-name" content="OmniNex" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
