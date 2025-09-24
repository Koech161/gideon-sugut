'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-12 overflow-hidden bg-white"
      aria-label="Hilda Cheptoo Biwott Hero Section"
    >
      {/* Elegant violet geometric background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle diamond pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(45deg, #8b5cf6 25%, transparent 25%, transparent 75%, #8b5cf6 75%, #8b5cf6),
                            linear-gradient(-45deg, #8b5cf6 25%, transparent 25%, transparent 75%, #8b5cf6 75%, #8b5cf6)`,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px'
        }}></div>
        
        {/* Animated violet gradient orbs */}
        <motion.div 
          className="absolute rounded-full top-1/4 -left-24 w-80 h-80 bg-violet-200/30 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute rounded-full w-72 h-72 bottom-1/3 -right-20 bg-violet-300/20 blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Sophisticated corner accents */}
        <div className="absolute top-0 left-0 w-40 h-40 border-t-4 border-l-4 border-violet-400/10"></div>
        <div className="absolute top-0 right-0 w-40 h-40 border-t-4 border-r-4 border-violet-400/10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 border-b-4 border-l-4 border-violet-400/10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border-b-4 border-r-4 border-violet-400/10"></div>
      </div>
      
      <div className="container z-10 flex flex-col items-center gap-12 px-4 mx-auto lg:flex-row">
        {/* Athlete Image Section - Elegant card design */}
        <motion.div 
          className="relative lg:w-2/5"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <div className="relative max-w-sm mx-auto">
            {/* Main image container with violet accent frame */}
            <div className="relative z-10 p-4 bg-white shadow-2xl rounded-3xl">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-50 to-white aspect-[3/4]">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  {/* Elegant monogram */}
                  <div className="flex items-center justify-center mb-6 rounded-full w-36 h-36 bg-violet-100/60">
                    <div className="flex items-center justify-center rounded-full w-28 h-28 bg-violet-200/50">
                      <span className="text-4xl font-bold text-violet-700">HCB</span>
                    </div>
                  </div>
                  <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
                  <p className="text-sm font-medium text-violet-600">Professional Athlete</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute w-8 h-8 border-2 rounded-full top-6 right-6 border-violet-400/20"></div>
                <div className="absolute w-6 h-6 border-2 rounded-full bottom-6 left-6 border-violet-400/20"></div>
              </div>
            </div>
            
            {/* Floating achievement badges */}
            {/* <motion.div 
              className="absolute z-20 px-5 py-3 bg-white border shadow-xl rounded-2xl -top-4 -left-4 border-violet-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                <span className="text-sm font-semibold text-violet-700">World Record</span>
              </div>
            </motion.div> */}
            
            {/* <motion.div 
              className="absolute z-20 px-5 py-3 bg-white border shadow-xl rounded-2xl -bottom-4 -right-4 border-violet-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                <span className="text-sm font-semibold text-violet-700">5x Champion</span>
              </div>
            </motion.div> */}
          </div>
        </motion.div>

        {/* Text Content - Centered modern layout */}
        <motion.div
          className="space-y-8 text-center lg:w-3/5 lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-violet-600 animate-pulse"></div>
            <span className="px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-full text-violet-700 bg-violet-100/80">
              Elite Long-Distance Runner
            </span>
            <div className="w-2 h-2 rounded-full bg-violet-600 animate-pulse"></div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-black leading-tight text-gray-900 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <span className="text-violet-600">Hilda</span> <br />
            Cheptoo <br />
            <span className="text-violet-800">Biwott</span>
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center gap-6 my-8 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex-1 h-0.5 bg-gradient-to-r from-violet-500/40 to-transparent lg:flex-none lg:w-20"></div>
            <h2 className="text-xl font-semibold text-gray-700 sm:text-2xl">
              Kenyan Running Excellence
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-violet-500/40 to-transparent lg:flex-none lg:w-20"></div>
          </motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 lg:mx-0 lg:mr-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Champion marathon runner representing Kenya with extraordinary endurance and determination. 
            Celebrated for record-breaking performances in international competitions and inspiring 
            future generations through dedication and sportsmanship.
          </motion.p>
          
          <motion.div 
            className="flex flex-col justify-center gap-5 mt-12 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link href="#achievements">
              <button className="px-12 py-4 font-bold text-white transition-all duration-300 transform shadow-lg bg-violet-600 rounded-xl hover:bg-violet-700 hover:-translate-y-1 hover:shadow-xl active:scale-95">
                View Marathon Victories
              </button>
            </Link>
            <Link href="#story">
              <button className="px-12 py-4 font-bold transition-all duration-300 transform border-2 shadow-lg text-violet-700 border-violet-600 rounded-xl hover:bg-violet-50 hover:-translate-y-1 active:scale-95">
                My Running Journey
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium tracking-wider uppercase text-violet-600">Discover</span>
            <div className="flex justify-center w-5 h-8 mt-1 border rounded-full border-violet-300/50">
              <motion.div 
                className="w-1 h-2 mt-2 rounded-full bg-violet-600"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-violet-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.3, 1.2, 0.3],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
}