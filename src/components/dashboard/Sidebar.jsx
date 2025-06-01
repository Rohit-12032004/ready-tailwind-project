import React from 'react';
import { motion } from 'framer-motion';
import { slideInX } from '../../animations';

const Sidebar = () => {
  return (
    <motion.aside
      {...slideInX}
      className="w-64 hidden md:flex flex-col bg-white dark:bg-gray-800 border-r dark:border-gray-700 shadow-sm"
    >
      <div className="p-6 text-lg font-bold text-blue-600 dark:text-blue-400">📊 Dashboard</div>
      <nav className="flex-1 px-6 space-y-4 text-sm text-gray-700 dark:text-gray-300">
        <a href="#" className="block hover:text-blue-600">Overview</a>
        <a href="#" className="block hover:text-blue-600">KPIs</a>
        <a href="#" className="block hover:text-blue-600">Charts</a>
        <a href="#" className="block hover:text-blue-600">Reports</a>
        <a href="#" className="block hover:text-blue-600">Settings</a>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
