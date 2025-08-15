// components/StatsSection.jsx
import { motion, useAnimation } from 'framer-motion';
import { FaBolt, FaClock, FaTrophy } from 'react-icons/fa';

const items = [
  { t1: 'More', t2: 'energy.', icon: <FaBolt /> },
  { t1: 'More', t2: 'time.',   icon: <FaClock /> },
  { t1: 'More', t2: 'results.',icon: <FaTrophy /> },
];

function OrbitCapsule({ t1, t2, icon, delay = 0 }) {
  const orbit = useAnimation();

  const startSlow = () =>
    orbit.start({
      rotate: 360,
      transition: { repeat: Infinity, ease: 'linear', duration: 12 },
    });

  const startFast = () =>
    orbit.start({
      rotate: 360,
      transition: { repeat: Infinity, ease: 'linear', duration: 6 },
    });

  return (
    <div
      className="relative"
      style={{ perspective: 1000 }}
      onMouseEnter={startFast}
      onMouseLeave={startSlow}
      onFocus={startFast}
      onBlur={startSlow}
    >
      {/* орбитален ринг + икона */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 pointer-events-none">
        {/* орбитален ринг (лекият градиент) */}
        <div className="absolute inset-0 rounded-full border border-transparent [background:linear-gradient(115deg,#B300FF,#7C3AED,#00E5FF)_padding-box,linear-gradient(115deg,#B300FF,#7C3AED,#00E5FF)_border-box] bg-clip-padding [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] opacity-60" />
        {/* въртящ се контейнер */}
        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={orbit}
        >
          {/* иконата стои вляво; контейнерът се върти = орбита */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-[0_0_18px_rgba(188,19,254,0.5)] flex items-center justify-center text-neonPurple">
            <span className="text-sm">{icon}</span>
          </div>
        </motion.div>
      </div>

      {/* капсулата */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotateX: 0, rotateY: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10, scale: 1.02, rotateX: 3, rotateY: -3 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="relative p-[2px] rounded-3xl bg-[linear-gradient(115deg,#B300FF,#7C3AED,#00E5FF)]"
      >
        <div className="rounded-3xl bg-white px-10 py-14 text-center">
          <div className="text-neonPurple text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="block">{t1}</span>
            <span className="block">{t2}</span>
          </div>
        </div>

        {/* мек неонов “glow” зад капсулата */}
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

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((it, i) => (
          <OrbitCapsule key={i} {...it} delay={i * 0.06} />
        ))}
      </div>

      {/* CTA – твоят по-голям стил */}
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
