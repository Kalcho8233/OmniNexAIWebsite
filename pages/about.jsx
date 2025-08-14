import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaBolt, FaCogs, FaShieldAlt, FaCheckCircle, FaChartLine, FaHandshake } from "react-icons/fa";

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
          content="Learn more about OmniNex – who we are, how we design custom AI workflow assistants, and how we help teams get measurable results."
        />
      </Head>

      <Navbar />

      {/* Subtle animated background */}
      <main className="relative bg-white text-black overflow-x-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-neonPurple/20 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-neonBlue/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-neonPurple/15 blur-3xl animate-pulse" />
        </div>

        {/* Intro / Hero */}
        <section className="px-6 md:px-16 py-20 md:py-28">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We build <span className="text-neonPurple">custom AI workflow assistants</span>
              <br className="hidden md:block" /> that your team actually uses.
            </motion.h1>
            <motion.p
              className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Operate by chat when you ask — or run fully on autopilot when you’re busy.
              Connected to your stack, designed for reliability, and measured by real outcomes.
            </motion.p>
          </div>
        </section>

        {/* What we do (alt bg) */}
        <section className="px-6 md:px-16 py-16 bg-[#fafbff]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaBolt size={22} className="text-neonPurple" />,
                  title: "Custom AI Workflow Assistants",
                  text:
                    "Trigger in chat or on schedule; handle follow-ups, handoffs, reporting, QA checks and more.",
                },
                {
                  icon: <FaCogs size={22} className="text-neonPurple" />,
                  title: "Process Automation",
                  text:
                    "Connect the tools you already use and orchestrate reliable, multi-step workflows across teams.",
                },
                {
                  icon: <FaShieldAlt size={22} className="text-neonPurple" />,
                  title: "Knowledge & Guardrails",
                  text:
                    "We structure your SOPs and add permissions so the assistant acts safely and predictably.",
                },
                {
                  icon: <FaChartLine size={22} className="text-neonPurple" />,
                  title: "Monitoring & Iteration",
                  text:
                    "Performance reviews, error handling, and continuous improvements baked in.",
                },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-neonBlue/80 bg-white p-6 shadow-sm hover:shadow-[0_0_24px_rgba(188,19,254,0.15)] transition-shadow"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="flex items-start gap-3">
                    {b.icon}
                    <div>
                      <h3 className="font-semibold text-lg">{b.title}</h3>
                      <p className="text-gray-700 mt-1">{b.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How we deliver */}
        <section className="px-6 md:px-16 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Deliver</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Discover & Plan",
                  text: "Identify the highest-impact workflows and define success metrics.",
                },
                {
                  title: "Build & Integrate",
                  text: "Design the assistant around your process and connect it to your stack.",
                },
                {
                  title: "Launch & Optimize",
                  text: "Dry run with your team, then go live with monitoring and regular enhancements.",
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-neonBlue bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-gray-700 mt-2">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Proof */}
        <section id="results" className="px-6 md:px-16 py-20 bg-[#fafbff]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Results You Can See</h2>
            <p className="text-gray-700 mb-10">
              We focus on clear indicators where they matter most — time back, workload relief, and business outcomes.
              Here’s how we measure and report them.
            </p>

            {/* KPIs */}
            <div className="grid md:grid-cols-3 gap-6 mb-3">
              {[
                { k: "42+ hrs/month back", d: "Team hours freed across targeted workflows." },
                { k: "2.4× more deals (same leads)", d: "Better follow-through → more wins." },
                { k: "621% avg. ROI", d: "€1 in → €6+ out on agreed workflows." },
              ].map((x, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-neonBlue bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-neonPurple mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">{x.k}</h3>
                      <p className="text-gray-700">{x.d}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mb-10">
              (These are representative outcomes; actual metrics vary by scope and adoption.)
            </p>

            {/* Measurement bullets */}
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold mb-3">How We Measure</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Time saved: Before/after runs on the same workflows, summed across roles.</li>
                  <li>Throughput & quality: Tasks completed, error rates, rework avoided.</li>
                  <li>Deal impact: Same lead volume, higher conversion and cycle speed.</li>
                  <li>ROI: Cost in (build + run) vs. value out (hours saved × role rate + revenue impact).</li>
                  <li>Visibility: Periodic summaries; optimization reviews to double-down on what works.</li>
                </ul>
              </div>

              <div>
                <div className="bg-white rounded-xl border border-neonBlue p-6 shadow-sm">
                  <h4 className="text-xl font-semibold mb-2">We launch when it’s right.</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Permissions & guardrails configured</li>
                    <li>Manual + automated tests for key scenarios</li>
                    <li>Dry run with real data and acceptance checklist</li>
                  </ul>
                </div>

                <p className="text-gray-700 mt-6">
                  We monitor, resolve issues fast, and ship improvements. Your assistant compounds value over time.
                </p>
              </div>
            </div>

            {/* Secondary metrics */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 text-sm">
              {[
                "–60% admin time",
                "< 24h lead follow-up SLA",
                "3.8× revenue in 60 days",
                "NPS/CSAT up",
                "Error rate down",
                "Adoption rate up",
              ].map((m, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-neonBlue bg-white px-4 py-3 text-gray-800 text-center"
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 md:px-16 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Stand For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaShieldAlt className="text-neonPurple" />,
                  title: "Transparency",
                  text: "Clear scopes, visible metrics, honest timelines. No black boxes.",
                },
                {
                  icon: <FaCogs className="text-neonPurple" />,
                  title: "Precision",
                  text: "We engineer for reliability first — guardrails, testing, and iteration.",
                },
                {
                  icon: <FaHandshake className="text-neonPurple" />,
                  title: "Results",
                  text: "Workload down, output up. We obsess over measurable impact.",
                },
              ].map((v, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-neonBlue bg-white p-6 shadow-sm hover:shadow-[0_0_24px_rgba(188,19,254,0.15)] transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{v.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{v.title}</h3>
                      <p className="text-gray-700 mt-1">{v.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder + CTA */}
        <section className="px-6 md:px-16 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="fade-in text-center">
              <h3 className="text-2xl font-semibold mb-6">Let’s Build Smarter Together</h3>
              <img
                src="/images/nikola-profile.jpg"
                alt="Nikola Nikolov - Founder of OmniNex"
                className="mx-auto rounded-full"
                style={{ width: "160px", height: "160px", objectFit: "cover" }}
              />
              <h3 className="mt-4 text-xl font-semibold">Nikola Nikolov</h3>
              <p className="mt-1 text-sm text-gray-700">
                Founder & AI Consultant at OmniNex<br />
                “Helping teams automate smarter, not harder.”
              </p>
            </div>

            <div className="text-center mt-10">
              <a
                href="/#contact"
                className="inline-block bg-neonPurple text-white font-semibold px-7 py-3 rounded-full hover:shadow-[0_0_14px_#c084fc] transition"
              >
                Work With Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
