// pages/_app.jsx
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Apple / PWA */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* UI color for mobile address bar */}
        <meta name="theme-color" content="#ffffff" />

        {/* Optional: SEO/UX */}
        <meta name="application-name" content="OmniNex" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
