// components/HeroSection.jsx
import NeonButton from './NeonButton';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6 text-neonBlue"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Turn any process into an AI-powered assistant. <br />Deploy in days. Scale instantly.
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        OmniNex helps you build custom AI teammates that handle workflows, answer questions, and act — trained on your docs, tools, and brain.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <NeonButton text="Book a Demo" href="https://calendly.com/nikivldmrv/30min" />
      </motion.div>
    </section>
  );
}
