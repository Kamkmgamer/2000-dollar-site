import Link from 'next/link';
import { ChefHat, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ChefHat className="w-10 h-10 text-amber-500" />
              <div>
                <span className="font-serif text-xl tracking-wider">BELLA ITALIA</span>
                <p className="text-[10px] tracking-[0.3em] text-amber-500 uppercase">
                  Fine Italian Dining
                </p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Experience the authentic taste of Italy in the heart of the city. 
              Our family recipes, passed down through generations, bring you 
              the true essence of Italian cuisine.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6 text-amber-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/menu', label: 'Our Menu' },
                { href: '/about', label: 'Our Story' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/private-dining', label: 'Private Dining' },
                { href: '/events', label: 'Events' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6 text-amber-500">
              Hours
            </h3>
            <ul className="space-y-3 text-white/60">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>4:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6 text-amber-500">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  123 Italian Way<br />
                  Downtown District<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>(212) 555-0123</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>info@bellaitalia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Bella Italia. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-amber-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
