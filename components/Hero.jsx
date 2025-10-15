'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-12 overflow-hidden bg-white"
      aria-label="Eric Kiprono Sang Hero Section"
    >
      {/* Minimal stone-themed background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle, #78716c 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
        
        {/* Stone gradient orbs with subtle animation */}
        <motion.div 
          className="absolute rounded-full top-1/4 -left-40 w-[500px] h-[500px] bg-stone-200/30 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute rounded-full w-[400px] h-[400px] bottom-1/3 -right-32 bg-stone-300/15 blur-[90px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Minimal corner accents */}
        <div className="absolute w-4 h-4 border rounded top-12 left-12 border-stone-400/20"></div>
        <div className="absolute w-4 h-4 border rounded top-12 right-12 border-stone-400/20"></div>
        <div className="absolute w-4 h-4 border rounded bottom-12 left-12 border-stone-400/20"></div>
        <div className="absolute w-4 h-4 border rounded bottom-12 right-12 border-stone-400/20"></div>
      </div>
      
      <div className="container z-10 flex flex-col items-center gap-16 px-4 mx-auto lg:flex-row">
        {/* Athlete Image Section - Clean and professional */}
        <motion.div 
          className="relative lg:w-2/5"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <div className="relative max-w-sm mx-auto">
            {/* Main image container with elegant shadow */}
            <div className="relative z-10 p-6 bg-white shadow-lg rounded-2xl">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-stone-50 to-white aspect-[3/4]">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  {/* Professional athlete design */}
                  <div className="relative flex items-center justify-center mb-6">
                    <motion.div 
                      className="absolute w-32 h-32 rounded-full shadow-md bg-gradient-to-br from-stone-400 to-stone-600"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="relative flex items-center justify-center rounded-full w-28 h-28 bg-stone-100/80 backdrop-blur-sm">
                      <span className="text-2xl font-bold text-stone-700">EKS</span>
                    </div>
                  </div>
                  
                  {/* Subtle decorative lines */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-stone-400 to-transparent opacity-10"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-stone-400 to-transparent opacity-10"></div>
                  
                  <div className="w-12 h-0.5 mx-auto my-4 bg-gradient-to-r from-stone-500 to-stone-300"></div>
                  <p className="text-sm font-medium text-stone-600">Professional Marathon Runner</p>
                </div>
                
                {/* Minimal decorative elements */}
                <motion.div 
                  className="absolute w-5 h-5 border rounded top-4 right-4 border-stone-400/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-3 h-3 border rounded bottom-4 left-4 border-stone-400/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
           
          </div>
        </motion.div>

        {/* Text Content - Elegant and professional */}
        <motion.div
          className="space-y-8 text-center lg:w-3/5 lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-stone-600"></div>
            <span className="px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full text-stone-700 bg-stone-100/80">
              Elite Athlete
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-stone-600"></div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <span className="text-stone-600">ERIC</span> <br />
            <span className="text-stone-700">KIPRONO SANG</span>
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center gap-3 my-6 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="w-6 h-0.5 bg-stone-500/40"></div>
            <h2 className="text-lg font-medium text-gray-600 sm:text-xl">
              Kenyan Distance Runner
            </h2>
            <div className="w-6 h-0.5 bg-stone-500/40"></div>
          </motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 lg:mx-0 lg:mr-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Eric Kiprono Sang embodies the spirit of Kenyan running excellence. With remarkable 
            endurance, strategic racing intelligence, and consistent podium finishes, he continues 
            to build his legacy in the world of professional marathon running. His dedication to 
            the sport and humble approach inspire the next generation of athletes.
          </motion.p>
          
          <motion.div 
            className="flex flex-col justify-center gap-3 mt-10 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link href="#achievements">
              <button className="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-stone-600 hover:bg-stone-700 hover:shadow-lg active:scale-95">
                View Achievements
              </button>
            </Link>
            <Link href="#about">
              <button className="px-8 py-3 font-semibold transition-all duration-300 border rounded-lg shadow-md text-stone-700 border-stone-600 hover:bg-stone-50 active:scale-95">
                My Story
              </button>
            </Link>
          </motion.div>

          {/* Stats preview */}
          <motion.div 
            className="flex justify-center gap-8 pt-8 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-stone-700">10K</div>
              <div className="text-xs text-stone-500">Personal Best</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-stone-700">2:06</div>
              <div className="text-xs text-stone-500">Marathon Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-stone-700">15+</div>
              <div className="text-xs text-stone-500">Podium Finishes</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-stone-400/15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.2, 1, 0.2],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}