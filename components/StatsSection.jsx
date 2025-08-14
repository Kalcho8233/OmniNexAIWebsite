import { motion } from 'framer-motion';

const top = [
  { value: '42+ hours', label: 'Back every month', sub: 'Stop drowning in work – get a full work week back without hiring.' }
];

const middle = [
  { value: 'Workload relief', label: '& energy back', sub: 'We take the heavy lifting off your plate so you can focus on what matters.' },
  { value: '621% avg. ROI', label: 'Every €1 returns €6+', sub: 'Compounding gains as automations scale across teams.' }
];

const bottom = [
  { value: '3.8x growth', label: 'Revenue in 60 days', sub: 'Sales that sprint.' },
  { value: '−60% admin time', label: 'Less busywork', sub: 'Faster throughput across your operations.' },
  { value: '2.4x more deals', label: 'From the same leads', sub: 'More “yes” without more chasing.' }
];

const Card = ({ value, label, sub, delay = 0 }) => (
  <motion.div
    className="bg-white rounded-xl p-8 border border-neonBlue text-black"
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="text-neonPurple text-4xl md:text-5xl font-bold mb-1">{value}</div>
    <div className="text-gray-900 text-lg md:text-xl font-semibold mb-2">{label}</div>
    {sub && <div className="text-gray-600 text-base md:text-lg">{sub}</div>}
  </motion.div>
);

export default function StatsSection() {
  return (
    <section className="py-20 px-6 md:px-12 text-center bg-white rounded-2xl">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-black mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What Happens After You Launch With Us
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        More time. More energy. More results.
      </motion.p>

      {/* Top row (1 card) */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-10">
          {top.map((s, i) => (
            <Card key={`t-${i}`} {...s} delay={i * 0.05} />
          ))}
        </div>

        {/* Middle row (2 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {middle.map((s, i) => (
            <Card key={`m-${i}`} {...s} delay={0.1 + i * 0.05} />
          ))}
        </div>

        {/* Bottom row (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bottom.map((s, i) => (
            <Card key={`b-${i}`} {...s} delay={0.2 + i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
