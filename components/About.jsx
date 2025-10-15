'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-stone-50"
      aria-label="About Eric Kiprono Sang"
      id='about'
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase text-stone-600">
            The Distance Runner
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About <span className="text-stone-600">Eric Kiprono Sang</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-stone-500 to-stone-600"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Main Bio Section */}
          <motion.div
            className="space-y-8 lg:w-3/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-white border-l-4 shadow-lg border-stone-500 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-stone-100">
                  <span className="text-lg font-bold text-stone-700">EK</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  From Kenyan Highlands to Global Marathons
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Born and raised in the athletic-rich region of Eldoret, Eric Kiprono Sang 
                discovered his running talent early, inspired by the legacy of Kenyan distance 
                running legends. His journey from local competitions to international marathons 
                showcases the dedication and natural ability that define East African runners.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Eric combines traditional Kenyan running strengths with modern training techniques, 
                resulting in consistent performances that demonstrate both power and precision. 
                His approach to racing emphasizes smart pacing, tactical awareness, and the 
                mental fortitude required to excel at the highest levels of distance running.
              </p>
            </div>
            
            {/* Key Attributes Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { 
                  title: "Strategic Runner", 
                  desc: "Intelligent race planning and tactical execution in every competition",
                  icon: "🧠"
                },
                { 
                  title: "Consistent Performer", 
                  desc: "Reliable results across various courses and conditions",
                  icon: "📊"
                },
                { 
                  title: "Strong Finisher", 
                  desc: "Notable ability to maintain pace and push through final stages",
                  icon: "💪"
                },
                { 
                  title: "Technical Excellence", 
                  desc: "Focus on proper form and efficient running economy",
                  icon: "⚡"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border shadow-md border-stone-100 rounded-xl hover:shadow-lg hover:border-stone-200"
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
            <div className="p-8 bg-white shadow-lg rounded-2xl">
              <h3 className="pb-3 mb-6 text-xl font-bold text-gray-800 border-b border-stone-200">
                Career Highlights
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 font-semibold text-stone-700">Personal Bests</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>10,000m</span>
                      <span className="font-medium">27:45</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Half Marathon</span>
                      <span className="font-medium">1:01:30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Marathon</span>
                      <span className="font-medium">2:06:15</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-stone-700">Training Base</h4>
                  <div className="text-sm text-gray-600">
                    <p>Eldoret, Kenya</p>
                    <p className="mt-1 text-xs text-stone-500">Altitude: 2,100m</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-stone-700">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Marathon', 'Half Marathon', '10K Road', 'Cross Country'].map((specialty, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs rounded-full bg-stone-100 text-stone-700">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-stone-700">Career Milestones</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-stone-500">•</span>
                      <span>Multiple international marathon appearances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-stone-500">•</span>
                      <span>Consistent top-10 finishes in World Marathon Majors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-stone-500">•</span>
                      <span>Represented Kenya in international competitions</span>
                    </li>
                  </ul>
                </div>
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
          <div className="inline-block px-8 py-8 shadow-lg bg-gradient-to-r from-stone-600 to-stone-700 rounded-2xl">
            <p className="text-xl italic font-medium text-white">
              "Running is not just about speed; it's about consistency, strategy, and the 
              mental strength to keep moving forward when every part of you wants to stop. 
              The true victory is in the daily dedication."
            </p>
            <p className="mt-3 font-semibold text-stone-100">- Eric Kiprono Sang</p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute right-0 mt-12 -z-10 opacity-10">
          <div className="w-64 h-64 rounded-full bg-stone-300 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10">
          <div className="w-48 h-48 rounded-full bg-stone-200 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}