// pages/_document.jsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="OmniNex – Build AI teammates that automate your workflows." />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/logo.svg" />
        {/* <title>OmniNex | Custom AI Assistants</title> ❌ Не се слага тук! */}
      </Head>
      <body className="bg-[#0a0a0a] font-sans text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
