import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const useCases = [
  'AI Email Classifier & Auto-Responder',
  'Lead Scoring & CRM Automation',
  'WhatsApp AI Chatbot',
  'Google Sheets ↔ Database Sync',
  'Social Media Content Scheduler',
  'Invoice Processing & Approval',
  'AI Resume Screener',
  'Multi-CRM Data Sync',
  'Sales Meeting Preparation Assistant',
  'Slack Notification Hub',
  'AI Content Generator with SEO',
  'Document Approval Workflow',
  'Customer Onboarding Sequence',
  'Competitor Monitoring System',
  'Expense Report Automation',
  'Meeting Notes to CRM Sync',
  'Newsletter Automation',
  'SEO Keyword Research Automation',
  'Lead Response Time Optimizer',
  'Executive Dashboard Generator'
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

      {/* Neon purple background */}
      <div className="h-28 md:h-32 flex items-center justify-center overflow-hidden rounded-xl border border-neonPurple bg-neonPurple max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white text-2xl md:text-4xl font-semibold px-4 text-center"
          >
            {useCases[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
