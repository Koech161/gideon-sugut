'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-lime-50/30"
      aria-label="About Selly Jepng'etich Rono"
      id='about'
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase text-lime-700">
            Champion's Story
          </h2>
          <h1 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">
            About <span className="text-lime-600">Selly</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-lime-500 to-lime-600"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Main Bio Section */}
          <motion.div
            className="space-y-8 lg:w-3/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-white border-l-4 shadow-xl border-lime-500 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-lime-100">
                  <span className="text-lg font-bold text-lime-700">SR</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  My Athletic Journey
                </h2>
              </div>
             <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Hailing from the athletic-rich highlands of Eldoret, Kenya, 
                Selly Jepng'etich Rono discovered her passion for running at a young age. 
                Growing up in a region known for producing world-class athletes, she 
                quickly stood out with her exceptional endurance and determination.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Specializing in marathon events, Selly combines traditional Kenyan 
                training methods with cutting-edge sports science. Her journey from 
                local competitions to international podiums is a testament to her 
                dedication and the supportive running community that nurtured her talent.
              </p>
            </div>
            
            {/* Key Attributes Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { 
                  title: "Training Philosophy", 
                  desc: "High-altitude conditioning meets strategic pace management",
                  icon: "🏃‍♀️"
                },
                { 
                  title: "Race Strategy", 
                  desc: "Smart pacing with explosive finishing kicks",
                  icon: "⚡"
                },
                { 
                  title: "Mental Fortitude", 
                  desc: "Champion mindset developed through rigorous competition",
                  icon: "💪"
                },
                { 
                  title: "Community Impact", 
                  desc: "Inspiring young athletes across East Africa",
                  icon: "🌟"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-6 transition-shadow bg-white border shadow-lg border-lime-100 rounded-xl hover:shadow-xl"
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

          {/* Stats and Achievements Sidebar */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            
          </motion.div>
        </div>

        {/* Inspirational Quote Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-block px-8 py-8 shadow-xl bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl">
            <p className="text-xl italic font-medium text-white">
              "Every finish line is just the beginning of the next challenge. True champions keep moving forward."
            </p>
            <p className="mt-3 font-semibold text-lime-100">- Selly Jepng'etich Rono</p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute right-0 mt-12 -z-10 opacity-10">
          <div className="w-64 h-64 rounded-full bg-lime-300 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}