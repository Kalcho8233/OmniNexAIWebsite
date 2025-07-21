'use client';
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import NeonButton from "../components/NeonButton";
import FeatureAccordionLite from "../components/FeatureAccordionLite";
import PlanROIText from "../components/PlanROIText"; // ✅ Нов компонент
import StripeBuyButton from "../components/StripeBuyButton"; // ✅ Stripe бутони компонент

const plans = [
  {
    name: "Launch",
    price: "€2,500 setup + €300/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      {
        title: " 1 GPT assistant",
        desc: "Think of it like hiring extra team members — but AI-powered. They work 24/7, follow your rules, and never miss a task."
      },
      {
        title: " 1–2 workflows",
        desc: "We automate your boring, manual work. From sending follow-ups to sorting meeting notes — so your team focuses on what really matters."
      },
      {
        title: " 1h onboarding",
        desc: "We walk you through everything — no tech skills needed. You’ll know exactly how to use your assistant from Day 1."
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
        title: " 2 GPT assistants",
        desc: "Think of it like hiring extra team members — but AI-powered. They work 24/7, follow your rules, and never miss a task."
      },
      {
        title: " 3–5 workflows",
        desc: "We automate your boring, manual work. From sending follow-ups to sorting meeting notes — so your team focuses on what really matters."
      },
      {
        title: " 2h onboarding",
        desc: "We walk you through everything — no tech skills needed. You’ll know exactly how to use your assistant from Day 1."
      },
      {
        title: " Priority support",
        desc: "You get help fast — no waiting in line, no bots. Real answers, real people, real quick."
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
        title: " 3+ GPT assistants",
        desc: "Think of it like hiring extra team members — but AI-powered. They work 24/7, follow your rules, and never miss a task."
      },
      {
        title: " 6+ workflows",
        desc: "We automate your boring, manual work. From sending follow-ups to sorting meeting notes — so your team focuses on what really matters."
      },
      {
        title: " 3h onboarding",
        desc: "We walk you through everything — no tech skills needed. You’ll know exactly how to use your assistant from Day 1."
      },
      {
        title: " Custom integrations",
        desc: "Already using Slack, Gmail, Notion or HubSpot? We’ll connect your assistant to your tools so it fits right into your workflow."
      },
      {
        title: " Dedicated support",
        desc: "One expert from our team stays with you. They know your setup and help you get the most out of your assistant — anytime you need it."
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
        <meta name="description" content="Compare OmniNex pricing plans for custom AI assistants. From lean startup teams to full-scale agency automation – see which plan fits your business." />
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Head>

      <Navbar />

      <main className="relative bg-backgroundLight text-accentText min-h-screen py-20 px-6 md:px-20">
        {/* Header */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose the plan that fits your team</h1>
          <p className="text-lg md:text-xl font-semibold text-neonPurple mb-8">
            Start saving 10+ hours/week in less than 7 days. Pick your plan.
          </p>
          <NeonButton text="Book a Demo" href="https://calendly.com/nikola-nikolov1/30min" />
        </section>

        {/* Pricing Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white ${plan.border} p-6 rounded-xl shadow-sm hover:scale-[1.03] transition-transform border-2`}
            >
              {plan.name === "Optimize" && (
                <div className="absolute top-4 right-4 bg-[#D000FF] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  💜 Most Chosen
                </div>
              )}
              <h2 className="text-2xl font-semibold mb-2 text-primaryText">{plan.name}</h2>
              <p className={`font-semibold ${plan.text}`}>{plan.price}</p>
              <PlanROIText plan={plan.name} />
              <div className="space-y-4 mb-6 mt-4">
                {plan.features.map((f, j) => (
                  <FeatureAccordionLite key={j} title={f.title} description={f.desc} />
                ))}
              </div>
              <p className="text-sm text-secondaryText italic mb-4">{plan.note}</p>
              <StripeBuyButton buyButtonId={plan.stripeButtonId} />
            </div>
          ))}
        </section>

        {/* Bonus tagline */}
        <section className="text-center mt-12 mb-2">
          <p className="text-xl md:text-2xl italic text-black">
            Built for teams who don’t want just another tool — but real results.
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
