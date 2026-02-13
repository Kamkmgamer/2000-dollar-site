'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, Users, ChevronLeft, ChevronRight, Check, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const timeSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];
const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const occasions = ['None', 'Birthday', 'Anniversary', 'Business', 'Date Night', 'Celebration', 'Other'];

export default function ReservationsPage() {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({ date: '', time: '', guests: 2, name: '', email: '', phone: '', occasion: 'None', requests: '' });
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    setConfirmationCode(code);
    setStep(4);
  };

  const getDateInput = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  };

  return (
    <main className="pt-24 min-h-screen bg-[#0d0d0d]">
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Calendar className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h1 className="font-serif text-5xl md:text-6xl">Reservations</h1>
            <p className="text-white/70 text-xl mt-4">Book your table for an unforgettable dining experience</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${step >= s ? 'bg-amber-600 text-white' : 'bg-white/10 text-white/40'}`}>
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 3 && <div className={`w-20 h-0.5 ${step > s ? 'bg-amber-600' : 'bg-white/10'}`} />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                <div>
                  <label className="block text-lg mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-amber-500" /> Select Date</label>
                  <input type="date" min={getDateInput()} value={booking.date} onChange={(e) => setBooking({...booking, date: e.target.value})}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500 text-lg" />
                </div>
                <div>
                  <label className="block text-lg mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-amber-500" /> Select Time</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {timeSlots.map((time) => (
                      <button key={time} onClick={() => setBooking({...booking, time})}
                        className={`py-3 rounded-lg border transition-all ${booking.time === time ? 'bg-amber-600 border-amber-500 text-white' : 'bg-white/5 border-white/10 hover:border-amber-500/50'}`}>
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-lg mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-amber-500" /> Party Size</label>
                  <div className="flex flex-wrap gap-3">
                    {partySizes.map((size) => (
                      <button key={size} onClick={() => setBooking({...booking, guests: size})}
                        className={`w-14 h-14 rounded-lg border transition-all ${booking.guests === size ? 'bg-amber-600 border-amber-500 text-white' : 'bg-white/5 border-white/10 hover:border-amber-500/50'}`}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <Button onClick={handleNext} disabled={!booking.date || !booking.time} variant="primary" className="w-full py-4">
                  Continue
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h2 className="font-serif text-2xl mb-6">Your Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-white/60">Name *</label>
                    <input type="text" required value={booking.name} onChange={(e) => setBooking({...booking, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-white/60">Email *</label>
                    <input type="email" required value={booking.email} onChange={(e) => setBooking({...booking, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2 text-white/60">Phone *</label>
                  <input type="tel" required value={booking.phone} onChange={(e) => setBooking({...booking, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-white/60">Occasion</label>
                  <select value={booking.occasion} onChange={(e) => setBooking({...booking, occasion: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500">
                    {occasions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2 text-white/60">Special Requests</label>
                  <textarea rows={3} value={booking.requests} onChange={(e) => setBooking({...booking, requests: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500 resize-none" />
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleBack} variant="ghost" className="flex-1">Back</Button>
                  <Button onClick={handleNext} disabled={!booking.name || !booking.email || !booking.phone} variant="primary" className="flex-1">
                    Review Booking
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h2 className="font-serif text-2xl mb-6">Confirm Your Reservation</h2>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/60">Date</span>
                    <span className="font-medium">{booking.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Time</span>
                    <span className="font-medium">{booking.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Guests</span>
                    <span className="font-medium">{booking.guests} guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Name</span>
                    <span className="font-medium">{booking.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Email</span>
                    <span className="font-medium">{booking.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Phone</span>
                    <span className="font-medium">{booking.phone}</span>
                  </div>
                  {booking.occasion !== 'None' && (
                    <div className="flex justify-between">
                      <span className="text-white/60">Occasion</span>
                      <span className="font-medium">{booking.occasion}</span>
                    </div>
                  )}
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleBack} variant="ghost" className="flex-1">Back</Button>
                  <Button onClick={handleSubmit} variant="primary" className="flex-1">
                    Confirm Reservation
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-amber-600/20 flex items-center justify-center mx-auto mb-6">
                  <PartyPopper className="w-10 h-10 text-amber-500" />
                </div>
                <h2 className="font-serif text-3xl mb-4">Reservation Confirmed!</h2>
                <p className="text-white/60 mb-6">A confirmation email has been sent to {booking.email}</p>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10 inline-block mb-8">
                  <p className="text-white/40 text-sm mb-2">Confirmation Code</p>
                  <p className="text-amber-500 text-3xl font-mono tracking-wider">{confirmationCode}</p>
                </div>
                <p className="text-white/60">Please arrive 10 minutes before your reservation time.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
