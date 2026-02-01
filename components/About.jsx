'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-pink-50"
      aria-label="About Joan Jepkorir"
      id="about"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider text-pink-600 uppercase">
            The Rift Valley Running Spirit
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About <span className="text-pink-600">Joan Jepkorir</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-pink-500 to-pink-600"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Main Bio */}
          <motion.div
            className="space-y-8 lg:w-3/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-white border-l-4 border-pink-500 shadow-lg rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gradient-to-r from-pink-100 to-pink-50">
                  <span className="text-lg font-bold text-pink-700">JJ</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  From Rift Valley Trails to International Championships
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Born and raised in Kenya's legendary Rift Valley, Joan Jepkorir's 
                running journey began on the high-altitude trails that have produced 
                generations of world-class athletes. Growing up in this running-rich 
                environment, she developed the natural endurance, strength, and mental 
                fortitude that define elite Kenyan distance runners. Her early morning 
                runs through the scenic landscapes of the Rift Valley laid the foundation 
                for what would become a remarkable international running career.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Specializing in long-distance events including cross country and marathon, 
                Joan combines traditional Kenyan running wisdom with contemporary training 
                methodologies. Her training in the Rift Valley's challenging terrain and 
                high-altitude conditions has developed exceptional cardiovascular capacity 
                and the ability to maintain competitive pace across varying race conditions 
                on the global stage.
              </p>
            </div>

            {/* Key Attributes */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Rift Valley Heritage',
                  desc: 'Lifetime of high-altitude training in Kenya\'s most prolific running region',
                  icon: '⛰️',
                },
                {
                  title: 'Distance Specialist',
                  desc: 'Expertise in marathon, cross country, and long-distance track events',
                  icon: '🏃‍♀️',
                },
                {
                  title: 'Aerobic Power',
                  desc: 'Superior oxygen utilization developed through altitude adaptation',
                  icon: '💨',
                },
                {
                  title: 'Kenyan Resilience',
                  desc: 'Mental toughness cultivated through disciplined training in demanding conditions',
                  icon: '💪',
                },
                {
                  title: 'Strategic Racer',
                  desc: 'Intelligent pacing and tactical execution in competitive fields',
                  icon: '🎯',
                },
                {
                  title: 'Economical Form',
                  desc: 'Efficient running mechanics optimized for endurance performance',
                  icon: '⚡',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border border-pink-100 shadow-md rounded-xl hover:shadow-lg hover:border-pink-200 hover:-translate-y-1"
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
              <div className="p-6 bg-white border border-pink-100 shadow-lg rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Rift Valley Training Regimen
                </h3>
                <ul className="space-y-3">
                  {[
                    'High-altitude training in Rift Valley (2000-2800m elevation)',
                    'Distance runs on natural trails and rugged terrain',
                    'Cross-country specific workouts',
                    'Hill repetitions for strength development',
                    'Recovery-focused mobility and stretching routines',
                    'Technical drills for running efficiency',
                    'Periodized training cycles with altitude phases',
                    'Traditional Kenyan distance running techniques',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="flex items-center justify-center w-5 h-5 mr-3 bg-pink-100 rounded-full">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="p-6 shadow-lg bg-gradient-to-br from-pink-600 to-pink-500 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-white">Athlete Profile</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Nationality</span>
                    <span className="font-semibold text-white">Kenyan</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Primary Events</span>
                    <span className="font-semibold text-white">Marathon, Cross Country</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Training Base</span>
                    <span className="font-semibold text-white">Rift Valley, Kenya</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Altitude Training</span>
                    <span className="font-semibold text-white">2000-2800m</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Specialization</span>
                    <span className="font-semibold text-white">Long-Distance Running</span>
                  </div>
                </div>
              </div>

              {/* Personal Note */}
              <div className="p-5 border border-pink-200 bg-gradient-to-r from-pink-50 to-white rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 mr-2 bg-pink-400 rounded-full"></div>
                  <p className="text-sm font-semibold text-pink-700">Running Philosophy</p>
                </div>
                <p className="text-sm italic text-gray-700">
                  "Running is in our blood, in our land, in our spirit. The Rift Valley 
                  doesn't just train athletes—it creates warriors of endurance who carry 
                  our legacy with every stride around the world."
                </p>
              </div>

              {/* Running Style */}
              <div className="p-5 border border-pink-100 bg-gradient-to-r from-pink-600/5 to-pink-500/5 rounded-xl">
                <h4 className="mb-2 font-semibold text-gray-800">Running Style</h4>
                <div className="flex flex-wrap gap-2">
                  {['Powerful', 'Endurance Focused', 'Tactical', 'Consistent', 'Strong Finisher'].map((style, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full">
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
          <div className="inline-block px-8 py-8 shadow-lg bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl">
            <div className="mb-4 text-4xl text-pink-200">"</div>
            <p className="text-xl italic font-medium text-white">
              The Rift Valley is more than a training ground—it's our foundation, 
              our teacher, our home. Every hill we climb, every trail we conquer, 
              every morning we rise before the sun—these are the moments that forge 
              champions. We run with the strength of our ancestors and the hope of 
              future generations.
            </p>
            <p className="mt-3 font-semibold text-pink-100">
              – Joan Jepkorir
            </p>
            <div className="mt-4 text-4xl text-pink-200 transform rotate-180">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}