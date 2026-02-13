'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
    caption: "Fresh ingredients, authentic flavors",
    likes: 234
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
    caption: "Pasta making tradition",
    likes: 189
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    caption: "Chef's special creation",
    likes: 312
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    caption: "Seafood perfection",
    likes: 276
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
    caption: "Dinner at Bella Italia",
    likes: 198
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    caption: "Wine cellar selection",
    likes: 245
  }
];

export function InstagramFeed() {
  return (
    <section className="py-16 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Instagram className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">
            Follow Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">
            @BellaItaliaNYC
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm">❤️ {post.likes}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
