// 'use client';
// import { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import achievementsData from '@/data/records.json';

// const categoryFilters = ['All', 'Marathon', 'Half Marathon', '10k'];

// export default function Achievements() {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [sortBy, setSortBy] = useState('date');

//   const filteredAchievements = useMemo(() => {
//     let filtered = achievementsData;
    
//     if (activeFilter !== 'All') {
//       filtered = filtered.filter(item => 
//         item.event === activeFilter || item.category === activeFilter
//       );
//     }

//     // Sort by selected criteria
//     filtered.sort((a, b) => {
//       switch (sortBy) {
//         case 'date':
//           return new Date(b.date) - new Date(a.date);
//         case 'time':
//           return a.time.localeCompare(b.time);
//         case 'event':
//           return a.event.localeCompare(b.event);
//         default:
//           return 0;
//       }
//     });

//     return filtered;
//   }, [activeFilter, sortBy]);

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-stone-50" id="achievements">
//       <div className="container px-4 mx-auto">
//         <motion.div
//           className="mb-16 text-center"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase text-stone-700">
//             Championship Legacy
//           </h2>
//           <h1 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">
//             Racing <span className="text-stone-600">Achievements</span>
//           </h1>
//           <div className="w-20 h-1 mx-auto bg-gradient-to-r from-stone-500 to-stone-600"></div>
//           <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
//             A remarkable career defined by explosive performances, strategic victories, 
//             and record-breaking moments on the global stage
//           </p>
//         </motion.div>
        
//         {/* Filters and Sort */}
//         <motion.div 
//           className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <div className="flex flex-wrap gap-2">
//             {categoryFilters.map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
//                   activeFilter === filter
//                     ? 'bg-stone-600 text-white shadow-lg'
//                     : 'bg-white text-gray-700 border border-stone-200 hover:bg-stone-50 hover:border-stone-300'
//                 }`}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="text-sm font-medium text-gray-700">Sort by:</span>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="px-3 py-2 text-sm text-gray-800 border rounded-lg border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent"
//             >
//               <option value="date">Most Recent</option>
//               <option value="time">Best Time</option>
//               <option value="event">Event Type</option>
//             </select>
//           </div>
//         </motion.div>

//         {/* Achievements Grid */}
//         <motion.div 
//           className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <AnimatePresence>
//             {filteredAchievements.map((achievement, index) => (
//               <motion.div
//                 key={achievement.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 layout
//               >
//                 <AchievementCard achievement={achievement} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Empty State */}
//         {filteredAchievements.length === 0 && (
//           <motion.div 
//             className="py-16 text-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-stone-100">
//               <svg className="w-10 h-10 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//               </svg>
//             </div>
//             <p className="text-lg text-gray-600">No achievements found for the selected filter</p>
//             <button 
//               onClick={() => setActiveFilter('All')}
//               className="mt-3 underline transition-colors text-stone-700 hover:text-stone-800"
//             >
//               Show all achievements
//             </button>
//           </motion.div>
//         )}

        
    
//       </div>
//     </section>
//   );
// }

// function AchievementCard({ achievement }) {
//   return (
//     <motion.div
//       className={`h-full p-6 border rounded-2xl transition-all hover:shadow-lg ${
//         achievement.highlight 
//           ? 'bg-gradient-to-br from-stone-50 to-stone-100 border-stone-300 border-l-4' 
//           : 'bg-white border-stone-200'
//       }`}
//       whileHover={{ y: -5, scale: 1.02 }}
//       transition={{ type: "spring", stiffness: 300 }}
//     >
//       {/* Header */}
//       <div className="flex items-start justify-between mb-4">
//         <div>
//           <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
//             achievement.highlight ? 'bg-stone-500 text-white' : 'bg-stone-100 text-stone-800'
//           }`}>
//             {achievement.category}
//           </span>
//         </div>
        
//         {/* Medal Indicator */}
//         {achievement.medal && (
//           <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//             achievement.medal === 'Gold' ? 'bg-yellow-100 text-yellow-600' :
//             achievement.medal === 'Silver' ? 'bg-gray-100 text-gray-600' :
//             'bg-orange-100 text-orange-600'
//           }`}>
//             <span className="text-sm font-bold">{achievement.medal === 'Gold' ? '🥇' : 
//               achievement.medal === 'Silver' ? '🥈' : '🥉'}</span>
//           </div>
//         )}
//       </div>

//       {/* Event and Achievement */}
//       <h3 className="mb-2 text-lg font-bold text-gray-900">{achievement.event}</h3>
//       <p className={`text-sm font-semibold mb-3 ${
//         achievement.highlight ? 'text-stone-700' : 'text-gray-700'
//       }`}>
//         {achievement.achievement}
//       </p>

//       {/* Time and Venue */}
//       <div className="mb-4">
//         <div className="flex items-center gap-2 mb-2">
//           <span className="text-2xl font-black text-stone-600">{achievement.time}</span>
//           {achievement.highlight && (
//             <span className="px-2 py-1 text-xs font-bold text-white rounded-full bg-stone-500">PB</span>
//           )}
//         </div>
//         <div className="text-sm text-gray-600">
//           {new Date(achievement.date).toLocaleDateString('en-GB', {
//             day: 'numeric',
//             month: 'long',
//             year: 'numeric'
//           })}
//         </div>
//         <div className="text-sm text-gray-600">{achievement.venue}</div>
//       </div>

//       {/* Description */}
//       <p className="text-sm leading-relaxed text-gray-700">{achievement.description}</p>

