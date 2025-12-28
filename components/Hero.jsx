// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section
//       className="relative flex items-center justify-center min-h-screen py-12 overflow-hidden bg-white"
//       aria-label="Eric Kiprono Sang Hero Section"
//     >
//       {/* Minimal stone-themed background */}
//       <div className="absolute inset-0 z-0">
//         {/* Subtle geometric pattern */}
//         <div className="absolute inset-0 opacity-[0.02]" style={{
//           backgroundImage: `radial-gradient(circle, #78716c 1px, transparent 1px)`,
//           backgroundSize: '40px 40px',
//         }}></div>
        
//         {/* Stone gradient orbs with subtle animation */}
//         <motion.div 
//           className="absolute rounded-full top-1/4 -left-40 w-[500px] h-[500px] bg-stone-200/30 blur-[100px]"
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.2, 0.4, 0.2]
//           }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute rounded-full w-[400px] h-[400px] bottom-1/3 -right-32 bg-stone-300/15 blur-[90px]"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.3, 0.1, 0.3]
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//         />
        
//         {/* Minimal corner accents */}
//         <div className="absolute w-4 h-4 border rounded top-12 left-12 border-stone-400/20"></div>
//         <div className="absolute w-4 h-4 border rounded top-12 right-12 border-stone-400/20"></div>
//         <div className="absolute w-4 h-4 border rounded bottom-12 left-12 border-stone-400/20"></div>
//         <div className="absolute w-4 h-4 border rounded bottom-12 right-12 border-stone-400/20"></div>
//       </div>
      
//       <div className="container z-10 flex flex-col items-center gap-16 px-4 mx-auto lg:flex-row">
//         {/* Athlete Image Section - Clean and professional */}
//         <motion.div 
//           className="relative lg:w-2/5"
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 0.9 }}
//         >
//           <div className="relative max-w-sm mx-auto">
//             {/* Main image container with elegant shadow */}
//             <div className="relative z-10 p-6 bg-white shadow-lg rounded-2xl">
//               <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-stone-50 to-white aspect-[3/4]">
//                 <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
//                   {/* Professional athlete design */}
//                   <div className="relative flex items-center justify-center mb-6">
//                     <motion.div 
//                       className="absolute w-32 h-32 rounded-full shadow-md bg-gradient-to-br from-stone-400 to-stone-600"
//                       animate={{ scale: [1, 1.05, 1] }}
//                       transition={{ duration: 3, repeat: Infinity }}
//                     />
//                     <div className="relative flex items-center justify-center rounded-full w-28 h-28 bg-stone-100/80 backdrop-blur-sm">
//                       <span className="text-2xl font-bold text-stone-700">EKS</span>
//                     </div>
//                   </div>
                  
//                   {/* Subtle decorative lines */}
//                   <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-stone-400 to-transparent opacity-10"></div>
//                   <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-stone-400 to-transparent opacity-10"></div>
                  
//                   <div className="w-12 h-0.5 mx-auto my-4 bg-gradient-to-r from-stone-500 to-stone-300"></div>
//                   <p className="text-sm font-medium text-stone-600">Professional Marathon Runner</p>
//                 </div>
                
//                 {/* Minimal decorative elements */}
//                 <motion.div 
//                   className="absolute w-5 h-5 border rounded top-4 right-4 border-stone-400/30"
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 />
//                 <motion.div 
//                   className="absolute w-3 h-3 border rounded bottom-4 left-4 border-stone-400/30"
//                   animate={{ rotate: -360 }}
//                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//                 />
//               </div>
//             </div>
           
//           </div>
//         </motion.div>

//         {/* Text Content - Elegant and professional */}
//         <motion.div
//           className="space-y-8 text-center lg:w-3/5 lg:text-left"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.div 
//             className="inline-flex items-center gap-3 mb-6"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             <div className="w-1.5 h-1.5 rounded-full bg-stone-600"></div>
//             <span className="px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full text-stone-700 bg-stone-100/80">
//               Elite Athlete
//             </span>
//             <div className="w-1.5 h-1.5 rounded-full bg-stone-600"></div>
//           </motion.div>
          
