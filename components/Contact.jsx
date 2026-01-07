'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-orange-50"
      aria-label="Contact Faith Jemutai"
      id='contact'
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider text-orange-600 uppercase">
            Get In Touch
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Contact <span className="text-orange-600">Faith Jemutai</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
            For sponsorship opportunities, media features, youth mentorship programs, 
            speaking engagements, or brand collaborations that promote women in sports 
            and athletic excellence.
          </p>
        </motion.div>

        <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto">
          {/* Direct Contact Methods */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 bg-white border-l-4 border-orange-500 shadow-lg rounded-2xl">
              <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Methods
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:faithjemutai01@gmail.com"
                  className="flex items-center p-4 transition-all border border-orange-100 bg-orange-50 rounded-xl hover:bg-orange-100 group hover:shadow-lg hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-700">faithjemutai01@gmail.com</p>
                    <p className="text-sm text-orange-600">Preferred for formal inquiries</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-orange-500 transition-opacity opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://wa.me/+254726747588"
                  className="flex items-center p-4 transition-all border border-orange-100 bg-orange-50 rounded-xl hover:bg-orange-100 group hover:shadow-lg hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-green-500 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l4.93-1.36A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.92 13.8c-.25.74-.74 1.32-1.48 1.66-.94.43-2.16.36-3.3-.18-1.4-.67-2.57-1.76-3.42-3.08-.85-1.32-1.07-2.74-.62-4.1.2-.6.58-1.13 1.14-1.5.14-.1.3-.16.46-.16h.32c.2 0 .48.07.66.44.22.45.78 1.54.86 1.65.08.1.14.22.10.34-.12.36-.36.7-.74.94-.14.09-.28.19-.40.29-.12.10-.24.20-.22.35.04.28.24.62.52.94.64.74 1.40 1.30 2.30 1.56.14.04.28.02.38-.06.10-.08.24-.22.38-.36.22-.22.44-.30.62-.20.18.10 1.10.52 1.30.60.18.08.30.14.34.24.04.10.02.20-.04.34-.30.64-.90 1.30-1.60 1.50z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">WhatsApp</h4>
                    <p className="text-gray-700">+254 726 747 588</p>
                    <p className="text-sm text-orange-600">Quick responses • Business hours</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-orange-500 transition-opacity opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href="tel:+254726747588"
                  className="flex items-center p-4 transition-all border border-orange-100 bg-orange-50 rounded-xl hover:bg-orange-100 group hover:shadow-lg hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-orange-600 to-orange-700">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-700">+254 726 747 588</p>
                    <p className="text-sm text-orange-600">Available 7AM-8PM EAT</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-orange-500 transition-opacity opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

              </div>
            </div>

            {/* Additional Information Section */}
            <motion.div
              className="p-8 bg-white border border-orange-100 shadow-lg rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                For Media & Sponsorship
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-4 border border-orange-200 bg-gradient-to-br from-orange-50 to-white rounded-xl">
                  <h4 className="mb-2 font-bold text-gray-800">Media Requests</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Interviews & Features
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Press Conferences
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Photoshoot Sessions
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Event Appearances
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 border border-orange-200 bg-gradient-to-br from-orange-50 to-white rounded-xl">
                  <h4 className="mb-2 font-bold text-gray-800">Sponsorship Inquiries</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Brand Partnerships
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Endorsement Deals
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Product Collaborations
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Speaking Engagements
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 mt-6 border border-orange-200 bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-orange-700">Response Time:</span> All inquiries receive a response within 24-48 hours during training season.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Response Notice */}
        <motion.div
          className="max-w-2xl p-6 mx-auto mt-12 text-center bg-white border border-orange-200 shadow-sm rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-700">
            Please note that during major competitions and intensive training camps, 
            response times may vary. Your understanding is appreciated.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute right-0 mt-12 opacity-10 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-64 h-64 bg-orange-300 rounded-full blur-3xl"></div>
        </motion.div>
        
        <motion.div 
          className="absolute left-0 mt-12 opacity-10 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-48 h-48 bg-orange-200 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}