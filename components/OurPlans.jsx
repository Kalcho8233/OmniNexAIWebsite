import { motion } from 'framer-motion';
import NeonButton from './NeonButton';

const plans = [
  {
    name: 'Launch',
    price: '€2,500 setup + €300/month',
    features: [
      '✅ 1-2 automations — removes repetitive work quickly.',
      '✅ Chat or autopilot — run on demand or on a simple schedule.',
      '✅ Connects multiple tools — works with your current stack.',
      '✅ Onboarding & training — clear walkthrough for fast adoption.',
      '✅ Ongoing improvements — light tweaks as needs evolve.',
      '✅ Support — standard during business hours.'
    ],
    highlight: 'Best for: lean teams getting started',
    border: 'border-neonBlue'
  },
  {
    name: 'Optimize',
    price: '€5,000 setup + €600/month',
    features: [
      '✅ 3-4 automations — upgraded reliability and tracking.',
      '✅ Chat or autopilot — managed schedules, alerts, retries.',
      '✅ Connects multiple tools — deeper connectors and handoffs.',
      '✅ Onboarding & training — role-based playbooks and nudges.',
      '✅ Ongoing improvements — monthly tune-ups from usage data.',
      '✅ Support — priority with faster response.',
      // нови
      '✅ Scheduled runs — monitored recurring automations.',
      '✅ Smarter coordination — adds decision logic between tools.',
      '✅ Custom integrations — we build missing connectors.',
      '✅ Regular optimization — periodic reliability boosts.',
      '✅ Future improvements — extend without disruption.'
    ],
    highlight: 'For teams ready to systemize & scale',
    border: 'border-neonPurple'
  },
  {
    name: 'Scale',
    price: '€9,000 setup + €1,200/month',
    features: [
      '✅ 4+ automations — advanced, multi-department workflows.',
      '✅ Chat, events & autonomous — fully hands-free at scale.',
      '✅ Connects multiple tools — enterprise-grade integrations.',
      '✅ Onboarding & training — dedicated enablement and rollout.',
      '✅ Ongoing improvements — proactive roadmap and milestones.',
      '✅ Support — dedicated specialist.',
      // включени от Optimize
      '✅ Scheduled runs — monitored with reporting.',
      '✅ Smarter coordination — SLAs and cross-team orchestration.',
      '✅ Custom integrations — legacy and unique systems included.',
      '✅ Regular optimization — quarterly deep-dives.',
      '✅ Future improvements — expansion without downtime.',
      // само за Scale
      '✅ Robust coordination & compliance — audit trails and guardrails.',
      '✅ Proactive monitoring — health checks and incident assistance.',
      '✅ Built for expansion — higher volumes and new markets.',
      '✅ Enterprise SLAs — clear responsiveness and uptime targets.'
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
