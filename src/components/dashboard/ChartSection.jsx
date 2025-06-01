import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideInY } from '../../animations';

const ChartSection = () => (
  <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
    <motion.h3
      {...slideInY}
      className="text-lg font-semibold text-gray-800 dark:text-white mb-4"
    >
      Performance Overview
    </motion.h3>
    <motion.div
      {...fadeIn}
      className="w-full h-60 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-700 dark:to-gray-900 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300"
    >
      [Chart Goes Here]
    </motion.div>
  </section>
);

export default ChartSection;
