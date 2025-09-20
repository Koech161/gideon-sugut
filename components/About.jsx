'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-white to-zinc-50"
      aria-label="About Kiptanui Hillary"
      id='about'
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-sm font-semibold tracking-wider uppercase text-zinc-600">
            The Champion's Journey
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 sm:text-5xl">
            About <span className="text-zinc-600">Kiptanui</span>
          </h1>
          <div className="w-24 h-1 mx-auto bg-zinc-600"></div>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Bio and Ethos */}
          <motion.div
            className="space-y-8 lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 bg-white border shadow-xl border-zinc-200 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-zinc-800">
                  <span className="text-sm font-bold text-white">KH</span>
                </div>
                <h2 className="text-2xl font-bold text-zinc-800">
                  My Running Journey
                </h2>
              </div>
             <p className="mb-6 text-lg leading-relaxed text-zinc-700">
                Born and raised in the renowned running hub of Iten, Kenya, 
                Kiptanui Hillary recognized his gift for long-distance running 
                early in life. Inspired by the country’s proud athletic tradition, 
                he began competing in school championships before quickly rising 
                to national and international stages.
              </p>
              <p className="text-lg leading-relaxed text-zinc-700">
                Focused on marathon and half-marathon events, Kiptanui blends 
                natural stamina with modern training techniques to deliver 
                outstanding performances. Beyond his personal pursuits, he is 
                committed to mentoring young athletes and encouraging wider 
                participation in sports across Kenya.
              </p>

            </div>
            
            {/* Key Attributes */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { title: "Discipline", desc: "Rigorous training regimen and unwavering focus" },
                { title: "Endurance", desc: "Exceptional stamina developed through high-altitude training" },
                { title: "Technique", desc: "Optimized running form for maximum efficiency" },
                { title: "Mental Strength", desc: "Champion mindset that pushes through barriers" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-4 bg-white border shadow-sm border-zinc-100 rounded-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  <h3 className="font-semibold text-zinc-800">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Training Philosophy and Stats */}
          
        </div>

        {/* Motivational Quote Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-block px-8 py-6 border border-zinc-200 bg-zinc-100 rounded-2xl">
            <p className="text-xl italic font-medium text-zinc-800">
              "Victory is built on discipline, fueled by determination, and achieved by the courage to go beyond limits."
            </p>
            <p className="mt-2 font-semibold text-zinc-600">- Kiptanui Hillary</p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}