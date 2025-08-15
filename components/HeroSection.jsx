import NeonButton from './NeonButton';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 bg-white">
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-neonPurple">We are building </span>
        <span className="text-black">systems that work</span>
        <span className="text-neonPurple"> - so your team can, too.</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-secondaryText mb-8 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We design custom AI workflow assistants that run your operations via chat or on autopilot.
        Human-friendly on the surface. Industrial-grade under the hood.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <NeonButton 
          text="Book a Free Demo" 
          href="#demo"
          className="px-10 py-4 text-lg md:text-xl font-semibold" // същият размер като бутона в StatsSection
        />
      </motion.div>
    </section>
  );
}
