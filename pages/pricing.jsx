'use client';
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import NeonButton from "../components/NeonButton";
import FeatureAccordionLite from "../components/FeatureAccordionLite";
import PlanROIText from "../components/PlanROIText";
import StripeBuyButton from "../components/StripeBuyButton";

const plans = [
  {
    name: "Launch",
    price: "€2,500 setup + €300/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      {
        title: " 1–2 automations",
        desc: "Focused workflows that remove repetitive work fast and prove value quickly."
      },
      {
        title: " Chat or autopilot",
        desc: "Type a task when you need it, or let it run on a schedule when you’re busy."
      },
      {
        title: " Connects multiple tools",
        desc: "Works with the tools you already use – no vendor lock-in."
      },
      {
        title: " Onboarding & training",
        desc: "Clear walkthrough so your team is confident from day one."
      },
      {
        title: " Ongoing improvements",
        desc: "We refine and extend as your needs evolve."
      },
      {
        title: " Standard support",
        desc: "Responsive help during business hours."
      }
    ],
    note: "Best for: lean teams getting started",
    stripeButtonId: "buy_btn_1RnMqjQ3alExjY2yBSlLMmH3"
  },
  {
    name: "Optimize",
    price: "€5,000 setup + €600/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      {
        title: " 3–5 automations",
        desc: "Multi-process workflows that coordinate across teams and handoffs."
      },
      {
        title: " Chat + scheduled runs",
        desc: "Simple chat commands plus monitored, recurring automations."
      },
      {
        title: " Smarter coordination",
        desc: "Links many tools and adds decision logic where needed."
      },
      {
        title: " Custom integrations",
        desc: "When a required platform isn’t supported out of the box, we can build it."
      },
      {
        title: " Priority support",
        desc: "Fast responses to keep critical operations running."
      },
      {
        title: " Regular optimization",
        desc: "Periodic reviews to boost reliability and performance."
      },
      {
        title: " Future improvements",
        desc: "Built to expand without disrupting your team."
      }
    ],
    note: "For teams ready to systemize & scale",
    stripeButtonId: "buy_btn_1RnMxZQ3alExjY2yeUmTAidG"
  },
  {
    name: "Scale",
    price: "€9,000 setup + €1,200/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      {
        title: " 6+ advanced automations",
        desc: "Complex, cross-department operations with approvals and branching logic."
      },
      {
        title: " Chat, events, autonomous",
        desc: "Trigger by chat or events – runs fully hands-free at scale."
      },
      {
        title: " Robust coordination",
        desc: "Works across many tools, roles, and compliance requirements."
      },
      {
        title: " Custom integrations",
        desc: "Connect unique or legacy platforms specific to your business."
      },
      {
        title: " Dedicated support",
        desc: "A named specialist who knows your setup end-to-end."
      },
      {
        title: " Proactive monitoring",
        desc: "Health checks and quarterly enhancement reviews."
      },
      {
        title: " Built for expansion",
        desc: "Prepared for higher volumes and future initiatives."
      }
    ],
    note: "For growing agencies & enterprises",
    stripeButtonId: "buy_btn_1RnMytQ3alExjY2ymqk2cAnN"
  }
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | OmniNex AI Plans</title>
        <meta name="description" content="Compare OmniNex pricing plans for custom AI workflow assistants. From lean startup teams to full-scale operations – see which plan fits your business." />
      </Head>

      <Navbar />

      <main className="relative bg-backgroundLight text-accentText min-h-screen py-20 px-6 md:px-20">
        {/* Header */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose the plan that fits your team</h1>
          <p className="text-lg md:text-xl font-semibold text-neonPurple mb-8">
            Start saving 10+ hours/week in less than 7 days. Pick your plan.
          </p>
          <NeonButton text="Book a Demo" href="https://calendly.com/nikola-nikolov1/ai-assistant-discovery-call" />
        </section>

        {/* Pricing Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white ${plan.border} p-6 rounded-xl shadow-sm hover:scale-[1.03] transition-transform border-2 flex flex-col justify-between`}
            >
              {plan.name === "Optimize" && (
                <div className="absolute top-4 right-4 bg-[#D000FF] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  💜 Most Chosen
                </div>
              )}
              <div className="flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-2 text-primaryText">{plan.name}</h2>
                <p className={`font-semibold ${plan.text}`}>{plan.price}</p>
                <PlanROIText plan={plan.name} />
                <div className="space-y-4 mb-6 mt-4">
                  {plan.features.map((f, j) => (
                    <FeatureAccordionLite key={j} title={f.title} description={f.desc} />
                  ))}
                </div>
                <p className="text-sm text-secondaryText italic mb-4">{plan.note}</p>
              </div>
              <div className="mt-auto">
                <StripeBuyButton buyButtonId={plan.stripeButtonId} />
              </div>
            </div>
          ))}
        </section>

        {/* Bonus tagline */}
        <section className="text-center mt-12 mb-2">
          <p className="text-xl md:text-2xl italic text-black">
            Built for teams who don’t want just another tool – but real results.
          </p>
        </section>

        {/* Footer CTA */}
        <section className="text-center mt-20">
          <p className="text-lg text-secondaryText mb-6">Still not sure? Let’s build your plan together.</p>
          <Link href="/#contact" scroll={true}>
            <span className="inline-block bg-neonPurple text-white font-semibold px-6 py-3 rounded-full hover:shadow-[0_0_10px_#c084fc] transition cursor-pointer">
              Contact Us
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
