'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
 

  

  return (
    <section
      className="py-16 bg-gradient-to-b from-black to-gray-900"
      aria-label="Contact Kitur Cyprian Kipkemei"
      id='contact'
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-pink-500 uppercase tracking-wider mb-2">
            Get In Touch
          </h2>
          <h1 className="text-4xl font-bold text-white mb-4">
            Contact <span className="text-pink-500">Kitur</span>
          </h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
            Reach out for sponsorship opportunities, race invitations, or media inquiries. 
            I'm always open to connecting with fans and partners who share my passion for running.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        

          {/* Direct Contact Methods */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl border border-pink-900/30 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/+254723054668"
                  className="flex items-center p-4 bg-green-900/20 border border-green-800/30 rounded-lg hover:bg-green-900/30 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l4.93-1.36A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.92 13.8c-.25.74-.74 1.32-1.48 1.66-.94.43-2.16.36-3.3-.18-1.4-.67-2.57-1.76-3.42-3.08-.85-1.32-1.07-2.74-.62-4.1.2-.6.58-1.13 1.14-1.5.14-.1.3-.16.46-.16h.32c.2 0 .48.07.66.44.22.45.78 1.54.86 1.65.08.1.14.22.1.34-.12.36-.36.7-.74.94-.14.09-.28.19-.4.29-.12.1-.24.2-.22.35.04.28.24.62.52.94.64.74 1.4 1.3 2.3 1.56.14.04.28.02.38-.06.1-.08.24-.22.38-.36.22-.22.44-.3.62-.2.18.1 1.1.52 1.3.6.18.08.3.14.34.24.04.1.02.2-.04.34-.3.64-.9 1.3-1.6 1.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">WhatsApp</h4>
                    <p className="text-green-300">+254 723 054 668</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+254723054668"
                  className="flex items-center p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg hover:bg-blue-900/30 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone Call</h4>
                    <p className="text-blue-300">+254 723 054 668</p>
                  </div>
                </motion.a>

                
              </div>
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}