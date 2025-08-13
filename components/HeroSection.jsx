import NeonButton from './NeonButton';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 bg-white">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6 text-neonPurple"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        We build custom AI workflow assistants that run your operations - via chat or on autopilot.
        <br />
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-secondaryText mb-8 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Type a task in plain language and it gets done. Or schedule it to run hands-free. 
        From reporting and follow-ups to data syncs and client workflows - your assistant executes reliably and follows your rules.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <NeonButton text="Book a Free Demo" href="#demo" />
      </motion.div>
    </section>
  );
}
