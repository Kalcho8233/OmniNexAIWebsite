// components/GuideEmbed.jsx
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function GuideEmbed() {
  return (
    <section className="py-20 px-6 md:px-12 text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        See Our Process
      </motion.h2>

      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Explore how ClarityGPT works behind the scenes, how we build your assistant, and what the onboarding looks like.
      </p>

      <a
        href="https://docs.google.com/document/d/15Mj_b666Itz3vBRaXTvZ9L0Z6rD_qM-q/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-neonBlue hover:text-neonPurple underline text-lg transition"
      >
        View Onboarding Document <FaExternalLinkAlt size={16} />
      </a>
    </section>
  );
}