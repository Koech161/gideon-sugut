'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white"
      aria-label="Faith Jemutai - Elite Middle-Distance Runner"
    >
      {/* Dynamic Athletic Pattern Background with Orange */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Abstract track lines with orange accent */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
        </div>

        {/* Animated gradient orbs with orange tones */}
        <motion.div 
          className="absolute rounded-full top-1/4 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-orange-200/10 to-orange-300/5 blur-[80px]"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute rounded-full bottom-1/3 -right-20 w-[250px] h-[250px] bg-gradient-to-tr from-orange-300/10 to-orange-400/5 blur-[60px]"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Subtle corner elements */}
        <div className="absolute w-2 h-32 top-10 left-10 bg-gradient-to-b from-transparent via-orange-400/10 to-transparent"></div>
        <div className="absolute w-2 h-32 top-10 right-10 bg-gradient-to-b from-transparent via-orange-400/10 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Text Content */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex flex-col items-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full text-orange-800 bg-orange-100/80">
                800m & 1500m Specialist
              </span>
              <motion.div 
                className="mt-2 h-0.5 w-12 bg-gradient-to-r from-orange-600 to-orange-400"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            {/* Main Headline */}
            <div className="mb-6">
              <motion.h1 
                className="text-5xl font-bold leading-none text-gray-900 sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className="block font-light text-gray-600">FAITH</span>
                
                <span className="block mt-1 text-orange-600">JEMUTAI</span>
              </motion.h1>
              
              <motion.div 
                className="flex items-center gap-3 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-300"></div>
                <h2 className="text-lg font-medium text-gray-600 sm:text-xl">
                  Olympic Medalist & World Champion
                </h2>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div 
              className="relative pl-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-400"></div>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                Representing Kenya's legacy of middle-distance excellence, Faith combines 
                explosive speed with tactical brilliance to dominate the 800m and 1500m 
                events on the global stage. Olympic medalist and multiple-time African champion.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link href="#achievements" className="group">
                <button className="relative px-8 py-3.5 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 group-hover:scale-[1.02] active:scale-95">
                  <span className="relative z-10">View Medal Collection</span>
                  <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-700 to-orange-600"></div>
                </button>
              </Link>
              
              <Link href="#about" className="group">
                <button className="relative px-8 py-3.5 font-semibold transition-all duration-300 rounded-lg text-orange-700 bg-transparent hover:bg-orange-50 group-hover:scale-[1.02] active:scale-95">
                  <span className="relative z-10">My Journey</span>
                  <div className="absolute inset-0 transition-colors duration-300 border border-orange-300 rounded-lg group-hover:border-orange-400"></div>
                </button>
              </Link>
            </motion.div>

            {/* Stats Bar */}
            <motion.div 
              className="flex gap-8 mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">1:56.98</div>
                <div className="text-sm text-gray-500">800m Personal Best</div>
              </div>
              <div className="h-12 w-0.5 bg-orange-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">3:58.42</div>
                <div className="text-sm text-gray-500">1500m Personal Best</div>
              </div>
              <div className="h-12 w-0.5 bg-orange-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">25+</div>
                <div className="text-sm text-gray-500">International Podiums</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Athlete Visual */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Main Image Container */}
            <div className="relative max-w-md mx-auto">
              <motion.div 
                className="relative z-10 p-1 shadow-xl bg-gradient-to-br from-orange-50 to-white rounded-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-white aspect-[3/4]">
                  {/* Main Content Area */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    {/* Abstract Runner Silhouette */}
                    <motion.div 
                      className="relative mb-8"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-200/50 to-orange-100/30 backdrop-blur-sm"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-300/40 to-orange-400/20 backdrop-blur-sm"></div>
                      </div>
                    </motion.div>
                    
                    {/* Name Initials */}
                    <div className="text-center">
                      <div className="mb-2 text-4xl font-bold tracking-wider text-gray-800">FJC</div>
                      <div className="w-16 h-1 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-orange-300"></div>
                      <p className="text-sm font-medium text-orange-600">Elite Middle-Distance Runner</p>
                    </div>
                  </div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-300/30 rounded-tl-xl"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-orange-300/30 rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-orange-300/30 rounded-bl-xl"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-orange-300/30 rounded-br-xl"></div>
                </div>
              </motion.div>

              {/* Background Accent Elements */}
              <div className="absolute w-32 h-32 rounded-full -bottom-6 -right-6 bg-gradient-to-br from-orange-100/30 to-orange-200/10 blur-xl"></div>
              <div className="absolute w-24 h-24 rounded-full -top-6 -left-6 bg-gradient-to-br from-orange-200/20 to-orange-300/10 blur-xl"></div>
            </div>

            {/* Floating Medal Badges */}
            <motion.div 
              className="absolute -bottom-4 -left-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-gradient-to-br from-orange-200 to-orange-100">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-300">
                  <span className="text-xs font-bold text-orange-800">OLY</span>
                </div>
              </div>
            </motion.div>

            {/* Nationality Badge */}
            <motion.div 
              className="absolute -top-4 -right-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center justify-center rounded-full shadow-lg w-14 h-14 bg-gradient-to-br from-green-500 to-black">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm">
                  <span className="text-xs font-bold text-white">KE</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-orange-400/10"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (Math.random() * 60)}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-center w-6 h-10 border-2 border-orange-300 rounded-full">
            <div className="w-1 h-3 mt-2 bg-orange-400 rounded-full"></div>
          </div>
          <span className="text-xs text-orange-500">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}