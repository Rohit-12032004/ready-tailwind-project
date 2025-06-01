import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';

const Footer = () => (
  <motion.footer
    {...fadeIn}
    className="py-10 px-6 bg-gray-100 dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400"
  >
    &copy; {new Date().getFullYear()} SaaSify. All rights reserved.
  </motion.footer>
);

export default Footer;
