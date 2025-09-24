'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-12 overflow-hidden bg-white"
      aria-label="Selly Jepng'etich Rono Hero Section"
    >
      {/* Modern geometric background with lime accents */}
      <div className="absolute inset-0 z-0">
        {/* Diagonal line pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(45deg, #84cc16 25%, transparent 25%, transparent 75%, #84cc16 75%, #84cc16),
                            linear-gradient(45deg, #84cc16 25%, transparent 25%, transparent 75%, #84cc16 75%, #84cc16)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
        
        {/* Animated lime gradient elements */}
        <motion.div 
          className="absolute rounded-full top-1/3 -left-20 w-72 h-72 bg-lime-200/40 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-64 h-64 rounded-full bottom-1/4 -right-16 bg-lime-300/30 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Dynamic corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-lime-500/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-lime-500/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-lime-500/20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-lime-500/20"></div>
      </div>
      
      <div className="container z-10 flex flex-col items-center gap-16 px-4 mx-auto lg:flex-row-reverse">
        {/* Text Content - Right aligned for fresh layout */}
        <motion.div
          className="space-y-8 text-center lg:w-1/2 lg:text-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-3 h-3 rounded-full bg-lime-500 animate-pulse"></div>
            <span className="px-4 py-2 text-sm font-semibold tracking-wider uppercase rounded-full text-lime-800 bg-lime-100/80">
              World-Class Marathon Champion
            </span>
            <div className="w-3 h-3 rounded-full bg-lime-500 animate-pulse"></div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-black leading-tight text-gray-900 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="text-lime-600">Selly</span> <br />
            Jepng'etich <br />
            <span className="text-gray-700">Rono</span>
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center gap-4 my-6 lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex-1 h-0.5 bg-gradient-to-l from-lime-500/50 to-transparent lg:flex-none lg:w-24"></div>
            <h2 className="text-xl font-semibold text-gray-700 sm:text-2xl">
              Kenyan Athletics Pride
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-lime-500/50 to-transparent lg:flex-none lg:w-24"></div>
          </motion.div>
          
          <motion.p 
            className="max-w-xl mx-auto text-lg leading-relaxed text-gray-600 lg:mx-0 lg:ml-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Representing Kenya with exceptional talent and determination. Champion of major international 
            marathons, inspiring a new generation of athletes through perseverance and outstanding achievements.
          </motion.p>
          
          
          <motion.div 
            className="flex flex-col justify-center gap-4 mt-10 sm:flex-row lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link href="#achievements">
              <button className="px-10 py-4 font-bold text-white transition-all duration-300 transform shadow-lg bg-lime-600 rounded-xl hover:bg-lime-700 hover:-translate-y-1 hover:shadow-xl active:scale-95">
                View Championship Wins
              </button>
            </Link>
            <Link href="#story">
              <button className="px-10 py-4 font-bold transition-all duration-300 transform border-2 shadow-lg text-lime-700 border-lime-600 rounded-xl hover:bg-lime-50 hover:-translate-y-1 active:scale-95">
                My Athletic Journey
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Athlete Image Section - Modern card design */}
        <motion.div 
          className="relative lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative max-w-md mx-auto">
            {/* Main image container with lime accent */}
            <div className="relative z-10 p-6 bg-white shadow-2xl rounded-2xl">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-lime-100 to-lime-50 aspect-[3/4]">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="flex items-center justify-center w-32 h-32 mb-6 rounded-full bg-lime-200/50">
                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-lime-300/70">
                      <span className="text-4xl font-bold text-lime-700">SJR</span>
                    </div>
                  </div>
               
                </div>
                
                {/* Decorative elements */}
                <div className="absolute w-6 h-6 border-2 rounded-full top-4 right-4 border-lime-500/30"></div>
                <div className="absolute w-8 h-8 border-2 rounded-full bottom-4 left-4 border-lime-500/30"></div>
              </div>
            </div>
            
            {/* Floating stats cards */}
            
            <motion.div 
              className="absolute z-20 px-4 py-3 bg-white border-2 rounded-lg shadow-lg -bottom-4 -right-4 border-lime-200"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >

            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Modern scroll indicator with lime accent */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium tracking-wider uppercase text-lime-700">Explore</span>
            <div className="flex justify-center w-6 h-10 mt-1 border-2 rounded-full border-lime-300/50">
              <motion.div 
                className="w-1 h-3 mt-2 rounded-full bg-lime-600"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated background dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-lime-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}