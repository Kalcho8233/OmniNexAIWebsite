import { motion } from 'framer-motion';

const stats = [
  { value: 'More energy.' },
  { value: 'More\n  time.' },
  { value: 'More results.' }
];

const Card = ({ value, label, delay = 0 }) => (
  <motion.div
    className="bg-white rounded-xl p-8 border border-neonBlue text-black"
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="whitespace-pre-line text-neonPurple text-3xl md:text-4xl font-bold mb-2 text-center">{value}</div>
    <div className="text-gray-900 text-lg md:text-xl">{label}</div>
  </motion.div>
);

export default function StatsSection() {
  return (
    <section className="py-20 px-6 md:px-12 text-center bg-white rounded-2xl">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-black mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What You Get After You Launch With Us
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        
      </motion.p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <Card key={i} {...s} delay={i * 0.05} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <a
  href="/about#results"
  className="inline-block bg-neonPurple text-black font-semibold px-6 py-3 rounded-full hover:shadow-[0_0_10px_#c084fc] transition no-underline"
>
  See how we measure this
</a>

      </div>
    </section>
  );
}
