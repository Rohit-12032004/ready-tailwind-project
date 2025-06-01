import React from 'react';
import { motion } from 'framer-motion';
import { slideInY } from '../../animations';

const Header = () => (
  <motion.header
    {...slideInY}
    className="w-full bg-white dark:bg-gray-800 px-6 py-4 shadow flex justify-between items-center"
  >
    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Analytics Dashboard</h1>
    <div className="space-x-3">
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm"
      />
      <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700">
        Export
      </button>
    </div>
  </motion.header>
);

export default Header;