//           <motion.h1 
//             className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.7 }}
//           >
//             <span className="text-stone-600">ERIC</span> <br />
//             <span className="text-stone-700">KIPRONO SANG</span>
//           </motion.h1>
          
//           <motion.div 
//             className="flex items-center justify-center gap-3 my-6 lg:justify-start"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//           >
//             <div className="w-6 h-0.5 bg-stone-500/40"></div>
//             <h2 className="text-lg font-medium text-gray-600 sm:text-xl">
//               Kenyan Distance Runner
//             </h2>
//             <div className="w-6 h-0.5 bg-stone-500/40"></div>
//           </motion.div>
          
//           <motion.p 
//             className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 lg:mx-0 lg:mr-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7, duration: 0.7 }}
//           >
//             Eric Kiprono Sang embodies the spirit of Kenyan running excellence. With remarkable 
//             endurance, strategic racing intelligence, and consistent podium finishes, he continues 
//             to build his legacy in the world of professional marathon running. His dedication to 
//             the sport and humble approach inspire the next generation of athletes.
//           </motion.p>
          
//           <motion.div 
//             className="flex flex-col justify-center gap-3 mt-10 sm:flex-row lg:justify-start"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9, duration: 0.5 }}
//           >
//             <Link href="#achievements">
//               <button className="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-stone-600 hover:bg-stone-700 hover:shadow-lg active:scale-95">
//                 View Achievements
//               </button>
//             </Link>
//             <Link href="#about">
//               <button className="px-8 py-3 font-semibold transition-all duration-300 border rounded-lg shadow-md text-stone-700 border-stone-600 hover:bg-stone-50 active:scale-95">
//                 My Story
//               </button>
//             </Link>
//           </motion.div>

//         </motion.div>
//       </div>

