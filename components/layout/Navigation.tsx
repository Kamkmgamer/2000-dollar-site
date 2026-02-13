'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChefHat, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/private-dining', label: 'Private Dining' },
  { href: '/events', label: 'Events' },
  { href: '/gift-cards', label: 'Gift Cards' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a1a1a]/95 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <ChefHat className="w-10 h-10 text-amber-500 transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-wider text-white">
              BELLA ITALIA
            </span>
            <span className="text-[10px] tracking-[0.3em] text-amber-500 uppercase">
              Fine Italian Dining
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 6).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm tracking-widest uppercase transition-colors duration-300 hover:text-amber-500 ${
                pathname === link.href ? 'text-amber-500' : 'text-white/80'
              }`}
            >
              {link.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-amber-500"
                initial={{ width: 0 }}
                animate={{ width: pathname === link.href ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
          <Link href="/reservations">
            <Button variant="primary" size="sm" className="gap-2">
              <Calendar className="w-4 h-4" />
              Reserve
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1a1a1a]/98 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 text-lg tracking-wider transition-colors ${
                      pathname === link.href
                        ? 'text-amber-500'
                        : 'text-white/80 hover:text-amber-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link href="/reservations" className="block mt-4">
                  <Button variant="primary" className="w-full justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Reserve a Table
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
