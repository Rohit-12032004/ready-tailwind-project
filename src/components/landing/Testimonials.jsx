import React from 'react';
import { motion } from 'framer-motion';
import { slideInX, staggerContainer } from '../../animations';

const testimonials = [
  {
    name: 'Aman Sharma',
    company: 'TechNova',
    text: 'SaaSify helped us scale from 10 to 1000 customers in weeks!',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Riya Mehta',
    company: 'FinVerse',
    text: 'This product is fast, intuitive, and well-supported.',
    avatar: 'https://i.pravatar.cc/100?img=47',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <motion.h2
        className="text-3xl font-bold mb-12 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Users Say
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            variants={slideInX}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow"
          >
            <div className="flex items-center mb-4 gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
              <div className="text-left">
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">“{t.text}”</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
