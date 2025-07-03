'use client';
import Head from "next/head";
import Link from "next/link";
import NeonButton from "../components/NeonButton";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | OmniNex AI Plans</title>
        <meta
          name="description"
          content="Compare OmniNex pricing plans for custom AI assistants. From lean startup teams to full-scale agency automation – see which plan fits your business."
        />
      </Head>
      <main id="pricing" className="bg-[#0a0a0a] text-white min-h-screen py-20 px-6 md:px-20">
        {/* 🔰 Hero Header */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose the plan that fits your team
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            From fast setup to full-scale automation — your GPT assistant starts here.
          </p>
          <NeonButton text="Book a Demo" href="https://calendly.com/nikivldmrv/30min" />
        </section>

        {/* 🧩 Pricing Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 🚀 Launch */}
          <div className="bg-[#121212] border border-neonBlue p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Launch</h2>
            <p className="text-neonBlue font-semibold mb-4">€2,500 setup + €300/month</p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>✅ 1 GPT assistant</li>
              <li>✅ 1–2 workflows</li>
              <li>✅ 1h onboarding</li>
            </ul>
            <p className="text-sm text-gray-500">Best for: lean teams getting started</p>
          </div>

          {/* ⚙️ Optimize */}
          <div className="bg-[#121212] border border-neonPurple p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Optimize</h2>
            <p className="text-neonPurple font-semibold mb-4">€5,000 setup + €600/month</p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>✅ 2 GPT assistants</li>
              <li>✅ 3–5 workflows</li>
              <li>✅ 2h onboarding</li>
              <li>✅ Priority support</li>
            </ul>
            <p className="text-sm text-gray-500">For teams ready to systemize & scale</p>
          </div>

          {/* 🧠 Scale */}
          <div className="bg-[#121212] border border-neonBlue p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Scale</h2>
            <p className="text-neonBlue font-semibold mb-4">€9,000 setup + €1,200/month</p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>✅ 3+ GPT assistants</li>
              <li>✅ 6+ workflows</li>
              <li>✅ 3h onboarding</li>
              <li>✅ Custom integrations</li>
              <li>✅ Dedicated support</li>
            </ul>
            <p className="text-sm text-gray-500">For growing agencies & enterprises</p>
          </div>
        </section>

        {/* 📎 Footer CTA */}
        <section className="text-center mt-20">
          <p className="text-lg text-gray-300 mb-6">Need help choosing a plan?</p>
          <Link href="/#contact" scroll={true}>
            <span className="inline-block bg-neonPurple text-black font-semibold px-6 py-3 rounded-full hover:shadow-[0_0_10px_#c084fc] transition cursor-pointer">
              Contact Us
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
