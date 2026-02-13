'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">
              Award-Winning Cuisine
            </span>
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">The Art of</span>
          <br />
          <span className="text-gradient">Italian Dining</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Experience authentic Italian cuisine crafted with passion and tradition. 
          Every dish tells a story of heritage, flavor, and love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/reservations">
            <Button variant="primary" size="lg" className="gap-2">
              Reserve Your Table
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/menu">
            <Button variant="outline" size="lg">
              View Our Menu
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-8 text-white/60"
        >
          <div className="text-center">
            <p className="text-3xl font-serif text-amber-500">25+</p>
            <p className="text-sm tracking-wider">Years of Excellence</p>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="text-3xl font-serif text-amber-500">50K+</p>
            <p className="text-sm tracking-wider">Happy Guests</p>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="text-3xl font-serif text-amber-500">15</p>
            <p className="text-sm tracking-wider">Award Winners</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-amber-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
