import { motion } from "framer-motion";

export default function FounderQuote() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 text-center rounded-2xl my-12">
      <motion.blockquote
        className="max-w-3xl mx-auto text-2xl md:text-3xl italic font-light text-gray-800 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="block border-l-4 border-neonPurple pl-4 mb-6 text-left">
          “OmniNex is your second brain — built to think fast, never sleep, and grow with your ambition.”
        </span>
        <footer className="mt-6 text-base not-italic text-gray-500">
          — Nikola Nikolov, CEO of OmniNex
        </footer>
      </motion.blockquote>
    </section>
  );
}
