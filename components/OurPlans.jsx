import { motion } from 'framer-motion';
import NeonButton from './NeonButton';

const plans = [
  {
    name: 'Launch',
    price: '€2,500 setup + €300/month',
    features: [
      '✅ 1–2 automations – Remove repetitive work fast and prove value quickly.',
      '✅ Chat or autopilot – Type a task or set a schedule when you’re busy.',
      '✅ Connects multiple tools – Works with your current stack; no lock-in.',
      '✅ Onboarding & training – Clear walkthrough from day one.',
      '✅ Ongoing improvements – We refine and extend as needed.',
      '✅ Support – Standard, during business hours.'
    ],
    highlight: 'Best for: lean teams getting started',
    border: 'border-neonBlue'
  },
  {
    name: 'Optimize',
    price: '€5,000 setup + €600/month',
    features: [
      'Everything in Launch, plus:',
      '✅ 3–5 automations – Coordinate workflows across teams.',
      '✅ Chat + scheduled runs – Commands plus recurring automations.',
      '✅ Smarter coordination – Adds decision logic between tools.',
      '✅ Custom integrations – We can build missing connections.',
      '✅ Support – Priority, faster response for critical ops.',
      '✅ Regular optimization – Periodic reliability boosts.',
      '✅ Future improvements – Expand without disruption.'
    ],
    highlight: 'For teams ready to systemize & scale',
    border: 'border-neonPurple'
  },
  {
    name: 'Scale',
    price: '€9,000 setup + €1,200/month',
    features: [
      'Everything in Optimize, plus:',
      '✅ 6+ advanced automations – Complex, cross-department logic.',
      '✅ Chat, events, autonomous – Fully hands-free triggers.',
      '✅ Robust coordination – Across tools, roles & compliance.',
      '✅ Support – Dedicated specialist, knows your setup end-to-end.',
      '✅ Proactive monitoring – Health checks & quarterly reviews.',
      '✅ Built for expansion – Handles higher volume & initiatives.'
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
            <ul className="space-y-2 text-gray-700 mb-4">
              {plan.features.map((feature, j) => (
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
