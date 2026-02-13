'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Leaf } from 'lucide-react';

const team = [
  {
    name: 'Marco Rossi',
    role: 'Executive Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80',
    bio: 'Trained in Tuscany, Chef Marco brings 25 years of experience crafting authentic Italian cuisine.'
  },
  {
    name: 'Sofia Bianchi',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=600&q=80',
    bio: 'Award-winning pastry chef specializing in traditional Italian desserts with modern presentations.'
  },
  {
    name: 'Antonio Gallo',
    role: 'Sommelier',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
    bio: 'Certified sommelier with an extensive knowledge of Italian wines from every region.'
  }
];

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Every dish is crafted with love and dedication to the Italian culinary tradition.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We partner with local farms and use seasonal ingredients to minimize our environmental impact.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Our family extends to every guest who walks through our doors.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for perfection in every detail, from ingredients to service.'
  }
];

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#0d0d0d]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Bella Italia restaurant interior"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-500 text-sm tracking-[0.3em] uppercase"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl mt-4 mb-6"
          >
            A Legacy of <span className="text-gradient">Italian Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-xl leading-relaxed"
          >
            For over 25 years, Bella Italia has been bringing the warmth and flavor 
            of authentic Italian cuisine to the heart of New York City.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500/30 rounded-lg" />
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                  alt="Restaurant interior"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl mb-6">Our Beginning</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Bella Italia was born from a simple dream: to bring the authentic 
                  flavors of Italy to New York City. In 1998, Chef Marco Rossi and 
                  his wife Maria opened the doors to our first location, a small 
                  trattoria in the heart of Little Italy.
                </p>
                <p>
                  Drawing inspiration from Marco&apos;s grandmother&apos;s recipes from Tuscany, 
                  every dish was crafted with love and tradition. Word quickly spread 
                  about the incredible pasta made fresh daily and the warm, welcoming 
                  hospitality that made guests feel like family.
                </p>
                <p>
                  Today, while our locations have grown, our commitment to excellence 
                  remains unchanged. We still make our pasta by hand every morning, 
                  source ingredients from trusted Italian farms, and treat every guest 
                  as part of our extended family.
                </p>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-4xl font-serif text-amber-500">25+</p>
                  <p className="text-white/50 text-sm">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-amber-500">50K+</p>
                  <p className="text-white/50 text-sm">Happy Guests</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-amber-500">15</p>
                  <p className="text-white/50 text-sm">Awards Won</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">What Drives Us</span>
            <h2 className="font-serif text-4xl mt-4">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="w-16 h-16 rounded-full bg-amber-600/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">Meet The Team</span>
            <h2 className="font-serif text-4xl mt-4">The People Behind the Magic</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl">{member.name}</h3>
                    <p className="text-amber-500 text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">From Farm to Table</span>
              <h2 className="font-serif text-4xl mt-4 mb-6">Our Sourcing Philosophy</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  We believe that exceptional Italian cuisine starts with exceptional ingredients. 
                  That&apos;s why we&apos;ve built relationships with family farms and artisan producers 
                  across Italy and the United States.
                </p>
                <p>
                  Our olive oil comes from a third-generation producer in Tuscany, our pasta is 
                  made with durum wheat from Puglia, and our cheeses are aged in caves across Italy. 
                  Every ingredient tells a story of tradition and quality.
                </p>
                <p>
                  We also prioritize sustainability by sourcing seasonal produce from local farms, 
                  reducing our carbon footprint while supporting our community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
                  alt="Fresh ingredients"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80"
                  alt="Fresh vegetables"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                  alt="Pasta making"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                  alt="Wine selection"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
