'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const brandColor = {
    primary: 'emerald-600',
    secondary: 'green-600',
    light: 'emerald-50',
    dark: 'emerald-800',
    gradientFrom: 'emerald-500',
    gradientTo: 'green-500'
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white"
      aria-label="Gideon Kiptoo Sugut - Kenyan Long-Distance Runner"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
        </div>

        <motion.div
          className="absolute rounded-full top-1/4 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-emerald-200/10 to-green-300/5 blur-[80px]"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute rounded-full bottom-1/3 -right-20 w-[250px] h-[250px] bg-gradient-to-tr from-emerald-300/10 to-green-400/5 blur-[60px]"
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div className="flex-col items-start hidden mb-8 sm:flex-row sm:items-center sm:space-x-4">
              <span className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full text-emerald-800 bg-emerald-100/80">
                10k • 21k • 42k
              </span>
              <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-emerald-600 to-green-500" />
            </motion.div>

            {/* Name & Headline */}
            <div className="mb-6">
              <h1 className="mt-16 text-5xl font-bold leading-none text-gray-900 sm:text-6xl lg:text-7xl">
                <span className="block font-light text-gray-600">GIDEON</span>
                <span className="block mt-1 text-emerald-600">KIPTOO SUGUT</span>
                <span className="block mt-1 text-3xl text-gray-400 sm:text-4xl lg:text-5xl">KENYAN LONG-DISTANCE RUNNER</span>
              </h1>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-500 to-green-400"></div>
                <h2 className="text-lg font-medium text-gray-600 sm:text-xl">
                  Rift Valley Endurance Athlete
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="relative pl-6 mt-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-green-500 to-emerald-400"></div>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                Born and raised in the high-altitude training grounds of Kenya's Rift Valley, 
                Gideon Kiptoo Sugut represents the new generation of Kenyan distance running talent. 
                Specializing in the 10k, half marathon, and full marathon distances, Gideon trains 
                rigorously on the famous red-clay trails of Iten. His journey is rooted in the 
                authentic tradition of Kenyan athletics—dedication, discipline, and the relentless 
                pursuit of personal excellence on the local road racing circuit.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4 mt-12">
              <Link href="#about">
                <button className={`px-8 py-3.5 font-semibold text-white rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg shadow-emerald-200/50`}>
                  Follow the Journey
                </button>
              </Link>

              <Link href="#achievements">
                <button className="px-8 py-3.5 font-semibold text-emerald-700 rounded-lg border border-emerald-300 hover:bg-emerald-50 transition-all duration-300">
                  View Results
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">Iten</div>
                <div className="text-sm text-gray-500">Training Base</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">Rift Valley</div>
                <div className="text-sm text-gray-500">Home Region</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">10k/21k/42k</div>
                <div className="text-sm text-gray-500">Race Distances</div>
              </div>
            </div>

          </motion.div>

          {/* Visual Placeholder/Card */}
          <motion.div className="relative order-1 hidden lg:order-2 sm:block">
            <div className="relative max-w-md mx-auto">
              <div className="relative z-10 p-1 shadow-xl bg-gradient-to-br from-emerald-50 to-white rounded-2xl">
                <div className="overflow-hidden rounded-xl aspect-[3/4] bg-gradient-to-b from-white to-emerald-50 flex flex-col items-center justify-center p-8">
                  <div className="mb-6 text-5xl font-bold tracking-wider text-gray-800">
                    GKS
                  </div>
                  <div className="w-16 h-1 mb-3 bg-gradient-to-r from-emerald-500 to-green-400"></div>
                  <p className="text-sm font-medium tracking-widest uppercase text-emerald-600">
                    Rift Valley Runner
                  </p>
                  <p className="mt-2 text-xs text-center text-gray-400">
                    Dedication • Discipline • Endurance
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="absolute w-8 h-8 rounded-full bottom-4 right-4 bg-emerald-100/50"></div>
                  <div className="absolute w-6 h-6 rounded-full top-4 left-4 bg-emerald-200/30"></div>
                </div>
              </div>

              {/* Floating Background Circles */}
              <motion.div 
                className="absolute w-20 h-20 rounded-full -top-4 -right-4 bg-gradient-to-br from-emerald-300/20 to-green-400/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute w-24 h-24 rounded-full -bottom-6 -left-6 bg-gradient-to-tr from-emerald-200/15 to-green-300/5"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}