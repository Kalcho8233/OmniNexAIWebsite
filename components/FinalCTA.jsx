import { motion } from 'framer-motion';
import NeonButton from './NeonButton';

export default function FinalCTA() {
  return (
    <section className="py-20 text-center px-6 md:px-12 bg-white">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Build your <span className="text-black">AI dream team.</span>
      </motion.h2>

      <motion.p
        className="text-lg md:text-2xl text-gray-800 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Turn <strong>chaos</strong> into <strong>scale</strong> – AI assistants that 
        <strong> remember everything</strong>, <strong>work 24/7</strong>, and 
        <strong> never drop the ball</strong>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <NeonButton
          text="Get Started"
          href="https://calendly.com/nikola-nikolov1/ai-assistant-discovery-call"
          className="px-10 py-4 text-lg md:text-xl font-semibold"
        />
      </motion.div>
    </section>
  );
}
