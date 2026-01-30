'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white"
      aria-label="Grace Njoki - Elite Kenyan Long-Distance Runner"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
        </div>

        <motion.div
          className="absolute rounded-full top-1/4 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-emerald-200/10 to-emerald-300/5 blur-[80px]"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute rounded-full bottom-1/3 -right-20 w-[250px] h-[250px] bg-gradient-to-tr from-emerald-300/10 to-emerald-400/5 blur-[60px]"
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
              <span className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full text-emerald-800 bg-emerald-100/80">
                Marathon • Half Marathon • Cross Country
              </span>
              <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-emerald-600 to-emerald-400" />
            </motion.div>

            {/* Name */}
            <div className="mb-6">
              <h1 className="text-5xl font-bold leading-none text-gray-900 sm:text-6xl lg:text-7xl">
                <span className="block font-light text-gray-600">GRACE</span>
                <span className="block mt-1 text-emerald-600">NJOKI</span>
              </h1>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-300"></div>
                <h2 className="text-lg font-medium text-gray-600 sm:text-xl">
                  Elite Kenyan Long-Distance Runner
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="relative pl-6 mt-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-400"></div>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                Hailing from the legendary Rift Valley, Grace Njoki embodies the resilience and 
                determination of Kenya's world-class distance running tradition. Trained amidst 
                the high-altitude landscapes that have produced champions for decades, Grace 
                specializes in marathon and half-marathon distances. Her running philosophy 
                combines natural athleticism forged in the valleys of Kenya with disciplined 
                training and tactical race intelligence.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-12">
              <Link href="#achievements">
                <button className="px-8 py-3.5 font-semibold text-white rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300">
                  View Race Achievements
                </button>
              </Link>

              <Link href="#about">
                <button className="px-8 py-3.5 font-semibold text-emerald-700 rounded-lg border border-emerald-300 hover:bg-emerald-50 transition-all duration-300">
                  My Running Journey
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">Rift Valley</div>
                <div className="text-sm text-gray-500">Training Ground</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">Kenya</div>
                <div className="text-sm text-gray-500">National Team</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">Elite</div>
                <div className="text-sm text-gray-500">World Athletics</div>
              </div>
            </div>

          </motion.div>

          {/* Visual */}
          <motion.div className="relative order-1 hidden lg:order-2 sm:block">
            <div className="relative max-w-md mx-auto">
              {/* Main Image Card */}
              <div className="relative z-10 p-1 shadow-xl bg-gradient-to-br from-emerald-50 to-white rounded-2xl">
                <div className="overflow-hidden rounded-xl aspect-[3/4] bg-gradient-to-b from-white to-emerald-50 flex flex-col items-center justify-center p-8">
                  <div className="mb-6 text-4xl font-bold tracking-wider text-gray-800">
                    GN
                  </div>
                  <div className="w-16 h-1 mb-3 bg-gradient-to-r from-emerald-500 to-emerald-300"></div>
                  <p className="text-sm font-medium text-emerald-600">
                    Rift Valley Trained
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    Marathon Specialist
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="absolute w-8 h-8 rounded-full bottom-4 right-4 bg-emerald-100/50"></div>
                  <div className="absolute w-6 h-6 rounded-full top-4 left-4 bg-emerald-200/30"></div>
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <motion.div 
                className="absolute w-20 h-20 rounded-full -top-4 -right-4 bg-gradient-to-br from-emerald-300/20 to-emerald-400/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute w-24 h-24 rounded-full -bottom-6 -left-6 bg-gradient-to-tr from-emerald-200/15 to-emerald-300/5"
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