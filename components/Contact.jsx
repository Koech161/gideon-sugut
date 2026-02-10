'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  const phoneNumber = "0725354898";
  const whatsappNumber = "0725354898";
  
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-orange-50"
      aria-label="Contact Meshack Kipruto"
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
            Contact <span className="text-orange-600">Meshack Kipruto</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-orange-500 to-red-600"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
            For sponsorship opportunities, media interviews, speaking engagements, 
            brand collaborations, or race invitations that align with athletic excellence.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                {/* Email Contact */}
                <motion.a
                  href="mailto:meshackkipruto003@gmail.com"
                  className="flex items-center p-4 transition-all border border-orange-100 bg-orange-50 rounded-xl hover:bg-orange-100 group hover:shadow-lg hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">Email Address</h4>
                    <p className="text-gray-700">meshackkipruto003@gmail.com</p>
                    <p className="text-sm text-orange-600">Primary contact for official inquiries</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-orange-500 transition-opacity opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

                {/* Phone Contact */}
                <motion.a
                  href={`tel:+254${phoneNumber}`}
                  className="flex items-center p-4 transition-all border border-orange-100 bg-orange-50 rounded-xl hover:bg-orange-100 group hover:shadow-lg hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-orange-600 to-red-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">Phone Number</h4>
                    <p className="text-gray-700">+254 {phoneNumber}</p>
                    <p className="text-sm text-orange-600">Direct call for urgent matters</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-orange-500 transition-opacity opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

                {/* WhatsApp Contact */}
                <motion.a
                  href={`https://wa.me/254${whatsappNumber.replace(/^0/, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 transition-all border border-green-100 bg-green-50 rounded-xl hover:bg-green-100 group hover:shadow-lg hover:translate-x-1"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.491-8.418" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">WhatsApp</h4>
                    <p className="text-gray-700">+254 {whatsappNumber}</p>
                    <p className="text-sm text-green-600">Quick messaging for immediate responses</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-green-500 transition-opacity opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

                {/* Contact Guidelines Card */}
                <div className="p-4 border border-orange-200 bg-gradient-to-r from-orange-50 to-white rounded-xl">
                  <h4 className="mb-2 font-bold text-gray-800">Contact Guidelines</h4>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="mb-1 text-sm font-medium text-orange-700">Email For:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          Official inquiries
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          Detailed proposals
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          Contract discussions
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-orange-700">Phone For:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          Urgent matters
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          Media interviews
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          Immediate coordination
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-orange-700">WhatsApp For:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          Quick questions
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          Travel coordination
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          Instant responses
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Contact Information
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-4 border border-orange-200 bg-gradient-to-r from-orange-50 to-white rounded-xl">
                  <h4 className="mb-2 font-semibold text-gray-800">Best Contact Times</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Weekdays: 9 AM - 5 PM EAT
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Avoid training hours (6-9 AM & 4-6 PM)
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 border border-orange-200 bg-gradient-to-r from-orange-50 to-white rounded-xl">
                  <h4 className="mb-2 font-semibold text-gray-800">Location & Timezone</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Based in Rift Valley, Kenya
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 01118 0z" />
                      </svg>
                      East Africa Time (GMT+3)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 mt-6 border border-orange-200 bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-orange-700">Response Time:</span> All inquiries receive responses within 24-48 hours. During major competitions and intensive training periods, responses may take slightly longer. WhatsApp messages typically receive faster responses for urgent matters.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

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