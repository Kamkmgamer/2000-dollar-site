'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'authentic-tiramisu-recipe',
    title: 'The Secret to Authentic Tiramisu',
    excerpt: 'Our pastry chef shares the traditional recipe passed down through generations of Italian families.',
    content: 'Tiramisu is one of the most beloved Italian desserts worldwide...',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
    author: 'Chef Sofia Bianchi',
    date: '2026-02-10',
    category: 'Recipes',
    readTime: '5 min'
  },
  {
    id: 2,
    slug: 'spring-menu-preview',
    title: 'Discover Our Spring Menu',
    excerpt: 'Fresh seasonal ingredients are here! Explore our new spring dishes featuring asparagus, peas, and more.',
    content: 'As the seasons change, so does our menu at Bella Italia...',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    author: 'Chef Marco Rossi',
    date: '2026-02-05',
    category: 'News',
    readTime: '3 min'
  },
  {
    id: 3,
    slug: 'wine-pairing-guide',
    title: 'A Beginner\'s Guide to Italian Wine Pairing',
    excerpt: 'Learn how to match the perfect Italian wine with your favorite pasta dishes.',
    content: 'Italian wine is as diverse as its cuisine...',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    author: 'Antonio Gallo',
    date: '2026-01-28',
    category: 'Wine',
    readTime: '7 min'
  },
  {
    id: 4,
    slug: 'pasta-making-class',
    title: 'Join Our Pasta Making Masterclass',
    excerpt: 'Sign up for an exclusive hands-on experience with our executive chef.',
    content: 'There\'s nothing quite like fresh homemade pasta...',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    author: 'Bella Italia Team',
    date: '2026-01-20',
    category: 'Events',
    readTime: '2 min'
  },
  {
    id: 5,
    slug: 'history-of-osso-buco',
    title: 'The Rich History of Osso Buco',
    excerpt: 'Explore the origins of this iconic Milanese dish and learn how to make it at home.',
    content: 'Osso Buco, literally meaning &quot;bone with a hole&quot;...',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    author: 'Chef Marco Rossi',
    date: '2026-01-15',
    category: 'Recipes',
    readTime: '6 min'
  },
  {
    id: 6,
    slug: 'sustainability-practices',
    title: 'Our Commitment to Sustainability',
    excerpt: 'Learn about the eco-friendly practices we implement in our kitchen and operations.',
    content: 'At Bella Italia, we believe in responsible sourcing...',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80',
    author: 'Maria Rossi',
    date: '2026-01-08',
    category: 'News',
    readTime: '4 min'
  }
];

const categories = ['All', 'Recipes', 'News', 'Wine', 'Events'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-24 min-h-screen bg-[#0d0d0d]">
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1920&q=80" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif text-5xl md:text-6xl">Blog</h1>
            <p className="text-white/60 text-lg mt-4">Stories, recipes, and news from Bella Italia</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sticky top-20 z-30 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${activeCategory === cat ? 'bg-amber-600 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500 text-sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-amber-500/50 transition-colors group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-amber-600 text-white text-xs rounded-full">{post.category}</div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-xl mb-3 group-hover:text-amber-500 transition-colors line-clamp-2">{post.title}</h2>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-white/40">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 text-white/40">
              <p>No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