//       {/* Achievement Badge */}
//       {achievement.highlight && (
//         <div className="flex items-center justify-between pt-4 mt-4 border-t border-stone-100">
//           <span className="text-xs font-semibold uppercase text-stone-600">Record Performance</span>
//           <div className="flex items-center">
//             <div className="w-2 h-2 mr-1 rounded-full bg-stone-400 animate-pulse"></div>
//             <span className="text-xs text-stone-600">Highlight</span>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// }

'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import achievementsData from '@/data/records.json';

const categoryFilters = ['All', 'Marathon', 'Half Marathon', '10k'];

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [expandedId, setExpandedId] = useState(null);

  const filteredAchievements = useMemo(() => {
    let filtered = achievementsData;
    
    if (activeFilter !== 'All') {
      filtered = filtered.filter(item => 
        item.event === activeFilter || item.category === activeFilter
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'time':
          return a.time.localeCompare(b.time);
        case 'event':
          return a.event.localeCompare(b.event);
        default:
          return 0;
      }
    });

    return filtered;
  }, [activeFilter, sortBy]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-stone-50" id="achievements">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase text-stone-700">
            Performance Timeline
          </h2>
          <h1 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">
            Race <span className="text-stone-600">Records</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-stone-500 to-stone-600"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
            Track-by-track analysis of championship performances and personal bests
          </p>
        </motion.div>
        
        {/* Filters and Stats */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    activeFilter === filter
                      ? 'bg-stone-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 text-sm text-gray-800 border rounded-lg border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                >
                  <option value="date">Most Recent</option>
                  <option value="time">Fastest Time</option>
                  <option value="event">Event Type</option>
                </select>
              </div>
              
              <div className="px-4 py-2 text-sm text-gray-600 rounded-lg bg-stone-100">
                Showing {filteredAchievements.length} races
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline/Table Hybrid Layout */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-stone-300 via-stone-200 to-stone-300 md:left-1/2 md:-translate-x-1/2" />
          
          {/* Achievements List */}
          <div className="space-y-4">
            <AnimatePresence>
              {filteredAchievements.map((achievement, index) => (
                <TimelineItem 
                  key={achievement.id}
                  achievement={achievement}
                  index={index}
                  isExpanded={expandedId === achievement.id}
                  onToggle={() => toggleExpand(achievement.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <motion.div 
            className="py-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-stone-100">
              <svg className="w-10 h-10 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-lg text-gray-600">No races found for the selected filter</p>
            <button 
              onClick={() => setActiveFilter('All')}
              className="mt-3 underline transition-colors text-stone-700 hover:text-stone-800"
            >
              Show all races
            </button>
          </motion.div>
        )}

        
      </div>
    </section>
  );
}

function TimelineItem({ achievement, index, isExpanded, onToggle }) {
  const date = new Date(achievement.date);
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative ${index % 2 === 0 ? 'md:pr-1/2 md:pl-12' : 'md:pl-1/2 md:pr-12'} pl-12`}
    >
      {/* Timeline Dot */}
      <motion.div 
        className={`absolute left-3.5 w-4 h-4 rounded-full border-2 md:left-1/2 md:-translate-x-1/2 ${
          achievement.highlight 
            ? 'bg-stone-600 border-stone-700' 
            : achievement.medal === 'Gold'
            ? 'bg-yellow-100 border-yellow-400'
            : 'bg-white border-stone-400'
        }`}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
      >
        {achievement.medal && (
          <span className="absolute text-xs -top-1 -right-1">
            {achievement.medal === 'Gold' ? '🥇' : 
             achievement.medal === 'Silver' ? '🥈' : '🥉'}
          </span>
        )}
      </motion.div>

      {/* Main Content */}
      <motion.div
        className={`p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer ${
          achievement.highlight 
            ? 'border-l-4 border-stone-600' 
            : 'border-stone-200'
        }`}
        whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
        onClick={onToggle}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left Column - Event Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-bold text-gray-900">{achievement.event}</h3>
              {achievement.highlight && (
                <span className="px-2 py-1 text-xs font-bold text-white rounded-full bg-stone-600">
                  PB
                </span>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-700">
                  {date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-700">{achievement.venue}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Performance Stats */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-2xl font-black text-stone-800">{achievement.time}</div>
              <div className="text-xs font-medium text-gray-500 uppercase">Finish Time</div>
            </div>
            
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">{achievement.category}</div>
              {/* <div className="text-xs text-gray-500">Distance</div> */}
            </div>

            {/* Expand/Collapse Button */}
            <motion.button
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-stone-100"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Expanded Details */}
        {/* <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-stone-100">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-gray-900">Achievement</h4>
                    <p className="text-sm text-gray-700">{achievement.achievement}</p>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-gray-900">Performance Notes</h4>
                    <p className="text-sm text-gray-700">{achievement.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-gray-900">Race Conditions</h4>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>Position:</span>
                        <span className="font-medium">{achievement.position || 'Top 10'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Medal:</span>
                        <span className="font-medium">{achievement.medal || 'None'}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {achievement.highlight && (
                  <div className="flex items-center gap-2 p-3 mt-4 rounded-lg bg-gradient-to-r from-stone-50 to-stone-100">
                    <div className="w-2 h-2 rounded-full bg-stone-600 animate-pulse"></div>
                    <span className="text-sm font-medium text-stone-800">Personal Best Record</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </motion.div>
    </motion.div>
  );
}