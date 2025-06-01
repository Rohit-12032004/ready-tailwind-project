import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import KPICards from './KPICards';
import ChartSection from './ChartSection';
import DataTable from './DataTable';
import SettingsButton from './SettingsButton';

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 space-y-6">
          <KPICards />
          <ChartSection />
          <DataTable />
          <SettingsButton />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
