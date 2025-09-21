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
    href: 'https://wa.me/+254700000000',
    label: 'WhatsApp',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l4.93-1.36A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.92 13.8c-.25.74-.74 1.32-1.48 1.66-.94.43-2.16.36-3.3-.18-1.4-.67-2.57-1.76-3.42-3.08-.85-1.32-1.07-2.74-.62-4.1.2-.6.58-1.13 1.14-1.5.14-.1.3-.16.46-.16h.32c.2 0 .48.07.66.44.22.45.78 1.54.86 1.65.08.1.14.22.1.34-.12.36-.36.7-.74.94-.14.09-.28.19-.4.29-.12.1-.24.2-.22.35.04.28.24.62.52.94.64.74 1.4 1.3 2.3 1.56.14.04.28.02.38-.06.1-.08.24-.22.38-.36.22-.22.44-.3.62-.2.18.1 1.1.52 1.3.6.18.08.3.14.34.24.04.1.02.2-.04.34-.3.64-.9 1.3-1.6 1.5z" />
      </svg>
    ),
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    href: 'tel:+254700000000',
    label: 'Phone',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.2 2.2z" />
      </svg>
    ),
    color: 'bg-zinc-600 hover:bg-zinc-700'
  },
  {
    href: 'mailto:kiptanui@hillary.com',
    label: 'Email',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-zinc-500 hover:bg-zinc-600'
  },
];

export default function Footer() {
  return (
    <footer className="py-16 border-t bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-700/30" aria-label="Footer">
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
              Kiptanui <span className="text-zinc-400">Hillary</span>
            </h3>
            <p className="mb-6 leading-relaxed text-zinc-400">
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
            <h4 className="mb-6 text-lg font-semibold tracking-wider uppercase text-zinc-300">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center transition-colors duration-300 text-zinc-400 hover:text-white group"
                    aria-label={`Go to ${link.label} page`}
                  >
                    <span className="w-2 h-2 mr-3 transition-opacity rounded-full opacity-0 bg-zinc-500 group-hover:opacity-100"></span>
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
            <h4 className="mb-6 text-lg font-semibold tracking-wider uppercase text-zinc-300">Contact Info</h4>
            <div className="space-y-4 text-zinc-400">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
                hillarykiptanui5@gmail.com
              </p>
              {/* <p className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.2 2.2z"/>
                </svg>
                +254 700 000 000
              </p> */}
             
            </div>
          </motion.div>

          {/* Training Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-6 text-lg font-semibold tracking-wider uppercase text-zinc-300">Training Base</h4>
            <div className="space-y-4 text-zinc-400">
              <p className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-3 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                High Altitude Training Center, Iten
              </p>
              
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col items-center justify-between pt-8 border-t border-zinc-700/30 md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mb-4 text-sm text-zinc-500 md:mb-0">
            &copy; {new Date().getFullYear()} Kiptanui Hillary. All rights reserved.
          </p>
          <div className="text-sm text-zinc-500">
            Developed by{' '}
            <a
              href="https://abelk-k.vercel.app"
              className="font-medium transition-colors duration-300 text-zinc-400 hover:text-white"
              aria-label="Visit developer's website"
            >
              Kikoa Softwares
            </a>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-zinc-950 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
}