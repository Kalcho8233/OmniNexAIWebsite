import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import GuideEmbed from '../components/GuideEmbed';
import HowItWorks from '../components/HowItWorks';
import UseCaseCarousel from '../components/UseCaseCarousel';
import StatsSection from '../components/StatsSection';
import FounderQuote from '../components/FounderQuote';
import FeatureAccordion from '../components/FeatureAccordion';
import FinalCTA from '../components/FinalCTA';
import DemoForm from '../components/DemoForm';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>OmniNex | AI Workflow Assistants</title>
        <meta name="description" content="OmniNex builds custom AI assistants to automate, accelerate, and scale your team's workflows." />
      </Head>

      <main className="relative bg-white text-black font-sans overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <GuideEmbed /> {/* Остава само едно копие */}
        <HowItWorks />
        <UseCaseCarousel />
        <StatsSection />
        <FounderQuote />

        {/* FAQ SECTION */}
        <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto my-16">
          <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
          <div className="space-y-8">
            {[
              {
                label: "What makes OmniNex unique?",
                children: (
                  <p>
                    We build assistants around <strong>your exact process</strong> - not templates. Operate by chat when you ask or run on autopilot when you’re busy. Connected to your stack, engineered for reliability and measurable ROI.
                  </p>
                )
              },
              {
                label: "What kind of tasks can my assistant handle?",
                children: (
                  <p>
                    Repetitive, rules-based work: follow-ups and reminders, meeting summaries and handoffs, lead routing/scoring, report generation, content drafts, invoice/expense processing, data syncs, onboarding sequences – and many more.
                  </p>
                )
              },
              {
                label: "How do you make sure it’s truly ready?",
                children: (
    <p>
      We launch when it’s right - not just fast. We stress-test the assistant, fix what breaks, and test again. Only after it passes our QA standard - real-world scenarios, built-in guardrails, and a dry run with your team - do we go live. Quality & stability first, no surprises in production.
    </p>
                )
              },
              {
                label: "Do I need to train the AI myself?",
                children: (
                  <p>
                    No. You share SOPs, docs or links; we ingest and structure them, set guardrails, and test on real scenarios. You review and approve before go-live.
                  </p>
                )
              },
              {
                label: "Is it safe to use for client data?",
                children: (
                  <p>
                    Yes. We apply least-privilege access, encrypted connections, and avoid storing data unless required. Wherever possible, data stays in your systems. Audit trails available on request.
                  </p>
                )
              },
              {
                label: "How do I know it’s working?",
                children: (
                  <p>
                    You’ll see clear indicators where it matters most—like key tasks completed, hours freed up, and measurable impact on your workflow or pipeline. We provide periodic summaries and review sessions to highlight progress and fine-tune what’s running.
                  </p>
                )
              },
              {
                label: "What happens if I need changes later?",
                children: (
                  <p>
                    Included. Small tweaks and improvements are part of every plan. Larger requests are scheduled as fixed mini-sprints or queued for the next cycle - no surprises.
                  </p>
                )
              },
            ].map((faq, idx) => (
              <div key={idx} className="px-0">
                <FeatureAccordion label={faq.label}>{faq.children}</FeatureAccordion>
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />
        <DemoForm />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
