'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-orange-50"
      aria-label="About Faith Jemutai"
      id="about"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider text-orange-600 uppercase">
            Built for Endurance
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About <span className="text-orange-600">Faith Jemutai</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-orange-500 to-orange-600"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Main Bio */}
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
                  From Rift Valley to the Long Roads of the World
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Born and raised in Rift Valley, the heartland of Kenyan endurance running,
                Faith Jemutai’s journey began on dusty village roads and rolling hills.
                What started as school races evolved into a lifelong pursuit of distance
                mastery, forged by patience, discipline, and relentless consistency.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Specializing in the 10,000m, Half Marathon, and Marathon, Faith thrives
                where strength meets strategy. Her approach to racing is built on controlled
                pacing, mental resilience, and the ability to sustain effort over extreme
                distances qualities that define elite long-distance athletes on the global stage.
              </p>
            </div>

            {/* Key Attributes */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Endurance Engine',
                  desc: 'Exceptional aerobic capacity and sustained pace over long distances',
                  icon: '🛣️',
                },
                {
                  title: 'Pacing Mastery',
                  desc: 'Disciplined race execution from the first kilometer to the final kick',
                  icon: '⏱️',
                },
                {
                  title: 'Mental Toughness',
                  desc: 'Unshakable focus through pain, fatigue, and high-pressure moments',
                  icon: '🧠',
                },
                {
                  title: 'Consistency',
                  desc: 'Reliable performances across seasons, terrains, and competition levels',
                  icon: '🔁',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border border-orange-100 shadow-md rounded-xl hover:shadow-lg hover:border-orange-200 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
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

          {/* Sidebar */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="sticky space-y-6 top-24">
              {/* Training Philosophy */}
              <div className="p-6 bg-white border border-orange-100 shadow-lg rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Training Philosophy
                </h3>
                <ul className="space-y-3">
                  {[
                    'High-altitude endurance training in Iten',
                    'Long aerobic base runs',
                    'Tempo and threshold workouts',
                    'Marathon-specific pace sessions',
                    'Strength, mobility & injury prevention',
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
                    <span className="text-orange-100">Primary Events</span>
                    <span className="font-semibold text-white">10K • 21K • 42K</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-orange-400/30">
                    <span className="text-orange-100">Training Base</span>
                    <span className="font-semibold text-white">Iten, Kenya</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-orange-400/30">
                    <span className="text-orange-100">Competition Level</span>
                    <span className="font-semibold text-white">International</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-100">Years Competing</span>
                    <span className="font-semibold text-white">8+ Years</span>
                  </div>
                </div>
              </div>

              {/* Personal Note */}
              <div className="p-5 border border-orange-200 bg-gradient-to-r from-orange-50 to-white rounded-xl">
                <p className="text-sm italic text-gray-700">
                  “Distance running teaches patience. You don’t rush the marathon—
                  you respect it, prepare for it, and earn every kilometer.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-block px-8 py-8 shadow-lg bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl">
            <p className="text-xl italic font-medium text-white">
              “Long-distance running is not about speed alone. It is about patience,
              discipline, and the courage to keep moving forward when your body
              asks you to stop.”
            </p>
            <p className="mt-3 font-semibold text-orange-100">
              – Faith Jemutai
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
