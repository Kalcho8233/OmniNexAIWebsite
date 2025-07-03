import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import UseCaseCarousel from '../components/UseCaseCarousel';
import StatsSection from '../components/StatsSection';
import FounderQuote from '../components/FounderQuote';
import FinalCTA from '../components/FinalCTA';
import ContactUs from '../components/ContactUs';
import GuideEmbed from '../components/GuideEmbed';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>OmniNex | AI Workflow Assistants</title>
        <meta name="description" content="OmniNex builds custom AI assistants to automate, accelerate, and scale your team's workflows. Deploy in days, scale in hours." />
      </Head>

      <main className="relative bg-backgroundDark text-white font-sans overflow-x-hidden">
        {/* 🔮 Futuristic gradient base */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0a0a1a] via-[#16153a] to-[#0e0e2c]" />
        
        {/* SVG Circuit Overlay */}
        <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
          <img
            src="/circuit-overlay.svg"
            alt="Futuristic background"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        <Navbar />
        <HeroSection />
        <HowItWorks />
        <UseCaseCarousel />
        <StatsSection />
        <FounderQuote />
        <FinalCTA />
        <ContactUs />
        <GuideEmbed />
        <Footer />
      </main>
    </>
  );
}
