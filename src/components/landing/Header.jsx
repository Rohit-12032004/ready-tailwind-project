import React from 'react';
import { motion } from 'framer-motion';
import { slideInY } from '../../animations';

const Header = () => (
  <motion.header
    {...slideInY}
    className="flex items-center justify-between py-4 px-6 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40"
  >
    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">🚀 SaaSify</div>
    <nav className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-200">
      <a href="#features">Features</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#pricing">Pricing</a>
    </nav>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
      Get Started
    </button>
  </motion.header>
);

export default Header;
