'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Food Critic, NY Times",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    text: "An extraordinary dining experience. The truffle risotto was absolutely divine, and the service was impeccable. Bella Italia sets the standard for Italian fine dining in the city."
  },
  {
    id: 2,
    name: "James Chen",
    role: "Regular Guest",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "We've been coming here for anniversaries for 10 years. The consistency in quality and the warm hospitality make it our special place. The pasta is truly like being in Rome."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "From the moment we walked in, we felt transported to Italy. The ambiance, the food, the wine selection - everything was thoughtfully curated. A must-visit!"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0d0d0d] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">
            Guest Reviews
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            What Our Guests Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#141414] p-8 rounded-lg relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-500/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-white/70 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
