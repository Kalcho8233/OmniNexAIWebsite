import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const useCases = [
  'AI Assistant for Sales Reps',
  'Recruiter AI',
  'Client Support GPT',
  'AI for Executive Ops',
  'AI Proposal Generator',
  'Internal Knowledge Chatbot',
];

export default function UseCaseCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % useCases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 md:px-16 bg-white relative text-center rounded-2xl">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-14">
        Explore Real Use Cases
      </h2>

      {/* Промени фона на неоново лилаво: */}
      <div className="h-28 md:h-32 flex items-center justify-center overflow-hidden rounded-xl border border-neonPurple bg-neonPurple max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white text-2xl md:text-4xl font-semibold px-4"
          >
            {useCases[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
