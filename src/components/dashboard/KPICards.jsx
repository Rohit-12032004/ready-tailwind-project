import React from 'react';
import { motion } from 'framer-motion';
import { cardFadeUp, staggerContainer } from '../../animations';

const data = [
  { label: 'Revenue', value: '₹12,430' },
  { label: 'Active Users', value: '1,205' },
  { label: 'Conversion Rate', value: '4.1%' },
];

const KPICards = () => (
  <motion.div
    className="grid sm:grid-cols-3 gap-6"
    variants={staggerContainer}
    initial="initial"
    animate="animate"
  >
    {data.map((item, index) => (
      <motion.div
        key={index}
        variants={cardFadeUp}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
      >
        <h4 className="text-sm text-gray-500 dark:text-gray-400">{item.label}</h4>
        <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{item.value}</p>
      </motion.div>
    ))}
  </motion.div>
);

export default KPICards;
