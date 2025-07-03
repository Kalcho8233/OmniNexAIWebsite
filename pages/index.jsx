// pages/index.jsx
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
    <div className="bg-backgroundDark text-white font-sans">
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
    </div>
  );
}
