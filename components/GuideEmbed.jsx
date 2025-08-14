// components/GuideEmbed.jsx
import { motion } from 'framer-motion';
import { FaSearch, FaCogs, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: FaSearch,
    title: 'Discover & Plan',
    desc: 'We map the high-impact processes and define clear outcomes and guardrails.'
  },
  {
    icon: FaCogs,
    title: 'Build & Integrate',
    desc: 'We design your custom workflow assistant and connect it to your stack.'
  },
  {
    icon: FaRocket,
    title: 'Launch & Optimize',
    desc: 'Your team uses it via chat or on autopilot; we monitor and improve.'
  }
];

export default function GuideEmbed() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How We Deliver Results
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        A simple, predictable 3‑step process.
      </motion.p>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-neonPurple/30" />

        <ol className="space-y-14">
          {steps.map((s, i) => (
            <li key={i} className="relative">
              <motion.div
                className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon circle */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-neonPurple shadow-sm">
                  {s.icon && <s.icon className="text-neonPurple" size={22} />}
                </div>

                {/* Card */}
                <div className="w-full md:w-[44%] bg-white border border-neonBlue rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