//       {/* Subtle animated background elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 rounded-full bg-stone-400/15"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               scale: [0.2, 1, 0.2],
//               opacity: [0.1, 0.3, 0.1],
//             }}
//             transition={{
//               duration: Math.random() * 5 + 3,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white"
      aria-label="Eric Kiprono Sang - Professional Marathon Runner"
    >
      {/* Dynamic Athletic Pattern Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Abstract running track lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-600 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-500 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-600 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-600 to-transparent"></div>
        </div>

        {/* Animated gradient orbs - moved to edges */}
        <motion.div 
          className="absolute rounded-full top-1/4 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-stone-200/10 to-stone-300/5 blur-[80px]"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute rounded-full bottom-1/3 -right-20 w-[250px] h-[250px] bg-gradient-to-tr from-stone-300/10 to-stone-400/5 blur-[60px]"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Subtle corner elements */}
        <div className="absolute w-2 h-32 top-10 left-10 bg-gradient-to-b from-transparent via-stone-400/10 to-transparent"></div>
        <div className="absolute w-2 h-32 top-10 right-10 bg-gradient-to-b from-transparent via-stone-400/10 to-transparent"></div>
      </div>

      {/* Main Content - Asymmetrical Layout */}
      <div className="container relative z-10 px-4 mx-auto lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Text Content */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge with animated underline */}
            <motion.div 
              className="inline-flex flex-col items-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full text-stone-700 bg-stone-100/80">
                Elite Marathon Runner
              </span>
              <motion.div 
                className="mt-2 h-0.5 w-12 bg-gradient-to-r from-stone-600 to-stone-400"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            {/* Main Headline with Stacked Layout */}
            <div className="mb-6">
              <motion.h1 
                className="text-5xl font-bold leading-none text-gray-900 sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className="block font-light text-stone-500">ERIC</span>
                <span className="block mt-1 text-stone-800">KIPRONO</span>
                <span className="block mt-1 text-stone-700">SANG</span>
              </motion.h1>
              
              <motion.div 
                className="flex items-center gap-3 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-stone-500 to-stone-300"></div>
                <h2 className="text-lg font-medium text-gray-600 sm:text-xl">
                  Kenyan Distance Specialist
                </h2>
              </motion.div>
            </div>

            {/* Description with Side Accent */}
            <motion.div 
              className="relative pl-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-stone-400 via-stone-500 to-stone-400"></div>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                Representing the excellence of Kenyan athletics, Eric combines 
                remarkable endurance with strategic intelligence to consistently 
                achieve podium finishes in world-class marathon competitions.
              </p>
            </motion.div>

            {/* CTA Buttons - Modern Layout */}
            <motion.div 
              className="flex flex-wrap gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link href="#achievements" className="group">
                <button className="relative px-8 py-3.5 font-semibold text-white transition-all duration-300 rounded-lg bg-stone-700 hover:bg-stone-800 group-hover:scale-[1.02] active:scale-95">
                  <span className="relative z-10">View Career Highlights</span>
                  <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-stone-700 to-stone-600"></div>
                </button>
              </Link>
              
              <Link href="#about" className="group">
                <button className="relative px-8 py-3.5 font-semibold transition-all duration-300 rounded-lg text-stone-700 bg-transparent hover:bg-stone-50 group-hover:scale-[1.02] active:scale-95">
                  <span className="relative z-10">Athlete Journey</span>
                  <div className="absolute inset-0 transition-colors duration-300 border rounded-lg border-stone-300 group-hover:border-stone-400"></div>
                </button>
              </Link>
            </motion.div>

            {/* Stats Bar */}
            <motion.div 
              className="flex gap-8 mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-stone-700">10+</div>
                <div className="text-sm text-gray-500">Years Running</div>
              </div>
              <div className="h-12 w-0.5 bg-stone-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-stone-700">25+</div>
                <div className="text-sm text-gray-500">Marathons</div>
              </div>
              <div className="h-12 w-0.5 bg-stone-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-stone-700">15+</div>
                <div className="text-sm text-gray-500">Podiums</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Athlete Visual */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Main Image Container with Modern Card */}
            <div className="relative max-w-md mx-auto">
              {/* Floating Card Effect */}
              <motion.div 
                className="relative z-10 p-1 shadow-xl bg-gradient-to-br from-stone-100 to-white rounded-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-stone-50 to-white aspect-[3/4]">
                  {/* Athletic Number Badge */}
                 
                  
                  {/* Main Content Area */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    {/* Abstract Runner Silhouette */}
                    <motion.div 
                      className="relative mb-8"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-stone-200/50 to-stone-100/30 backdrop-blur-sm"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-stone-300/40 to-stone-400/20 backdrop-blur-sm"></div>
                      </div>
                    </motion.div>
                    
                    {/* Name Initials */}
                    <div className="text-center">
                      <div className="mb-2 text-4xl font-bold tracking-wider text-stone-800">EKS</div>
                      <div className="w-16 h-1 mx-auto mb-3 bg-gradient-to-r from-stone-500 to-stone-300"></div>
                      <p className="text-sm font-medium text-stone-600">Professional Athlete</p>
                    </div>
                  </div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-stone-300/30 rounded-tl-xl"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-stone-300/30 rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-stone-300/30 rounded-bl-xl"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-stone-300/30 rounded-br-xl"></div>
                </div>
              </motion.div>

              {/* Background Accent Elements */}
              <div className="absolute w-32 h-32 rounded-full -bottom-6 -right-6 bg-gradient-to-br from-stone-100/30 to-stone-200/10 blur-xl"></div>
              <div className="absolute w-24 h-24 rounded-full -top-6 -left-6 bg-gradient-to-br from-stone-200/20 to-stone-300/10 blur-xl"></div>
            </div>

            {/* Floating Medal Badges */}
            <motion.div 
              className="absolute -bottom-4 -left-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-gradient-to-br from-stone-200 to-stone-100">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300">
                  <span className="text-xs font-bold text-yellow-800">1st</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-stone-400/10"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (Math.random() * 60)}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-center w-6 h-10 border-2 rounded-full border-stone-300">
            <div className="w-1 h-3 mt-2 rounded-full bg-stone-400"></div>
          </div>
          <span className="text-xs text-stone-500">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}