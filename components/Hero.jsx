'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-12 overflow-hidden bg-white"
      aria-label="Sharon Jerop Kebenei Hero Section"
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white opacity-80"></div>
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.09'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Animated blue gradient circles */}
        <div className="absolute top-10% left-10% w-64 h-64 rounded-full bg-blue-400/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10% right-10% w-80 h-80 rounded-full bg-blue-600/10 blur-3xl animate-pulse-medium"></div>
      </div>
      
      <div className="container z-10 flex flex-col items-center gap-12 px-4 mx-auto lg:flex-row">
        {/* Text Content */}
        <motion.div
          className="space-y-6 text-center lg:w-1/2 lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-2">
            <span className="px-4 py-2 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
              Elite Long-Distance Runner
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Sharon Jerop <span className="text-blue-600">Kebenei</span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 my-4 lg:justify-start">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <h2 className="text-xl font-medium text-blue-700 sm:text-2xl">
              Champion Marathon Athlete
            </h2>
            <div className="w-12 h-0.5 bg-blue-600"></div>
          </div>
          
          <p className="max-w-xl mx-auto text-lg leading-relaxed text-gray-700 md:text-gray-800 lg:mx-0">
            Representing Kenya with pride on the global stage through exceptional endurance, 
            record-breaking performances, and an unwavering commitment to excellence in long-distance running.
          </p>
          
          <p className="flex items-center justify-center gap-2 italic font-medium text-blue-700 lg:justify-start">
            <span className="text-xl text-blue-600">•</span> 
            Dedication • Excellence • Victory
            <span className="text-xl text-blue-600">•</span>
          </p>
          
          <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row lg:justify-start">
            <Link href="#records">
              <button className="px-8 py-3 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl">
                View Achievements
              </button>
            </Link>
            <Link href="#about">
              <button className="px-8 py-3 font-semibold text-blue-600 transition-all duration-300 transform border border-blue-600 rounded-lg shadow-lg hover:bg-blue-50 hover:-translate-y-1">
                My Journey
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative flex justify-center lg:w-1/2 lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Main image container with futuristic frame */}
            <div className="relative z-10 overflow-hidden shadow-2xl w-80 h-80 rounded-2xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-400/20 to-blue-600/20"></div>
              {/* Placeholder for athlete image */}
              <div className="flex items-center justify-center w-full h-full bg-gray-200">
                <span className="text-gray-500">Sharon Jerop Kebenei Image</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute z-0 w-24 h-24 border-4 rounded-full -bottom-2 -left-4 border-blue-400/30 animate-pulse"></div>
            <div className="absolute z-0 w-16 h-16 border-2 rounded-full -top-4 -right-2 border-blue-600/20 animate-pulse"></div>
            
            {/* Futuristic data elements */}
            <div className="absolute px-4 py-2 rounded-lg shadow-lg -bottom-6 -right-6 bg-white/90 backdrop-blur-sm">
              <p className="text-sm font-bold text-blue-600">Personal Best</p>
              <p className="text-xs text-gray-700">2:19:12</p>
            </div>
            
            <div className="absolute px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full shadow-lg -top-6 -left-6">
              World Championships
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="flex justify-center w-6 h-10 border-2 rounded-full border-blue-600/30">
            <div className="w-1 h-3 mt-2 bg-blue-600 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}