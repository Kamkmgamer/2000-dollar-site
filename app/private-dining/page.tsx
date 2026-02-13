'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Wine, Utensils, Calendar, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const rooms = [
  { id: 1, name: 'Sala Rossa', capacity: '10-20', size: '450 sq ft', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', features: ['Private entrance', 'Full AV system', 'Dedicated server'] },
  { id: 2, name: 'Sala Bianca', capacity: '20-40', size: '800 sq ft', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80', features: ['Garden view', 'Piano', 'Catering kitchen'] },
  { id: 3, name: 'Chef\'s Table', capacity: '6-10', size: '200 sq ft', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', features: ['Open kitchen', 'Wine pairing', 'Chef interaction'] }
];

const menuPackages = [
  { name: 'Classic Italian', price: 75, description: '3-course dinner' },
  { name: 'Tuscan Feast', price: 95, description: '4-course with wine pairing' },
  { name: 'Chef\'s Tasting', price: 150, description: '7-course tasting menu' }
];

export default function PrivateDiningPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', guests: '', room: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <main className="pt-24 min-h-screen bg-[#0d0d0d]">
      <section className="relative py-32">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80" alt="" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">Exclusive Experience</span>
            <h1 className="font-serif text-5xl md:text-7xl mt-4">Private Dining</h1>
            <p className="text-white/70 text-xl mt-4 max-w-2xl mx-auto">Celebrate life's special moments in our elegant private rooms</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-4xl">Our Private Rooms</h2>
            <p className="text-white/60 mt-4">Three unique spaces for your special occasions</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div key={room.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-serif text-2xl mb-2">{room.name}</h3>
                <p className="text-amber-500 text-sm mb-3">{room.capacity} guests • {room.size}</p>
                <ul className="space-y-1 text-white/60 text-sm">
                  {room.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-4xl">Menu Packages</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuPackages.map((pkg, index) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-8 border border-white/10 text-center hover:border-amber-500/50 transition-colors">
                <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
                <p className="text-amber-500 text-3xl font-serif mb-2">${pkg.price}<span className="text-white/60 text-base">/person</span></p>
                <p className="text-white/60">{pkg.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#141414]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-4xl">Request a Booking</h2>
          </motion.div>
          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 bg-white/5 rounded-lg border border-white/10">
              <Check className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="font-serif text-2xl mb-2">Request Sent!</h3>
              <p className="text-white/60">Our events team will contact you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500" />
                <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500" />
                <input type="number" placeholder="Number of guests" value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select value={formData.room} onChange={(e) => setFormData({...formData, room: e.target.value})}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500">
                  <option value="">Select room</option>
                  {rooms.map(r => <option key={r.id} value={r.name}>{r.name}</option>)}
                </select>
                <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500" />
              </div>
              <textarea placeholder="Additional details..." rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500 resize-none" />
              <Button type="submit" variant="primary" className="w-full gap-2">
                Submit Request <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
