'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'food', name: 'Food' },
  { id: 'interior', name: 'Interior' },
  { id: 'events', name: 'Events' },
  { id: 'team', name: 'Team' }
];

const galleryItems = [
  { id: 1, category: 'food', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80', alt: 'Gourmet dish' },
  { id: 2, category: 'interior', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80', alt: 'Restaurant interior' },
  { id: 3, category: 'food', src: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1200&q=80', alt: 'Truffle risotto' },
  { id: 4, category: 'events', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', alt: 'Private event' },
  { id: 5, category: 'food', src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1200&q=80', alt: 'Salmon dish' },
  { id: 6, category: 'interior', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80', alt: 'Elegant dining' },
  { id: 7, category: 'food', src: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=1200&q=80', alt: 'Pasta dish' },
  { id: 8, category: 'team', src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80', alt: 'Chef preparing food' },
  { id: 9, category: 'events', src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1200&q=80', alt: 'Wine tasting' },
  { id: 10, category: 'interior', src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80', alt: 'Bar area' },
  { id: 11, category: 'food', src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80', alt: 'Beef dish' },
  { id: 12, category: 'food', src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200&q=80', alt: 'Pasta making' }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const currentIndex = selectedImage !== null 
    ? filteredItems.findIndex(item => item.id === selectedImage)
    : -1;

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1].id);
    }
  };

  return (
    <main className="pt-24 min-h-screen bg-[#0d0d0d]">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Gallery background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Camera className="w-8 h-8 text-amber-500" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mt-4"
          >
            A visual journey through the Bella Italia experience
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 z-30 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                  onClick={() => openLightbox(item.id)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm tracking-wider uppercase">
                      View
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white p-2"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-6 text-white/60 hover:text-white p-2"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-6 text-white/60 hover:text-white p-2"
              disabled={currentIndex === filteredItems.length - 1}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[80vh] aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredItems[currentIndex].src}
                alt={filteredItems[currentIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
              {currentIndex + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
