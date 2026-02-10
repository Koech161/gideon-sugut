'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const achievementsData = [
  { "id": 1, "event": "Marathon", "time": "2:14:26", "date": "2025-06-06", "venue": "Nairobi City Marathon" },
  { "id": 3, "event": "10k", "time": "29:17", "date": "2024-10-13", "venue": "Otso Moiben Community 10km Road" },
  { "id": 2, "event": "Half Marathon", "time": "1:03:34", "date": "2024-11-05", "venue": "Chemususu Half Marathon" },
  { "id": 4, "event": "Half Marathon", "time": "1:03:05", "date": "2025-09-27", "venue": "Kirinyaga Half Marathon" }
];

const categoryFilters = ['All', 'Marathon', 'Half Marathon', '10k'];
const distanceMap = {
    Marathon: '42K',
    'Half Marathon': '21K',
    '10k': '10K',
  };

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [expandedId, setExpandedId] = useState(null);
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline', 'cards', 'stats'

  const filteredAchievements = useMemo(() => {
    let filtered = achievementsData;
    
    if (activeFilter !== 'All') {
      filtered = filtered.filter(item => 
        item.event.toLowerCase().includes(activeFilter.toLowerCase())
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

  // Calculate statistics
  const stats = useMemo(() => {
    const total = filteredAchievements.length;
    const marathons = filteredAchievements.filter(a => a.event === 'Marathon').length;
    const halfMarathons = filteredAchievements.filter(a => a.event === 'Half Marathon').length;
    const tenK = filteredAchievements.filter(a => a.event.toLowerCase().includes('10k')).length;
    
    return { total, marathons, halfMarathons, tenK };
  }, [filteredAchievements]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-orange-50" id="achievements">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          className="relative p-8 mb-20 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-900 via-orange-700 to-orange-600 md:p-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-sm font-semibold tracking-wider text-orange-100 uppercase">
                Race Performances
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Race <span className="text-orange-200">Records</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-white to-orange-200"></div>
            <p className="max-w-3xl mx-auto text-lg text-orange-100/90">
              Personal bests and competitive achievements across all distances
            </p>
          </div>
          
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"
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
          

          {/* Controls Section */}
          <div className="flex flex-col gap-6 p-6 mb-8 bg-white border border-gray-100 shadow-lg rounded-2xl md:flex-row md:items-center md:justify-between">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <div className="flex p-1 bg-gray-100 rounded-lg">
                {['timeline', 'cards', 'stats'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      viewMode === mode
                        ? 'bg-white text-orange-700 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
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
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-200'
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
                  className="px-4 py-2.5 text-sm text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                >
                  <option value="date">Most Recent</option>
                  <option value="time">Fastest Time</option>
                  <option value="event">Event Type</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Display based on view mode */}
        {viewMode === 'timeline' && <TimelineView achievements={filteredAchievements} />}
        {viewMode === 'cards' && <CardsView achievements={filteredAchievements} />}
        {viewMode === 'stats' && <StatsView achievements={filteredAchievements} />}

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <motion.div 
            className="py-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50">
              <svg className="w-12 h-12 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">No races found</h3>
            <p className="mb-4 text-gray-600">Try selecting a different filter or category</p>
            <button 
              onClick={() => setActiveFilter('All')}
              className="px-6 py-3 font-medium text-white transition-all rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
            >
              Show all races
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function TimelineView({ achievements }) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className=" hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-300 md:left-1/2 md:-translate-x-1/2"></div>
      
      <div className="space-y-12">
        {achievements.map((achievement, index) => (
          <TimelineItem key={achievement.id} achievement={achievement} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ achievement, index }) {
  const date = new Date(achievement.date);
  const isEven = index % 2 === 0;
  
  const getEventColor = (event) => {
    switch (event) {
      case 'Marathon': return 'bg-gradient-to-r from-red-500 to-red-600';
      case 'Half Marathon': return 'bg-gradient-to-r from-purple-500 to-purple-600';
      case '10k': return 'bg-gradient-to-r from-blue-500 to-blue-600';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center`}
    >
      {/* Timeline dot */}
      <div className="absolute z-10 hidden w-6 h-6 bg-white border-4 border-orange-500 rounded-full sm:block left-8 md:left-1/2 md:-translate-x-1/2"></div>
      
      {/* Date */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-4 md:mb-0`}>
        <div className="text-sm font-semibold tracking-wide text-orange-700 uppercase">
          {date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>
      
      {/* Content */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <motion.div 
          className="p-6 transition-shadow bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold ${getEventColor(achievement.event)}`}>
                {achievement.event}
              </span>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{achievement.venue}</h3>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-orange-700">{achievement.time}</div>
              <div className="text-sm text-gray-600">Finish Time</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-xl bg-gray-50">
              <div className="mb-1 text-xs font-medium text-gray-500 uppercase">
                Distance
              </div>
              <div className="font-semibold text-gray-900">
                {distanceMap[achievement.event] || '21K'}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-gray-50">
              <div className="text-xs font-medium text-gray-700 uppercase">Venue</div>
              <div className="text-lg font-semibold text-gray-900">{achievement.venue}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CardsView({ achievements }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence>
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            <div className="relative h-full p-6 overflow-hidden bg-white border border-gray-100 shadow-lg rounded-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br from-orange-500 to-transparent"></div>
              </div>

              {/* Event Badge */}
              <div className="absolute top-4 right-4">
                <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold ${
                  achievement.event === 'Marathon' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                  achievement.event === 'Half Marathon' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  'bg-gradient-to-r from-blue-500 to-blue-600'
                }`}>
                  {achievement.event}
                </span>
              </div>

              {/* Main Content */}
              <div className="relative">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{achievement.venue}</h3>
                <div className="flex items-center gap-2 mb-6 text-gray-600">
                  <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">
                    {new Date(achievement.date).toLocaleDateString('en-GB', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>

                {/* Performance Highlight */}
                <div className="p-5 mb-4 border border-orange-100 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100/50">
                  <div className="text-center">
                    <div className="mb-1 text-xs font-medium text-orange-700 uppercase">Finish Time</div>
                    <div className="text-4xl font-black text-orange-800">{achievement.time}</div>
                    <div className="mt-2 text-sm text-orange-600">{achievement.event}</div>
                  </div>
                </div>

                {/* Venue Info */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <svg className="flex-shrink-0 w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-sm text-gray-700">{achievement.venue}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function StatsView({ achievements }) {
  const formatTime = (time) => {
    const parts = time.split(':');
    if (parts.length === 2) return `${parts[0]}m ${parts[1]}s`;
    if (parts.length === 3) return `${parts[0]}h ${parts[1]}m ${parts[2]}s`;
    return time;
  };

  return (
    <div className="space-y-8">
      {/* Personal Bests Section */}
      <div className="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Personal Bests</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="p-6 border border-orange-100 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100/50">
              <div className="mb-2 text-sm font-medium text-orange-700 uppercase">{achievement.event}</div>
              <div className="mb-2 text-3xl font-black text-orange-900">{achievement.time}</div>
              <div className="text-sm text-orange-700">{achievement.venue}</div>
              <div className="mt-2 text-xs text-orange-600">
                {new Date(achievement.date).toLocaleDateString('en-GB', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Analysis */}
      <div className="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Performance Analysis</h3>
        <div className="space-y-6">
          {achievements.map((achievement) => {
            const date = new Date(achievement.date);
            const timeParts = achievement.time.split(':');
            const totalSeconds = timeParts.length === 3 
              ? parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2])
              : parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
            
            const pacePerKm = achievement.event === 'Marathon' 
              ? (totalSeconds / 42.195 / 60).toFixed(2)
              : achievement.event === 'Half Marathon'
              ? (totalSeconds / 21.0975 / 60).toFixed(2)
              : (totalSeconds / 10 / 60).toFixed(2);

            return (
              <div key={achievement.id} className="flex flex-col gap-4 p-6 border border-gray-100 rounded-xl md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-bold ${
                      achievement.event === 'Marathon' ? 'bg-red-500' :
                      achievement.event === 'Half Marathon' ? 'bg-purple-500' :
                      'bg-blue-500'
                    }`}>
                      {achievement.event}
                    </span>
                    <div className="text-sm font-medium text-gray-600">
                      {date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{achievement.venue}</h4>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-orange-700">{achievement.time}</div>
                    <div className="text-xs text-gray-600">Finish Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{pacePerKm}/km</div>
                    <div className="text-xs text-gray-600">Average Pace</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">
                      {achievement.event === 'Marathon' ? '42.195km' :
                       achievement.event === 'Half Marathon' ? '21.097km' : '10km'}
                    </div>
                    <div className="text-xs text-gray-600">Distance</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}