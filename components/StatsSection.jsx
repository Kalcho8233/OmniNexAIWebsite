// components/StatsSection.jsx
import { motion } from 'framer-motion';

const stats = [
  { value: '4x', label: 'Faster onboarding' },
  { value: '80%', label: 'Fewer internal questions' },
  { value: '< 7 days', label: 'To launch AI workflows' }
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 md:px-12 text-center bg-[#0a0a0a]">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Real Results
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="bg-[#121212] rounded-xl p-8 border border-neonBlue"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-neonPurple text-4xl md:text-5xl font-bold mb-2">
              {stat.value}
            </div>
            <div className="text-gray-300 text-lg md:text-xl">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}