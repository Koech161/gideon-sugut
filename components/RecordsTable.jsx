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
      <span className="font-semibold text-zinc-900">{info.getValue()}</span>
    ),
    filterFn: 'includesString',
  }),
  columnHelper.accessor('time', {
    header: 'Time',
    cell: (info) => (
      <span className="font-mono font-medium text-zinc-700 text-l">{info.getValue()}</span>
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
    cell: (info) => <span className="text-zinc-600">{info.getValue()}</span>,
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
    <section className="py-20 bg-gradient-to-b from-white to-zinc-50" id="records">
      <div className="container px-4 mx-auto">
        

        <motion.div 
          className="p-6 bg-white border shadow-xl border-zinc-200 backdrop-blur-md rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header and Filter */}
          <div className="flex flex-col items-center justify-between gap-4 mb-8 md:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900">Performance History</h3>
              <p className="text-zinc-600">Kiptanui's competitive race achievements</p>
            </div>
            
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search events or venues..."
                className="w-full py-3 pl-10 pr-4 transition-all border rounded-lg text-zinc-900 placeholder-zinc-400 border-zinc-300 bg-zinc-50/50 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                aria-label="Filter records by event"
              />
              {filter && (
                <button
                  onClick={() => setFilter('')}
                  className="absolute transition-colors -translate-y-1/2 text-zinc-400 right-3 top-1/2 hover:text-zinc-600"
                  aria-label="Clear filter"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border shadow-sm border-zinc-200 rounded-xl">
            <table className="min-w-full" aria-label="Athlete Personal Records">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="bg-zinc-800">
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-3 py-2 text-sm font-medium tracking-wider text-left text-white uppercase transition-colors cursor-pointer md:px-6 md:py-4 hover:bg-zinc-700"
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
              <tbody className="divide-y divide-zinc-200">
                <AnimatePresence>
                  {table.getRowModel().rows.map((row) => (
                    <motion.tr
                      key={row.id}
                      className="transition-colors hover:bg-zinc-50 group"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ 
                        backgroundColor: 'rgba(82, 82, 82, 0.05)',
                        scale: 1.005
                      }}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-3 py-2 text-sm transition-colors md:px-6 md:py-4 group-hover:text-zinc-800"
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
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-zinc-100">
                <svg className="w-8 h-8 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-zinc-600">No records found matching your search</p>
              <button 
                onClick={() => setFilter('')}
                className="mt-2 underline transition-colors text-zinc-700 hover:text-zinc-900"
              >
                Clear search
              </button>
            </motion.div>
          )}

          {/* Results count */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-zinc-600">
              Showing {table.getRowModel().rows.length} of {records.length} records
            </div>
            
            {/* Sort indicator */}
            {sorting.length > 0 && (
              <div className="text-xs text-zinc-500">
                Sorted by: {sorting[0].id} {sorting[0].desc ? '(Desc)' : '(Asc)'}
              </div>
            )}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}