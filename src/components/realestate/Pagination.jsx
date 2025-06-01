import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';

const Pagination = () => (
  <motion.nav
    {...fadeIn}
    className="flex justify-center mt-8"
    role="navigation"
    aria-label="Pagination Navigation"
  >
    <ul className="inline-flex items-center space-x-2">
      <li>
        <button className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
          Prev
        </button>
      </li>
      {[1, 2, 3].map((page) => (
        <li key={page}>
          <button
            className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
              page === 2
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
          Next
        </button>
      </li>
    </ul>
  </motion.nav>
);

export default Pagination;
