'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import achievementsData from '@/data/records.json'

// const achievementsData = [
//   { 
//     id: 1, 
//     event: "Marathon", 
//     time: "2:18:45", 
//     date: "2023-04-17", 
//     venue: "Boston Marathon",
//     achievement: "Champion",
//     category: "World Marathon Major",
//     description: "Victorious finish in one of the world's most prestigious marathons",
//     highlight: true
//   },
//   { 
//     id: 2, 
//     event: "Marathon", 
//     time: "2:19:30", 
//     date: "2022-10-09", 
//     venue: "Chicago Marathon",
//     achievement: "Top 5 Finish",
//     category: "World Marathon Major",
//     description: "Strong performance against elite international competition",
//     highlight: true
//   },
//   { 
//     id: 3, 
//     event: "Half Marathon", 
//     time: "1:05:30", 
//     date: "2022-07-16", 
//     venue: "Lisbon Half Marathon",
//     achievement: "Personal Best",
//     category: "International Event",
//     description: "Set new personal record in highly competitive field"
//   },
//   { 
//     id: 4, 
//     event: "10,000m", 
//     time: "31:45", 
//     date: "2021-06-12", 
//     venue: "Kenyan National Championships",
//     achievement: "Gold Medal",
//     category: "National Competition",
//     description: "National title victory showcasing track prowess"
//   }
// ];

const categoryFilters = ['All', 'Marathon', 'Half Marathon', '10,000m'];

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('date');

  const filteredAchievements = useMemo(() => {
    let filtered = achievementsData;
    
    if (activeFilter !== 'All') {
      filtered = filtered.filter(item => 
        item.event === activeFilter || item.category === activeFilter
      );
    }

    // Sort by selected criteria
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

  return (
    <section className="py-20 bg-gradient-to-b from-white to-lime-50/30" id="achievements">
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase text-lime-700">
            Championship Wins
          </h2>
          <h1 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">
            Career <span className="text-lime-600">Achievements</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-lime-500 to-lime-600"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
            A journey of excellence through international competitions and record-breaking performances
          </p>
        </motion.div>

        {/* Filters and Sort */}
        <motion.div 
          className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-lime-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-lime-200 hover:bg-lime-50 hover:border-lime-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 text-sm border rounded-lg border-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
            >
              <option value="date">Most Recent</option>
              <option value="time">Best Time</option>
              <option value="event">Event Type</option>
            </select>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AnimatePresence>
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <AchievementCard achievement={achievement} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <motion.div 
            className="py-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-lime-100">
              <svg className="w-10 h-10 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-lg text-gray-600">No achievements found for the selected filter</p>
            <button 
              onClick={() => setActiveFilter('All')}
              className="mt-3 underline transition-colors text-lime-700 hover:text-lime-800"
            >
              Show all achievements
            </button>
          </motion.div>
        )}

       
      </div>
    </section>
  );
}

function AchievementCard({ achievement }) {
  return (
    <motion.div
      className={`h-full p-6 border rounded-2xl transition-all hover:shadow-lg ${
        achievement.highlight 
          ? 'bg-gradient-to-br from-lime-50 to-lime-100 border-lime-300 border-l-4' 
          : 'bg-white border-lime-200'
      }`}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
            achievement.highlight ? 'bg-lime-500 text-white' : 'bg-lime-100 text-lime-800'
          }`}>
            {achievement.category}
          </span>
        </div>
        {achievement.highlight && (
          <span className="text-lime-500">⭐</span>
        )}
      </div>

      {/* Event and Achievement */}
      <h3 className="mb-2 text-lg font-bold text-gray-900">{achievement.event}</h3>
      <p className={`text-sm font-semibold mb-3 ${
        achievement.highlight ? 'text-lime-700' : 'text-gray-700'
      }`}>
        {achievement.achievement}
      </p>

      {/* Time and Venue */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl font-black text-lime-600">{achievement.time}</span>
        </div>
        <div className="text-sm text-gray-600">
          {new Date(achievement.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </div>
        <div className="text-sm text-gray-600">{achievement.venue}</div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-700">{achievement.description}</p>
    </motion.div>
  );
}