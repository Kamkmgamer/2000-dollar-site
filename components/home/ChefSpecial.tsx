'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Quote } from 'lucide-react';

export function ChefSpecial() {
  return (
    <section className="py-24 bg-[#141414] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="w-full h-full bg-amber-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500/30 rounded-lg" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                  alt="Chef preparing dish"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-white" />
                  <div>
                    <p className="text-white font-serif text-lg">Michelin Star</p>
                    <p className="text-white/80 text-sm">Chef Marco Rossi</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">
              From Our Kitchen
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              A Passion for <span className="text-gradient">Perfection</span>
            </h2>
            
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                For over 25 years, Chef Marco Rossi has been crafting authentic Italian 
                dishes that honor his grandmother&apos;s recipes from Tuscany. Every plate 
                that leaves our kitchen tells a story of tradition, quality, and love.
              </p>
              <p>
                We source our ingredients from small family farms across Italy, ensuring 
                that each bite transports you to the rolling hills of Umbria, the 
                coast of Amalfi, and the vineyards of Chianti.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
              <Quote className="w-8 h-8 text-amber-500 mb-4" />
              <p className="font-serif text-xl italic text-white/90">
                &ldquo;Cooking is not about perfection. It&apos;s about passion, heritage, 
                and sharing the warmth of Italian hospitality with every guest.&rdquo;
              </p>
              <p className="mt-4 text-amber-500 text-sm tracking-wider">— Chef Marco Rossi</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
