'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] bg-[url('/james_gallery.jpg')] bg-cover bg-center flex items-center justify-center overflow-hidden py-12"
      aria-label="Kitur Cyprian Kipkemei Hero Section"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pink-900/10 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 z-10  backdrop-blur-[3px]">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-2">
            <span className="text-pink-500 font-semibold tracking-wider text-sm uppercase border border-pink-500/30 px-3 py-1 rounded-full">
              Elite Marathon Runner
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Kitur Cyprian <span className="text-pink-500">Kipkemei</span>
          </h1>
          
          <div className="flex items-center justify-center lg:justify-start gap-3 my-4">
            <div className="w-12 h-0.5 bg-pink-500"></div>
            <h2 className="text-xl sm:text-2xl font-medium text-pink-300 md:text-pink-400">
              Champion Long-Distance Athlete
            </h2>
          </div>
          
          <p className="text-lg text-gray-400 md:text-white max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Representing Kenya on the global stage with exceptional endurance and record-breaking performances. 
            Dedicated to pushing the limits of human potential in marathon running.
          </p>
          
          <p className="text-pink-400 italic font-medium flex items-center justify-center lg:justify-start gap-2">
            <span className="text-pink-500 text-xl">•</span> 
            Passion • Perseverance • Victory
            <span className="text-pink-500 text-xl">•</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Link href="#records">
              <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:-translate-y-1">
                Career Achievements
              </button>
            </Link>
            
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-pink-500/10 rounded-full blur-xl"></div>
            <div className="absolute inset-0 border-2 border-pink-500/20 rounded-full"></div>
            <Image
              src="/james_gallery.jpg" // Update this path to your actual image
              alt="Kitur Cyprian Kipkemei in a competitive marathon"
              width={400}
              height={400}
              className="rounded-full w-80 h-80 object-cover relative z-10 shadow-2xl"
              priority
            />
            
            {/* Decorative elements */}
            <div className="absolute -bottom-2 -left-4 w-24 h-24 border-4 border-pink-500/30 rounded-full z-0"></div>
            <div className="absolute -top-4 -right-2 w-16 h-16 border-2 border-pink-500/20 rounded-full z-0"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-500/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-500 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}