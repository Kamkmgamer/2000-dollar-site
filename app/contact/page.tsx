'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-24 min-h-screen bg-[#0d0d0d]">
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif text-5xl md:text-6xl">Contact Us</h1>
            <p className="text-white/60 text-lg mt-4">We'd love to hear from you</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-3xl mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Address</h3>
                    <p className="text-white/60">123 Italian Way, Downtown District<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p className="text-white/60">(212) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-white/60">info@bellaitalia.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Hours</h3>
                    <p className="text-white/60">Mon-Thu: 5PM - 10PM<br />Fri-Sat: 5PM - 11PM<br />Sun: 4PM - 9PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-amber-600/20 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-amber-500" />
                    </div>
                    <h3 className="font-serif text-2xl mb-2">Message Sent!</h3>
                    <p className="text-white/60">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm mb-2 text-white/60">Name</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500" />
                      </div>
                      <div>
                        <label className="block text-sm mb-2 text-white/60">Email</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm mb-2 text-white/60">Phone</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500" />
                      </div>
                      <div>
                        <label className="block text-sm mb-2 text-white/60">Subject</label>
                        <select value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500">
                          <option value="">Select...</option>
                          <option value="reservation">Reservation</option>
                          <option value="private">Private Event</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-white/60">Message</label>
                      <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500 resize-none" />
                    </div>
                    <Button type="submit" variant="primary" className="w-full gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80" alt="Map" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
