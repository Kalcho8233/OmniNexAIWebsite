// components/GuideEmbed.jsx
import { motion } from 'framer-motion';
import { FaSearch, FaCogs, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: FaSearch,
    title: 'Discover & Plan',
    desc: 'We turn your booring, time-consuming tasks into 1-click workflows and define clear outcomes and approvals.',
  },
  {
    icon: FaCogs,
    title: 'Build & Integrate',
    desc: 'We drop in a custom AI assistant that runs inside your current tools - no new logins, live in days.',
  },
  {
    icon: FaRocket,
    title: 'Launch & Optimize',
    desc: 'Your team uses it via chat or on autopilot; we monitor and improve.',
  },
];

export default function GuideEmbed() {
  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-white">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How We Deliver Results
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        A simple 3‑step process.
      </motion.p>

      <div className="relative max-w-4xl mx-auto">
        {/* Extended vertical line */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D000FF40] via-[#D000FF66] to-[#D000FF20]" />
        {/* subtle start/end dots */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-3 w-2 h-2 rounded-full bg-[#D000FF]" />
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-3 w-2 h-2 rounded-full bg-[#D000FF]" />

        <ol className="space-y-20 md:space-y-24">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1 ? 'md:flex-row-reverse' : '';
            return (
              <li key={i} className="relative">
                <motion.div
                  className={`group flex flex-col md:flex-row items-center gap-6 ${reverse}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-neonPurple shadow-sm transition"
                  >
                    <Icon className="text-neonPurple group-hover:drop-shadow-[0_0_14px_#BC13FE88] transition" size={22} />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full md:w-[46%] bg-white border border-neonBlue rounded-xl p-6 shadow-sm transition
                               group-hover:border-neonPurple group-hover:shadow-[0_0_32px_#BC13FE55]"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-gray-600">{s.desc}</p>
                  </motion.div>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
