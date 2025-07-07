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
        <meta name="description" content="Learn more about OmniNex – who we are, what we do, and how we help businesses grow with AI automation." />
      </Head>

      <Navbar />

      <main className="bg-white text-black px-6 md:px-32 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About OmniNex</h1>

          <section className="space-y-6 text-lg leading-relaxed">
            <p>Hello, I’m Nikola — founder of OmniNex.</p>
            <p>
              I help businesses bring AI into their daily operations with custom GPT assistants and automation strategies.
              Think of it like hiring a digital teammate — one that never forgets, never takes breaks, and works 24/7.
            </p>

            <h2 className="text-2xl font-semibold mt-10">What We Do</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Custom GPT Assistants:</strong> Reply to clients, summarize meetings, automate workflows — tailored to your business.</li>
              <li><strong>Workflow Automation:</strong> Simplify internal processes with no-code/low-code tools.</li>
              <li><strong>AI Implementation:</strong> Adopt AI the right way — no hype, just results.</li>
              <li><strong>Human-Centric AI:</strong> Every assistant supports real people — your team, your clients, your ops.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10">Tools We Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>GPTs & LLMs:</strong> OpenAI GPT-4, ChatGPT, Prompt Engineering</li>
              <li><strong>Automation:</strong> Make (Integromat), n8n, Notion AI, Dify</li>
              <li><strong>Tech Stack:</strong> HTML, CSS, beginner Python, Canva</li>
              <li><strong>Strengths:</strong> Communication, Problem Solving, Self-learning, Collaboration</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10">Why Work With Us?</h2>
            <p>
              We're not just AI builders — we're business-minded problem solvers.
              You’ll get tools that actually reduce workload, enhance client experience, and help you scale with speed.
            </p>

            <h2 className="text-2xl font-semibold mt-10">What We’re Working On Now</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Growing our AI assistant portfolio</li>
              <li>Helping service businesses streamline with automation</li>
              <li>Exploring new AI use cases that save time & boost client value</li>
            </ul>

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
