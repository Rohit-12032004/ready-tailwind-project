import React from 'react';
import FilterBar from './FilterBar';
import PropertyGrid from './PropertyGrid';
import Sidebar from './Sidebar';
import Pagination from './Pagination';

const RealEstatePage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <aside className="w-full lg:w-1/4 border-r dark:border-gray-800 p-4">
        <Sidebar />
      </aside>
      <main className="flex-1 p-6 space-y-6">
        <FilterBar />
        <PropertyGrid />
        <Pagination />
      </main>
    </div>
  );
};

export default RealEstatePage;
