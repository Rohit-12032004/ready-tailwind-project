import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations';

const rows = [
  { id: 1, name: 'Monthly Report', status: 'Generated', date: 'May 30, 2025' },
  { id: 2, name: 'User Growth', status: 'Pending', date: 'May 29, 2025' },
  { id: 3, name: 'Revenue Stream', status: 'Generated', date: 'May 28, 2025' },
];

const DataTable = () => (
  <motion.section {...fadeIn} className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-x-auto">
    <table className="w-full table-auto min-w-[600px] text-left text-sm">
      <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
        <tr>
          <th className="px-4 py-3 font-semibold">#</th>
          <th className="px-4 py-3 font-semibold">Report Name</th>
          <th className="px-4 py-3 font-semibold">Status</th>
          <th className="px-4 py-3 font-semibold">Date</th>
        </tr>
      </thead>
      <tbody className="text-gray-800 dark:text-white divide-y divide-gray-200 dark:divide-gray-700">
        {rows.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            <td className="px-4 py-3">{row.id}</td>
            <td className="px-4 py-3">{row.name}</td>
            <td className="px-4 py-3">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  row.status === 'Generated'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {row.status}
              </span>
            </td>
            <td className="px-4 py-3">{row.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </motion.section>
);

export default DataTable;
