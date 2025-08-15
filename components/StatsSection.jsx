// components/StatsSection.jsx
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaBolt, FaClock, FaTrophy } from "react-icons/fa";

const items = [
  { line1: "More", line2: "energy.", icon: FaBolt },
  { line1: "More", line2: "time.",   icon: FaClock },
  { line1: "More", line2: "results.", icon: FaTrophy },
];

function HoloPanel({ line1, line2, Icon, delay = 0 }) {
  // 3D tilt
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rx = useSpring(useTransform(mvY, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 12 });
  const ry = useSpring(useTransform(mvX, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 12 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mvX.set(x);
    mvY.set(y);
  };
  const onLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      // използваме whileHover за да пускаме/спираме ефектите моментално
      whileHover="hover"
      className="relative group"
    >
      {/* Aurora glow – ПРИ hover само */}
      <motion.div
        className="absolute inset-0 -z-10 blur-2xl rounded-3xl
                   bg-[conic-gradient(at_20%_20%,#B300FF,45%,#7C3AED,70%,#00E5FF,100%,#B300FF)]"
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: 0.36 } }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />

      {/* Неонова рамка */}
      <div className="relative p-[2px] rounded-3xl bg-[linear-gradient(115deg,#B300FF,#7C3AED,#00E5FF)]">
        <div className="relative rounded-3xl bg-white px-10 py-14 text-center overflow-hidden">
          {/* Shimmer – само докато е hover, после спира веднага */}
          <motion.span
            className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
                       bg-gradient-to-r from-transparent via-white/50 to-transparent
                       rotate-12"
            initial={{ x: "-140%", opacity: 0 }}
            variants={{ hover: { x: "140%", opacity: 1 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Икона */}
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full
                          bg-neonPurple/10 text-neonPurple">
            <Icon size={18} />
          </div>

          {/* Текст */}
          <div className="text-neonPurple text-3xl md:text-4xl font-extrabold leading-tight select-none">
            <span className="block">{line1}</span>
            <span className="block">{line2}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 px-6 md:px-12 text-center bg-white">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-black mb-10"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What You Get After You Launch With Us
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((it, i) => (
          <HoloPanel key={i} line1={it.line1} line2={it.line2} Icon={it.icon} delay={i * 0.08} />
        ))}
      </div>

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
