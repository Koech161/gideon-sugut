'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-12 overflow-hidden bg-white"
      aria-label="Kiptanui Hillary Hero Section"
    >
      {/* Futuristic background with Zinc theme */}
      <div className="absolute inset-0 z-0">
        {/* Geometric grid pattern in Zinc */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23717171' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
        
        {/* Animated gradient elements in Zinc tones */}
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-zinc-300/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute rounded-full bottom-1/3 right-1/4 w-80 h-80 bg-zinc-500/15 blur-3xl animate-pulse-medium"></div>
        
        {/* Dynamic lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent animate-move-line"></div>
        <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-zinc-400/30 to-transparent animate-move-line-vertical"></div>
      </div>
      
      <div className="container z-10 flex flex-col items-center gap-12 px-4 mx-auto lg:flex-row">
        {/* Text Content */}
        <motion.div
          className="space-y-6 text-center lg:w-1/2 lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="px-4 py-2 text-sm font-semibold tracking-wider uppercase rounded-full text-zinc-700 bg-zinc-100">
              Elite Long-Distance Runner
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Kiptanui <span className="text-zinc-600">Hillary</span>
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center gap-3 my-4 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-16 h-0.5 bg-zinc-500"></div>
            <h2 className="text-xl font-medium text-zinc-700 sm:text-2xl">
              Champion Marathon Athlete
            </h2>
            <div className="w-16 h-0.5 bg-zinc-500"></div>
          </motion.div>
          
          <motion.p 
            className="max-w-xl mx-auto text-lg leading-relaxed text-zinc-700 md:text-zinc-800 lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Pushing the boundaries of human endurance, representing Kenya with pride on the global stage. 
            Dedicated to excellence, discipline, and the pursuit of victory in every competition.
          </motion.p>
          
          <motion.p 
            className="flex items-center justify-center gap-2 italic font-medium text-zinc-700 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="text-xl text-zinc-600">•</span> 
            Discipline • Excellence • Victory
            <span className="text-xl text-zinc-600">•</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col justify-center gap-4 mt-8 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link href="#records">
              <button className="px-8 py-3.5 font-semibold text-white transition-all duration-300 transform bg-zinc-800 rounded-lg shadow-lg hover:bg-zinc-900 hover:-translate-y-1 hover:shadow-xl">
                View Achievements
              </button>
            </Link>
            <Link href="#about">
              <button className="px-8 py-3.5 font-semibold text-zinc-800 transition-all duration-300 transform border-2 border-zinc-800 rounded-lg shadow-lg hover:bg-zinc-50 hover:-translate-y-1">
                My Journey
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Athlete Image/Placeholder - Modern circular design */}
        <motion.div 
          className="relative lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full shadow-lg bg-zinc-100/80"></div>
            <div className="relative flex items-center justify-center w-64 h-64 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-400 lg:w-80 lg:h-80">
              <div className="w-56 h-56 rounded-full bg-zinc-300/70 lg:w-72 lg:h-72"></div>
              <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                <span className="text-lg font-medium">Kiptanui Hillary</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Modern scroll indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium tracking-wider uppercase text-zinc-600">Scroll</span>
            <div className="flex justify-center w-5 h-8 mt-1 border-2 rounded-full border-zinc-400/50">
              <motion.div 
                className="w-1 h-2 mt-2 rounded-full bg-zinc-600"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, delay: 0.2 }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        @keyframes move-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes move-line-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 6s ease-in-out infinite;
        }
        .animate-move-line {
          animation: move-line 15s linear infinite;
        }
        .animate-move-line-vertical {
          animation: move-line-vertical 20s linear infinite;
        }
      `}</style>
    </section>
  );
}