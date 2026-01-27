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

// Only email social link
const socialLinks = [
  {
    href: 'mailto:joylenemoiben@gmail.com',
    label: 'Email',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-fuchsia-600 hover:bg-fuchsia-700',
  },
];

export default function Footer() {
  return (
    <footer className="py-16 border-t bg-gradient-to-b from-gray-900 to-gray-950 border-fuchsia-900/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-fuchsia-500">
                <span className="text-lg font-bold text-white">JJ</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Joylene <span className="text-fuchsia-400">Jepleting</span>
              </h3>
            </div>
            <p className="mb-6 leading-relaxed text-gray-400">
              Elite Kenyan long-distance runner specializing in the 10,000m,
              Half Marathon, and Marathon events. Representing Kenya's world-renowned
              running heritage with discipline, endurance, and consistent excellence
              on tracks and roads worldwide.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`w-10 h-10 rounded-lg ${link.color} text-white flex items-center justify-center shadow-lg`}
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
            <h4 className="mb-6 text-lg font-semibold tracking-wider uppercase text-fuchsia-300">
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <motion.li key={link.href} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 transition-colors duration-200 hover:text-fuchsia-300"
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
            <h4 className="mb-6 text-lg font-semibold tracking-wider uppercase text-fuchsia-300">
              Contact Information
            </h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-fuchsia-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-300">Email Address</p>
                  <p className="mt-1">joylenemoiben@gmail.com</p>
                  <p className="mt-1 text-sm text-fuchsia-400/80">Primary contact method</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-fuchsia-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-300">Training Base</p>
                  <p className="mt-1">Rift Valley, Kenya</p>
                  <p className="mt-1 text-sm text-fuchsia-400/80">High-altitude training camp</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-6 text-lg font-semibold tracking-wider uppercase text-fuchsia-300">
              Running Philosophy
            </h4>
            <blockquote className="pl-4 italic text-gray-400 border-l-4 border-fuchsia-500">
              "Distance running is a conversation between mind and body. Each kilometer 
              teaches patience, each race builds character, and every finish line 
              reminds us that true endurance comes from within."
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-fuchsia-300">
              – Joylene Jepleting
            </p>

            {/* <div className="inline-flex items-center px-4 py-2 mt-6 border rounded-lg border-fuchsia-800/50 bg-fuchsia-900/30">
              <svg className="w-4 h-4 mr-2 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm text-fuchsia-300">
                World Athletics Registered Athlete
              </span>
            </div> */}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="flex flex-col items-center justify-between pt-8 border-t border-fuchsia-900/30 md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Joylene Jepleting. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            {/* <p className="text-sm text-gray-500">
              Representing: <span className="text-fuchsia-400">Kenya Athletic Federation</span>
            </p> */}
            <p className="text-sm text-gray-500">
              Developed by{' '}
              <a 
                href="https://abelk-k.vercel.app" 
                className="transition-colors duration-200 text-fuchsia-400 hover:text-fuchsia-300"
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