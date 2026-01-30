'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-emerald-50"
      aria-label="About Grace Njoki"
      id="about"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase text-emerald-600">
            The Rift Valley Running Spirit
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About <span className="text-emerald-600">Grace Njoki</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Main Bio */}
          <motion.div
            className="space-y-8 lg:w-3/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-white border-l-4 shadow-lg border-emerald-500 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50">
                  <span className="text-lg font-bold text-emerald-700">GN</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  From Rift Valley Roads to Global Marathons
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Born and raised in the legendary Rift Valley of Kenya, Grace Njoki's 
                running journey began on the high-altitude trails of her homeland. 
                Growing up in a region that has produced countless world champions, 
                she absorbed the running culture from childhood, developing the natural 
                endurance and mental resilience that defines elite Kenyan distance runners. 
                Her daily runs through the rugged landscapes became the foundation of a 
                promising international marathon career.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Specializing in marathon and half-marathon distances, Grace combines the 
                traditional Kenyan running wisdom passed down through generations with 
                modern sports science. Her training in the Rift Valley's thin air gives 
                her a natural advantage, developing exceptional cardiovascular efficiency 
                and the ability to maintain pace over extreme distances in competitive 
                environments worldwide.
              </p>
            </div>

            {/* Key Attributes */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Rift Valley Heritage',
                  desc: 'Trained from youth in high-altitude conditions that build natural endurance',
                  icon: '⛰️',
                },
                {
                  title: 'Marathon Intelligence',
                  desc: 'Strategic pacing and tactical race management over 42.195km',
                  icon: '🧠',
                },
                {
                  title: 'Aerobic Efficiency',
                  desc: 'Exceptional oxygen utilization from lifelong altitude training',
                  icon: '🏃‍♀️',
                },
                {
                  title: 'Kenyan Resilience',
                  desc: 'Mental toughness forged through disciplined training in challenging terrain',
                  icon: '💪',
                },
                {
                  title: 'Consistent Performer',
                  desc: 'Reliable results across different marathon courses and conditions',
                  icon: '📊',
                },
                {
                  title: 'Efficient Economy',
                  desc: 'Optimized running form for energy conservation over marathon distances',
                  icon: '⚡',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border shadow-md border-emerald-100 rounded-xl hover:shadow-lg hover:border-emerald-200 hover:-translate-y-1"
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
              <div className="p-6 bg-white border shadow-lg border-emerald-100 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Rift Valley Training Regimen
                </h3>
                <ul className="space-y-3">
                  {[
                    'High-altitude training in Rift Valley (2200-2800m)',
                    'Long distance runs on natural trails and dirt roads',
                    'Marathon-specific pace workouts',
                    'Hill repetitions for strength endurance',
                    'Recovery-focused mobility and stretching',
                    'Technical form drills for efficiency',
                    'Periodized training with altitude adaptation',
                    'Traditional Kenyan running techniques',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="flex items-center justify-center w-5 h-5 mr-3 rounded-full bg-emerald-100">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="p-6 shadow-lg bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-white">Athlete Profile</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-emerald-400/30">
                    <span className="text-emerald-100">Nationality</span>
                    <span className="font-semibold text-white">Kenyan</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-emerald-400/30">
                    <span className="text-emerald-100">Primary Events</span>
                    <span className="font-semibold text-white">Marathon, Half Marathon</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-emerald-400/30">
                    <span className="text-emerald-100">Training Base</span>
                    <span className="font-semibold text-white">Rift Valley, Kenya</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-emerald-400/30">
                    <span className="text-emerald-100">Altitude Training</span>
                    <span className="font-semibold text-white">2200-2800m</span>
                  </div>
                </div>
              </div>

              {/* Personal Note */}
              <div className="p-5 border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white rounded-xl">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 mr-2 rounded-full bg-emerald-400"></div>
                  <p className="text-sm font-semibold text-emerald-700">Running Philosophy</p>
                </div>
                <p className="text-sm italic text-gray-700">
                  "The marathon is not just a race; it's a journey that begins in the 
                  valleys of Kenya and finishes on podiums around the world. Every 
                  step is a tribute to our heritage."
                </p>
              </div>

              {/* Running Style */}
              <div className="p-5 border bg-gradient-to-r from-emerald-600/5 to-emerald-500/5 border-emerald-100 rounded-xl">
                <h4 className="mb-2 font-semibold text-gray-800">Running Style</h4>
                <div className="flex flex-wrap gap-2">
                  {['Efficient', 'Strong Finish', 'Patient', 'Strategic', 'Consistent Pace'].map((style, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full text-emerald-700 bg-emerald-100">
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
          <div className="inline-block px-8 py-8 shadow-lg bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl">
            <div className="mb-4 text-4xl text-emerald-200">"</div>
            <p className="text-xl italic font-medium text-white">
              We don't just run; we carry the spirit of the Rift Valley with every 
              stride. The altitude that shaped us, the trails that trained us, and 
              the community that supports us—this is the foundation of Kenyan 
              distance running excellence.
            </p>
            <p className="mt-3 font-semibold text-emerald-100">
              – Grace Njoki
            </p>
            <div className="mt-4 text-4xl transform rotate-180 text-emerald-200">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}