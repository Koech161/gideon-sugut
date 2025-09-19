'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50"
      aria-label="About Sharon Jerop Kebenei"
      id='about'
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-sm font-semibold tracking-wider text-blue-600 uppercase">
            The Champion's Journey
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About <span className="text-blue-600">Sharon</span>
          </h1>
          <div className="w-24 h-1 mx-auto bg-blue-600"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Bio and Ethos */}
          <motion.div
            className="space-y-8 lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-white border border-blue-100 shadow-xl rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-8 h-8 mr-3 bg-blue-600 rounded-full">
                  <span className="text-sm font-bold text-white">SK</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-700">
                  My Running Journey
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Hailing from the legendary running grounds of Iten, Kenya, 
                Sharon Jerop Kebenei discovered her extraordinary talent for 
                long-distance running at a young age. Inspired by Kenya's rich 
                athletic heritage, she began her competitive career in local 
                school championships before rapidly progressing to national 
                and international competitions.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Specializing in marathon and half-marathon distances, Sharon combines 
                natural endurance with scientific training methods to achieve exceptional 
                results. Her dedication extends beyond personal achievement as she actively 
                mentors young athletes and promotes women's participation in sports throughout Kenya.
              </p>
            </div>
            
        
          </motion.div>

          {/* Training Philosophy and Image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-6 mb-8 bg-white border border-blue-100 shadow-lg rounded-2xl">
              <div className="flex items-start mb-4">
                <div className="p-2 mr-4 bg-blue-100 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Training Philosophy</h3>
              </div>
              <p className="py-2 pl-4 italic text-gray-700 border-l-4 border-blue-500">
                "Excellence in long-distance running is built on consistency, smart training, and mental resilience. 
                Every step in training is an investment in race day performance, and every challenge is an opportunity to grow stronger."
              </p>
            </div>
            
            

            {/* Futuristic decorative element */}
            <div className="relative h-4 mt-8 overflow-hidden">
              <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
            </div>
          </motion.div>
        </div>

        {/* Motivational Quote Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-block px-8 py-6 border border-blue-100 bg-blue-50 rounded-2xl">
            <p className="text-xl italic font-medium text-blue-800">
              "The road to victory is paved with discipline, determination, and the courage to push beyond limits."
            </p>
            <p className="mt-2 font-semibold text-blue-600">- Sharon Jerop Kebenei</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}