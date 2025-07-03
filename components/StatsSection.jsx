// components/StatsSection.jsx
import { motion } from 'framer-motion';

const stats = [
  { value: '4x', label: 'Faster onboarding' },
  { value: '80%', label: 'Fewer internal questions' },
  { value: '< 7 days', label: 'To launch AI workflows' }
];

export default function StatsSection() {
  return (
    <section className="relative py-20 px-6 md:px-12 text-center bg-[#0a0a0a] overflow-hidden">
      {/* Optional animated background layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-10" />
      </div>

      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Real Results
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="bg-[#121212] rounded-2xl p-8 border border-neonBlue shadow-[0_0_15px_#00ffff40] transition-all hover:scale-[1.03]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-neonPurple text-5xl font-extrabold mb-3 tracking-wide">
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
