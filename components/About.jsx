'use client';
import { motion } from 'framer-motion';

// Sample milestones data
const milestones = [
  {
    year: '2024',
    event: 'Nairobi City Marathon',
    achievement: '1st Place Finish - Personal Best 2:08:45',
  },
  {
    year: '2023',
    event: 'Great Rift Valley Marathon',
    achievement: 'Course Record - 2:10:30',
  },
  {
    year: '2022',
    event: 'East African Championships',
    achievement: 'Gold Medal - Half Marathon',
  },
];

export default function About() {
  return (
    <section
      className="py-16 min-h-screen bg-gradient-to-b from-gray-900 to-black"
      aria-label="About Kitur Cyprian Kipkemei"
      id='about'
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-pink-500 uppercase tracking-wider mb-2">
            The Champion's Journey
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-pink-500">Kitur</span>
          </h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Bio and Ethos */}
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 p-8 rounded-xl border border-pink-900/30 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">KC</span>
                </div>
                <h2 className="text-2xl font-bold text-pink-400">
                  My Running Journey
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Hailing from the high-altitude training grounds of Eldoret, Kenya, 
                Kitur Cyprian Kipkemei discovered his passion for running at an early age. 
                Inspired by the legendary Kenyan athletes from his region, he began his 
                competitive career in local school championships before progressing to 
                national and international competitions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Specializing in marathon and half-marathon distances, Kitur combines natural 
                talent with disciplined training to achieve exceptional results. His dedication 
                to the sport extends beyond personal achievement, as he aims to inspire the 
                next generation of Kenyan athletes through mentorship and community engagement.
              </p>
            </div>
            
           
          </motion.div>

          {/* Milestones */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* <div className="bg-gray-800/50 p-8 rounded-xl border border-pink-900/30 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-pink-400">
                  Career Highlights
                </h2>
              </div>
              
              <div className="space-y-6 relative">
                
                <div className="absolute left-7 top-2 bottom-2 w-0.5 bg-pink-500/30"></div>
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-6 p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-14 h-14 rounded-full bg-pink-900/50 flex items-center justify-center border-2 border-pink-500/50 group-hover:border-pink-500 transition-colors">
                        <span className="text-pink-400 font-bold text-lg">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-pink-300 transition-colors">
                        {milestone.event}
                      </h3>
                      <p className="text-pink-200 mt-2">{milestone.achievement}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}
            
            <div className="mt-8 bg-pink-900/20 p-6 rounded-xl border border-pink-800/30">
              <h3 className="text-lg font-semibold text-pink-400 mb-3">Training Philosophy</h3>
              <p className="text-gray-300 italic">
                "Success in marathon running comes from consistency, discipline, and listening to your body. 
                Every kilometer run in training translates to strength on race day."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}