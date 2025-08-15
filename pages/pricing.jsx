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
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">1–2 automations</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Focused <strong>workflows</strong> that remove repetitive work fast and prove value quickly.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Chat or autopilot</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Type a task when you need it, or let it run on a <strong>schedule</strong> when you’re busy.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Connects multiple tools</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Works with the tools you already use – no <strong>vendor lock-in</strong>.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Onboarding & training</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Clear walkthrough so your team is confident from day one.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Ongoing improvements</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            We refine and extend as your needs evolve.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Standard support</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Responsive help during business hours.
          </span>
        )
      }
    ],
    note: <span className="text-[0.95rem] font-medium text-gray-700 italic">Best for: lean teams getting started</span>,
    stripeButtonId: "buy_btn_1RnMqjQ3alExjY2yBSlLMmH3"
  },
  {
    name: "Optimize",
    price: "€5,000 setup + €600/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">3–5 automations</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Multi-process <strong>workflows</strong> that coordinate across teams and handoffs.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Chat + scheduled runs</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Simple chat commands plus monitored, <strong>recurring automations</strong>.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Smarter coordination</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Links many tools and adds <strong>decision logic</strong> where needed.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Custom integrations</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            When a required platform isn’t supported out of the box, we can <strong>build it</strong>.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Priority support</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            <strong>Fast responses</strong> to keep critical operations running.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Regular optimization</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Periodic reviews to boost <strong>reliability</strong> and performance.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Future improvements</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Built to expand without disrupting your team.
          </span>
        )
      }
    ],
    note: <span className="text-[0.95rem] font-medium text-gray-700 italic">For teams ready to systemize & scale</span>,
    stripeButtonId: "buy_btn_1RnMxZQ3alExjY2yeUmTAidG"
  },
  {
    name: "Scale",
    price: "€9,000 setup + €1,200/month",
    border: "border-neonPurple",
    text: "text-neonPurple",
    features: [
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">6+ advanced automations</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Complex, cross-department operations with approvals and branching logic.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Chat, events, autonomous</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Trigger by chat or events – runs fully <strong>hands-free at scale</strong>.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Robust coordination</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Works across many tools, roles, and compliance requirements.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Custom integrations</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Connect unique or legacy platforms specific to your business.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Dedicated support</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            A named specialist who knows your setup end-to-end.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Proactive monitoring</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Health checks and quarterly enhancement reviews.
          </span>
        )
      },
      {
        title: <span className="text-[1.05rem] md:text-[1.1rem] font-semibold">Built for expansion</span>,
        desc: (
          <span className="text-[0.98rem] md:text-[1rem] text-gray-800">
            Prepared for higher volumes and future initiatives.
          </span>
        )
      }
    ],
    note: <span className="text-[0.95rem] font-medium text-gray-700 italic">For growing agencies & enterprises</span>,
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

                {/* Price - larger + spacing */}
                <p className={`mt-1 mb-3 ${plan.text} font-bold text-xl md:text-2xl`}>{plan.price}</p>

                {/* ROI + divider + 'Here's what you get' */}
                <PlanROIText plan={plan.name} />

                <div className="space-y-4 mb-6 mt-5">
                  {plan.features.map((f, j) => (
                    <FeatureAccordionLite key={j} title={f.title} description={f.desc} />
                  ))}
                </div>

                {/* Note - a bit more visible */}
                <p className="mb-4">{plan.note}</p>
              </div>

              {/* Buy (kept aligned/unchanged layout-wise) */}
              <div className="mt-auto">
                <StripeBuyButton buyButtonId={plan.stripeButtonId} />
              </div>
            </div>
          ))}
        </section>

        {/* Bonus tagline (more noticeable + bold key words) */}
        <section className="text-center mt-14 mb-2">
          <p className="text-2xl md:text-3xl text-black">
            Built for teams who don’t want just another tool – but <strong>real results</strong>.
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
