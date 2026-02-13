'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Gift, Mail, Check, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const amounts = [25, 50, 100, 150, 200, 250];

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({ recipientName: '', recipientEmail: '', senderName: '', message: '' });
  const [step, setStep] = useState(1);

  const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <main className="pt-24 min-h-screen bg-[#0d0d0d]">
      <section className="relative py-32">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1920&q=80" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Gift className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h1 className="font-serif text-5xl md:text-7xl">Gift Cards</h1>
            <p className="text-white/70 text-xl mt-4">Share the gift of authentic Italian dining</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="mb-8">
                <h2 className="font-serif text-2xl mb-4">Select Amount</h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {amounts.map((amt) => (
                    <button key={amt} onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                      className={`py-4 rounded-lg border transition-all ${selectedAmount === amt ? 'bg-amber-600 border-amber-500 text-white' : 'bg-white/5 border-white/10 hover:border-amber-500/50'}`}>
                      ${amt}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <label className="block text-sm mb-2 text-white/60">Or enter custom amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">$</span>
                    <input type="number" min="10" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                      className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500" placeholder="Custom amount" />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="font-serif text-2xl mb-4">Recipient Details</h2>
                <div className="space-y-4">
                  <input type="text" placeholder="Recipient name" required value={formData.recipientName} onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500" />
                  <input type="email" placeholder="Recipient email" required value={formData.recipientEmail} onChange={(e) => setFormData({...formData, recipientEmail: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500" />
                  <input type="text" placeholder="Your name" required value={formData.senderName} onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500" />
                  <textarea placeholder="Personal message (optional)" rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500 resize-none" />
                </div>
              </div>

              {amount > 0 && (
                <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white/60">Gift card value</span>
                    <span className="text-2xl font-serif">${amount}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white/60">Service fee</span>
                    <span>$0</span>
                  </div>
                  <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                    <span className="text-lg">Total</span>
                    <span className="text-2xl font-serif text-amber-500">${amount}</span>
                  </div>
                </div>
              )}

              <Button onClick={handleSubmit} disabled={!amount} variant="primary" className="w-full gap-2">
                <CreditCard className="w-5 h-5" />
                Continue to Payment
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-amber-600/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-amber-500" />
              </div>
              <h2 className="font-serif text-3xl mb-4">Gift Card Purchased!</h2>
              <p className="text-white/60 mb-6">A confirmation email has been sent to {formData.recipientEmail}</p>
              <p className="text-white/80">The gift card will be delivered via email immediately.</p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-6">Gift Card Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'No Expiration', desc: 'Never worry about expiration dates' },
              { title: 'Redeem Anywhere', desc: 'Use at any Bella Italia location' },
              { title: 'Reload Anytime', desc: 'Add funds to existing cards' }
            ].map((item, i) => (
              <div key={i} className="p-6">
                <h3 className="font-serif text-xl mb-2 text-amber-500">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
