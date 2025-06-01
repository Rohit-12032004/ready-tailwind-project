import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, cardFadeUp } from '../../animations';

const features = [
  {
    title: 'Automation',
    description: 'Automate your routine tasks easily.',
    icon: '⚙️',
  },
  {
    title: 'Cloud Sync',
    description: 'Access data anywhere, anytime.',
    icon: '☁️',
  },
  {
    title: 'Analytics',
    description: 'Real-time insights for smarter decisions.',
    icon: '📊',
  },
];

const Features = () => (
  <section id="features" className="py-20 bg-white dark:bg-gray-800">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2 {...cardFadeUp} className="text-3xl font-bold text-center mb-12">
        Core Features
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-3 gap-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            variants={cardFadeUp}
            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{f.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Features;
