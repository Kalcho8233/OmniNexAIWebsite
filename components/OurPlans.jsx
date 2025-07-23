// components/OurPlans.jsx
import { motion } from 'framer-motion';
import NeonButton from './NeonButton';

const plans = [
  {
    name: 'Launch',
    price: '€2,500 setup + €300/month',
    features: [
      '✅ 1 GPT assistant',
      '✅ 1–2 workflows',
      '✅ 1h onboarding'
    ],
    highlight: 'Best for: lean teams getting started',
    border: 'border-neonBlue'
  },
  {
    name: 'Optimize',
    price: '€5,000 setup + €600/month',
    features: [
      '✅ 2 GPT assistants',
      '✅ 3–5 workflows',
      '✅ 2h onboarding',
      '✅ Priority support'
    ],
    highlight: 'For teams ready to systemize & scale',
    border: 'border-neonPurple'
  },
  {
    name: 'Scale',
    price: '€9,000 setup + €1,200/month',
    features: [
      '✅ 3+ GPT assistants',
      '✅ 6+ workflows',
      '✅ 3h onboarding',
      '✅ Custom integrations',
      '✅ Dedicated support'
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
            <p className="font-bold text-lg mb-4 text-neonBlue">{plan.price}</p>
            <ul className="space-y-2 text-gray-700 mb-4">
              {plan.features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 italic mb-4">{plan.highlight}</p>
            <NeonButton text="Book a Demo" href="https://calendly.com/nikola-nikolov1/ai-assistant-discovery-call" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
