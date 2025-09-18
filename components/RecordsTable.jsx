'use client';
import { useState, useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { motion, AnimatePresence } from 'framer-motion';
import records from '@/data/records.json';

// Sample records data
// const records = [
//   {
//     event: 'Marathon',
//     time: '2:08:45',
//     date: '2024-05-15',
//     venue: 'Nairobi City Marathon',
//     placement: '1st'
//   },
//   {
//     event: 'Half Marathon',
//     time: '1:02:30',
//     date: '2023-11-20',
//     venue: 'Great Rift Valley Half',
//     placement: '1st'
//   },
//   {
//     event: '10K Road',
//     time: '28:45',
//     date: '2023-08-10',
//     venue: 'Eldoret 10K Challenge',
//     placement: '2nd'
//   },
//   {
//     event: 'Marathon',
//     time: '2:10:15',
//     date: '2023-03-22',
//     venue: 'Kigali International Peace Marathon',
//     placement: '3rd'
//   },
//   {
//     event: '15K Road',
//     time: '44:20',
//     date: '2022-10-05',
//     venue: 'Kapchorwa Run',
//     placement: '1st'
//   },
// ];

// Define column helper
const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor('event', {
    header: 'Event',
    cell: (info) => (
      <span className="font-semibold text-white">{info.getValue()}</span>
    ),
    filterFn: 'includesString',
  }),
  columnHelper.accessor('time', {
    header: 'Time',
    cell: (info) => (
      <span className="font-mono text-pink-400 font-bold">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor('date', {
    header: 'Date',
    cell: (info) =>
      new Date(info.getValue()).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
  }),
  columnHelper.accessor('venue', {
    header: 'Venue',
    cell: (info) => info.getValue(),
  }),
  // columnHelper.accessor('placement', {
  //   header: 'Placement',
  //   cell: (info) => (
  //     <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
  //       info.getValue() === '1st' 
  //         ? 'bg-pink-500/20 text-pink-300' 
  //         : info.getValue() === '2nd'
  //         ? 'bg-gray-600 text-gray-200'
  //         : 'bg-amber-700/20 text-amber-300'
  //     }`}>
  //       {info.getValue()}
  //     </span>
  //   ),
  // }),
];

export default function RecordsTable() {
  const [sorting, setSorting] = useState([]);
  const [filter, setFilter] = useState('');

  const data = useMemo(() => records, []);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter: filter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900" id="records">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-pink-500 uppercase tracking-wider mb-2">
            Performance Metrics
          </h2>
          <h1 className="text-4xl font-bold text-white mb-4">
            Race <span className="text-pink-500">Records</span>
          </h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="bg-gray-800/30 backdrop-blur-md rounded-2xl border border-pink-900/30 p-6 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">Personal Bests</h3>
              <p className="text-pink-200/70">Kitur's competitive race history</p>
            </div>
            
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-pink-800/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                aria-label="Filter records by event"
              />
              {filter && (
                <button
                  onClick={() => setFilter('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-400 transition-colors"
                  aria-label="Clear filter"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-pink-900/30">
            <table className="min-w-full" aria-label="Athlete Personal Records">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="bg-pink-900/40">
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-2 py-1 text-left text-sm  text-pink-100 uppercase tracking-wider cursor-pointer hover:bg-pink-700/30 transition-colors"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div className="flex items-center">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          <motion.span
                            className="ml-1"
                            animate={{
                              rotate: header.column.getIsSorted() === 'asc' ? 0 : 180,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {header.column.getIsSorted() ? 
                              (header.column.getIsSorted() === 'asc' ? '↑' : '↓') : 
                              '↕'}
                          </motion.span>
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-pink-900/20">
                <AnimatePresence>
                  {table.getRowModel().rows.map((row) => (
                    <motion.tr
                      key={row.id}
                      className="hover:bg-pink-900/10 transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ backgroundColor: 'rgba(236, 72, 153, 0.15)' }}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-2 py-2 text-sm text-gray-200"
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {table.getRowModel().rows.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-pink-500/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-400">No records found matching your search</p>
            </div>
          )}

          
        </motion.div>
      </div>
    </section>
  );
}