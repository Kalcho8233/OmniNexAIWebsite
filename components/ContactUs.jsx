// components/ContactUs.jsx
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaCalendarAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section className="py-20 px-6 md:px-12 text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      <form className="max-w-2xl mx-auto bg-[#121212] p-6 rounded-xl shadow-lg space-y-6">
        <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-neonBlue" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-neonBlue" />
        <textarea rows="5" placeholder="Message" className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-neonBlue"></textarea>
        <button type="submit" className="bg-neonBlue hover:brightness-125 text-black font-semibold py-2 px-6 rounded-full transition">
          Send Message
        </button>
      </form>

      {/* Social Icons */}
      <div className="mt-12 flex justify-center gap-8">
        <a href="mailto:omninex@vinbrothers.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={28} className="text-neonPurple hover:scale-110 transition" />
        </a>
        <a href="https://www.linkedin.com/in/nikola-nikolov-79982a290/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} className="text-neonBlue hover:scale-110 transition" />
        </a>
        <a href="https://calendly.com/nikivldmrv/30min" target="_blank" rel="noopener noreferrer">
          <FaCalendarAlt size={28} className="text-neonPurple hover:scale-110 transition" />
        </a>
      </div>
    </section>
  );
}
