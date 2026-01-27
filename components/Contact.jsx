'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-fuchsia-50"
      aria-label="Contact Joyline Jepleting"
      id='contact'
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase text-fuchsia-600">
            Get In Touch
          </h2>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Contact <span className="text-fuchsia-600">Joyline Jepleting</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-fuchsia-500 to-fuchsia-600"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
            For sponsorship opportunities, media features, speaking engagements, 
            or brand collaborations that align with athletic excellence and women's sports.
          </p>
        </motion.div>

        <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto">
          {/* Direct Contact Methods - Email Only */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 bg-white border-l-4 shadow-lg border-fuchsia-500 rounded-2xl">
              <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                <svg className="w-6 h-6 mr-3 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Official Contact
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:joylinemoiben@gmail.com"
                  className="flex items-center p-4 transition-all border border-fuchsia-100 bg-fuchsia-50 rounded-xl hover:bg-fuchsia-100 group hover:shadow-lg hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-fuchsia-500 to-fuchsia-600">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">Email Address</h4>
                    <p className="text-gray-700">joylinemoiben@gmail.com</p>
                    <p className="text-sm text-fuchsia-600">Primary contact for all inquiries</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto transition-opacity opacity-0 text-fuchsia-500 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

                {/* Email Information Card */}
                <div className="p-4 border bg-gradient-to-r from-fuchsia-50 to-white border-fuchsia-200 rounded-xl">
                  <h4 className="mb-2 font-bold text-gray-800">Email Guidelines</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="mb-1 text-sm font-medium text-fuchsia-700">Best For:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2 text-fuchsia-500">•</span>
                          Official inquiries
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-fuchsia-500">•</span>
                          Detailed proposals
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-fuchsia-500">•</span>
                          Contract discussions
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-fuchsia-700">Response Time:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2 text-fuchsia-500">•</span>
                          Within 48 hours
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-fuchsia-500">•</span>
                          Monitored daily
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-fuchsia-500">•</span>
                          Professional replies
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <motion.div
              className="p-8 bg-white border shadow-lg border-fuchsia-100 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                <svg className="w-6 h-6 mr-3 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                For Media & Sponsorship
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-4 border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-white rounded-xl">
                  <h4 className="mb-2 font-bold text-gray-800">Media Requests</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-fuchsia-500">•</span>
                      Interviews & Features
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-fuchsia-500">•</span>
                      Press Conferences
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-fuchsia-500">•</span>
                      Documentary Projects
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-fuchsia-500">•</span>
                      Event Appearances
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-white rounded-xl">
                  <h4 className="mb-2 font-bold text-gray-800">Sponsorship Inquiries</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-fuchsia-500">•</span>
                      Brand Partnerships
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-fuchsia-500">•</span>
                      Athletic Endorsements
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-fuchsia-500">•</span>
                      Product Collaborations
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-fuchsia-500">•</span>
                      Speaking Engagements
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 mt-6 border border-fuchsia-200 bg-gradient-to-r from-fuchsia-100 to-fuchsia-50 rounded-xl">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-fuchsia-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-fuchsia-700">Response Time:</span> All email inquiries receive a response within 24-48 hours. During major competitions and intensive training periods, responses may take slightly longer.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* How to Email */}
            <motion.div
              className="p-8 bg-white border shadow-lg border-fuchsia-100 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                <svg className="w-6 h-6 mr-3 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                How to Email Effectively
              </h3>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-4 text-center border border-fuchsia-200 bg-fuchsia-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-600">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.068-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h4 className="mb-2 font-bold text-gray-800">Clear Subject Line</h4>
                  <p className="text-sm text-gray-600">
                    Include purpose and your organization name for quick identification
                  </p>
                </div>
                
                <div className="p-4 text-center border border-fuchsia-200 bg-fuchsia-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-600">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h4 className="mb-2 font-bold text-gray-800">Concise Details</h4>
                  <p className="text-sm text-gray-600">
                    Briefly state your request, timeline, and what you're offering or proposing
                  </p>
                </div>
                
                <div className="p-4 text-center border border-fuchsia-200 bg-fuchsia-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-600">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="mb-2 font-bold text-gray-800">Attach Relevant Files</h4>
                  <p className="text-sm text-gray-600">
                    Include proposals, press kits, or background information as attachments
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Response Notice */}
        <motion.div
          className="max-w-2xl p-6 mx-auto mt-12 text-center bg-white border shadow-sm border-fuchsia-200 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center justify-center mb-2">
            <svg className="w-5 h-5 mr-2 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-semibold text-gray-800">Please Note</p>
          </div>
          <p className="text-gray-700">
            Joyline trains extensively and competes internationally. During major competitions 
            and intensive training camps, email responses may take slightly longer. Your 
            patience and understanding are greatly appreciated.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute right-0 mt-12 opacity-10 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-64 h-64 rounded-full bg-fuchsia-300 blur-3xl"></div>
        </motion.div>
        
        <motion.div 
          className="absolute left-0 mt-12 opacity-10 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-48 h-48 rounded-full bg-fuchsia-200 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}