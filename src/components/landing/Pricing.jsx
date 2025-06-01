import React from 'react';
import { motion } from 'framer-motion';
import { zoomIn, staggerContainer } from '../../animations';

const plans = [
  {
    name: 'Starter',
    price: '₹499/mo',
    features: ['Basic tools', 'Email support'],
  },
  {
    name: 'Pro',
    price: '₹1499/mo',
    features: ['All Starter features', 'Team tools', 'Analytics'],
    featured: true,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 bg-white dark:bg-gray-800">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Pricing Plans
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            variants={zoomIn}
            className={`p-6 rounded-xl border shadow ${
              plan.featured ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700'
            }`}
          >
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-2xl mt-2 mb-4">{plan.price}</p>
            <ul className="text-sm space-y-2 mb-6">
              {plan.features.map((f, i) => (
                <li key={i}>✅ {f}</li>
              ))}
            </ul>
            <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded hover:bg-blue-50 dark:bg-gray-900 dark:text-white">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Pricing;
