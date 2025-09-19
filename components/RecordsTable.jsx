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
import records from '@/data/records.json'


// Define column helper
const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor('event', {
    header: 'Event',
    cell: (info) => (
      <span className="font-semibold text-blue-900">{info.getValue()}</span>
    ),
    filterFn: 'includesString',
  }),
  columnHelper.accessor('time', {
    header: 'Time',
    cell: (info) => (
      <span className="font-mono text-lg text-blue-700 font-semi-bold">{info.getValue()}</span>
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
    header: '',
    cell: (info) => <span className="text-gray-700">{info.getValue()}</span>,
  }),
  
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
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="records">
      <div className="container px-4 mx-auto">
        {/* <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Performance Analytics
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Race <span className="text-blue-600">Records</span>
          </h1>
          <div className="w-24 h-1 mx-auto bg-blue-600"></div>
        </motion.div> */}

        <motion.div 
          className="p-6 bg-white border border-blue-100 shadow-xl backdrop-blur-md rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header and Filter */}
          <div className="flex flex-col items-center justify-between gap-4 mb-8 md:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-blue-900">Performance History</h3>
              <p className="text-blue-600/70">Sharon's competitive race achievements</p>
            </div>
            
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search events or venues..."
                className="w-full py-3 pl-10 pr-4 text-blue-900 placeholder-blue-400 transition-all border border-blue-200 rounded-lg bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Filter records by event"
              />
              {filter && (
                <button
                  onClick={() => setFilter('')}
                  className="absolute text-blue-400 transition-colors -translate-y-1/2 right-3 top-1/2 hover:text-blue-600"
                  aria-label="Clear filter"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-blue-100 shadow-sm rounded-xl">
            <table className="min-w-full" aria-label="Athlete Personal Records">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="bg-blue-600">
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-3 py-2 text-sm font-medium tracking-wider text-left text-white uppercase transition-colors cursor-pointer md:px-6 md:py-4 hover:bg-blue-700"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div className="flex items-center">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          <motion.span
                            className="ml-2"
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
              <tbody className="divide-y divide-blue-100">
                <AnimatePresence>
                  {table.getRowModel().rows.map((row) => (
                    <motion.tr
                      key={row.id}
                      className="transition-colors hover:bg-blue-50 group"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ 
                        backgroundColor: 'rgba(59, 130, 246, 0.05)',
                        scale: 1.005
                      }}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-3 py-2 text-sm transition-colors md:px-6 md:py-4 group-hover:text-blue-800"
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
            <motion.div 
              className="py-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-blue-700/70">No records found matching your search</p>
              <button 
                onClick={() => setFilter('')}
                className="mt-2 text-blue-600 underline transition-colors hover:text-blue-800"
              >
                Clear search
              </button>
            </motion.div>
          )}

          {/* Results count */}
          <div className="mt-6 text-sm text-blue-700/70">
            Showing {table.getRowModel().rows.length} of {records.length} records
          </div>
        </motion.div>

       
      </div>
    </section>
  );
}