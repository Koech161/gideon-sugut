'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-lime-50"
      aria-label="About Robert Kiprop"
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
            The Marathon Champion
          </h2>
          <h1 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">
            About <span className="text-lime-600">Robert Kiprop</span>
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
                  <span className="text-lg font-bold text-lime-700">RK</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  From Humble Beginnings to World Champion
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Hailing from the high-altitude training grounds of Eldoret, Robert Kiprop 
                discovered his extraordinary endurance running to school each day. What began 
                as a daily 10-kilometer commute evolved into a legendary marathon career that 
                has captivated the world of distance running.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Robert embodies the perfect fusion of natural talent and relentless discipline. 
                His consistent pacing, incredible stamina, and explosive finishing kicks have 
                rewritten record books and established new standards for marathon excellence. 
                Beyond his athletic prowess, he remains deeply connected to his roots, mentoring 
                the next generation of Kenyan runners.
              </p>
            </div>
            
            {/* Key Attributes Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                { 
                  title: "Endurance Master", 
                  desc: "Unmatched stamina that breaks opponents in the final 10K",
                  icon: "🏃"
                },
                { 
                  title: "Pace Perfection", 
                  desc: "Flawless rhythm and strategic pacing throughout races",
                  icon: "⏱️"
                },
                { 
                  title: "Record Breaker", 
                  desc: "Consistently pushes the boundaries of human performance",
                  icon: "⭐"
                },
                { 
                  title: "Community Leader", 
                  desc: "Dedicated to developing young talent in Kenya",
                  icon: "🤝"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border shadow-lg border-lime-100 rounded-xl hover:shadow-xl hover:border-lime-200"
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

          {/* Stats and Milestones Sidebar */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 bg-white shadow-xl rounded-2xl">
              <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">
                Career Highlights
              </h3>
              
              <div className="space-y-6">
                {[
                  { year: "2023", event: "Berlin Marathon Champion", time: "2:04:15" },
                  { year: "2022", event: "World Marathon Major Winner", time: "2:04:38" },
                  { year: "2021", event: "Olympic Gold Medalist", time: "2:05:12" },
                  { year: "2020", event: "London Marathon Champion", time: "2:04:45" },
                  { year: "2019", event: "World Championship Silver", time: "2:05:28" },
                  { year: "2018", event: "Chicago Marathon Winner", time: "2:05:55" }
                ].map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center justify-between p-4 transition-all duration-300 border rounded-lg border-lime-100 hover:bg-lime-50 hover:border-lime-200"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                  >
                    <div>
                      <div className="font-semibold text-lime-700">{achievement.year}</div>
                      <div className="text-sm text-gray-600">{achievement.event}</div>
                    </div>
                    <div className="px-3 py-1 text-sm font-bold rounded-full bg-lime-100 text-lime-800">
                      {achievement.time}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Personal Bests */}
              <div className="p-6 mt-8 bg-gradient-to-r from-lime-50 to-lime-100 rounded-xl">
                <h4 className="mb-4 font-bold text-center text-gray-800">Personal Bests</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-lime-700">2:04:15</div>
                    <div className="text-xs text-gray-600">Marathon</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-lime-700">59:30</div>
                    <div className="text-xs text-gray-600">Half Marathon</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-lime-700">27:45</div>
                    <div className="text-xs text-gray-600">10K</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-lime-700">13:10</div>
                    <div className="text-xs text-gray-600">5K</div>
                  </div>
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
          <div className="inline-block px-8 py-8 shadow-xl bg-gradient-to-r from-lime-600 to-lime-700 rounded-2xl">
            <p className="text-xl italic font-medium text-white">
              "The marathon teaches you everything about life. It reveals your strength, 
              exposes your weaknesses, and rewards your perseverance. Every finish line 
              is just the beginning of the next challenge."
            </p>
            <p className="mt-3 font-semibold text-lime-100">- Robert Kiprop</p>
          </div>
        </motion.div>

        {/* Training Philosophy */}
        <motion.div
          className="p-8 mt-16 bg-white shadow-xl rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">
            Training Philosophy
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "High-Altitude Training",
                description: "Training at 2,500m+ elevation for natural endurance enhancement",
                detail: "Based in Iten, Kenya"
              },
              {
                title: "Consistency Over Intensity",
                description: "Sustainable training approach focused on long-term development",
                detail: "200KM+ weekly mileage"
              },
              {
                title: "Holistic Development",
                description: "Balancing physical training with mental preparation and recovery",
                detail: "Yoga & meditation"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 text-center border border-lime-100 rounded-xl">
                <h4 className="mb-3 font-bold text-lime-700">{item.title}</h4>
                <p className="mb-3 text-sm text-gray-600">{item.description}</p>
                <div className="text-xs font-semibold text-lime-600">{item.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute right-0 mt-12 -z-10 opacity-10">
          <div className="w-64 h-64 rounded-full bg-lime-300 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10">
          <div className="w-48 h-48 rounded-full bg-lime-200 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}