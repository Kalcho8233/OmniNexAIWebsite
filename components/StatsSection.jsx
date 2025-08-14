import { motion } from 'framer-motion';

const stats = [
  { value: '42+ hrs / month', label: 'A full work week saved.' },
  { value: '621% avg. ROI', label: '€1 in → €6+ out.' },
  { value: '−60% admin time', label: 'Less busywork.' },
  { value: '2.4x more deals', label: 'From the same leads.' }
];

const Card = ({ value, label, delay = 0 }) => (
  <motion.div
    className="bg-white rounded-xl p-8 border border-neonBlue text-black"
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="text-neonPurple text-3xl md:text-4xl font-bold mb-2">{value}</div>
    <div className="text-gray-900 text-lg md:text-xl">{label}</div>
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

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Card key={i} {...s} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}
