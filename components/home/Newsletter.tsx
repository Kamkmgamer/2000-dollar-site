'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-[#141414] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Mail className="w-12 h-12 text-amber-500 mx-auto mb-6" />
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">
            Stay Connected
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            Join Our Table
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to receive exclusive invitations to special events, 
            seasonal menu updates, and special offers from Bella Italia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-amber-500"
            >
              <Check className="w-6 h-6" />
              <span className="text-lg">Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-amber-600 text-white font-medium tracking-wider rounded-lg hover:bg-amber-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-white/40 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
