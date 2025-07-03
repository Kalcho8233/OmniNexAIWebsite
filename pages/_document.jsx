// ✅ FINAL POLISHING – TWEAKS FOR NAVBAR, SEO, FOOTER, ACCESSIBILITY

// 1. pages/_document.jsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="OmniNex – Build AI teammates that automate your workflows." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/logo.svg" />
        <title>OmniNex | Custom AI Assistants</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// 2. Responsive fixes for logo visibility (Navbar.jsx - example)
// make sure the logo has height and light background contrast if needed
// example snippet inside Navbar
<img
  src="/logo.svg"
  alt="OmniNex Logo"
  className="h-10 md:h-12 bg-white bg-opacity-10 p-1 rounded"
/>

// 3. Optional: Sticky footer with copyright (can go after ContactUs)
// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-500">
      © {new Date().getFullYear()} OmniNex. All rights reserved.
    </footer>
  );
}

// Add to index.jsx:
// import Footer from '../components/Footer';
// And insert after <GuideEmbed /> like so:
{/* <GuideEmbed />
<Footer /> */}