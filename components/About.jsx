'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-orange-50"
      aria-label="About Faith Jemutai"
      id='about'
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider text-orange-600 uppercase">
            The Speed Specialist
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About <span className="text-orange-600">Faith Jemutai</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-orange-500 to-orange-600"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Main Bio Section */}
          <motion.div
            className="space-y-8 lg:w-3/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-white border-l-4 border-orange-500 shadow-lg rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gradient-to-r from-orange-100 to-orange-50">
                  <span className="text-lg font-bold text-orange-700">FJ</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  From Nandi Hills to World Championships
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Hailing from the legendary running region of Nandi County, Faith Jemutai 
                discovered her sprinting prowess on the same tracks that produced Olympic 
                champions. Her journey from school competitions to global championships 
                exemplifies the raw talent and disciplined training that defines Kenyan 
                middle-distance excellence.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Faith combines explosive acceleration with tactical intelligence, mastering 
                both the 800m and 1500m events with equal proficiency. Her training regimen 
                blends traditional Kenyan endurance work with modern speed development, 
                resulting in the perfect balance of power and stamina needed to dominate 
                on the world stage.
              </p>
            </div>
            
            {/* Key Attributes Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { 
                  title: "Tactical Genius", 
                  desc: "Expert race positioning and strategic decision-making under pressure",
                  icon: "🏃‍♀️"
                },
                { 
                  title: "Versatile Competitor", 
                  desc: "Elite performance across both 800m and 1500m distances",
                  icon: "🎯"
                },
                { 
                  title: "Explosive Kick", 
                  desc: "Unmatched finishing speed in the final 100 meters",
                  icon: "⚡"
                },
                { 
                  title: "Mental Resilience", 
                  desc: "Exceptional focus and composure in high-stakes competitions",
                  icon: "🧠"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border shadow-md border-orange-100 rounded-xl hover:shadow-lg hover:border-orange-200 hover:translate-y-[-2px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  <div className="flex items-center mb-3">
                    <span className="mr-3 text-2xl">{item.icon}</span>
                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats and Training Sidebar */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="sticky space-y-6 top-24">
              {/* Training Focus */}
              <div className="p-6 bg-white border border-orange-100 shadow-lg rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-gray-800">Training Philosophy</h3>
                <ul className="space-y-3">
                  {[
                    "High-altitude conditioning in Iten",
                    "Speed endurance intervals",
                    "Race-specific tactical drills",
                    "Strength & core stability work",
                    "Technical form refinement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="flex items-center justify-center w-5 h-5 mr-3 bg-orange-100 rounded-full">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Quick Stats */}
              <div className="p-6 shadow-lg bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-white">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-orange-400/30">
                    <span className="text-orange-100">Competition Level</span>
                    <span className="font-semibold text-white">World Class</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-orange-400/30">
                    <span className="text-orange-100">Coach</span>
                    <span className="font-semibold text-white">Patrick Sang</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-orange-400/30">
                    <span className="text-orange-100">Training Base</span>
                    <span className="font-semibold text-white">Iten, Kenya</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-100">Years Pro</span>
                    <span className="font-semibold text-white">8+ Years</span>
                  </div>
                </div>
              </div>
              
              {/* Personal Note */}
              <div className="p-5 border border-orange-200 bg-gradient-to-r from-orange-50 to-white rounded-xl">
                <p className="text-sm italic text-gray-700">
                  "My ultimate goal is to inspire young Kenyan girls to pursue athletics 
                  and show that with dedication, anything is possible."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Inspirational Quote Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-block px-8 py-8 shadow-lg bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl">
            <p className="text-xl italic font-medium text-white">
              "On the track, every step is a decision. Every lap is a commitment. 
              The finish line isn't just tape to break—it's proof that preparation 
              meets opportunity. True victory is forged in the discipline of daily grind."
            </p>
            <p className="mt-3 font-semibold text-orange-100">- Faith Jemutai Cherotich</p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute right-0 mt-12 -z-10 opacity-10">
          <div className="w-64 h-64 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10">
          <div className="w-48 h-48 bg-orange-200 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}