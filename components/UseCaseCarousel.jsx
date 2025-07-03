// components/UseCaseCarousel.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const useCases = [
  'AI Assistant for Sales Reps',
  'Recruiter AI',
  'Client Support GPT',
  'AI for Executive Ops'
];

export default function UseCaseCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % useCases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 text-center relative bg-[#0a0a0a]">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
        Explore Use Cases
      </h2>

      <div className="h-20 md:h-24 flex items-center justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-neonBlue text-2xl md:text-4xl font-bold tracking-wide shadow-[0_0_12px_#00ffff80] drop-shadow-md"
          >
            {useCases[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
