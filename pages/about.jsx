import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
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

      <main className="bg-white text-black px-6 md:px-32 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About OmniNex</h1>

          <section className="space-y-6 text-lg leading-relaxed">
            <p>Hi, I’m Nikola — founder of OmniNex.</p>
            <p>
              We help teams run their operations with <strong>custom AI workflow assistants</strong> — usable via chat when you ask, or fully on autopilot when you’re busy. Each assistant follows your rules, plugs into your stack, and delivers consistent results.
            </p>

            <h2 className="text-2xl font-semibold mt-10">What We Do</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Custom AI Workflow Assistants</strong> — trigger in chat or on schedule; handle follow-ups, handoffs, reporting, QA checks and more.
              </li>
              <li>
                <strong>Process Automation</strong> — connect the tools you already use and orchestrate reliable, multi-step workflows across teams.
              </li>
              <li>
                <strong>Knowledge & Guardrails</strong> — we structure your SOPs and add permissions so the assistant acts safely and predictably.
              </li>
              <li>
                <strong>Monitoring & Iteration</strong> — performance reviews, error handling and continuous improvements baked in.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10">How We Deliver</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Discover & Plan</strong> — identify the highest-impact workflows and define success metrics.
              </li>
              <li>
                <strong>Build & Integrate</strong> — design the assistant around your process and connect it to your stack.
              </li>
              <li>
                <strong>Launch & Optimize</strong> — dry run with your team, then go live with monitoring and regular enhancements.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10">Why Work With Us?</h2>
            <p>
              Outcomes over hype. We build for reliability, adoption and ROI — assistants that reduce workload, cut errors, and scale with you. Quality and stability first; no surprises in production.
            </p>

            <h2 className="text-2xl font-semibold mt-10">What We’re Working On Now</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expanding our library of proven automation patterns</li>
              <li>Helping service businesses standardize and scale operations</li>
              <li>New use cases that save hours per week and improve client experience</li>
            </ul>

            {/* Results & Proof Section */}
            <section id="results" className="mt-20">
              <h2 className="text-3xl font-bold mb-4">Results You Can See</h2>
              <p className="mb-8">
                We focus on clear indicators where they matter most—time back, workload relief, and business outcomes. Here’s how we measure and report them.
              </p>

              {/* KPI Row */}
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div className="p-6 border rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold">42+ hrs/month back</h3>
                  <p>Team hours freed across targeted workflows.</p>
                </div>
                <div className="p-6 border rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold">2.4× more deals (same leads)</h3>
                  <p>Better follow‑through → more wins.</p>
                </div>
                <div className="p-6 border rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold">621% avg. ROI</h3>
                  <p>€1 in → €6+ out on agreed workflows.</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-8">(These are representative outcomes; actual metrics vary by scope and adoption.)</p>

              {/* How We Measure */}
              <h3 className="text-2xl font-semibold mb-4">How We Measure</h3>
              <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Time saved: Before/after runs on the same workflows, summed across roles.</li>
                <li>Throughput & quality: Tasks completed, error rates, rework avoided.</li>
                <li>Deal impact: Same lead volume, higher conversion and cycle speed.</li>
                <li>ROI: Cost in (build + run) vs. value out (hours saved × role rate + revenue impact).</li>
                <li>Visibility: Periodic summaries; optimization reviews to double‑down on what works.</li>
              </ul>

              {/* Quality Standard */}
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-semibold mb-2">We launch when it’s right.</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Permissions & guardrails configured</li>
                  <li>Manual + automated tests for key scenarios</li>
                  <li>Dry run with real data and acceptance checklist</li>
                </ul>
              </div>

              {/* Ongoing */}
              <p className="mb-8">
                We monitor, resolve issues fast, and ship improvements. Your assistant compounds value over time.
              </p>

              {/* Optional Secondary Metrics */}
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>–60% admin time</div>
                <div>{'<'} 24h lead follow‑up SLA</div>
                <div>3.8× revenue in 60 days</div>
                <div>NPS/CSAT up</div>
                <div>Error rate down</div>
                <div>Adoption rate up</div>
              </div>
            </section>

            {/* Founder Profile with Animation */}
            <div className="fade-in text-center mt-20">
              <h3 className="text-2xl font-semibold mb-6">Let’s Build Smarter Together</h3>
              <img
                src="/images/nikola-profile.jpg"
                alt="Nikola Nikolov - Founder of OmniNex"
                className="mx-auto rounded-full"
                style={{ width: "160px", height: "160px", objectFit: "cover" }}
              />
              <h3 className="mt-4 text-xl font-semibold">Nikola Nikolov</h3>
              <p className="mt-1 text-sm bio-text">
                Founder & AI Consultant at OmniNex<br />
                “Helping teams automate smarter, not harder.”
              </p>
            </div>

            {/* Contact Button */}
            <div className="text-center mt-10">
              <a
                href="/#contact"
                className="inline-block bg-neonPurple text-white font-semibold px-6 py-3 rounded-full hover:shadow-[0_0_10px_#c084fc] transition"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
