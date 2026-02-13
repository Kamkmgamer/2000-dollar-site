'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const dishes = [
  {
    id: 1,
    name: "Truffle Risotto",
    description: "Arborio rice with black truffle, parmesan, and white wine reduction",
    price: "$42",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    category: "Main Course"
  },
  {
    id: 2,
    name: "Burrata Caprese",
    description: "Fresh burrata, heirloom tomatoes, basil, and aged balsamic",
    price: "$24",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&q=80",
    category: "Antipasti"
  },
  {
    id: 3,
    name: "Branzino al Forno",
    description: "Whole roasted Mediterranean sea bass with herbs and lemon",
    price: "$48",
    image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=600&q=80",
    category: "Main Course"
  }
];

export function FeaturedDishes() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">
            Chef&apos;s Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            Featured Dishes
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover our most beloved creations, crafted with the finest seasonal ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-amber-600 text-white text-xs tracking-wider rounded-full mb-3">
                    {dish.category}
                  </span>
                  <p className="text-amber-500 font-serif text-2xl">{dish.price}</p>
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-2 group-hover:text-amber-500 transition-colors">
                {dish.name}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {dish.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/menu">
            <button className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors">
              <span className="text-sm tracking-wider uppercase">View Full Menu</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
