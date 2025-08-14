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
        {/* floating brand blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-neonPurple/25 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-neonBlue/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-neonPurple/15 blur-3xl animate-pulse" />
        </div>

        {/* HERO with subtle moving gradient overlay */}
        <section className="relative px-6 md:px-16 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-40">
            <div className="h-full w-full bg-gradient-to-r from-[#B300FF] via-[#6F00FF] to-[#00C2FF] bg-[length:200%_200%] animate-[pulse_6s_ease-in-out_infinite]"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We build <span className="text-white drop-shadow">custom AI workflow assistants</span> that run your operations — via chat or on autopilot.
            </motion.h1>
            <motion.p
              className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Type a task in plain language and it gets done. Or schedule it to run hands-free. From reporting and follow-ups to data syncs and client workflows — your assistant executes reliably and follows your rules.
            </motion.p>
          </div>
        </section>

        {/* thin gradient divider */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#BC13FE40] to-transparent" />

        {/* OUR STORY (soft alt bg) */}
        <section className="px-6 md:px-16 py-16 bg-[#fafbff]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              OmniNex started with a simple idea: most teams don’t need more tools — they need
              <span className="font-semibold"> dependable workflows</span> that actually do the work. We build assistants that follow your rules,
              respect your data, and deliver consistent outcomes. Quality over hype. Measurable wins over promises.
            </p>
          </div>
        </section>

        {/* MINI TIMELINE: Idea → Build → Optimize */}
        <section className="px-6 md:px-16 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">From Idea to Impact</h2>
            <ol className="relative border-s-2 border-neonPurple/30 space-y-10 max-w-3xl mx-auto">
              <li className="ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-neonPurple bg-white"></span>
                <h3 className="text-xl font-semibold">Discover the wins</h3>
                <p className="text-gray-700">Map the high-impact processes and define the guardrails.</p>
              </li>
              <li className="ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-neonPurple bg-white"></span>
                <h3 className="text-xl font-semibold">Build & connect</h3>
                <p className="text-gray-700">Design your assistant around your workflow and plug it into your stack.</p>
              </li>
              <li className="ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-neonPurple bg-white"></span>
                <h3 className="text-xl font-semibold">Launch & optimize</h3>
                <p className="text-gray-700">Dry run, go-live, monitoring and improvements that compound over time.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Results & Proof */}
        <section id="results" className="px-6 md:px-16 py-20 bg-[#fafbff]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Results You Can See</h2>
            <p className="text-gray-700 mb-10">
              We measure success in what matters most — time back, efficiency, and business results.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                { k: "42+ hrs/month", d: "Team hours saved", icon: <FaCheckCircle className="text-neonPurple" /> },
                { k: "2.4× more deals", d: "From the same leads", icon: <FaCheckCircle className="text-neonPurple" /> },
                { k: "621% avg. ROI", d: "€1 in then €6+ out", icon: <FaCheckCircle className="text-neonPurple" /> },
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
            <p className="text-sm text-gray-500 mt-4">(Representative outcomes — actual metrics vary by scope and adoption.)</p>

            {/* measurement + quality callout */}
            <div className="grid md:grid-cols-2 gap-10 mt-10">
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

            {/* secondary metrics chips */}
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

        {/* How We’re Different */}
        <section className="px-6 md:px-16 py-20">
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

        {/* Founder card with more human touch */}
        <section className="px-6 md:px-16 pb-24 bg-[#fafbff]">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-neonBlue bg-gradient-to-br from-white to-[#f7f8ff] p-8 text-center shadow-sm">
              <img
                src="/images/nikola-profile.jpg"
                alt="Nikola Nikolov - Founder of OmniNex"
                className="mx-auto rounded-full border-4 border-neonPurple/30 shadow-md"
                style={{ width: "160px", height: "160px", objectFit: "cover" }}
              />
              <h3 className="mt-5 text-2xl font-semibold">Nikola Nikolov</h3>
              <p className="mt-1 text-sm text-gray-700">Founder & AI Consultant at OmniNex</p>
              <p className="mt-4 text-gray-800 max-w-3xl mx-auto">
                I care about dependable systems and measurable wins. I started OmniNex after seeing teams drown in busywork while
                critical projects sat on hold. Our rule is simple: if it doesn’t hold under real-world conditions, it doesn’t ship.
              </p>
            </div>

            {/* CTA */}
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
