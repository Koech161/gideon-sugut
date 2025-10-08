'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-200' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto" aria-label="Main navigation">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/" 
            className="flex items-center text-xl font-black text-gray-900 transition-colors md:text-2xl hover:text-emerald-700"
          >
            <span className="text-emerald-600">Janex</span>
            <span className="hidden ml-1 text-gray-800 sm:inline">Jepkogei</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-8 lg:flex">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className={`relative text-sm font-semibold uppercase tracking-wider transition-colors px-3 py-2 ${
                  pathname === link.href
                    ? 'text-emerald-600'
                    : 'text-gray-800 hover:text-emerald-600'
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="#contact"
              className="px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 rounded-xl shadow-lg bg-emerald-600 hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5"
            >
              Partner With Me
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="p-2 text-gray-900 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-6 h-6">
            <motion.span
              className="absolute block w-6 h-0.5 bg-current transition-all"
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="absolute block w-6 h-0.5 bg-current transition-all"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ top: '8px' }}
            />
            <motion.span
              className="absolute block w-6 h-0.5 bg-current transition-all"
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              style={{ top: '16px' }}
            />
          </div>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 z-50 h-full max-w-full border-l shadow-2xl border-emerald-200 w-80 bg-white/98 backdrop-blur-md lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-emerald-200 bg-emerald-50/50">
                  <div>
                    <span className="text-lg font-black text-gray-900">Janex Jepkogei</span>
                    <p className="text-sm text-emerald-700">Elite Distance Runner</p>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 transition-colors rounded-lg text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100"
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block text-lg font-semibold transition-all py-4 px-4 rounded-xl ${
                        pathname === link.href
                          ? 'bg-emerald-100 text-emerald-700 border-l-4 border-emerald-600'
                          : 'text-gray-900 hover:bg-emerald-50 hover:text-emerald-700 hover:border-l-4 hover:border-emerald-400'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={pathname === link.href ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-emerald-200 bg-emerald-50/30">
                  <Link
                    href="#contact"
                    className="block w-full px-4 py-3 font-bold text-center text-white transition-all duration-300 shadow-lg bg-emerald-600 rounded-xl hover:bg-emerald-700 hover:shadow-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Start Partnership
                  </Link>
                  <div className="flex justify-center mt-4 space-x-4">
                    <a href="mailto:janexrono20@gmail.com" className="p-2 transition-colors text-emerald-600 hover:text-emerald-800">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                    <a href="https://wa.me/+254712134931" className="p-2 transition-colors text-emerald-600 hover:text-emerald-800">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l4.93-1.36A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.92 13.8c-.25.74-.74 1.32-1.48 1.66-.94.43-2.16.36-3.3-.18-1.4-.67-2.57-1.76-3.42-3.08-.85-1.32-1.07-2.74-.62-4.1.2-.6.58-1.13 1.14-1.5.14-.1.3-.16.46-.16h.32c.2 0 .48.07.66.44.22.45.78 1.54.86 1.65.08.1.14.22.1.34-.12.36-.36.7-.74.94-.14.09-.28.19-.4.29-.12.1-.24.2-.22.35.04.28.24.62.52.94.64.74 1.4 1.3 2.3 1.56.14.04.28.02.38-.06.1-.08.24-.22.38-.36.22-.22.44-.3.62-.2.18.1 1.1.52 1.3.60.18.08.3.14.34.24.04.1.02.2-.04.34-.3.64-.9 1.3-1.6 1.5z" />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-xs text-emerald-600">Professional inquiries only</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}