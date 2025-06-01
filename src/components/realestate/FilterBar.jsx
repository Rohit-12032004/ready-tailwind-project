import React from 'react';
import { motion } from 'framer-motion';
import { slideInY } from '../../animations';

const FilterBar = () => {
  return (
    <motion.div
      {...slideInY}
      className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col md:flex-row justify-between items-center gap-4"
    >
      <input
        type="text"
        placeholder="Search by location or keyword"
        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex flex-wrap gap-2 md:gap-4 items-center">
        <select className="px-3 py-2 text-sm bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md">
          <option>Property Type</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Office</option>
        </select>
        <select className="px-3 py-2 text-sm bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md">
          <option>Sort By</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </motion.div>
  );
};

export default FilterBar;
