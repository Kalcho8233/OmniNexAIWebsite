// components/HowItWorks.jsx
import { motion } from 'framer-motion';
import { FaRobot, FaBookOpen, FaProjectDiagram, FaBolt } from 'react-icons/fa';

const steps = [
  {
    icon: <FaRobot size={32} className="text-neonBlue" />,
    title: 'AI Assistants for Any Workflow',
    description: 'Turn processes into powerful GPT-powered assistants — sales, support, operations, recruiting, and more.'
  },
  {
    icon: <FaBookOpen size={32} className="text-neonPurple" />,
    title: 'Custom Trained on Your Business',
    description: 'Upload SOPs, docs, or URLs. Your assistant learns and adapts to your internal knowledge instantly.'
  },
  {
    icon: <FaProjectDiagram size={32} className="text-neonBlue" />,
    title: 'Multichannel Deployment',
    description: 'Embed in Slack, Notion, websites, or CRMs — wherever your team works.'
  },
  {
    icon: <FaBolt size={32} className="text-neonPurple" />,
    title: 'Real-Time Actions & Integrations',
    description: 'Trigger calendar invites, CRM updates, or emails — your assistant isn’t just smart, it acts.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#0a0a0a]">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        How It Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-[#121212] p-6 rounded-xl border border-neonPurple hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
