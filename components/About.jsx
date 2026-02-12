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
            A Rising Force in Kenyan Road Running
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
                Hailing from the high-altitude terrain of the Rift Valley, Kenya, Caroline Jelimo is a rising talent in the local athletics scene. Her journey is defined by a steady progression from school-level competition to dominating regional road races. Currently honing her craft in the "Home of Champions," she is transitioning into the marathon distance with a focus on endurance and tactical patience.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Caroline is recognized among local coaches for her exceptional "Marathon Engine"—the ability to maintain a grueling pace while staying mentally composed. As a promising local athlete, she is currently focused on mastering the local circuit, using every race as a stepping stone toward her ultimate goal of representing the heritage of Kenyan long-distance running.
              </p>
            </div>

            {/* Key Attributes */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Endurance Base',
                  desc: 'Exceptional aerobic capacity developed through consistent high-volume training blocks.',
                  icon: '🏁',
                },
                {
                  title: 'Half-Marathon Focus',
                  desc: 'A strong presence in regional 21k events, showcasing her ability to handle high intensity.',
                  icon: '🥈',
                },
                {
                  title: '10k Speed',
                  desc: 'Uses sharp 10k road speed to stay competitive during tactical regional finishes.',
                  icon: '⚡',
                },
                {
                  title: 'Altitude Hardened',
                  desc: 'Lifetime of training at 2,400m in Iten, yielding a natural biological advantage.',
                  icon: '🏔️',
                },
                {
                  title: 'Mechanical Efficiency',
                  desc: 'Noted for a fluid running economy and a mid-foot strike that maximizes energy return.',
                  icon: '⚙️',
                },
                {
                  title: 'Regional Talent',
                  desc: 'Consistent top-five finishes across the competitive Rift Valley road race series.',
                  icon: '🇰🇪',
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
                  The Training Build
                </h3>
                <ul className="space-y-3">
                  {[
                    'Consistent weekly volume in the hills of Iten',
                    '30km+ long runs on the Iten-Eldoret road',
                    'Tough fartlek sessions with local training groups',
                    'Recovery fueled by traditional Kenyan staples',
                    'Mental focus sessions for late-race endurance',
                    'Strength and conditioning for injury resilience',
                    'Regular hill work to build explosive power',
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
                <h3 className="mb-4 text-xl font-bold text-white">Athletic Profile</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Primary Focus</span>
                    <span className="font-semibold text-white">Marathon / 21k</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Specialization</span>
                    <span className="font-semibold text-white">Road Racing</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Training Base</span>
                    <span className="font-semibold text-white">Iten, Kenya</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-pink-400/30">
                    <span className="text-pink-100">Status</span>
                    <span className="font-semibold text-white">Promising Talent</span>
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
          <div className="inline-block px-8 py-8 shadow-lg bg-gradient-to-r from-pink-700 to-slate-900 rounded-2xl">
            <div className="mb-4 text-4xl text-pink-200">"</div>
            <p className="max-w-3xl text-xl italic font-medium text-white">
              The road doesn't care about your past, only your persistence. 
              In Iten, we run to find where our limits begin and our strength ends. 
              Every kilometer is a step closer to the legacy I hope to build.
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