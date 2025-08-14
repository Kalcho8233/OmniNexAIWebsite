import { motion } from 'framer-motion';
import { FaLock, FaCode, FaStar, FaUserCheck } from 'react-icons/fa';

export default function WhyItWorks() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-black mb-8 tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Why It Works
      </motion.h2>

      {/* Кратко описание вместо стъпки */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-neonPurple text-lg md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto">
          Built for reliability and adoption – secure access, clear permissions, and an interface your team understands.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* 1 */}
        <motion.div
          className="bg-white p-8 rounded-2xl border border-neonPurple hover:shadow-[0_0_32px_#BC13FE44] transition-shadow text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="mb-4 flex items-center justify-center">
            <FaLock size={36} className="text-neonPurple drop-shadow-[0_0_10px_#BC13FE88]" />
          </div>
          <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">Secure by design</h3>
          <p className="text-gray-500 text-base">We follow strict data access rules and keep your workflows private to your business.</p>
        </motion.div>

        {/* 2 */}
        <motion.div
          className="bg-white p-8 rounded-2xl border border-neonPurple hover:shadow-[0_0_32px_#BC13FE44] transition-shadow text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="mb-4 flex items-center justify-center">
            <FaCode size={36} className="text-neonPurple drop-shadow-[0_0_10px_#BC13FE88]" />
          </div>
          <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">We handle the setup</h3>
          <p className="text-gray-500 text-base">We configure and connect everything so your team focuses on using it, not maintaining it.</p>
        </motion.div>

        {/* 3 */}
        <motion.div
          className="bg-white p-8 rounded-2xl border border-neonPurple hover:shadow-[0_0_32px_#BC13FE44] transition-shadow text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="mb-4 flex items-center justify-center">
            <FaStar size={36} className="text-neonPurple drop-shadow-[0_0_10px_#BC13FE88]" />
          </div>
          <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">Custom to your brand</h3>
          <p className="text-gray-500 text-base">Built around your processes, branding, and preferred ways of working.</p>
        </motion.div>

        {/* 4 */}
        <motion.div
          className="bg-white p-8 rounded-2xl border border-neonPurple hover:shadow-[0_0_32px_#BC13FE44] transition-shadow text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="mb-4 flex items-center justify-center">
            <FaUserCheck size={36} className="text-neonPurple drop-shadow-[0_0_10px_#BC13FE88]" />
          </div>
          <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">Simple to use</h3>
          <p className="text-gray-500 text-base">Trigger it in chat or let it run automatically – whichever fits your workflow.</p>
        </motion.div>
      </div>
    </section>
  );
}
