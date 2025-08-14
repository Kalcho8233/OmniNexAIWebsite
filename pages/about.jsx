// pages/about.jsx
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaShieldAlt, FaCogs, FaChartLine } from "react-icons/fa";

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
          content="About OmniNex - our story, what makes us different, and the measurable impact our AI workflow assistants deliver."
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
              We build <span className="text-neonPurple">custom AI workflow assistants</span> that
              run your operations - via chat or on autopilot.
            </motion.h1>
            <motion.p
              className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Type a task in plain language and it gets done. Or schedule it to run hands-free.
              From reporting and follow-ups to data syncs and client workflows — your assistant
              executes reliably and follows your rules.
            </motion.p>
          </div>
        </section>

        {/* OUR STORY (your exact copy) */}
        <section className="px-6 md:px-16 py-16 bg-[#fafbff]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>

            <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
              <p>
                OmniNex was born from a simple truth: most teams don’t need more software — they need
                smarter, more dependable workflows that get real work done. Too many tools promise the
                world but add complexity, break under pressure, or waste time on busywork.
              </p>
              <p>
                We set out to change that. Our custom <strong>AI workflow assistants</strong> are
                designed to work seamlessly with your processes, follow your rules, and respect your
                data. They adapt to your business instead of forcing you to adapt to them.
              </p>
              <p>
                Every system is <strong>battle-tested</strong> under real-world conditions to ensure
                it delivers results you can trust. No black boxes, no guesswork — just clear metrics
                and consistent performance.
              </p>
              <p>
                OmniNex exists to make automation feel effortless — so your team can do more with
                less friction, every single day.
              </p>
            </div>
          </div>
        </section>

        {/* OUR PHILOSOPHY (neon mini-timeline, separate section) */}
        <section className="px-6 md:px-16 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>

            <div className="relative mt-6">
              {/* Neon rail */}
              <div className="pointer-events-none absolute left-1.5 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#B300FF] via-[#BC13FE] to-[#00E5FF] rounded-full" />

              {[
                {
                  title: "Quality over hype",
                  desc: "Practical systems that last — engineered for stability before scale.",
                },
                {
                  title: "Measurable impact",
                  desc: "Real numbers, not vague promises — time back, throughput, ROI.",
                },
                {
                  title: "Your workflow, your way",
                  desc: "Tailored to your stack and guardrails today; scalable for tomorrow.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-10 md:pl-12 pr-6 py-5 mb-5 rounded-2xl border border-neonBlue bg-white shadow-sm hover:shadow-[0_0_32px_#BC13FE44] transition-all"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  {/* Node + glow */}
                  <span className="absolute left-0 top-6 h-4 w-4 rounded-full bg-neonPurple shadow-[0_0_18px_#BC13FE] ring-4 ring-[#BC13FE22]" />
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
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
                {
                  k: "42+ hrs/month",
                  d: "Team hours saved",
                  icon: <FaCheckCircle className="text-neonPurple" />,
                },
                {
                  k: "2.4× more deals",
                  d: "From the same leads",
                  icon: <FaCheckCircle className="text-neonPurple" />,
                },
                {
                  k: "621% avg. ROI",
                  d: "€1 in then €6+ out",
                  icon: <FaCheckCircle className="text-neonPurple" />,
                },
              ].map((x, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl border border-neonBlue bg-white p-7 text-center shadow-sm hover:shadow-[0_0_22px_rgba(188,19,254,0.15)] transition-shadow"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="flex items-center justify-center gap-2 text-gray-900 mb-2">
                    {x.icon}
                    <span className="text-sm font-medium">Impact</span>
                  </div>
                  <div className="text-3xl font-extrabold text-neonPurple">{x.k}</div>
                  <div className="text-gray-700 mt-1">{x.d}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              (Representative outcomes — actual metrics vary by scope and adoption.)
            </p>
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

        {/* FOUNDER CARD + CTA */}
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
                We care about dependable systems and measurable wins. If an automation doesn’t hold
                under real-world conditions, it doesn’t ship.
              </p>
            </div>

            <div className="text-center mt-10">
              <a
                href="/#contact"
                className="bg-gradient-to-r from-[#B300FF] to-[#FF37B5] text-white font-semibold px-8 py-3 rounded-full hover:shadow-[0_0_18px_#c084fc] transition"
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
