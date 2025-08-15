'use client';
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import NeonButton from "../components/NeonButton";
import FeatureAccordionLite from "../components/FeatureAccordionLite";
import PlanROIText from "../components/PlanROIText";
import StripeBuyButton from "../components/StripeBuyButton";

const plans = [
  // ==== LAUNCH ====
  {
    name: "Launch",
    price: "€2,500 setup + €300/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      {
        title: "1-2 automations",
        desc: "Focused workflows that remove repetitive work quickly and prove value fast."
      },
      {
        title: "Chat or autopilot",
        desc: "Run tasks on demand in chat or on a simple schedule when you’re busy."
      },
      {
        title: "Connects multiple tools",
        desc: "Works with the stack you already use; no vendor lock-in."
      },
      {
        title: "Onboarding & training",
        desc: "Clear walkthrough and handover so your team is confident from day one."
      },
      {
        title: "Ongoing improvements",
        desc: "Light, continuous tweaks as your needs evolve."
      },
      {
        title: "Support",
        desc: "Standard support during business hours."
      },
    ],
    note: "Best for: lean teams getting started",
    stripeButtonId: "buy_btn_1RnMqjQ3alExjY2yBSlLMmH3"
  },

  // ==== OPTIMIZE ====
  {
    name: "Optimize",
    price: "€5,000 setup + €600/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      // основните, но по-подобрени
      {
        title: "3-4 automations",
        desc: "Upgraded reliability and tracking across steps; faster cycle time."
      },
      {
        title: "Chat or autopilot",
        desc: "On-demand chat actions plus managed schedules with alerts and retries."
      },
      {
        title: "Connects multiple tools",
        desc: "Deeper connectors and smarter handoffs across your current stack."
      },
      {
        title: "Onboarding & training",
        desc: "Role-based training, playbooks, and adoption nudges for smooth rollout."
      },
      {
        title: "Ongoing improvements",
        desc: "Monthly tune-ups based on usage and issues we observe."
      },
      {
        title: "Support",
        desc: "Priority support with faster response for critical paths."
      },
      // нови за Optimize
      {
        title: "Scheduled runs",
        desc: "Monitored recurring automations with status summaries."
      },
      {
        title: "Smarter coordination",
        desc: "Adds decision logic and cross-team orchestration where needed."
      },
      {
        title: "Custom integrations",
        desc: "When a required platform isn’t supported, we can build the connector."
      },
      {
        title: "Regular optimization",
        desc: "Periodic reviews focused on reliability, speed, and friction removal."
      },
      {
        title: "Future improvements",
        desc: "Prepared to extend without disrupting your team."
      },
    ],
    note: "For teams ready to systemize & scale",
    stripeButtonId: "buy_btn_1RnMxZQ3alExjY2yeUmTAidG"
  },

  // ==== SCALE ====
  {
    name: "Scale",
    price: "€9,000 setup + €1,200/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      // основните – най-силни
      {
        title: "4+ automations",
        desc: "Advanced, multi-department workflows with approvals and branching."
      },
      {
        title: "Chat, events & autonomous",
        desc: "Triggers from chat, system events, or run fully hands-free at scale."
      },
      {
        title: "Connects multiple tools",
        desc: "Enterprise-grade integrations across roles and compliance requirements."
      },
      {
        title: "Onboarding & training",
        desc: "Dedicated enablement and change-management support for adoption."
      },
      {
        title: "Ongoing improvements",
        desc: "Proactive roadmap, backlog management, and measurable milestones."
      },
      {
        title: "Support",
        desc: "Dedicated specialist who knows your setup end-to-end."
      },
      // включваме и добавените от Optimize
      { title: "Scheduled runs", desc: "Fully monitored schedules with error handling and reporting." },
      { title: "Smarter coordination", desc: "Decision trees, SLAs, and cross-team orchestration at scale." },
      { title: "Custom integrations", desc: "Unique or legacy systems integrated as first-class steps." },
      { title: "Regular optimization", desc: "Quarterly deep-dives to raise reliability and throughput." },
      { title: "Future improvements", desc: "Built for expansion without downtime." },
      // нови, само за Scale
      { title: "Robust coordination & compliance", desc: "Audit trails, permissions, and guardrails for regulated processes." },
      { title: "Proactive monitoring", desc: "Health checks, alerting, and incident assistance." },
      { title: "Built for expansion", desc: "Handles higher volumes, teams, and markets as you grow." },
      { title: "Enterprise SLAs", desc: "Clear targets for responsiveness and uptime." },
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
        <meta
          name="description"
          content="Compare OmniNex pricing plans for custom AI workflow assistants. From lean startup teams to full-scale operations – see which plan fits your business."
        />
      </Head>

      <Navbar />

      <main className="relative bg-backgroundLight text-accentText min-h-screen py-20 px-6 md:px-20">
        {/* Header */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-neonPurple">Choose the plan </span>
            <span className="text-black">that fits your team.</span>
          </h1>
          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-10">
            Start saving <strong>10+ hours/week</strong> with your custom AI assistant. <strong>Pick your plan.</strong>
          </p>
          <a
            href="https://calendly.com/nikola-nikolov1/ai-assistant-discovery-call"
            className="inline-block bg-neonPurple text-black font-semibold text-lg md:text-xl px-10 py-4 rounded-full hover:shadow-[0_0_18px_#c084fc] transition no-underline"
          >
            Book a Demo
          </a>
        </section>

        {/* Cards */}
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
                <p className={`mt-1 mb-3 ${plan.text} font-bold text-xl md:text-2xl`}>{plan.price}</p>

                <PlanROIText plan={plan.name} />

                <div className="space-y-4 mb-6 mt-5">
                  {plan.features.map((f, j) => (
                    <FeatureAccordionLite
                      key={j}
                      title={<span className="font-semibold">{f.title}</span>}
                      description={<span>{f.desc}</span>}
                    />
                  ))}
                </div>

                <p className="mb-4 text-sm text-gray-500 font-normal select-none">{plan.note}</p>
              </div>

              <div className="mt-auto">
                <StripeBuyButton buyButtonId={plan.stripeButtonId} />
              </div>
            </div>
          ))}
        </section>

        {/* Tagline */}
        <section className="text-center mt-14 mb-2">
          <p className="text-2xl md:text-3xl text-black">
            Built for teams who don’t want just another tool - but <strong>real results</strong>.
          </p>
        </section>

        {/* Footer CTA */}
        <section className="text-center mt-20">
          <p className="text-lg text-secondaryText mb-6">
            Still not sure? <span className="font-semibold">Let’s build your plan together.</span>
          </p>
          <Link href="/#contact" scroll={true}>
            <span className="inline-block bg-neonPurple text-black font-semibold text-lg md:text-xl px-10 py-4 rounded-full hover:shadow-[0_0_18px_#c084fc] transition no-underline cursor-pointer">
              Contact Us
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
