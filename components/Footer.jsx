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

const socialLinks = [
  {
    href: 'https://wa.me/+254726747588',
    label: 'WhatsApp',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l4.93-1.36A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
    color: 'bg-green-500 hover:bg-green-600',
  },
  {
    href: 'tel:+254726747588',
    label: 'Phone',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17z" />
      </svg>
    ),
    color: 'bg-gray-700 hover:bg-gray-800',
  },
  {
    href: 'mailto:faithjemutai01@gmail.com',
    label: 'Email',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8" />
      </svg>
    ),
    color: 'bg-orange-600 hover:bg-orange-700',
  },
];

export default function Footer() {
  return (
    <footer className="py-16 border-t bg-gradient-to-b from-gray-900 to-gray-950 border-orange-900/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <motion.div>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500">
                <span className="text-lg font-bold text-white">FJ</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Faith <span className="text-orange-400">Jemutai</span>
              </h3>
            </div>
            <p className="mb-6 leading-relaxed text-gray-400">
              Elite Kenyan long-distance runner specializing in the 10K,
              Half Marathon, and Marathon. Built on endurance, discipline,
              and consistency representing Kenya’s distance-running legacy
              on roads and tracks worldwide.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`w-10 h-10 rounded-lg ${link.color} text-white flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div>
            <h4 className="mb-6 text-lg font-semibold tracking-wider text-orange-300 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-orange-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div>
            <h4 className="mb-6 text-lg font-semibold tracking-wider text-orange-300 uppercase">
              Contact Info
            </h4>
            <div className="space-y-4 text-gray-400">
              <p>Email: faithjemutai01@gmail.com</p>
              <p>Phone: +254 726 747 588</p>
              <p>Location: Iten, Kenya</p>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div>
            <h4 className="mb-6 text-lg font-semibold tracking-wider text-orange-300 uppercase">
              Distance Philosophy
            </h4>
            <blockquote className="pl-4 italic text-gray-400 border-l-4 border-orange-500">
              “The marathon teaches patience. Every kilometer is earned.
              Success comes not from speed alone, but from discipline,
              preparation, and belief.”
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-orange-300">
              – Faith Jemutai
            </p>

            <div className="inline-flex items-center px-4 py-2 mt-6 border rounded-lg border-orange-800/50 bg-orange-900/30">
              <span className="text-sm text-orange-300">
                Training Base: Iten High-Altitude Camp
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between pt-8 border-t border-orange-900/30 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Faith Jemutai. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Developed by{' '}
            <a href="https://abelk-k.vercel.app" className="text-orange-400 hover:text-orange-300">
              Kikoa Softwares
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
