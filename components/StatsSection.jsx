// components/StatsSection.jsx
import { motion } from 'framer-motion';

const items = [
  { t1: 'More',  t2: 'energy.'  },
  { t1: 'More',  t2: 'time.'    },
  { t1: 'More',  t2: 'results.' },
];

function NeonCapsule({ t1, t2, delay = 0 }) {
  return (
    <div className="relative" style={{ perspective: 1000 }}>
      <motion.div
        initial={{ opacity: 0, y: 20, rotateX: 0, rotateY: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, scale: 1.02, rotateX: 4, rotateY: -4 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="relative p-[2px] rounded-3xl bg-[linear-gradient(115deg,#B300FF,#7C3AED,#00E5FF)]"
      >
        {/* вътрешност */}
        <div className="rounded-3xl bg-white px-10 py-14 text-center">
          <div className="text-neonPurple text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="block">{t1}</span>
            <span className="block">{t2}</span>
          </div>
        </div>

        {/* мек неонов „glow“ зад капсулата */}
        <motion.div
          className="absolute inset-0 rounded-3xl -z-10 blur-2xl opacity-30 bg-[linear-gradient(115deg,#B300FF,#7C3AED,#00E5FF)]"
          animate={{ opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 px-6 md:px-12 text-center bg-white">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-black mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What You Get After You Launch With Us
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <NeonCapsule key={i} {...it} delay={i * 0.06} />
        ))}
      </div>

      {/* CTA – остава твоят по-голям стил */}
      <div className="mt-12">
        <a
          href="/about#results"
          className="inline-block bg-neonPurple text-black font-semibold text-lg md:text-xl px-10 py-4 rounded-full hover:shadow-[0_0_18px_#c084fc] transition no-underline"
        >
          See how we measure this
        </a>
      </div>
    </section>
  );
}
