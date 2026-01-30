'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import achievementsData from '@/data/records.json';

const categoryFilters = ['All', 'Marathon', 'Half Marathon', '10K', 'Track'];

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [expandedId, setExpandedId] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const filteredAchievements = useMemo(() => {
    let filtered = achievementsData;
    
    if (activeFilter !== 'All') {
      filtered = filtered.filter(item => 
        item.event.toLowerCase().includes(activeFilter.toLowerCase()) || 
        item.category === activeFilter
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
        case 'pace':
          // Calculate pace for sorting (simplified)
          const paceA = a.pace || '0:00';
          const paceB = b.pace || '0:00';
          return paceA.localeCompare(paceB);
        default:
          return 0;
      }
    });

    return filtered;
  }, [activeFilter, sortBy]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Calculate statistics
  const stats = useMemo(() => {
    const total = filteredAchievements.length;
    const golds = filteredAchievements.filter(a => a.medal === 'Gold').length;
    const silvers = filteredAchievements.filter(a => a.medal === 'Silver').length;
    const bronzes = filteredAchievements.filter(a => a.medal === 'Bronze').length;
    const pbs = filteredAchievements.filter(a => a.highlight).length;
    
    return { total, golds, silvers, bronzes, pbs };
  }, [filteredAchievements]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-green-50" id="achievements">
      <div className="container px-4 mx-auto">
        {/* Header with Gradient Background */}
        <motion.div
          className="relative p-8 mb-20 overflow-hidden rounded-3xl bg-gradient-to-r from-green-900 via-green-700 to-green-600 md:p-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-sm font-semibold tracking-wider text-green-100 uppercase">
                Performance Analytics
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Race <span className="text-green-200">Achievements</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-white to-green-200"></div>
            <p className="max-w-3xl mx-auto text-lg text-green-100/90">
              Comprehensive timeline of competitive performances, personal bests, and championship results
            </p>
          </div>
          
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full bg-green-500/20 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 blur-3xl"
            animate={{ 
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Stats Overview */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-5">
            {[
              { label: 'Total Races', value: stats.total, color: 'from-green-500 to-green-600' },
              { label: 'Gold Medals', value: stats.golds, color: 'from-yellow-500 to-yellow-600' },
              { label: 'Silver Medals', value: stats.silvers, color: 'from-gray-400 to-gray-500' },
              { label: 'Bronze Medals', value: stats.bronzes, color: 'from-amber-700 to-amber-800' },
              { label: 'Personal Bests', value: stats.pbs, color: 'from-green-700 to-green-800' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-4 bg-white border border-gray-100 shadow-lg rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`w-12 h-12 mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div> */}

          {/* Controls Section */}
          <div className="flex flex-col gap-6 p-6 mb-8 bg-white border border-gray-100 shadow-lg rounded-2xl md:flex-row md:items-center md:justify-between">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <div className="flex p-1 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-green-700 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'list'
                      ? 'bg-white text-green-700 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  List
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-200'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2.5 text-sm text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  <option value="date">Most Recent</option>
                  <option value="time">Fastest Time</option>
                  <option value="pace">Best Pace</option>
                  <option value="event">Event Type</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredAchievements.map((achievement, index) => (
                <AchievementCard 
                  key={achievement.id}
                  achievement={achievement}
                  index={index}
                  isExpanded={expandedId === achievement.id}
                  onToggle={() => toggleExpand(achievement.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence>
              {filteredAchievements.map((achievement, index) => (
                <AchievementListItem 
                  key={achievement.id}
                  achievement={achievement}
                  index={index}
                  isExpanded={expandedId === achievement.id}
                  onToggle={() => toggleExpand(achievement.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <motion.div 
            className="py-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-2xl bg-gradient-to-br from-green-100 to-green-50">
              <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">No races found</h3>
            <p className="mb-4 text-gray-600">Try selecting a different filter or category</p>
            <button 
              onClick={() => setActiveFilter('All')}
              className="px-6 py-3 font-medium text-white transition-all rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
            >
              Show all races
            </button>
          </motion.div>
        )}

        {/* Legend */}
        {/* <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 p-6 mt-16 bg-white border border-gray-100 shadow-sm rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-600 to-green-500"></div>
            <span className="text-sm text-gray-700">Personal Best</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
            <span className="text-sm text-gray-700">Gold Medal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-400 to-gray-300"></div>
            <span className="text-sm text-gray-700">Silver Medal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-700 to-amber-600"></div>
            <span className="text-sm text-gray-700">Bronze Medal</span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

function AchievementCard({ achievement, index, isExpanded, onToggle }) {
  const date = new Date(achievement.date);
  
  const getMedalColor = (medal) => {
    switch (medal) {
      case 'Gold': return 'bg-gradient-to-br from-yellow-500 to-yellow-400';
      case 'Silver': return 'bg-gradient-to-br from-gray-400 to-gray-300';
      case 'Bronze': return 'bg-gradient-to-br from-amber-700 to-amber-600';
      default: return 'bg-gradient-to-br from-gray-200 to-gray-100';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative group"
    >
      {/* Medal Badge */}
      {achievement.medal && (
        <div className={`absolute -top-3 -right-3 w-16 h-16 rounded-full ${getMedalColor(achievement.medal)} flex items-center justify-center z-20 shadow-lg`}>
          <span className="text-2xl">
            {achievement.medal === 'Gold' ? '🥇' : 
             achievement.medal === 'Silver' ? '🥈' : '🥉'}
          </span>
        </div>
      )}

      {/* PB Badge */}
      {achievement.highlight && (
        <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white text-xs font-bold shadow-lg z-20">
          PB
        </div>
      )}

      {/* Card Content */}
      <div 
        className={`relative h-full p-6 bg-white rounded-2xl shadow-lg border border-gray-100 cursor-pointer overflow-hidden ${
          achievement.highlight ? 'ring-2 ring-green-200 ring-offset-2' : ''
        }`}
        onClick={onToggle}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br from-green-500 to-transparent"></div>
        </div>

        {/* Event Header */}
        <div className="relative mb-4">
          <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-green-700">
            {achievement.event}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span className="text-sm text-gray-600">{achievement.venue}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 rounded-xl bg-gray-50">
            <div className="mb-1 text-xs font-medium text-gray-500 uppercase">Date</div>
            <div className="font-semibold text-gray-900">
              {date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-gray-50">
            <div className="mb-1 text-xs font-medium text-gray-500 uppercase">Distance</div>
            <div className="font-semibold text-gray-900">{achievement.category}</div>
          </div>
        </div>

        {/* Performance Highlight */}
        <div className="p-4 border border-green-100 rounded-xl bg-gradient-to-r from-green-50 to-green-100/50">
          <div className="mb-1 text-xs font-medium text-green-700 uppercase">Finish Time</div>
          <div className="text-2xl font-black text-green-800">{achievement.time}</div>
          {achievement.pace && (
            <div className="mt-1 text-sm text-green-600">Avg: {achievement.pace}/km</div>
          )}
        </div>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-6 mt-6 border-t border-gray-100"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Position</span>
                  <span className="font-semibold text-gray-900">{achievement.position || 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Conditions</span>
                  <span className="font-semibold text-gray-900">{achievement.conditions || 'Standard'}</span>
                </div>
                {achievement.notes && (
                  <div className="pt-2 text-sm italic text-gray-700">{achievement.notes}</div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand Indicator */}
        <div className="flex justify-center mt-4">
          <motion.div
            className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function AchievementListItem({ achievement, index, isExpanded, onToggle }) {
  const date = new Date(achievement.date);
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group"
    >
      <div 
        className={`p-6 bg-white rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all ${
          achievement.highlight ? 'border-l-4 border-l-green-500' : ''
        }`}
        onClick={onToggle}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left Column */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              {achievement.medal && (
                <span className="text-2xl">
                  {achievement.medal === 'Gold' ? '🥇' : 
                   achievement.medal === 'Silver' ? '🥈' : '🥉'}
                </span>
              )}
              <div>
                <h3 className="text-lg font-bold text-gray-900">{achievement.event}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-700">
                      {date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{achievement.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-black text-green-800">{achievement.time}</div>
              <div className="text-xs font-medium text-gray-500 uppercase">Finish Time</div>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{achievement.category}</div>
              <div className="text-xs text-gray-500">Distance</div>
            </div>

            <motion.button
              className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-100 rounded-full hover:bg-gray-200"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Expanded Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-6 mt-6 border-t border-gray-200"
            >
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="p-3 rounded-lg bg-gray-50">
                  <div className="mb-1 text-xs text-gray-600">Position</div>
                  <div className="font-semibold text-gray-900">{achievement.position || 'N/A'}</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-50">
                  <div className="mb-1 text-xs text-gray-600">Conditions</div>
                  <div className="font-semibold text-gray-900">{achievement.conditions || 'Standard'}</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-50">
                  <div className="mb-1 text-xs text-gray-600">Avg Pace</div>
                  <div className="font-semibold text-gray-900">{achievement.pace || 'N/A'}</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-50">
                  <div className="mb-1 text-xs text-gray-600">Elevation Gain</div>
                  <div className="font-semibold text-gray-900">{achievement.elevation || 'N/A'}</div>
                </div>
              </div>
              {achievement.notes && (
                <div className="p-3 mt-4 rounded-lg bg-green-50">
                  <div className="text-sm text-gray-700">{achievement.notes}</div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}