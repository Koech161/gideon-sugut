'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-12 overflow-hidden bg-white"
      aria-label="Janex Jepkogei Hero Section"
    >
      {/* Modern geometric background with emerald theme */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic diagonal grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(45deg, #10b981 1px, transparent 1px),
                            linear-gradient(-45deg, #10b981 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}></div>
        
        {/* Emerald gradient orbs with refined animation */}
        <motion.div 
          className="absolute rounded-full top-1/4 -left-40 w-[500px] h-[500px] bg-emerald-200/20 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute rounded-full w-[400px] h-[400px] bottom-1/3 -right-32 bg-emerald-300/15 blur-[90px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.15, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Modern corner accents - refined design */}
        <div className="absolute top-10 left-10 w-32 h-32 border-t-[3px] border-l-[3px] border-emerald-500/5 rounded-tl-2xl"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border-t-[3px] border-r-[3px] border-emerald-500/5 rounded-tr-2xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border-b-[3px] border-l-[3px] border-emerald-500/5 rounded-bl-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-b-[3px] border-r-[3px] border-emerald-500/5 rounded-br-2xl"></div>
      </div>
      
      <div className="container z-10 flex flex-col items-center gap-16 px-4 mx-auto lg:flex-row">
        {/* Athlete Image Section - Modern running-inspired design */}
        <motion.div 
          className="relative lg:w-2/5"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <div className="relative max-w-sm mx-auto">
            {/* Main image container with athletic design */}
            <div className="relative z-10 p-6 bg-white shadow-2xl rounded-3xl">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-white aspect-[3/4]">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  {/* Champion runner design */}
                  <div className="relative flex items-center justify-center mb-6">
                    <div className="absolute w-32 h-32 rounded-full shadow-lg bg-gradient-to-br from-emerald-400 to-emerald-600 animate-pulse"></div>
                    <div className="relative flex items-center justify-center rounded-full w-28 h-28 bg-emerald-100/80 backdrop-blur-sm">
                      <span className="text-2xl font-bold text-emerald-800">JJ</span>
                    </div>
                  </div>
                  <div className="w-20 h-1 mx-auto my-4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                  <p className="text-sm font-semibold text-emerald-700">Elite Distance Runner</p>
                </div>
                
                {/* Athletic decorative elements */}
                <div className="absolute w-10 h-10 border-2 rounded-full top-8 right-8 border-emerald-400/30 animate-spin-slow"></div>
                <div className="absolute w-8 h-8 border-2 rounded-full bottom-8 left-8 border-emerald-400/30 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
              </div>
            </div>
            
           
          </div>
        </motion.div>

        {/* Text Content - Bold and energetic layout */}
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
            <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></div>
            <span className="px-6 py-3 text-sm font-bold tracking-wider uppercase rounded-full text-emerald-800 bg-emerald-100/80">
              World-Class Athlete
            </span>
            <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-black leading-tight text-gray-900 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <span className="text-emerald-600">JANEX</span> <br />
            <span className="text-emerald-700">JEPKOGEI</span>
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center gap-6 my-8 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent lg:flex-none lg:w-24"></div>
            <h2 className="text-xl font-semibold text-gray-700 sm:text-2xl">
              Kenyan Running Phenomenon
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-emerald-500/50 to-transparent lg:flex-none lg:w-24"></div>
          </motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 lg:mx-0 lg:mr-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Representing the pinnacle of Kenyan athletic excellence, Janex Jepkogei embodies 
            the spirit, determination, and extraordinary talent that has made Kenya synonymous 
            with world-class distance running. With groundbreaking performances and relentless 
            pursuit of greatness, she continues to inspire millions worldwide.
          </motion.p>
          
          <motion.div 
            className="flex flex-col justify-center gap-5 mt-12 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link href="#achievements">
              <button className="px-12 py-4 font-bold text-white transition-all duration-300 transform shadow-lg bg-emerald-600 rounded-xl hover:bg-emerald-700 hover:-translate-y-1 hover:shadow-xl active:scale-95">
                Championship Legacy
              </button>
            </Link>
            <Link href="#about">
              <button className="px-12 py-4 font-bold transition-all duration-300 transform border-2 shadow-lg text-emerald-700 border-emerald-600 rounded-xl hover:bg-emerald-50 hover:-translate-y-1 active:scale-95">
                Journey to Greatness
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.4, 1.3, 0.4],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
}