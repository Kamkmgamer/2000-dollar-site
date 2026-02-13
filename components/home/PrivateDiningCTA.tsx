'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Wine, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const features = [
  {
    icon: Users,
    title: "Intimate Spaces",
    description: "Private rooms for 10-40 guests with customizable seating"
  },
  {
    icon: Wine,
    title: "Curated Wine Pairing",
    description: "Expert sommeliers to pair wines with your menu"
  },
  {
    icon: Sparkles,
    title: "Custom Menus",
    description: "Tailored Italian courses crafted by Chef Marco"
  }
];

export function PrivateDiningCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Private dining"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">
              Exclusive Experience
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Private Dining & Events
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Celebrate life&apos;s special moments in our elegant private dining rooms. 
              From intimate family gatherings to corporate celebrations, we create 
              unforgettable experiences with authentic Italian hospitality.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-1">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/private-dining">
              <Button variant="primary" size="lg" className="gap-2">
                Inquire Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80"
                  alt="Private dining room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80"
                  alt="Wine pairing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80"
                  alt="Chef preparing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80"
                  alt="Elegant table"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
