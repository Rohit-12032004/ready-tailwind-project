import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, slideInY } from '../../animations';

const agents = [
  { name: 'Rohit Sharma', phone: '+91 98765 43210' },
  { name: 'Anjali Verma', phone: '+91 99887 66554' },
  { name: 'Karan Malhotra', phone: '+91 98760 12345' },
];

const Sidebar = () => (
  <motion.div {...fadeIn} className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">Featured Agents</h3>
      <motion.ul
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-3"
      >
        {agents.map((agent, idx) => (
          <motion.li
            key={idx}
            variants={slideInY}
            className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm hover:shadow-md transition"
          >
            <p className="font-medium">{agent.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{agent.phone}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Map View</h3>
      <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-400 dark:from-gray-700 dark:to-gray-900 rounded-lg flex items-center justify-center text-sm font-medium">
        [Map Placeholder]
      </div>
    </div>
  </motion.div>
);

export default Sidebar;
