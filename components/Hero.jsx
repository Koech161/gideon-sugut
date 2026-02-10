'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const brandColor = {
    primary: 'orange-600',
    secondary: 'red-600',
    light: 'orange-50',
    dark: 'orange-800',
    gradientFrom: 'orange-600',
    gradientTo: 'red-600'
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white"
      aria-label="Meshack Kipruto - Elite Kenyan Long-Distance Runner"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </div>

        <motion.div
          className="absolute rounded-full top-1/4 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-orange-200/10 to-red-300/5 blur-[80px]"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute rounded-full bottom-1/3 -right-20 w-[250px] h-[250px] bg-gradient-to-tr from-orange-300/10 to-red-400/5 blur-[60px]"
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
              <span className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full text-orange-800 bg-orange-100/80">
                Marathon • 10,000m • Cross Country
              </span>
              <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-orange-600 to-red-500" />
            </motion.div>

            {/* Name */}
            <div className="mb-6">
              <h1 className="text-5xl font-bold leading-none text-gray-900 sm:text-6xl lg:text-7xl">
                <span className="block font-light text-gray-600">MESHACK</span>
                <span className="block mt-1 text-orange-600">KIPRUTO</span>
                <span className="block mt-1 text-gray-400">RIFT VALLEY CHAMPION</span>
              </h1>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-red-400"></div>
                <h2 className="text-lg font-medium text-gray-600 sm:text-xl">
                  Elite Kenyan Long-Distance Runner
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="relative pl-6 mt-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-red-500 to-orange-400"></div>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                Born and raised in the legendary Rift Valley region of Kenya, Meshack Kipruto 
                embodies the grit and determination of East Africa's distance running heritage. 
                Training at high-altitude in the very landscapes that have produced world champions, 
                Meshack specializes in marathon and 10,000-meter distances. His running combines 
                the natural endurance forged in Kenya's highlands with disciplined training regimens 
                and strategic race intelligence, making him one of the most promising talents 
                emerging from the Rift Valley training camps.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-12">
              <Link href="#achievements">
                <button className={`px-8 py-3.5 font-semibold text-white rounded-lg bg-gradient-to-r from-${brandColor.gradientFrom} to-${brandColor.gradientTo} hover:from-orange-700 hover:to-red-600 transition-all duration-300`}>
                  View Race Achievements
                </button>
              </Link>

              <Link href="#about">
                <button className="px-8 py-3.5 font-semibold text-orange-700 rounded-lg border border-orange-300 hover:bg-orange-50 transition-all duration-300">
                  My Running Journey
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">Rift Valley</div>
                <div className="text-sm text-gray-500">Training Ground</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">Kenya</div>
                <div className="text-sm text-gray-500">National Team</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">Marathon</div>
                <div className="text-sm text-gray-500">Specialist</div>
              </div>
            </div>

          </motion.div>

          {/* Visual */}
          <motion.div className="relative order-1 hidden lg:order-2 sm:block">
            <div className="relative max-w-md mx-auto">
              {/* Main Image Card */}
              <div className="relative z-10 p-1 shadow-xl bg-gradient-to-br from-orange-50 to-white rounded-2xl">
                <div className="overflow-hidden rounded-xl aspect-[3/4] bg-gradient-to-b from-white to-orange-50 flex flex-col items-center justify-center p-8">
                  <div className="mb-6 text-4xl font-bold tracking-wider text-gray-800">
                    MK
                  </div>
                  <div className="w-16 h-1 mb-3 bg-gradient-to-r from-orange-500 to-red-400"></div>
                  <p className="text-sm font-medium text-orange-600">
                    Rift Valley Trained
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    Distance Running Specialist
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="absolute w-8 h-8 rounded-full bottom-4 right-4 bg-orange-100/50"></div>
                  <div className="absolute w-6 h-6 rounded-full top-4 left-4 bg-orange-200/30"></div>
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <motion.div 
                className="absolute w-20 h-20 rounded-full -top-4 -right-4 bg-gradient-to-br from-orange-300/20 to-red-400/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute w-24 h-24 rounded-full -bottom-6 -left-6 bg-gradient-to-tr from-orange-200/15 to-red-300/5"
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