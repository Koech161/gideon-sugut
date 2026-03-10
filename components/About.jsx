'use client';
import { motion } from 'framer-motion';

export default function About() {
  const brandColor = {
    primary: 'emerald-600',
    secondary: 'slate-900',
    light: 'emerald-50',
    dark: 'emerald-800',
    gradientFrom: 'emerald-500',
    gradientTo: 'emerald-700'
  };

  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-emerald-50"
      aria-label="About Gideon Kiptoo Sugut"
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
            A Rising Name in Kenyan Distance Running
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            About <span className="text-emerald-600">Gideon Kiptoo Sugut</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-emerald-500 to-emerald-700"></div>
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
                  <span className="text-lg font-bold text-emerald-700">GKS</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Forged in the Rift Valley
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Gideon Kiptoo Sugut represents the authentic spirit of Kenyan distance running. 
                Born and raised in the high-altitude region of the Rift Valley, his journey began 
                on the dusty roads leading to and from school, where he first discovered his natural 
                endurance. Today, he trains among the competitive packs in Iten, the world-renowned 
                "Home of Champions," focusing his efforts on mastering the 10km, half marathon, 
                and marathon distances on the local road racing circuit.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Known among his training partners for his disciplined approach and consistent 
                improvement, Gideon approaches each race with patience and strategic intelligence. 
                While his focus remains firmly on the local circuit, his dedication to the craft 
                reflects the deep-running tradition of Kenyan athletics. His goal is to honor that 
                heritage through hard work, humility, and steady progression across all three 
                distances.
              </p>
            </div>

            {/* Key Attributes */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Marathon Endurance',
                  desc: 'Built for the full 42km distance through consistent high-volume training in the Rift Valley hills.',
                  icon: '🏃‍♂️',
                },
                {
                  title: 'Half-Marathon Strength',
                  desc: 'Strong performances in local 21k events, demonstrating pace judgment and race tactics.',
                  icon: '🥈',
                },
                {
                  title: '10km Speed',
                  desc: 'Retains leg speed for shorter road races, adding versatility to his racing calendar.',
                  icon: '⚡',
                },
                {
                  title: 'Altitude Advantage',
                  desc: 'Lifetime of training at 2,400m above sea level in Iten, building exceptional aerobic capacity.',
                  icon: '🏔️',
                },
                {
                  title: 'Efficient Form',
                  desc: 'Clean running mechanics developed through years of running on varied terrain.',
                  icon: '⚙️',
                },
                {
                  title: 'Local Competitor',
                  desc: 'Active participant in the competitive Rift Valley road race circuit and local events.',
                  icon: '🇰🇪',
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
                  The Training Approach
                </h3>
                <ul className="space-y-3">
                  {[
                    'Daily runs on the famous red-clay trails of Iten',
                    'Long runs of 35km+ through the Rift Valley countryside',
                    'Group training sessions with local running camps',
                    'Fartlek and tempo work on undulating terrain',
                    'Traditional Kenyan diet for natural recovery',
                    'Strength work focused on injury prevention',
                    'Mental preparation for race-day challenges',
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
              <div className="p-6 shadow-lg bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-white">Athlete Profile</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-emerald-400/30">
                    <span className="text-emerald-100">Primary Focus</span>
                    <span className="font-semibold text-white">42km / 21km</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-emerald-400/30">
                    <span className="text-emerald-100">Specialization</span>
                    <span className="font-semibold text-white">Road Racing</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-emerald-400/30">
                    <span className="text-emerald-100">Training Base</span>
                    <span className="font-semibold text-white">Iten, Kenya</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-emerald-400/30">
                    <span className="text-emerald-100">Status</span>
                    <span className="font-semibold text-white">Local Competitor</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-emerald-400/30">
                    <span className="text-emerald-100">Race Distances</span>
                    <span className="font-semibold text-white">10k • 21k • 42k</span>
                  </div>
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
          <div className="inline-block px-8 py-8 shadow-lg bg-gradient-to-r from-emerald-700 to-slate-900 rounded-2xl">
            <div className="mb-4 text-4xl text-emerald-200">"</div>
            <p className="max-w-3xl text-xl italic font-medium text-white">
              The roads of the Rift Valley have taught me that running is not about how fast you start, 
              but how well you finish. Every morning in Iten, we run not for glory, but for the discipline 
              that comes with each step. The local races are my classroom, and I'm still learning.
            </p>
            <p className="mt-3 font-semibold text-emerald-100">
              – Gideon Kiptoo Sugut
            </p>
            <div className="mt-4 text-4xl transform rotate-180 text-emerald-200">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}