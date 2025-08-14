import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaShieldAlt, FaCogs, FaChartLine, FaQuoteLeft } from "react-icons/fa";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    });
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Head>
        <title>About Us | OmniNex</title>
        <meta
          name="description"
          content="About OmniNex — our story, what makes us different, and the measurable impact our AI workflow assistants deliver."
        />
      </Head>

      <Navbar />

      {/* Page background accents */}
      <main className="relative bg-white text-black overflow-x-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-neonPurple/25 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-neonBlue/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-neonPurple/15 blur-3xl animate-pulse" />
        </div>

        {/* HERO */}
        <section className="px-6 md:px-16 py-20 md:py-28">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Building <span className="text-neonPurple">systems that work</span> —
              so your team can, too.
            </motion.h1>
            <motion.p
              className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              We design custom AI workflow assistants that run your operations via chat or on autopilot. Human-friendly on the surface. Industrial‑grade under the hood.
            </motion.p>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="px-6 md:px-16 py-16 bg-[#fafbff]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              OmniNex started with a simple idea: most teams don’t need more tools — they need
              <span className="font-semibold"> dependable workflows</span> that actually do the work. We build assistants that follow your rules,
              respect your data, and deliver consistent outcomes. Quality over hype. Measurable wins over
              promises.
            </p>
          </div>
        </section>

        {/* OUR IMPACT (KPIs) */}
        <section id="results" className="px-6 md:px-16 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Results You Can See</h2>
            <p className="text-gray-700 mb-10">
              We measure success in what matters most — time back, efficiency, and business results.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                { k: "42+ hrs/month", d: "Team hours saved", icon: <FaCheckCircle className="text-neonPurple" /> },
                { k: "2.4× more deals", d: "From the same leads", icon: <FaCheckCircle className="text-neonPurple" /> },
                { k: "621% avg. ROI", d: "€1 in → €6+ out", icon: <FaCheckCircle className="text-neonPurple" /> },
              ].map((x, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl border border-neonBlue bg-white p-7 text-center shadow-sm hover:shadow-[0_0_22px_rgba(188,19,254,0.15)] transition-shadow"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="flex items-center justify-center gap-2 text-gray-900 mb-2">{x.icon}<span className="text-sm font-medium">Impact</span></div>
                  <div className="text-3xl font-extrabold text-neonPurple">{x.k}</div>
                  <div className="text-gray-700 mt-1">{x.d}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">(Representative outcomes — actual metrics vary by scope and adoption.)</p>
          </div>
        </section>

        {/* HOW WE'RE DIFFERENT */}
        <section className="px-6 md:px-16 py-20 bg-[#fafbff]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">How We’re Different</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaShieldAlt className="text-neonPurple" />,
                  title: "Transparency",
                  tagline: "Clear scopes. Visible metrics. No black boxes.",
                },
                {
                  icon: <FaCogs className="text-neonPurple" />,
                  title: "Precision",
                  tagline: "Guardrails + testing. Stability before scale.",
                },
                {
                  icon: <FaChartLine className="text-neonPurple" />,
                  title: "Results",
                  tagline: "Workload down. Output up. ROI you can track.",
                },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-neonBlue bg-white p-6 shadow-sm hover:shadow-[0_0_24px_rgba(188,19,254,0.15)] transition-shadow"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{v.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{v.title}</h3>
                      <p className="text-gray-700 mt-1">{v.tagline}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT PROOF */}
        <section className="px-6 md:px-16 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FaQuoteLeft className="mx-auto text-neonPurple mb-3" />
            <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed">
              “In two weeks, OmniNex eliminated our hand‑offs and cut follow‑ups in half. The assistant now runs daily — our team finally has focus time.”
            </p>
            <p className="mt-2 text-sm text-gray-500">— Placeholder Client, Operations Lead</p>
          </div>
        </section>

        {/* FOUNDER CARD */}
        <section className="px-6 md:px-16 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-neonBlue bg-gradient-to-br from-white to-[#fafbff] p-8 text-center shadow-sm">
              <img
                src="/images/nikola-profile.jpg"
                alt="Nikola Nikolov - Founder of OmniNex"
                className="mx-auto rounded-full border-4 border-neonPurple/30"
                style={{ width: "140px", height: "140px", objectFit: "cover" }}
              />
              <h3 className="mt-5 text-2xl font-semibold">Nikola Nikolov</h3>
              <p className="mt-1 text-sm text-gray-700">Founder & AI Consultant at OmniNex</p>
              <p className="mt-4 text-gray-800 max-w-3xl mx-auto">
                We care about dependable systems and measurable wins. If an automation doesn’t hold under real‑world conditions, it doesn’t ship.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <a
                href="/#contact"
                className="inline-block bg-gradient-to-r from-[#B300FF] to-[#FF37B5] text-white font-semibold px-8 py-3 rounded-full hover:shadow-[0_0_18px_#c084fc] transition"
              >
                Let’s Build Smarter Together
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
