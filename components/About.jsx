'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-teal-50"
      aria-label="About Ascah Jepkorir Lelei"
      id='about'
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider text-teal-700 uppercase">
            Champion's Journey
          </h2>
          <h1 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">
            About <span className="text-teal-600">Ascah</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-teal-500 to-teal-600"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Main Bio Section */}
          <motion.div
            className="space-y-8 lg:w-3/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-white border-l-4 border-teal-500 shadow-xl rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 mr-4 bg-teal-100 rounded-full">
                  <span className="text-lg font-bold text-teal-700">AJ</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  My Athletic Legacy
                </h2>
              </div>
             <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Hailing from the legendary running region of Eldoret, Kenya, 
                Ascah Jepkorir Lelei discovered her passion for distance running 
                at an early age. Training on the iconic high-altitude trails of 
                the Rift Valley, she developed the exceptional endurance and mental 
                fortitude that would define her championship career.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Specializing in marathon distances, Ascah combines traditional 
                Kenyan running wisdom with modern training techniques. Her journey 
                from local competitions to international podiums represents the 
                dedication and resilience that makes Kenyan athletes world-renowned 
                in endurance sports.
              </p>
            </div>
            
            {/* Key Attributes Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { 
                  title: "Marathon Excellence", 
                  desc: "World-class endurance built through rigorous high-altitude training",
                  icon: "🏃‍♀️"
                },
                { 
                  title: "Race Strategy", 
                  desc: "Masterful pacing with explosive finishing kicks",
                  icon: "⚡"
                },
                { 
                  title: "Mental Toughness", 
                  desc: "Champion's mindset developed through elite competition",
                  icon: "💪"
                },
                { 
                  title: "Community Leadership", 
                  desc: "Inspiring and coaching future generations of Kenyan runners",
                  icon: "🌟"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border border-teal-100 shadow-lg rounded-xl hover:shadow-xl hover:border-teal-200"
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

          {/* Stats & Achievements Sidebar */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 bg-white border border-teal-100 shadow-xl rounded-2xl">
              <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">
                Career Highlights
              </h3>
              
              <div className="space-y-6">
                {[
                  { stat: "2:24:15", label: "Personal Best Marathon", highlight: true },
                  { stat: "15+", label: "International Marathons" },
                  { stat: "8", label: "Gold Medal Finishes" },
                  { stat: "3", label: "Continental Championships" },
                  { stat: "2018", label: "Professional Debut Year" },
                  { stat: "Top 5", label: "World Marathon Majors Ranking" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`p-4 rounded-lg border ${
                      item.highlight 
                        ? 'bg-teal-50 border-teal-200 shadow-sm' 
                        : 'bg-white border-teal-100'
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                  >
                    <div className={`text-2xl font-bold ${
                      item.highlight ? 'text-teal-700' : 'text-gray-800'
                    }`}>
                      {item.stat}
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Training Philosophy */}
              <motion.div 
                className="p-6 mt-8 border border-teal-200 bg-teal-50 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <h4 className="mb-3 font-bold text-teal-800">Training Philosophy</h4>
                <p className="text-sm text-teal-700">
                  "Consistency over intensity. Building endurance through gradual progression 
                  while maintaining peak physical and mental health for optimal performance."
                </p>
              </motion.div>
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
          <div className="inline-block px-8 py-8 shadow-xl bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl">
            <p className="text-xl italic font-medium text-white">
              "Every finish line is just the beginning of the next challenge. True champions never stop pursuing greatness."
            </p>
            <p className="mt-3 font-semibold text-teal-100">- Ascah Jepkorir Lelei</p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute right-0 mt-12 -z-10 opacity-10">
          <div className="w-64 h-64 bg-teal-300 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10">
          <div className="w-48 h-48 bg-teal-200 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}