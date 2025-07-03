import NeonButton from './NeonButton';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 md:px-12 bg-transparent">
      {/* Neon “glow” behind headline */}
      <div className="absolute -z-10 top-10 left-1/2 -translate-x-1/2 w-[420px] h-[220px] rounded-full blur-3xl bg-[#00ffff22] opacity-40 md:w-[680px] md:h-[350px]" />
      
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6 text-neonBlue drop-shadow-[0_0_20px_#00ffff77]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Build AI teammates for any process —<br className="hidden md:block" />
        launch in days, scale in hours.
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        OmniNex turns your docs, tools, and processes into <span className="text-neonPurple font-semibold">24/7 AI operators</span> — trained to think, act, and deliver like your best team member.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <NeonButton text="Book a Demo" href="https://calendly.com/nikivldmrv/30min" />
        <NeonButton text="Our Offers" href="/pricing" />
      </motion.div>
    </section>
  );
}
