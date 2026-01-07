'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white"
      aria-label="Faith Jemutai - Elite Long-Distance Runner"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
        </div>

        <motion.div
          className="absolute rounded-full top-1/4 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-orange-200/10 to-orange-300/5 blur-[80px]"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute rounded-full bottom-1/3 -right-20 w-[250px] h-[250px] bg-gradient-to-tr from-orange-300/10 to-orange-400/5 blur-[60px]"
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
            <motion.div className="inline-flex flex-col items-start mb-8">
              <span className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full text-orange-800 bg-orange-100/80">
                10K • Half Marathon • Marathon
              </span>
              <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-orange-600 to-orange-400" />
            </motion.div>

            {/* Name */}
            <div className="mb-6">
              <h1 className="text-5xl font-bold leading-none text-gray-900 sm:text-6xl lg:text-7xl">
                <span className="block font-light text-gray-600">FAITH</span>
                <span className="block mt-1 text-orange-600">JEMUTAI</span>
              </h1>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-300"></div>
                <h2 className="text-lg font-medium text-gray-600 sm:text-xl">
                  Elite Long-Distance Athlete
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="relative pl-6 mt-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-400"></div>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                A proud representative of Kenya’s legendary endurance tradition,
                Faith specializes in the 10,000m, Half Marathon, and Marathon.
                Built on discipline, resilience, and relentless consistency,
                she thrives over long distances on the world stage.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-12">
              <Link href="#achievements">
                <button className="px-8 py-3.5 font-semibold text-white rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                  View Career Highlights
                </button>
              </Link>

              <Link href="#about">
                <button className="px-8 py-3.5 font-semibold text-orange-700 rounded-lg border border-orange-300 hover:bg-orange-50">
                  Training Journey
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-16">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">31:12</div>
                <div className="text-sm text-gray-500">10K Personal Best</div>
              </div>
              <div className="h-12 w-0.5 bg-orange-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">1:08:45</div>
                <div className="text-sm text-gray-500">Half Marathon PB</div>
              </div>
              <div className="h-12 w-0.5 bg-orange-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">2:26:30</div>
                <div className="text-sm text-gray-500">Marathon PB</div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div className="relative order-1 lg:order-2">
            <div className="relative max-w-md mx-auto">
              <div className="relative z-10 p-1 shadow-xl bg-gradient-to-br from-orange-50 to-white rounded-2xl">
                <div className="overflow-hidden rounded-xl aspect-[3/4] flex flex-col items-center justify-center">
                  <div className="mb-6 text-4xl font-bold tracking-wider text-gray-800">
                    FJC
                  </div>
                  <div className="w-16 h-1 mb-3 bg-gradient-to-r from-orange-500 to-orange-300"></div>
                  <p className="text-sm font-medium text-orange-600">
                    Elite Long-Distance Runner
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
