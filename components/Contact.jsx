'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('sharon@jeropkebenei.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-blue-50"
      aria-label="Contact Sharon Jerop Kebenei"
      id='contact'
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Get In Touch
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Contact <span className="text-blue-600">Sharon</span>
          </h1>
          <div className="w-24 h-1 mx-auto bg-blue-600"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
            Reach out for sponsorship opportunities, race invitations, or media inquiries. 
            I'm always open to connecting with fans, partners, and organizations who share 
            my passion for excellence in athletics.
          </p>
        </motion.div>

        <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
         

          {/* Direct Contact Methods */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 bg-white border border-blue-100 shadow-xl rounded-2xl">
              <h3 className="flex items-center mb-6 text-2xl font-bold text-blue-900">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/+254723054668"
                  className="flex items-center p-4 transition-all border border-green-200 bg-green-50 rounded-xl hover:bg-green-100 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-green-500 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l4.93-1.36A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.92 13.8c-.25.74-.74 1.32-1.48 1.66-.94.43-2.16.36-3.3-.18-1.4-.67-2.57-1.76-3.42-3.08-.85-1.32-1.07-2.74-.62-4.1.2-.6.58-1.13 1.14-1.5.14-.1.3-.16.46-.16h.32c.2 0 .48.07.66.44.22.45.78 1.54.86 1.65.08.1.14.22.1.34-.12.36-.36.7-.74.94-.14.09-.28.19-.4.29-.12.1-.24.2-.22.35.04.28.24.62.52.94.64.74 1.4 1.3 2.3 1.56.14.04.28.02.38-.06.1-.08.24-.22.38-.36.22-.22.44-.3.62-.2.18.1 1.1.52 1.3.6.18.08.3.14.34.24.04.1.02.2-.04.34-.3.64-.9 1.3-1.6 1.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">WhatsApp</h4>
                    <p className="text-green-700">+254 723 054 668</p>
                    <p className="text-sm text-green-600">Quick responses</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+254723054668"
                  className="flex items-center p-4 transition-all border border-blue-200 bg-blue-50 rounded-xl hover:bg-blue-100 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-blue-500 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Phone Call</h4>
                    <p className="text-blue-700">+254 723 054 668</p>
                    <p className="text-sm text-blue-600">Available 9AM-6PM EAT</p>
                  </div>
                </motion.a>
    <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Email</h4>
                    <p className="text-blue-700">sharonkebenei97@gmail.com</p>
                    <button 
                      onClick={copyEmail}
                      className="flex items-center mt-1 text-sm text-blue-600 transition-colors hover:text-blue-800"
                    >
                      {copied ? 'Copied!' : 'Copy email'}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
              </div>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}