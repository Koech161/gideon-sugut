'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#racing', label: 'Race Schedule' },
  { href: '#contact', label: 'Contact' },
];

// Contact links
const contactLinks = [
  {
    href: 'mailto:sugutgideon48@gmail.com',
    label: 'Email',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-emerald-600 hover:bg-emerald-700',
  },
  {
    href: 'tel:+254727801938',
    label: 'Phone',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: 'bg-green-600 hover:bg-green-700',
  },
  {
    href: 'https://wa.me/254727801938',
    label: 'WhatsApp',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.491-8.418" />
      </svg>
    ),
    color: 'bg-emerald-500 hover:bg-emerald-600',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t bg-gradient-to-b from-gray-900 to-gray-950 border-emerald-900/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-gradient-to-r from-emerald-600 to-green-500">
                <span className="text-lg font-bold text-white">GKS</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Gideon <span className="text-emerald-400">Kiptoo Sugut</span>
              </h3>
            </div>
           <p className="mb-6 leading-relaxed text-gray-400">
           A dedicated long-distance runner from the high-altitude training grounds of Iten, 
           Gideon Kiptoo Sugut represents the authentic spirit of Kenyan distance running. 
           Competing across 10km, half marathon, and marathon distances on the local circuit, 
           he embodies the discipline, consistency, and humble determination of the Rift Valley's 
           running tradition.
          </p>

            <div className="flex space-x-3">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={link.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  className={`w-10 h-10 rounded-lg ${link.color} text-white flex items-center justify-center shadow-lg transition-all duration-300 shadow-emerald-900/20`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                  title={`Contact via ${link.label}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-6 text-lg font-semibold tracking-wider uppercase text-emerald-300">
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <motion.li key={link.href} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 transition-colors duration-200 hover:text-emerald-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-6 text-lg font-semibold tracking-wider uppercase text-emerald-300">
              Contact Information
            </h4>
            <div className="space-y-4 text-gray-400">
              
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-300">Training Base</p>
                  <p className="mt-1">Iten, Elgeyo-Marakwet</p>
                  <p className="mt-1 text-sm text-emerald-400/80">2,400m • Home of Champions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-300">Official Email</p>
                  <p className="mt-1">sugutgideon48@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-300">Phone & WhatsApp</p>
                  <p className="mt-1">+254 727 801 938</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Philosophy & Initiative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-6 text-lg font-semibold tracking-wider uppercase text-emerald-300">
              The Running Philosophy
            </h4>
            <blockquote className="pl-4 italic text-gray-400 border-l-4 border-emerald-500">
            "The roads of the Rift Valley have taught me that running is not about how fast you start, 
            but how well you finish. Every morning in Iten, we run not for glory, but for the discipline 
            that comes with each step. The local races are my classroom, and I'm still learning."
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-emerald-300">
              – Gideon Kiptoo Sugut
            </p>
            
            <div className="mt-6">
              <h5 className="mb-3 text-sm font-semibold tracking-wider uppercase text-emerald-300">
                Race Distances
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-medium border rounded-full text-emerald-300 bg-emerald-900/30 border-emerald-800/50">
                  10km Road
                </span>
                <span className="px-3 py-1 text-xs font-medium border rounded-full text-emerald-300 bg-emerald-900/30 border-emerald-800/50">
                  Half Marathon
                </span>
                <span className="px-3 py-1 text-xs font-medium border rounded-full text-emerald-300 bg-emerald-900/30 border-emerald-800/50">
                  Marathon
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="flex flex-col items-center justify-between pt-8 border-t border-emerald-900/30 md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500">
            © {currentYear} Gideon Kiptoo Sugut. All rights reserved.
          </p>
          <div className="flex flex-col items-center mt-4 space-y-3 md:mt-0 md:flex-row md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-500">
              Training Base: <span className="text-emerald-400">Iten, Rift Valley</span>
            </p>
            <p className="text-sm text-gray-500">
              Developed by{' '}
              <a 
                href="https://abelk-k.vercel.app" 
                className="transition-colors duration-200 text-emerald-400 hover:text-emerald-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kikoa Software
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}