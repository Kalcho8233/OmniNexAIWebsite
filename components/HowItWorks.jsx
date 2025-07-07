import { motion } from 'framer-motion';
import { FaLock, FaCode, FaStar, FaUserCheck } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-black mb-8 tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h2>

      {/* СТЪПКИ НАД КАРТИТЕ */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-neonPurple text-lg md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto">
          Discovery: Fill out a 5-min questionnaire or book a consult.<br/>
          <br/>
          Build & Demo: We create and demo your custom GPT — ready in days.<br/>
          <br/>
          Deploy & Support: Your team gets a link, starts using it instantly. No installation. No code. No headaches.
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
          <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">100% Private & Secure</h3>
          <p className="text-gray-500 text-base">(works inside your ChatGPT account)</p>
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
          <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">No code required</h3>
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
          <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">Fully branded for your agency</h3>
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
          <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">Works with free ChatGPT accounts</h3>
          <p className="text-gray-500 text-base">Plus is optional</p>
        </motion.div>
      </div>
    </section>
  );
}
