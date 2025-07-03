import { motion } from 'framer-motion';
import NeonButton from './NeonButton';

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 md:px-12 text-center relative overflow-hidden bg-[#0a0a0a]">
      {/* Background circuit pattern */}
      <div
        className="absolute inset-0 bg-[url('/bg-circuits.png')] opacity-5 bg-cover bg-center pointer-events-none z-0"
        aria-hidden="true"
      ></div>

      <div className="relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-neonPurple mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Build your AI dream team.
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          OmniNex assistants think, act, and deliver — like your best team member, just faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <NeonButton text="Get Started" href="https://calendly.com/nikivldmrv/30min" />
        </motion.div>
      </div>
    </section>
  );
}
