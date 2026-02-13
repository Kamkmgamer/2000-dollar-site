'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Search, X, ChevronDown, Leaf, Flame, Wheat, Star, ChefHat, Wine, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { id: 'antipasti', name: 'Antipasti', description: 'Begin your journey' },
  { id: 'pasta', name: 'Pasta Fresca', description: 'Hand-rolled daily' },
  { id: 'secondi', name: 'Secondi', description: 'Main courses' },
  { id: 'pizza', name: 'Pizza', description: 'Wood-fired perfection' },
  { id: 'dolci', name: 'Dolci', description: 'Sweet finales' }
];

const menuItems = [
  {
    id: '1',
    name: 'Carpaccio di Manzo',
    description: 'Thinly sliced prime beef tenderloin, arugula, shaved parmesan, truffle oil, capers',
    price: 22,
    category: 'antipasti',
    tags: ['gluten-free'],
    chef: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80'
  },
  {
    id: '2',
    name: 'Burrata e Prosciutto',
    description: 'Creamy burrata from Puglia, 24-month aged prosciutto di Parma, heirloom tomatoes, basil oil',
    price: 24,
    category: 'antipasti',
    tags: ['gluten-free'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80'
  },
  {
    id: '6',
    name: 'Tagliatelle al Tartufo Nero',
    description: 'Fresh tagliatelle, black winter truffle, butter, parmesan fondue',
    price: 38,
    category: 'pasta',
    tags: ['vegetarian'],
    chef: true,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80'
  },
  {
    id: '7',
    name: 'Linguine alle Vongole Veraci',
    description: 'Manila clams, white wine, garlic, chili flakes, fresh parsley',
    price: 32,
    category: 'pasta',
    tags: [],
    popular: true,
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80'
  },
  {
    id: '9',
    name: 'Cacio e Pepe',
    description: 'Spaghetti, pecorino Romano DOP, black pepper, pasta water emulsion',
    price: 24,
    category: 'pasta',
    tags: ['vegetarian'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80'
  },
  {
    id: '12',
    name: 'Branzino in Crosta di Sale',
    description: 'Whole Mediterranean sea bass baked in sea salt crust, tableside presentation',
    price: 48,
    category: 'secondi',
    tags: ['gluten-free'],
    chef: true,
    image: 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=400&q=80'
  },
  {
    id: '13',
    name: 'Filetto di Manzo',
    description: 'Prime beef tenderloin, Barolo wine reduction, truffle mashed potatoes',
    price: 56,
    category: 'secondi',
    tags: ['gluten-free'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80'
  },
  {
    id: '17',
    name: 'Margherita DOP',
    description: 'San Marzano tomatoes, buffalo mozzarella DOP, fresh basil, extra virgin olive oil',
    price: 20,
    category: 'pizza',
    tags: ['vegetarian'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80'
  },
  {
    id: '21',
    name: 'Tiramisu della Casa',
    description: 'Espresso-soaked ladyfingers, mascarpone cream, cocoa powder, aged rum',
    price: 14,
    category: 'dolci',
    tags: ['vegetarian'],
    popular: true,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80'
  },
  {
    id: '22',
    name: 'Panna Cotta ai Frutti di Bosco',
    description: 'Vanilla bean panna cotta, mixed berry compote, pistachio crumble',
    price: 13,
    category: 'dolci',
    tags: ['vegetarian', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80'
  }
];

const tagIcons: Record<string, React.ElementType> = {
  'vegetarian': Leaf,
  'vegan': Leaf,
  'gluten-free': Wheat,
  'spicy': Flame,
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('antipasti');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      {/* Hero - Magazine Style */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=1920&q=80"
            alt="Italian cuisine"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent" />
        </div>

        {/* Magazine Header */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10">
          <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <button 
            onClick={() => setSearchOpen(true)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1 border border-white/30 text-white/80 text-xs tracking-[0.4em] uppercase">
                Est. 1998 • New York
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl text-white tracking-tight"
            >
              Bella Italia
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-3 mt-6"
            >
              <span className="w-12 h-px bg-white/30" />
              <span className="text-white/50 text-sm tracking-[0.3em] uppercase">Menu</span>
              <span className="w-12 h-px bg-white/30" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/60 mt-8 max-w-md mx-auto text-lg font-light"
            >
              A curated selection of Italian classics, crafted with tradition and innovation
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/30 text-xs tracking-widest uppercase">Explore</span>
            <ChevronDown className="w-5 h-5 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* Category Navigation - Horizontal Scroll */}
      <nav className="sticky top-0 z-40 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat.id 
                    ? 'text-white' 
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {cat.name}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Title */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="text-amber-500 text-xs tracking-[0.4em] uppercase">
              {categories.find(c => c.id === activeCategory)?.description}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-2">
              {categories.find(c => c.id === activeCategory)?.name}
            </h2>
          </motion.div>

          {/* Menu Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                  className="group cursor-pointer"
                >
                  <div className={`relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 ${
                    selectedItem === item.id 
                      ? 'bg-white/[0.05] border-amber-500/30' 
                      : 'hover:bg-white/[0.04] hover:border-white/10'
                  }`}>
                    <div className="flex">
                      {/* Image */}
                      <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        {item.popular && (
                          <div className="absolute top-2 left-2">
                            <span className="flex items-center gap-1 px-2 py-1 bg-amber-500 text-white text-[10px] font-medium rounded-full">
                              <Star className="w-2.5 h-2.5 fill-current" />
                              Popular
                            </span>
                          </div>
                        )}
                        {item.chef && (
                          <div className="absolute top-2 right-2">
                            <span className="flex items-center gap-1 px-2 py-1 bg-purple-500 text-white text-[10px] font-medium rounded-full">
                              <ChefHat className="w-2.5 h-2.5" />
                              Chef's
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4 md:p-5">
                        <div className="flex justify-between items-start gap-3 mb-2">
                          <h3 className="font-serif text-lg md:text-xl text-white group-hover:text-amber-400 transition-colors">
                            {item.name}
                          </h3>
                          <span className="font-serif text-xl text-amber-500 shrink-0">
                            ${item.price}
                          </span>
                        </div>
                        
                        <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.tags.map((tag) => {
                            const Icon = tagIcons[tag];
                            return (
                              <span
                                key={tag}
                                className="flex items-center gap-1 px-2 py-0.5 bg-white/5 rounded-full text-[10px] text-white/50 uppercase tracking-wider"
                              >
                                {Icon && <Icon className="w-3 h-3" />}
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Expand indicator */}
                    <motion.div
                      animate={{ rotate: selectedItem === item.id ? 180 : 0 }}
                      className="absolute bottom-3 right-3 text-white/30"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {selectedItem === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-2">
                          <div className="bg-white/5 rounded-xl p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-white/40 text-sm">Full description</span>
                              <Link 
                                href="/reservations"
                                className="text-amber-500 text-sm hover:text-amber-400 transition-colors"
                              >
                                Reserve →
                              </Link>
                            </div>
                            <p className="text-white/70 mt-2 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/40">No dishes found</p>
            </div>
          )}
        </div>
      </section>

      {/* Wine Pairing CTA */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Wine className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h3 className="font-serif text-2xl text-white mb-2">Wine Pairing Experience</h3>
          <p className="text-white/50 mb-6">
            Let our sommelier curate the perfect wine selection for your meal
          </p>
          <Link 
            href="/reservations"
            className="inline-block px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
          >
            Ask About Pairings
          </Link>
        </div>
      </section>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-32"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="w-full max-w-2xl mx-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/40" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-16 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white text-xl placeholder:text-white/30 focus:outline-none focus:border-amber-500"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/40 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {searchQuery && (
                <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden max-h-96 overflow-y-auto">
                  {menuItems.filter(item => 
                    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.description.toLowerCase().includes(searchQuery.toLowerCase())
                  ).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveCategory(item.category);
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="w-full flex items-center gap-4 p-4 hover:bg-white/5 transition-colors text-left"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{item.name}</p>
                        <p className="text-white/40 text-sm truncate">{item.description}</p>
                      </div>
                      <span className="text-amber-500 font-serif">${item.price}</span>
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
