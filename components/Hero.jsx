'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const brandColor = {
    primary: 'pink-600',
    secondary: 'rose-600',
    light: 'pink-50',
    dark: 'pink-800',
    gradientFrom: 'pink-500',
    gradientTo: 'rose-500'
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white"
      aria-label="Caroline Jelimo - Elite Kenyan Long-Distance Runner"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-600 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-600 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-600 to-transparent"></div>
        </div>

        <motion.div
          className="absolute rounded-full top-1/4 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-pink-200/10 to-rose-300/5 blur-[80px]"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute rounded-full bottom-1/3 -right-20 w-[250px] h-[250px] bg-gradient-to-tr from-pink-300/10 to-rose-400/5 blur-[60px]"
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Text */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div className="flex-col items-start hidden mb-8 sm:flex-row sm:items-center sm:space-x-4">
              <span className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full text-pink-800 bg-pink-100/80">
                Marathon • 10,000m • 5,000m
              </span>
              <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-pink-600 to-rose-500" />
            </motion.div>

            {/* Name */}
            <div className="mb-6">
              <h1 className="mt-16 text-5xl font-bold leading-none text-gray-900 sm:text-6xl lg:text-7xl">
                <span className="block font-light text-gray-600">CAROLINE</span>
                <span className="block mt-1 text-pink-600">JELIMO</span>
                <span className="block mt-1 text-gray-400">QUEEN OF THE RIFT</span>
              </h1>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-500 to-rose-400"></div>
                <h2 className="text-lg font-medium text-gray-600 sm:text-xl">
                  Elite Kenyan Long-Distance Runner
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="relative pl-6 mt-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 via-rose-500 to-pink-400"></div>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              Hailing from the thin air of Rift Valley, Caroline Jelimo is a force in global road 
              racing, specializing in the 10k, Half-Marathon, and the Full Marathon. 
              By training on the relentless red-clay trails of the Rift Valley, she has 
              engineered an elite aerobic engine capable of withstanding the world's most 
              grueling 42km courses. Known for her metronomic rhythm and tactical patience, 
              Caroline is transitioning from a national standout to a major-marathon 
              contender. She embodies the grit, legacy, and boundless endurance of Kenya’s 
              next generation of distance royalty.
            </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-12">
              <Link href="#achievements">
                <button className={`px-8 py-3.5 font-semibold text-white rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg shadow-pink-200/50`}>
                  View Race Achievements
                </button>
              </Link>

              <Link href="#about">
                <button className="px-8 py-3.5 font-semibold text-pink-700 rounded-lg border border-pink-300 hover:bg-pink-50 transition-all duration-300">
                  My Running Journey
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">Iten</div>
                <div className="text-sm text-gray-500">Training Base</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">Kenya</div>
                <div className="text-sm text-gray-500">National Team</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">10,000m</div>
                <div className="text-sm text-gray-500">Signature Event</div>
              </div>
            </div>

          </motion.div>

          {/* Visual */}
          <motion.div className="relative order-1 hidden lg:order-2 sm:block">
            <div className="relative max-w-md mx-auto">
              {/* Main Image Card */}
              <div className="relative z-10 p-1 shadow-xl bg-gradient-to-br from-pink-50 to-white rounded-2xl">
                <div className="overflow-hidden rounded-xl aspect-[3/4] bg-gradient-to-b from-white to-pink-50 flex flex-col items-center justify-center p-8">
                  <div className="mb-6 text-5xl font-bold tracking-wider text-gray-800">
                    CJ
                  </div>
                  <div className="w-16 h-1 mb-3 bg-gradient-to-r from-pink-500 to-rose-400"></div>
                  <p className="text-sm font-medium text-pink-600">
                    Rift Valley Trained
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    Distance Running Specialist
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="absolute w-8 h-8 rounded-full bottom-4 right-4 bg-pink-100/50"></div>
                  <div className="absolute w-6 h-6 rounded-full top-4 left-4 bg-pink-200/30"></div>
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <motion.div 
                className="absolute w-20 h-20 rounded-full -top-4 -right-4 bg-gradient-to-br from-pink-300/20 to-rose-400/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute w-24 h-24 rounded-full -bottom-6 -left-6 bg-gradient-to-tr from-pink-200/15 to-rose-300/5"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Additional feminine decorative element */}
              <motion.div 
                className="absolute w-16 h-16 rounded-full -top-2 -left-2 bg-gradient-to-br from-pink-400/10 to-rose-500/5 blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}