import React from 'react';
import { motion } from 'framer-motion';
import { zoomIn } from '../../animations';

const SettingsButton = () => (
  <motion.div {...zoomIn} className="w-full flex justify-end mt-6">
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md text-sm font-semibold">
      Open Settings
    </button>
  </motion.div>
);

export default SettingsButton;
