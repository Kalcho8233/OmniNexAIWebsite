'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DemoForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    otherInterest: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submittedData = {
      ...form,
      interest: form.interest === 'Other' ? form.otherInterest : form.interest,
    };

    try {
      await fetch('https://kolio.app.n8n.cloud/webhook-test/omninexai', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submittedData),
      });

      alert('✅ Your demo request has been received!');
    } catch (error) {
      console.error('❌ Webhook submission failed:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="demo" className="bg-white py-24 px-6 md:px-20 text-black">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
          Request a Live Demo
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#f5f7fb] p-8 rounded-xl shadow-xl space-y-6 border border-lightGray"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {['name', 'email', 'company'].map((field) => (
            <motion.div key={field} className="flex flex-col">
              <label htmlFor={field} className="mb-1 font-medium capitalize text-black">
                {field}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-lightGray rounded-lg bg-white text-black focus:ring-2 ring-neonBlue outline-none transition"
              />
            </motion.div>
          ))}

          <div className="flex flex-col">
            <label htmlFor="interest" className="mb-1 font-medium text-black">
              Area of Interest
            </label>
            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-lightGray rounded-lg bg-white text-black focus:ring-2 ring-neonBlue outline-none transition"
            >
              <option value="">Select...</option>
              <option>Sales automation</option>
              <option>Client communication</option>
              <option>Internal operations</option>
              <option>Custom assistant</option>
              <option value="Other">Other (please specify)</option>
            </select>
          </div>

          {form.interest === 'Other' && (
            <motion.div className="flex flex-col">
              <label htmlFor="otherInterest" className="mb-1 font-medium text-black">
                Please specify
              </label>
              <input
                type="text"
                name="otherInterest"
                value={form.otherInterest}
                onChange={handleChange}
                placeholder="Your use case..."
                className="px-4 py-3 border border-lightGray rounded-lg bg-white text-black focus:ring-2 ring-neonBlue outline-none transition"
                required
              />
            </motion.div>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full py-3 bg-neonPurple text-black rounded-lg font-bold tracking-wide shadow-md hover:shadow-lg transition"
          >
            Request Demo
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
