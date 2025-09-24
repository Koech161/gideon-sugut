'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-violet-50/20"
      aria-label="About Hilda Cheptoo Biwott"
      id='about'
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase text-violet-700">
            Elite Runner's Journey
          </h2>
          <h1 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">
            About <span className="text-violet-600">Hilda</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-violet-500 to-violet-600"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Main Bio Section */}
          <motion.div
            className="space-y-8 lg:w-3/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-white border-l-4 shadow-xl border-violet-500 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-violet-100">
                  <span className="text-lg font-bold text-violet-700">HC</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  My Running Legacy
                </h2>
              </div>
             <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Born and raised in the legendary running heartland of Iten, Kenya, 
                Hilda Cheptoo Biwott was destined for greatness. From early morning 
                training sessions on the high-altitude trails to international marathon 
                victories, her journey embodies the spirit of Kenyan endurance running.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Specializing in marathon and half-marathon distances, Hilda combines 
                innate talent with disciplined training regimens. Her remarkable career 
                showcases the perfect blend of natural ability, scientific training, 
                and unwavering mental strength that defines elite Kenyan athletes.
              </p>
            </div>
            
            {/* Key Attributes Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { 
                  title: "Endurance Mastery", 
                  desc: "Exceptional stamina built through high-altitude training",
                  icon: "🏔️"
                },
                { 
                  title: "Strategic Racing", 
                  desc: "Intelligent pace control with powerful final surges",
                  icon: "🎯"
                },
                { 
                  title: "Mental Resilience", 
                  desc: "Champion's mindset forged through intense competition",
                  icon: "🧠"
                },
                { 
                  title: "Youth Inspiration", 
                  desc: "Mentoring next generation of East African runners",
                  icon: "👥"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border shadow-lg border-violet-100 rounded-xl hover:shadow-xl hover:border-violet-200"
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

         
        </div>

        {/* Inspirational Quote Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-block px-8 py-8 shadow-xl bg-gradient-to-r from-violet-600 to-violet-700 rounded-2xl">
            <p className="text-xl italic font-medium text-white">
              "The road doesn't care about your past victories—it only respects your next step. Keep moving forward."
            </p>
            <p className="mt-3 font-semibold text-violet-100">- Hilda Cheptoo Biwott</p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute right-0 mt-12 -z-10 opacity-10">
          <div className="w-64 h-64 rounded-full bg-violet-300 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}