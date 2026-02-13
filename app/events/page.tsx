'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight, Ticket } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Wine Tasting Evening',
    date: '2026-02-20',
    time: '7:00 PM',
    type: 'Wine Event',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
    description: 'Join our sommelier for an exclusive evening of Italian wine tasting featuring selections from Tuscany.',
    price: 75,
    spots: 12
  },
  {
    id: 2,
    title: 'Pasta Making Class',
    date: '2026-02-25',
    time: '6:00 PM',
    type: 'Cooking Class',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    description: 'Learn the art of handmade pasta with Chef Marco. Includes wine pairing and dinner.',
    price: 125,
    spots: 8
  },
  {
    id: 3,
    title: 'Valentine\'s Day Dinner',
    date: '2026-02-14',
    time: '6:00 PM',
    type: 'Special Dinner',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    description: 'An exclusive 7-course tasting menu with wine pairing for the perfect Valentine\'s evening.',
    price: 195,
    spots: 30
  },
  {
    id: 4,
    title: 'Italian Jazz Night',
    date: '2026-03-05',
    time: '8:00 PM',
    type: 'Live Music',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    description: 'Enjoy authentic Italian jazz while dining on our special jazz night menu.',
    price: 45,
    spots: 40
  },
  {
    id: 5,
    title: 'Truffle Masterclass',
    date: '2026-03-15',
    time: '5:00 PM',
    type: 'Cooking Class',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80',
    description: 'Dive deep into the world of truffles with our executive chef. Includes truffle hunting tips and tasting.',
    price: 150,
    spots: 6
  },
  {
    id: 6,
    title: 'Sunday Brunch Club',
    date: 'Every Sunday',
    time: '11:00 AM',
    type: 'Brunch',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    description: 'Weekly Sunday brunch featuring unlimited mimosas and our signature Italian breakfast dishes.',
    price: 55,
    spots: 50
  }
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <main className="pt-24 min-h-screen bg-[#0d0d0d]">
      <section className="relative py-32">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Calendar className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h1 className="font-serif text-5xl md:text-7xl">Events</h1>
            <p className="text-white/70 text-xl mt-4">Unique dining experiences and special occasions</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div key={event.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-amber-500/50 transition-colors">
                <div className="relative h-48">
                  <Image src={event.image} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-amber-600 text-white text-xs rounded-full">{event.type}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-3">{event.title}</h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-white/50 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {event.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {event.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-500 font-serif text-xl">${event.price}</span>
                    <span className="text-white/50 text-sm">{event.spots} spots left</span>
                  </div>
                  <button className="w-full mt-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
                    <Ticket className="w-4 h-4" /> Reserve
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-4">Host Your Own Event</h2>
          <p className="text-white/60 mb-8">Looking to host a private event? Our team can create a customized experience for you.</p>
          <a href="/private-dining" className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}
