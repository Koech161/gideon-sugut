'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-12 overflow-hidden bg-white"
      aria-label="Robert Kiprop Hero Section"
    >
      {/* Modern athletic background with lime theme */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic track-inspired pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 19px, #84cc16 20px),
                            repeating-linear-gradient(90deg, transparent, transparent 19px, #84cc16 20px)`,
          backgroundSize: '20px 20px',
        }}></div>
        
        {/* Lime gradient orbs with energetic animation */}
        <motion.div 
          className="absolute rounded-full top-1/4 -left-40 w-[500px] h-[500px] bg-lime-300/25 blur-[100px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute rounded-full w-[400px] h-[400px] bottom-1/3 -right-32 bg-lime-400/20 blur-[90px]"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Athletic corner markers */}
        <div className="absolute w-6 h-6 border-2 rounded-full top-10 left-10 border-lime-500/20"></div>
        <div className="absolute w-6 h-6 border-2 rounded-full top-10 right-10 border-lime-500/20"></div>
        <div className="absolute w-6 h-6 border-2 rounded-full bottom-10 left-10 border-lime-500/20"></div>
        <div className="absolute w-6 h-6 border-2 rounded-full bottom-10 right-10 border-lime-500/20"></div>
      </div>
      
      <div className="container z-10 flex flex-col items-center gap-16 px-4 mx-auto lg:flex-row-reverse">
        {/* Athlete Image Section - Modern athletic design */}
        <motion.div 
          className="relative lg:w-2/5"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <div className="relative max-w-sm mx-auto">
            {/* Main image container with speed lines */}
            <div className="relative z-10 p-4 bg-white shadow-xl rounded-3xl">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-lime-50 to-white aspect-[3/4]">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  {/* Champion athlete design */}
                  <div className="relative flex items-center justify-center mb-6">
                    <motion.div 
                      className="absolute w-32 h-32 rounded-full shadow-lg bg-gradient-to-br from-lime-400 to-lime-600"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="relative flex items-center justify-center rounded-full w-28 h-28 bg-lime-100/80 backdrop-blur-sm">
                      <span className="text-2xl font-bold text-lime-800">RK</span>
                    </div>
                  </div>
                  
                  {/* Speed lines */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-20"></div>
                  <div className="absolute top-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-15"></div>
                  
                  <div className="w-16 h-0.5 mx-auto my-4 bg-gradient-to-r from-lime-500 to-lime-300"></div>
                  <p className="text-sm font-semibold text-lime-700">Elite Marathon Champion</p>
                </div>
                
                {/* Athletic decorative elements */}
                <motion.div 
                  className="absolute w-6 h-6 border-2 rounded-full top-6 right-6 border-lime-400/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-4 h-4 border-2 rounded-full bottom-6 left-6 border-lime-400/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
           
          </div>
        </motion.div>

        {/* Text Content - Powerful and focused layout */}
        <motion.div
          className="space-y-8 text-center lg:w-3/5 lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-lime-600 animate-pulse"></div>
            <span className="px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-full text-lime-800 bg-lime-100/80">
              Olympic Champion
            </span>
            <div className="w-2 h-2 rounded-full bg-lime-600 animate-pulse"></div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-black leading-tight text-gray-900 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <span className="text-lime-600">ROBERT</span> <br />
            <span className="text-lime-700">KIPROP</span>
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center gap-4 my-8 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="w-8 h-0.5 bg-lime-500/60"></div>
            <h2 className="text-xl font-semibold text-gray-700 sm:text-2xl">
              Kenyan Marathon Legend
            </h2>
            <div className="w-8 h-0.5 bg-lime-500/60"></div>
          </motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 lg:mx-0 lg:mr-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Robert Kiprop represents the pinnacle of Kenyan marathon excellence. With unparalleled 
            endurance, strategic brilliance, and record-breaking performances, he has cemented 
            his legacy as one of the greatest distance runners of our generation, inspiring 
            athletes worldwide with his dedication and sportsmanship.
          </motion.p>
          
          <motion.div 
            className="flex flex-col justify-center gap-4 mt-12 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link href="#achievements">
              <button className="px-10 py-4 font-bold text-white transition-all duration-300 transform shadow-lg bg-lime-600 rounded-xl hover:bg-lime-700 hover:-translate-y-1 hover:shadow-xl active:scale-95">
                View Achievements
              </button>
            </Link>
            <Link href="#about">
              <button className="px-10 py-4 font-bold transition-all duration-300 transform border-2 shadow-lg text-lime-700 border-lime-600 rounded-xl hover:bg-lime-50 hover:-translate-y-1 active:scale-95">
                My Journey
              </button>
            </Link>
          </motion.div>

        
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-lime-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.3, 1.2, 0.3],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}