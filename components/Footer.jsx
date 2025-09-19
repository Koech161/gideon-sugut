'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#records', label: 'Records' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'https://wa.me/+254723054668',
    label: 'WhatsApp',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l4.93-1.36A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.92 13.8c-.25.74-.74 1.32-1.48 1.66-.94.43-2.16.36-3.3-.18-1.4-.67-2.57-1.76-3.42-3.08-.85-1.32-1.07-2.74-.62-4.1.2-.6.58-1.13 1.14-1.5.14-.1.3-.16.46-.16h.32c.2 0 .48.07.66.44.22.45.78 1.54.86 1.65.08.1.14.22.1.34-.12.36-.36.7-.74.94-.14.09-.28.19-.4.29-.12.1-.24.2-.22.35.04.28.24.62.52.94.64.74 1.4 1.3 2.3 1.56.14.04.28.02.38-.06.1-.08.24-.22.38-.36.22-.22.44-.3.62-.2.18.1 1.1.52 1.3.6.18.08.3.14.34.24.04.1.02.2-.04.34-.3.64-.9 1.3-1.6 1.5z" />
      </svg>
    ),
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    href: 'tel:+254723054668',
    label: 'Phone',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.2 2.2z" />
      </svg>
    ),
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    href: 'mailto:sharonkebenei97@gmail.com',
    label: 'Email',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-purple-500 hover:bg-purple-600'
  },
];

export default function Footer() {
  return (
    <footer className="py-16 border-t bg-gradient-to-b from-blue-900 to-blue-950 border-blue-700/30" aria-label="Footer">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-white">
              Sharon <span className="text-blue-400">Jerop Kebenei</span>
            </h3>
            <p className="mb-6 leading-relaxed text-blue-200">
              Elite Kenyan marathon runner dedicated to excellence, endurance, 
              and inspiring the next generation of athletes through record-breaking performances.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`w-10 h-10 rounded-lg ${link.color} text-white flex items-center justify-center transition-all duration-300 shadow-lg`}
                  aria-label={`Connect via ${link.label}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-6 text-lg font-semibold tracking-wider text-blue-300 uppercase">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center text-blue-100 transition-colors duration-300 hover:text-white group"
                    aria-label={`Go to ${link.label} page`}
                  >
                    <span className="w-2 h-2 mr-3 transition-opacity bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-6 text-lg font-semibold tracking-wider text-blue-300 uppercase">Contact Info</h4>
            <div className="space-y-4 text-blue-100">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
                sharonkebenei97@gmail.com
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.2 2.2z"/>
                </svg>
                +254 723 054 668
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Iten, Kenya
              </p>
            </div>
          </motion.div>

          
          
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col items-center justify-between pt-8 border-t border-blue-700/30 md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mb-4 text-sm text-blue-300 md:mb-0">
            &copy; {new Date().getFullYear()} Sharon Jerop Kebenei. All rights reserved.
          </p>
          <div className="text-sm text-blue-300">
            Developed by{' '}
            <a
              href="https://abelk-k.vercel.app"
              className="font-medium text-blue-400 transition-colors duration-300 hover:text-white"
              aria-label="Visit developer's website"
            >
              Kikoa Softwares
            </a>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-blue-950 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
}