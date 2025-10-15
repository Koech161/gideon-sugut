'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-stone-50"
      aria-label="Contact Eric Kiprono Sang"
      id='contact'
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase text-stone-600">
            Get In Touch
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Contact <span className="text-stone-600">Eric Kiprono Sang</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-stone-500 to-stone-600"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
            Interested in race partnerships, sponsorship opportunities, or media features? 
            I'm available for brand collaborations, speaking engagements, and events 
            that promote athletic excellence and Kenyan running heritage.
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
            <div className="p-8 bg-white border-l-4 shadow-lg border-stone-500 rounded-2xl">
              <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                <svg className="w-6 h-6 mr-3 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Methods
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:ericsang8@gmail.com"
                  className="flex items-center p-4 transition-all border border-stone-100 bg-stone-50 rounded-xl hover:bg-stone-100 group hover:shadow-lg"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-lg bg-stone-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-700">ericsang8@gmail.com</p>
                    <p className="text-sm text-stone-600">Preferred for formal inquiries</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto transition-opacity opacity-0 text-stone-500 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://wa.me/+254723651447"
                  className="flex items-center p-4 transition-all border border-stone-100 bg-stone-50 rounded-xl hover:bg-stone-100 group hover:shadow-lg"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-green-500 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l4.93-1.36A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.92 13.8c-.25.74-.74 1.32-1.48 1.66-.94.43-2.16.36-3.3-.18-1.4-.67-2.57-1.76-3.42-3.08-.85-1.32-1.07-2.74-.62-4.1.2-.6.58-1.13 1.14-1.5.14-.1.3-.16.46-.16h.32c.2 0 .48.07.66.44.22.45.78 1.54.86 1.65.08.1.14.22.10.34-.12.36-.36.7-.74.94-.14.09-.28.19-.40.29-.12.10-.24.20-.22.35.04.28.24.62.52.94.64.74 1.40 1.30 2.30 1.56.14.04.28.02.38-.06.10-.08.24-.22.38-.36.22-.22.44-.30.62-.20.18.10 1.10.52 1.30.60.18.08.30.14.34.24.04.10.02.20-.04.34-.30.64-.90 1.30-1.60 1.50z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">WhatsApp</h4>
                    <p className="text-gray-700">+254 723 651 447</p>
                    <p className="text-sm text-stone-600">Quick responses • Business hours</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto transition-opacity opacity-0 text-stone-500 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href="tel:+254723651447"
                  className="flex items-center p-4 transition-all border border-stone-100 bg-stone-50 rounded-xl hover:bg-stone-100 group hover:shadow-lg"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-lg bg-stone-600">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-700">+254 723 651 447</p>
                    <p className="text-sm text-stone-600">Available 7AM-8PM EAT</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto transition-opacity opacity-0 text-stone-500 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

                <motion.div 
                  className="flex items-start p-4 transition-all border border-stone-100 bg-stone-50 rounded-xl hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-gray-700 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Training Base</h4>
                    <p className="text-gray-700">Eldoret, Kenya</p>
                    <p className="text-sm text-stone-600">Rift Valley • Altitude Training</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Response Time Information */}
            <motion.div 
              className="p-6 bg-white border border-stone-200 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h4 className="flex items-center mb-3 font-semibold text-gray-800">
                <svg className="w-5 h-5 mr-2 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Response Times
              </h4>
              <div className="grid grid-cols-1 gap-4 text-sm text-gray-600 sm:grid-cols-2">
                <div>
                  <span className="font-medium text-stone-700">Email:</span> Within 24-48 hours
                </div>
                <div>
                  <span className="font-medium text-stone-700">WhatsApp:</span> Within 2-6 hours
                </div>
                <div>
                  <span className="font-medium text-stone-700">Phone:</span> During business hours
                </div>
                <div>
                  <span className="font-medium text-stone-700">Urgent:</span> Mark email as urgent
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Professional Inquiry Note */}
        <motion.div 
          className="max-w-2xl p-6 mx-auto mt-12 text-center bg-white border border-stone-200 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h4 className="mb-2 font-semibold text-gray-800">For Professional Inquiries</h4>
          <p className="text-sm text-gray-600">
            Race directors, sponsors, and media professionals are encouraged to use email for detailed proposals. 
            Please include relevant details about your event or opportunity for prompt consideration.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute right-0 mt-12 opacity-10 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-64 h-64 rounded-full bg-stone-300 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}