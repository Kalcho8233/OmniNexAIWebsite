import { motion } from 'framer-motion';
import NeonButton from './NeonButton';

const plans = [
  {
    name: 'Launch',
    price: '€2,500 setup + €300/month',
    features: [
      '✅ 1–2 automations — Simple workflows that remove repetitive tasks and save hours each week.',
      '✅ Chat or autopilot — Send a quick chat command or let tasks run on a set schedule.',
      '✅ Connects multiple tools — Works with the tools you already use, no extra logins.',
      '✅ Onboarding & training — Step-by-step guidance so you’re confident from day one.',
      '✅ Ongoing improvements — Small tweaks and updates as your needs change.',
      '✅ Support — Standard help during business hours.'
    ],
    highlight: 'Best for: lean teams getting started',
    border: 'border-neonBlue'
  },
  {
    name: 'Optimize',
    price: '€5,000 setup + €600/month',
    features: [
      '✅ 3–4 automations — Covers more processes with faster, more reliable results.',
      '✅ Chat or autopilot — Same convenience as Launch, with smarter scheduling options.',
      '✅ Connects multiple tools — Improved integrations for smoother work between apps.',
      '✅ Onboarding & training — Extra guidance, role-based instructions, and short video tips.',
      '✅ Ongoing improvements — Monthly adjustments to keep workflows running at their best.',
      '✅ Support — Priority help with faster response times.',
      '✅ Smarter coordination — Simple “if/then” rules to move tasks between teams automatically.',
      '✅ Regular check-ins — Quick monthly review to spot opportunities for improvement.'
    ],
    highlight: 'For teams ready to systemize & scale',
    border: 'border-neonPurple'
  },
  {
    name: 'Scale',
    price: '€9,000 setup + €1,200/month',
    features: [
      '✅ 4+ automations — Key processes fully automated across multiple teams.',
      '✅ Chat, events & autonomous — Trigger tasks from chat, events, or let them run hands-free.',
      '✅ Connects multiple tools — More integrations across departments with less manual work.',
      '✅ Onboarding & training — Team-wide workshops to make automation part of daily work.',
      '✅ Ongoing improvements — A full-year plan for steady upgrades and refinements.',
      '✅ Support — A dedicated contact who knows your setup inside out.',
      '✅ Smarter coordination — More advanced rules and routing between teams and tools.',
      '✅ Regular check-ins — Reviews every two months with clear action steps.',
      '✅ Built for expansion — Ready to handle more volume and new processes as you grow.',
      '✅ Governance & access — Clear roles and permissions for a smooth scale-up.'
    ],
    highlight: 'For growing agencies & enterprises',
    border: 'border-neonBlue'
  }
];

export default function OurPlans() {
  return (
    <section id="ourplans" className="bg-[#f7f8fa] text-black py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#111827]">
        Our Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`rounded-xl bg-white p-8 shadow-lg border-2 ${plan.border} hover:scale-[1.03] transition-transform`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-[#111827]">{plan.name}</h3>
            <p className="font-bold text-xl md:text-2xl mb-4 text-neonBlue">{plan.price}</p>

            <ul className="space-y-2 text-gray-800 font-medium text-[1.02rem] md:text-[1.08rem] leading-snug mb-4">
              {plans[i].features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>

            <p className="text-sm text-gray-500 mb-4">{plan.highlight}</p>

            <a
              href="https://calendly.com/nikola-nikolov1/ai-assistant-discovery-call"
              className="inline-block bg-neonPurple text-black font-semibold text-lg md:text-xl px-10 py-4 rounded-full hover:shadow-[0_0_18px_#c084fc] transition no-underline"
            >
              Book a Demo
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
