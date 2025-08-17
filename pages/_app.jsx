// pages/_app.jsx
import Head from "next/head";
import "../styles/globals.css";
import "@n8n/chat/dist/style.css";   // 👉 стиловете на n8n чата
import N8nChat from "../components/N8nChat"; // 👉 импортваме компонента

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

      {/* Страниците */}
      <Component {...pageProps} />

      {/* 👉 Чатът се инжектира най-отдолу на всяка страница */}
      <N8nChat />
    </>
  );
}
