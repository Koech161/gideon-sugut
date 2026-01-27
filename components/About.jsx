'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-fuchsia-50"
      aria-label="About Joylene Jepleting"
      id="about"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase text-fuchsia-600">
            The Kenyan Running Spirit
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About <span className="text-fuchsia-600">Joylene Jepleting</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-fuchsia-500 to-fuchsia-600"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Main Bio */}
          <motion.div
            className="space-y-8 lg:w-3/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-white border-l-4 shadow-lg border-fuchsia-500 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gradient-to-r from-fuchsia-100 to-fuchsia-50">
                  <span className="text-lg font-bold text-fuchsia-700">JJ</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  From Kenya's High Altitudes to Global Podiums
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Born and raised in Kenya's renowned Rift Valley region, Joylene Jepleting's 
                running journey began on the red dirt roads of her homeland. Growing up in 
                a community where running is a way of life, she developed the natural 
                endurance and mental fortitude that defines Kenyan distance runners. Her 
                early morning runs to school were the foundation of what would become an 
                elite international career.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Specializing in the 10,000 meters and road races from half marathon to 
                marathon distances, Joylene combines traditional Kenyan running wisdom 
                with modern sports science. Her approach emphasizes sustainable pacing, 
                strategic racing intelligence, and the ability to perform consistently 
                at the highest levels of international competition.
              </p>
            </div>

            {/* Key Attributes */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Aerobic Excellence',
                  desc: 'Superior oxygen utilization and sustained pace over extreme distances',
                  icon: '🏃‍♀️',
                },
                {
                  title: 'Race Intelligence',
                  desc: 'Strategic positioning and tactical decision-making during competitions',
                  icon: '🧠',
                },
                {
                  title: 'High-Altitude Advantage',
                  desc: 'Natural adaptation to thin air from lifelong training in Rift Valley',
                  icon: '⛰️',
                },
                {
                  title: 'Resilient Spirit',
                  desc: 'Mental toughness developed through years of disciplined training',
                  icon: '💪',
                },
                {
                  title: 'Consistent Performer',
                  desc: 'Reliable results across different courses, climates, and competition levels',
                  icon: '📊',
                },
                {
                  title: 'Technical Efficiency',
                  desc: 'Flawless running form optimized for energy conservation over distance',
                  icon: '⚡',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border shadow-md border-fuchsia-100 rounded-xl hover:shadow-lg hover:border-fuchsia-200 hover:-translate-y-1"
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
              <div className="p-6 bg-white border shadow-lg border-fuchsia-100 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Training Philosophy
                </h3>
                <ul className="space-y-3">
                  {[
                    'High-altitude training in Rift Valley (2400m+)',
                    'Long aerobic runs building endurance foundation',
                    'Threshold workouts for lactate tolerance',
                    'Specific marathon pace sessions',
                    'Recovery-focused strength & mobility work',
                    'Technical drills for running efficiency',
                    'Periodized training cycles',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="flex items-center justify-center w-5 h-5 mr-3 rounded-full bg-fuchsia-100">
                        <div className="w-2 h-2 rounded-full bg-fuchsia-500"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="p-6 shadow-lg bg-gradient-to-br from-fuchsia-600 to-fuchsia-500 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-white">Athlete Profile</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-fuchsia-400/30">
                    <span className="text-fuchsia-100">Nationality</span>
                    <span className="font-semibold text-white">Kenyan</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-fuchsia-400/30">
                    <span className="text-fuchsia-100">Specialty Events</span>
                    <span className="font-semibold text-white">10K, 21K, Marathon</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-fuchsia-400/30">
                    <span className="text-fuchsia-100">Training Base</span>
                    <span className="font-semibold text-white">Rift Valley, Kenya</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-fuchsia-400/30">
                    <span className="text-fuchsia-100">Competition Level</span>
                    <span className="font-semibold text-white">World Athletics</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-fuchsia-100">Years Elite</span>
                    <span className="font-semibold text-white">6+ Years</span>
                  </div>
                </div>
              </div>

              {/* Personal Note */}
              <div className="p-5 border border-fuchsia-200 bg-gradient-to-r from-fuchsia-50 to-white rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 mr-2 rounded-full bg-fuchsia-400"></div>
                  <p className="text-sm font-semibold text-fuchsia-700">Running Mindset</p>
                </div>
                <p className="text-sm italic text-gray-700">
                  "Every kilometer is a conversation between your mind and body. 
                  Listen carefully, respond wisely, and keep moving forward."
                </p>
              </div>

              {/* Running Style */}
              <div className="p-5 border bg-gradient-to-r from-fuchsia-600/5 to-fuchsia-500/5 border-fuchsia-100 rounded-xl">
                <h4 className="mb-2 font-semibold text-gray-800">Running Style</h4>
                <div className="flex flex-wrap gap-2">
                  {['Efficient', 'Rhythmic', 'Patient', 'Strategic', 'Strong Finish'].map((style, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full text-fuchsia-700 bg-fuchsia-100">
                      {style}
                    </span>
                  ))}
                </div>
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
          <div className="inline-block px-8 py-8 shadow-lg bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 rounded-2xl">
            <div className="mb-4 text-4xl">"</div>
            <p className="text-xl italic font-medium text-white">
              Running is in our blood, in our history, in our land. But it's the daily 
              discipline, the early mornings, and the quiet dedication that transforms 
              that heritage into results on the world stage.
            </p>
            <p className="mt-3 font-semibold text-fuchsia-100">
              – Joylene Jepleting
            </p>
            <div className="mt-4 text-4xl transform rotate-180">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}