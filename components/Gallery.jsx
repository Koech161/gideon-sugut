'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: '/er1.jpg',
    
  },
  {
    id: 2,
    src: '/er2.jpg',
    
  },
  {
    id: 3,
    src: '/er3.jpg',
    
  },
  {
    id: 4,
    src: '/er4.jpg',
    
  },
  {
    id: 5,
    src: '/er5.jpg',
   
  },
  {
    id: 6,
    src: '/er5.jpg',
    
  },
  {
    id: 7,
    src: '/er7.jpg',
    
  },
  {
    id: 8,
    src: '/er8.jpg',
    
  }
];



export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-white to-stone-50" id="gallery">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase text-stone-700">
            Visual Journey
          </h2>
          <h1 className="mb-4 text-4xl font-black text-gray-900 sm:text-5xl">
            Gallery <span className="text-stone-600">Moments</span>
          </h1>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-stone-500 to-stone-600"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
            Explore the journey through powerful images that capture the dedication, 
            triumphs, and inspiring moments of Eric Kiprono Sang career.
          </p>
        </motion.div>

        

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg border border-stone-100 transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] bg-gray-200">
                    {/* Placeholder for image - replace with Next.js Image component in production */}
                    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-stone-100 to-stone-50">
                      {/* <div className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-stone-200">
                          <svg className="w-8 h-8 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-stone-700">Image</p>
                        <p className="text-xs text-stone-600">{image.title}</p>
                      </div> */}

                      <img src={image.src} alt={image.title} />
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute px-3 py-1 text-xs font-bold text-white rounded-full bg-stone-600 top-4 left-4">
                      {image.year}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute px-3 py-1 text-xs font-semibold rounded-full text-stone-700 top-4 right-4 bg-white/90 backdrop-blur-sm">
                      {image.category}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 transition-all duration-300 bg-black/0 group-hover:bg-black/20">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                        <h3 className="mb-1 text-lg font-bold">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                        <div className="flex items-center justify-center mt-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                          <span className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm">
                            Click to view
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div 
            className="py-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-stone-100">
              <svg className="w-12 h-12 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">No images found</h3>
            <p className="text-gray-600">Try selecting a different category to see more photos.</p>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full overflow-hidden bg-white rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-stone-100 bg-stone-50">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedImage.title}</h3>
                  <p className="text-stone-600">{selectedImage.description}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 text-gray-500 transition-colors rounded-lg hover:text-stone-600 hover:bg-stone-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative aspect-[4/3] bg-gray-200">
               
                <img src={selectedImage.src} alt={selectedImage.title} className="object-cover w-full h-full" />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6 border-t border-stone-100 bg-stone-50">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="px-3 py-1 font-semibold rounded-full text-stone-700 bg-stone-100">
                    {selectedImage.category}
                  </span>
                  <span>{selectedImage.year}</span>
                </div>
                <a
                  href={selectedImage.src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 font-semibold text-white transition-colors rounded-lg bg-stone-600 hover:bg-stone-700"
                >
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute right-0 mt-12 opacity-10 -z-10">
        <div className="w-64 h-64 rounded-full bg-stone-300 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 opacity-10 -z-10">
        <div className="w-48 h-48 rounded-full bg-stone-200 blur-3xl"></div>
      </div>
    </section>
  );
}