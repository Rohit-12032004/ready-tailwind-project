import React from 'react';

const GlobalHeader = ({ currentLayout, onLayoutChange, darkMode, toggleDarkMode }) => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 border-b dark:border-gray-700 shadow-sm sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">🎛️ UI Layout Generator</h1>

      <div className="flex gap-4 items-center">
        <select
          value={currentLayout}
          onChange={(e) => onLayoutChange(e.target.value)}
          className="px-3 py-1 text-sm rounded-md bg-white dark:bg-gray-800 border dark:border-gray-600 text-gray-800 dark:text-white"
        >
          <option value="">Select Layout</option>
          <option value="landing">Landing Page</option>
          <option value="dashboard">Dashboard</option>
          <option value="realEstate">Real Estate</option>
        </select>

        <button
          onClick={toggleDarkMode}
          className="text-sm px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {darkMode ? '☀ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
};

export default GlobalHeader;
