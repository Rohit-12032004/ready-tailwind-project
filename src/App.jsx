import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LandingPage from './components/landing/LandingPage';
import DashboardPage from './components/dashboard/DashboardPage';
import RealEstatePage from './components/realestate/RealEstatePage';
import GlobalHeader from './components/GlobalHeader';
import { fadeIn } from './animations';

const App = () => {
  const [layout, setLayout] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const renderLayout = () => {
    switch (layout) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'realEstate':
        return <RealEstatePage />;
      default:
        return (
          <motion.div {...fadeIn} className="text-center mt-20 text-gray-500 dark:text-gray-400">
            <p className="text-lg">👋 Select a layout to preview the generated UI.</p>
          </motion.div>
        );
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
        <GlobalHeader
          currentLayout={layout}
          onLayoutChange={setLayout}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        {renderLayout()}
      </main>
    </div>
  );
};

export default App;
