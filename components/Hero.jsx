'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-12 overflow-hidden bg-white"
      aria-label="Ascah Jepkorir Lelei Hero Section"
    >
      {/* Dynamic teal geometric background */}
      <div className="absolute inset-0 z-0">
        {/* Modern grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, #0d9488 25%, #0d9488 26%, transparent 27%, transparent 74%, #0d9488 75%, #0d9488 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, #0d9488 25%, #0d9488 26%, transparent 27%, transparent 74%, #0d9488 75%, #0d9488 76%, transparent 77%, transparent)`,
          backgroundSize: '60px 60px',
        }}></div>
        
        {/* Animated teal gradient orbs */}
        <motion.div 
          className="absolute rounded-full top-1/3 -left-32 w-96 h-96 bg-teal-200/40 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute rounded-full w-80 h-80 bottom-1/4 -right-24 bg-teal-300/30 blur-3xl"
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Modern corner accents */}
        <div className="absolute top-0 left-0 w-48 h-48 border-t-4 border-l-4 border-teal-500/10"></div>
        <div className="absolute top-0 right-0 w-48 h-48 border-t-4 border-r-4 border-teal-500/10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 border-b-4 border-l-4 border-teal-500/10"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 border-b-4 border-r-4 border-teal-500/10"></div>
      </div>
      
      <div className="container z-10 flex flex-col items-center gap-16 px-4 mx-auto lg:flex-row-reverse">
        {/* Athlete Image Section - Modern medal-inspired design */}
        <motion.div 
          className="relative lg:w-2/5"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <div className="relative max-w-sm mx-auto">
            {/* Main image container with teal medal design */}
            <div className="relative z-10 p-6 bg-white shadow-2xl rounded-3xl">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 to-white aspect-[3/4]">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  {/* Champion medal design */}
                  <div className="relative flex items-center justify-center mb-6">
                    <div className="absolute w-32 h-32 rounded-full shadow-lg bg-gradient-to-br from-teal-400 to-teal-600 animate-pulse"></div>
                    <div className="relative flex items-center justify-center rounded-full w-28 h-28 bg-teal-100/80 backdrop-blur-sm">
                      <span className="text-2xl font-bold text-teal-800">AJL</span>
                    </div>
                  </div>
                  <div className="w-20 h-1 mx-auto my-4 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
                  <p className="text-sm font-semibold text-teal-700">Marathon Champion</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute w-10 h-10 border-2 rounded-full top-8 right-8 border-teal-400/30 animate-spin-slow"></div>
                <div className="absolute w-8 h-8 border-2 rounded-full bottom-8 left-8 border-teal-400/30 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
              </div>
            </div>
            
           
            
            
          </div>
        </motion.div>

        {/* Text Content - Bold and modern layout */}
        <motion.div
          className="space-y-8 text-center lg:w-3/5 lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="w-3 h-3 bg-teal-600 rounded-full animate-pulse"></div>
            <span className="px-6 py-3 text-sm font-bold tracking-wider text-teal-800 uppercase rounded-full bg-teal-100/80">
              Elite Marathon Runner
            </span>
            <div className="w-3 h-3 bg-teal-600 rounded-full animate-pulse"></div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-black leading-tight text-gray-900 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <span className="text-teal-600">Ascah</span> <br />
            <span className="text-teal-700">Jepkorir</span> <br />
            <span className="text-teal-800">Lelei</span>
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center gap-6 my-8 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex-1 h-0.5 bg-gradient-to-r from-teal-500/50 to-transparent lg:flex-none lg:w-24"></div>
            <h2 className="text-xl font-semibold text-gray-700 sm:text-2xl">
              Kenyan Running Excellence
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-teal-500/50 to-transparent lg:flex-none lg:w-24"></div>
          </motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 lg:mx-0 lg:mr-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Champion marathon runner representing Kenya's rich legacy of endurance athletes. 
            Known for exceptional speed, mental toughness, and record-breaking performances 
            in international competitions. Inspiring the next generation through dedication 
            and unwavering commitment to excellence.
          </motion.p>
          
          <motion.div 
            className="flex flex-col justify-center gap-5 mt-12 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link href="#achievements">
              <button className="px-12 py-4 font-bold text-white transition-all duration-300 transform bg-teal-600 shadow-lg rounded-xl hover:bg-teal-700 hover:-translate-y-1 hover:shadow-xl active:scale-95">
                View Championship Wins
              </button>
            </Link>
            <Link href="#story">
              <button className="px-12 py-4 font-bold text-teal-700 transition-all duration-300 transform border-2 border-teal-600 shadow-lg rounded-xl hover:bg-teal-50 hover:-translate-y-1 active:scale-95">
                My Athletic Journey
              </button>
            </Link>
          </motion.div>

          
        </motion.div>
      </div>
      
      {/* Modern scroll indicator */}
      

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-teal-300/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.4, 1.5, 0.4],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </section>
  );
}