import { motion } from 'framer-motion';
import { FaRobot, FaBookOpen, FaProjectDiagram, FaBolt } from 'react-icons/fa';

const steps = [
  {
    icon: <FaRobot size={36} className="text-neonBlue drop-shadow-[0_0_10px_#00ffffbb]" />,
    title: 'AI Assistants for Any Workflow',
    description: 'Turn processes into powerful GPT-powered assistants — sales, support, operations, recruiting, and more.'
  },
  {
    icon: <FaBookOpen size={36} className="text-neonPurple drop-shadow-[0_0_10px_#BC13FE88]" />,
    title: 'Custom Trained on Your Business',
    description: 'Upload playbooks, SOPs, or URLs — assistants learn instantly, no prompt engineering needed.'
  },
  {
    icon: <FaProjectDiagram size={36} className="text-neonBlue drop-shadow-[0_0_10px_#00ffffbb]" />,
    title: 'Multichannel Deployment',
    description: 'Deploy your assistant across chat, CRMs, websites, and internal tools — wherever work happens.'
  },
  {
    icon: <FaBolt size={36} className="text-neonPurple drop-shadow-[0_0_10px_#BC13FE88]" />,
    title: 'Real-Time Actions & Integrations',
    description: 'Update CRMs, send emails, schedule meetings — this isn’t chat, it’s action.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#0a0a0a]">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-white mb-16 tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-[#12121c] p-8 rounded-2xl border border-neonPurple hover:shadow-[0_0_32px_#BC13FE44] transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.12,
              duration: 0.5,
              ease: 'easeOut'
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="mb-4 flex items-center justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
