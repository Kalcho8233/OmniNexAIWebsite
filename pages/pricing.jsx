'use client';
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import NeonButton from "../components/NeonButton";
import FeatureAccordionLite from "../components/FeatureAccordionLite";
import PlanROIText from "../components/PlanROIText";
import StripeBuyButton from "../components/StripeBuyButton";
import Footer from "../components/Footer"; // ✅ добавено

const descCls = "text-[1.02rem] md:text-[1.08rem] font-medium text-gray-800 leading-snug";

const plans = [
  // ==== LAUNCH ====
  {
    name: "Launch",
    price: "€2,500 setup + €300/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      { title: "1 - 2 automations", desc: "Simple workflows that remove repetitive tasks and save hours each week." },
      { title: "Chat or autopilot", desc: "Send a quick chat command or let tasks run automatically on a schedule." },
      { title: "Connects multiple tools", desc: "Works with the tools you already use - no extra logins needed." },
      { title: "Onboarding & training", desc: "Step-by-step guidance so you’re confident from day one." },
      { title: "Ongoing improvements", desc: "Small updates as your needs change over time." },
      { title: "Support", desc: "Standard help during business hours." },
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
      { title: "3 - 4 automations", desc: "Covers more processes with faster and more reliable performance." },
      { title: "Chat or autopilot", desc: "Same convenience as Launch, with smarter scheduling options." },
      { title: "Connects multiple tools", desc: "Better integrations for smoother work between apps." },
      { title: "Onboarding & training", desc: "Extra guidance with role-specific instructions and short videos." },
      { title: "Ongoing improvements", desc: "Monthly adjustments to keep workflows running at their best." },
      { title: "Support", desc: "Priority help with faster response times." },
      { title: "Smarter coordination", desc: "Simple ‘if/then’ rules to pass tasks between teams automatically." },
      { title: "Regular check-ins", desc: "Quick monthly review to spot and apply improvements." },
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
      { title: "4+ automations", desc: "Key processes fully automated across multiple teams." },
      { title: "Chat, events & autonomous", desc: "Trigger tasks from chat, events, or let them run hands-free." },
      { title: "Connects multiple tools", desc: "Integrations across departments to cut down on manual work." },
      { title: "Onboarding & training", desc: "Full team workshops to make automation part of daily work." },
      { title: "Ongoing improvements", desc: "A yearly plan for steady upgrades and refinements." },
      { title: "Support", desc: "A dedicated support from an expert who knows your setup inside out." },
      { title: "Smarter coordination", desc: "Advanced rules and routing between teams and tools." },
      { title: "Regular check-ins", desc: "Reviews every two months with clear action steps." },
      { title: "Built for expansion", desc: "Ready for higher volumes and new processes as you grow." },
      { title: "Governance & access", desc: "Clear roles and permissions for smooth scaling." },
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
            Start saving <strong>10+ hours/week</strong> with your custom AI assistant. 
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
                      description={<span className={descCls}>{f.desc}</span>}
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

      {/* ✅ Added Footer */}
      <Footer /> 
    </>
  );
}
