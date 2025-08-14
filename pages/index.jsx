import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import UseCaseCarousel from '../components/UseCaseCarousel';
import StatsSection from '../components/StatsSection';
import FounderQuote from '../components/FounderQuote';
import FeatureAccordion from '../components/FeatureAccordion';
import FinalCTA from '../components/FinalCTA';
import DemoForm from '../components/DemoForm';
import ContactUs from '../components/ContactUs';
import GuideEmbed from '../components/GuideEmbed';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>OmniNex | AI Workflow Assistants</title>
        <meta name="description" content="OmniNex builds custom AI assistants to automate, accelerate, and scale your team's workflows." />
      </Head>

      {/* ВАЖНО: основен фон е БЯЛ */}
      <main className="relative bg-white text-black font-sans overflow-x-hidden">
        <Navbar />
        <HeroSection />
        {/* Timeline секция – преместена веднага след Hero */}
        <GuideEmbed />

        <HowItWorks />
        <UseCaseCarousel />
        <StatsSection />
        <FounderQuote />

        {/* FAQ SECTION – бял фон, само accordion с лилав бордер */}
        <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto my-16">
          <div className="space-y-8">
            {[
              {
                label: "🔹 What makes OmniNex unique?",
                children: (
                  <p>
                    We combine <strong>deep customization</strong> with <strong>plug-and-play speed</strong>. 
                    Your assistant is trained on your SOPs, deployed in your tools, and takes real-time action — in just days.
                  </p>
                )
              },
              {
                label: "🔹 What kind of tasks can my assistant handle?",
                children: (
                  <p>
                    Anything repetitive or time-consuming — like sending follow-ups, summarizing meetings, answering team questions, updating CRMs, and more.
                  </p>
                )
              },
              {
                label: "🔹 How long does setup take?",
                children: (
                  <p>
                    Just a few days. We customize everything for you, walk you through it, and launch fast — no tech skills needed.
                  </p>
                )
              },
              {
                label: "🔹 Do I need to train the AI myself?",
                children: (
                  <p>
                    Nope. You send us your documents, SOPs, or links — we handle the training. You get an AI assistant that already “knows the job.”
                  </p>
                )
              },
              {
                label: "🔹 Is it safe to use for client data?",
                children: (
                  <p>
                    Yes. We follow best-in-class security practices and never store data unless you want us to.
                  </p>
                )
              },
              {
                label: "🔹 How do I know it’s working?",
                children: (
                  <p>
                    We show you results — how much time it's saving, how many tasks it's completing, and we check in with you regularly.
                  </p>
                )
              },
              {
                label: "🔹 What happens if I need changes later?",
                children: (
                  <p>
                    We’ve got you. All plans include updates, tweaks, and support to evolve with your needs.
                  </p>
                )
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="px-0" // няма фон, само въздух
              >
                <FeatureAccordion label={faq.label}>{faq.children}</FeatureAccordion>
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />
        <DemoForm />
        <ContactUs />
        {/* Махнат дубликат на <GuideEmbed /> тук */}
        <Footer />
      </main>
    </>
  );
}
