'use client';
import { motion } from 'framer-motion';

export default function About() {
  const brandColor = {
    primary: 'pink-600',
    secondary: 'slate-900',
    light: 'pink-50',
    dark: 'pink-800',
    gradientFrom: 'pink-500',
    gradientTo: 'pink-700'
  };

  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-pink-50"
      aria-label="About Caroline Jelimo"
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
            Mastering the Roads from 10k to the Marathon
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About <span className="text-pink-600">Caroline Jelimo</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-pink-500 to-pink-700"></div>
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
                  <span className="text-lg font-bold text-pink-700">CJ</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Built for the Long Road
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Hailing from the thin air of Riftw Valley, Kenya, Caroline Jelimo is a testament to the endurance of the Rift Valley. While many specialize early, Caroline’s journey has been one of gradual conquest. From dominating local 10k road races to her breakthrough 67-minute half marathon, she has transitioned into the 42.195km distance with the poise of a veteran. Her training is a relentless pursuit of the "Marathon State"—a balance of physical toughness and the mental silence required to conquer the final 10 kilometers of a world-major race.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                With a marathon personal best of 2:21:42, Caroline is no longer just a "rising star"—she is a calculated force on the World Marathon Majors circuit. Whether it's the tactical maneuvering of a 10k or the grueling attrition of a 42k, her strategy remains the same: relentless rhythm and an unbreakable spirit.
              </p>
            </div>

            {/* Key Attributes */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Marathon Engine',
                  desc: 'A 2:21:42 personal best, showcasing elite aerobic capacity and fueling efficiency.',
                  icon: '🏁',
                },
                {
                  title: 'Half-Marathon Speed',
                  desc: 'Clocked a blistering 1:07:15, proving her ability to maintain high intensity over 21k.',
                  icon: '🥈',
                },
                {
                  title: '10k Foundation',
                  desc: 'Utilizes 31-minute 10k speed to dominate tactical finishes in long-distance events.',
                  icon: '⚡',
                },
                {
                  title: 'Altitude Hardened',
                  desc: 'Lifetime of training at 2,400m in Iten, yielding a natural biological advantage.',
                  icon: '🏔️',
                },
                {
                  title: 'Mechanical Efficiency',
                  desc: 'Renowned for a "quiet" upper body and a mid-foot strike that minimizes impact over 42k.',
                  icon: '⚙️',
                },
                {
                  title: 'Global Competitor',
                  desc: 'Top-tier finishes in London, Berlin, and Valencia road circuits.',
                  icon: '🌍',
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
                  The Marathon Build
                </h3>
                <ul className="space-y-3">
                  {[
                    '180-200km weekly volume in peak marathon prep',
                    '35km "Monster" long runs on the Iten-Eldoret road',
                    'Progressive tempo runs starting at 3:15/km pace',
                    'High-protein recovery fueled by traditional Mursik',
                    'Mental visualization for the "Wall" at 35km',
                    'Bi-weekly physio and mobility for injury prevention',
                    'Specific 10k speedwork to maintain leg turnover',
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
              <div className="p-6 shadow-lg bg-gradient-to-br from-pink-600 to-pink-800 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-white">Career Personal Bests</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Marathon (42.2k)</span>
                    <span className="font-semibold text-white">2:21:42</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Half Marathon (21.1k)</span>
                    <span className="font-semibold text-white">1:07:15</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">10,000m / 10k Road</span>
                    <span className="font-semibold text-white">30:41 / 31:02</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Training Base</span>
                    <span className="font-semibold text-white">Iten, Kenya</span>
                  </div>
                </div>
              </div>

              {/* Running Style */}
              <div className="p-5 border border-pink-100 bg-gradient-to-r from-pink-600/5 to-pink-500/5 rounded-xl">
                <h4 className="mb-2 font-semibold text-gray-800">Race Strategy</h4>
                <div className="flex flex-wrap gap-2">
                  {['Negative Splits', 'Uphill Specialist', 'Metronomic Pacing', 'Calm Under Heat', 'Aggressive Surging'].map((style, i) => (
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
          <div className="inline-block px-8 py-8 shadow-lg bg-gradient-to-r from-pink-700 to-slate-900 rounded-2xl">
            <div className="mb-4 text-4xl text-pink-200">"</div>
            <p className="max-w-3xl text-xl italic font-medium text-white">
              The 10k is a sprint, the half is a test, but the marathon is a conversation with your soul. 
              In Iten, we don't run to escape our limits—we run to find where they begin. 
              Every kilometer is a step closer to the legacy of those who came before me.
            </p>
            <p className="mt-3 font-semibold text-pink-100">
              – Caroline Jelimo
            </p>
            <div className="mt-4 text-4xl text-pink-200 transform rotate-180">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}