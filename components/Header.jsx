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
  const [isHovered, setIsHovered] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-pink-100/30' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between px-4 py-5 mx-auto lg:px-6" aria-label="Main navigation">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex items-center space-x-3"
        >
          <motion.div 
            className="relative flex items-center justify-center w-10 h-10 shadow-lg rounded-xl bg-gradient-to-br from-pink-600 to-rose-500"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-sm font-black text-white">CJ</span>
            <motion.div 
              className="absolute inset-0 border rounded-xl border-white/30"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <Link 
            href="/" 
            className="relative group"
          >
            <div className="text-xl font-black text-gray-900 transition-all duration-300 md:text-2xl hover:text-pink-700">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">
                Caroline
              </span>
              <span className="hidden ml-2 text-gray-800 sm:inline">Jelimo</span>
            </div>
            <motion.div 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-500 group-hover:w-full transition-all duration-300"
              initial={false}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-1 lg:flex">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1, type: "spring" }}
              onMouseEnter={() => setIsHovered(link.href)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <Link
                href={link.href}
                className={`relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 px-4 py-2.5 rounded-lg ${
                  pathname === link.href
                    ? 'text-pink-700 bg-gradient-to-r from-pink-50 to-pink-100/50'
                    : 'text-gray-700 hover:text-pink-700 hover:bg-gray-50/80'
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
                {isHovered === link.href && (
                  <motion.div
                    className="absolute inset-0 border rounded-lg bg-gradient-to-r from-pink-50/50 to-transparent border-pink-100/50"
                    layoutId="navbar-hover"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                  />
                )}
                {pathname === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="relative p-3 text-gray-900 rounded-xl lg:hidden focus:outline-none focus:ring-2 focus:ring-pink-500/30"
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
              className="absolute block w-6 h-0.5 bg-gradient-to-r from-pink-600 to-rose-500 rounded-full transition-all"
              animate={isMenuOpen ? { rotate: 45, y: 6, width: '1.5rem' } : { rotate: 0, y: 0, width: '1.5rem' }}
            />
            <motion.span
              className="absolute block w-6 h-0.5 bg-gradient-to-r from-pink-600 to-rose-500 rounded-full transition-all"
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              style={{ top: '8px' }}
            />
            <motion.span
              className="absolute block w-6 h-0.5 bg-gradient-to-r from-pink-600 to-rose-500 rounded-full transition-all"
              animate={isMenuOpen ? { rotate: -45, y: -6, width: '1.5rem' } : { rotate: 0, y: 0, width: '1.5rem' }}
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
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 z-50 h-full max-w-full border-l shadow-2xl border-pink-200/20 w-80 bg-white/95 backdrop-blur-xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-pink-200/20 bg-gradient-to-r from-pink-50/80 to-white/90">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 shadow-lg rounded-xl bg-gradient-to-br from-pink-600 to-rose-500">
                      <span className="text-sm font-black text-white">CJ</span>
                    </div>
                    <div>
                      <span className="text-lg font-black text-gray-900">Caroline Jelimo</span>
                      <p className="text-sm font-medium text-pink-700">Elite Kenyan Runner</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2.5 text-pink-600 transition-all duration-300 rounded-lg hover:text-pink-800 hover:bg-pink-100"
                    aria-label="Close menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`block text-lg font-semibold transition-all duration-300 py-4 px-5 rounded-xl ${
                          pathname === link.href
                            ? 'bg-gradient-to-r from-pink-50 to-pink-100 text-pink-700 border-l-4 border-pink-600 shadow-sm'
                            : 'text-gray-900 hover:bg-gradient-to-r hover:from-pink-50/50 hover:to-white hover:text-pink-700 hover:border-l-4 hover:border-pink-400'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                        aria-current={pathname === link.href ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-pink-200/20 bg-gradient-to-r from-pink-50/50 to-white/80">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid gap-4"
                  >
                    <Link
                      href="mailto:caroline.jelimo@kenyaprisons.co.ke"
                      className="group relative block w-full px-4 py-3.5 font-bold text-center text-white transition-all duration-300 rounded-xl shadow-lg overflow-hidden"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-pink-600 via-pink-500 to-rose-600 group-hover:from-pink-700 group-hover:via-pink-600 group-hover:to-rose-700" />
                      <span className="relative flex items-center justify-center gap-2">
                        Email Contact
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </Link>

                    <Link
                      href="tel:+254727114419"
                      className="group relative block w-full px-4 py-3.5 font-bold text-center text-white transition-all duration-300 rounded-xl shadow-lg overflow-hidden"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600 group-hover:from-rose-700 group-hover:via-pink-600 group-hover:to-rose-700" />
                      <span className="relative flex items-center justify-center gap-2">
                        Call Now
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                  
                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center justify-center p-4 mt-6 border rounded-xl bg-gradient-to-r from-pink-50 to-white border-pink-200/50"
                  >
                    <div className="flex items-center justify-center w-12 h-12 mb-3 shadow-md rounded-xl bg-gradient-to-br from-pink-600 to-rose-500">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-pink-700">Official Contact</p>
                    <a 
                      href="mailto:caroline.jelimo@kenyaprisons.co.ke" 
                      className="mt-2 text-base font-bold text-gray-900 transition-colors hover:text-pink-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      caroline.jelimo@kenyaprisons.co.ke
                    </a>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                      <p className="text-xs font-medium text-pink-600">Responds within 24-48 hours</p>
                    </div>
                  </motion.div>

                  {/* Social Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 mt-6 border border-pink-200 rounded-xl bg-gradient-to-r from-pink-50 to-white"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-pink-600 to-rose-500">
                      <span className="text-xs font-black text-white">KE</span>
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">Kenya Prisons</p>
                      <p className="text-xs text-gray-600">Athletics Kenya Registered</p>
                    </div>
                  </motion.div>

                  {/* Girls Running Initiative Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="flex items-center justify-center gap-2 px-4 py-2 mt-3 border border-pink-200 rounded-xl bg-gradient-to-r from-pink-100/50 to-white"
                  >
                    <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p className="text-xs font-medium text-pink-800">
                      Rift Valley Girls Running Project
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scrolling Indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-500"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </header>
  );
}