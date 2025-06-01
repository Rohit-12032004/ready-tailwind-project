import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, zoomIn } from '../../animations';

const Hero = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <motion.h1 {...fadeIn} className="text-4xl md:text-5xl font-extrabold">
        Supercharge Your Productivity
      </motion.h1>
      <motion.p
        {...fadeIn}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg text-gray-600 dark:text-gray-300"
      >
        All-in-one SaaS platform to grow faster.
      </motion.p>
      <motion.div {...zoomIn} className="mt-8 flex justify-center gap-4 flex-wrap">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
          Get Started
        </button>
        <button className="border border-blue-600 dark:border-blue-400 px-6 py-3 rounded-md">
          Learn More
        </button>
      </motion.div>
    </div>
  </section>
);

export default Hero;
