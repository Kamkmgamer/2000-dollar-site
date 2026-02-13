# $2,000 Restaurant Website - "Restaurant Brand Experience"

## Project Overview

**Budget**: $2,000
**Target**: Serious restaurant brand, multi-location potential
**Development Time**: 40-80 hours
**Best For**: Restaurant groups, flagship locations, brand building

---

## Technical Specifications

### Stack
- **Frontend**: Next.js 14+ (App Router)
- **Backend**: Next.js API Routes + tRPC
- **Database**: PostgreSQL (Supabase or Vercel Postgres)
- **ORM**: Drizzle ORM
- **CMS**: Sanity (team plan) with custom inputs
- **Auth**: NextAuth.js (admin dashboard access)
- **Hosting**: Vercel Pro
- **Email**: Resend with templates
- **Styling**: Tailwind CSS + custom design system
- **Animations**: Framer Motion + GSAP (for complex animations)
- **Analytics**: GA4 + Vercel Analytics + Hotjar
- **Search**: Meilisearch or Algolia (for menu)

### File Structure
```
two_thousand_dollar_site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (marketing)/
│   │   ├── menu/
│   │   ├── about/
│   │   ├── gallery/
│   │   ├── private-dining/
│   │   ├── gift-cards/
│   │   ├── events/
│   │   └── contact/
│   ├── (booking)/
│   │   ├── reservations/
│   │   │   ├── page.tsx
│   │   │   ├── confirm/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   └── manage/
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   └── waitlist/
│   │       └── page.tsx
│   ├── (content)/
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── news/
│   ├── api/
│   │   ├── trpc/[trpc]/route.ts
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── webhooks/
│   │   │   ├── stripe/route.ts
│   │   │   └── sanity/route.ts
│   │   └── og/route.ts              # Dynamic OG images
│   └── globals.css
├── components/
│   ├── layout/
│   ├── home/
│   ├── menu/
│   ├── reservations/
│   │   ├── BookingFlow.tsx
│   │   ├── CalendarPicker.tsx
│   │   ├── TimeSlotGrid.tsx
│   │   ├── GuestSelector.tsx
│   │   ├── BookingSummary.tsx
│   │   └── Confirmation.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogList.tsx
│   │   └── ShareButtons.tsx
│   ├── admin/
│   │   ├── Dashboard.tsx
│   │   ├── ReservationsTable.tsx
│   │   └── MenuEditor.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Modal.tsx
│       ├── Toast.tsx
│       ├── Skeleton.tsx
│       └── CommandMenu.tsx          # Command palette (Cmd+K)
├── lib/
│   ├── db.ts
│   ├── trpc.ts
│   ├── auth.ts
│   ├── email.ts
│   ├── analytics.ts
│   └── utils.ts
├── server/
│   ├── routers/
│   │   ├── reservation.ts
│   │   ├── menu.ts
│   │   ├── blog.ts
│   │   └── _app.ts
│   └── context.ts
├── db/
│   ├── schema.ts
│   ├── migrations/
│   └── seed.ts
├── emails/
│   ├── reservation-confirm.tsx
│   ├── reservation-reminder.tsx
│   └── newsletter-welcome.tsx
├── sanity/
│   └── schemas/
├── public/
│   └── images/
├── package.json
├── tailwind.config.ts
├── next.config.ts
├── drizzle.config.ts
└── tsconfig.json
```

---

## Pages

### Marketing Pages
1. **Home** - Immersive brand experience
2. **Menu** - Full menu with search, filters, wine pairings
3. **About** - Story, team, sourcing philosophy
4. **Gallery** - Rich media gallery
5. **Private Dining** - Rooms, packages, inquiry
6. **Gift Cards** - Full integration or info + link
7. **Events** - Special events calendar
8. **Contact** - All contact methods

### Booking Pages
9. **Reservations** - Multi-step booking flow
10. **Confirmation** - Booking confirmation with details
11. **Manage Booking** - View/cancel reservation

### Content Pages
12. **Blog** - Restaurant news, recipes, stories
13. **Blog Post** - Individual article page
14. **News** - Press releases, announcements

### Hidden Pages
15. **Admin Dashboard** - Reservation management (protected)

---

## Features

### Must Have
- [ ] 12+ pages
- [ ] Custom reservation system with availability
- [ ] Multi-step booking flow
- [ ] Booking confirmation emails
- [ ] Blog/News section
- [ ] Full CMS with custom inputs
- [ ] Admin dashboard for staff
- [ ] Dynamic OG images
- [ ] Instagram feed integration
- [ ] Advanced SEO (all schema types)
- [ ] Search functionality (menu + site)
- [ ] Performance optimized (100 Lighthouse)
- [ ] Full accessibility (AA)

### Nice to Have
- [ ] Waitlist system
- [ ] Review aggregation
- [ ] Multi-language support
- [ ] Dark mode
- [ ] PWA with offline menu
- [ ] Push notifications for reservations

### Must NOT Have
- [ ] NO customer accounts (self-service)
- [ ] NO online ordering
- [ ] NO payment processing
- [ ] NO loyalty program

---

## Database Schema

### Full Schema
```typescript
// db/schema.ts
import { pgTable, serial, varchar, text, timestamp, integer, date, boolean, json } from 'drizzle-orm/pg-core';

export const reservations = pgTable('reservations', {
  id: serial('id').primaryKey(),
  confirmationCode: varchar('confirmation_code', { length: 8 }).unique().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  date: date('date').notNull(),
  time: varchar('time', { length: 5 }).notNull(),
  endTime: varchar('end_time', { length: 5 }),
  guests: integer('guests').notNull(),
  occasion: varchar('occasion', { length: 100 }),
  specialRequests: text('special_requests'),
  dietaryRestrictions: json('dietary_restrictions').$type<string[]>(),
  tableId: integer('table_id'),
  status: varchar('status', { 
    default: 'pending',
    enum: ['pending', 'confirmed', 'seated', 'completed', 'cancelled', 'no_show']
  }),
  source: varchar('source', { default: 'website' }),
  notes: text('notes'), // Staff notes
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const waitlistEntries = pgTable('waitlist_entries', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  preferredDate: date('preferred_date'),
  partySize: integer('party_size').notNull(),
  flexibility: varchar('flexibility', { length: 50 }),
  status: varchar('status', { default: 'active' }),
  createdAt: timestamp('created_at').defaultNow(),
});

export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  featuredImage: varchar('featured_image', { length: 500 }),
  category: varchar('category', { length: 100 }),
  tags: json('tags').$type<string[]>(),
  author: varchar('author', { length: 255 }),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const availability = pgTable('availability', {
  id: serial('id').primaryKey(),
  date: date('date').notNull(),
  time: varchar('time', { length: 5 }).notNull(),
  maxCovers: integer('max_covers').notNull(),
  currentCovers: integer('current_covers').default(0),
  isBlocked: boolean('is_blocked').default(false),
  blockReason: varchar('block_reason', { length: 255 }),
});

export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  source: varchar('source', { length: 50 }),
  preferences: json('preferences'),
  isActive: boolean('is_active').default(true),
  subscribedAt: timestamp('subscribed_at').defaultNow(),
});
```

---

## Reservation System

### Booking Flow Component
```tsx
// components/reservations/BookingFlow.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trpc } from '@/lib/trpc';

const STEPS = ['date-time', 'guests', 'details', 'confirm'] as const;

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [booking, setBooking] = useState<BookingState>({});
  
  const { data: availability } = trpc.reservation.availability.useQuery({
    date: booking.date,
    partySize: booking.guests,
  });
  
  const createReservation = trpc.reservation.create.useMutation();
  
  return (
    <div className="booking-flow">
      <ProgressBar current={step} total={STEPS.length} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {step === 0 && (
            <DateTimeStep
              availability={availability}
              onSelect={(date, time) => {
                setBooking(prev => ({ ...prev, date, time }));
                setStep(1);
              }}
            />
          )}
          
          {step === 1 && (
            <GuestsStep
              onSelect={(guests, occasion) => {
                setBooking(prev => ({ ...prev, guests, occasion }));
                setStep(2);
              }}
            />
          )}
          
          {step === 2 && (
            <DetailsStep
              booking={booking}
              onSubmit={async (details) => {
                setBooking(prev => ({ ...prev, ...details }));
                setStep(3);
              }}
            />
          )}
          
          {step === 3 && (
            <ConfirmStep
              booking={booking}
              onConfirm={async () => {
                const result = await createReservation.mutateAsync(booking);
                // Redirect to confirmation page
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
```

### Availability Check (tRPC)
```typescript
// server/routers/reservation.ts
export const reservationRouter = createTRPCRouter({
  availability: publicProcedure
    .input(z.object({
      date: z.string(),
      partySize: z.number().min(1).max(20),
    }))
    .query(async ({ input, ctx }) => {
      const slots = await ctx.db
        .select()
        .from(availability)
        .where(eq(availability.date, input.date));
      
      return slots.map(slot => ({
        time: slot.time,
        available: slot.maxCovers - slot.currentCovers >= input.partySize,
        remaining: slot.maxCovers - slot.currentCovers,
      }));
    }),
    
  create: publicProcedure
    .input(reservationSchema)
    .mutation(async ({ input, ctx }) => {
      // Validate availability
      // Create reservation
      // Update availability
      // Send confirmation email
      // Return confirmation code
    }),
});
```

---

## Blog System

### Blog Post Page
```tsx
// app/(content)/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { BlogContent } from '@/components/blog/BlogContent';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { RelatedPosts } from '@/components/blog/RelatedPosts';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) notFound();
  
  return (
    <article className="max-w-3xl mx-auto px-4">
      <header className="mb-12">
        <h1 className="text-4xl font-heading mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <span>{post.author}</span>
          <span>•</span>
          <time>{formatDate(post.publishedAt)}</time>
        </div>
      </header>
      
      <img 
        src={post.featuredImage} 
        alt={post.title}
        className="w-full aspect-video object-cover rounded-lg mb-12"
      />
      
      <BlogContent content={post.content} />
      
      <ShareButtons url={`/blog/${post.slug}`} title={post.title} />
      
      <RelatedPosts category={post.category} excludeId={post.id} />
    </article>
  );
}
```

---

## Instagram Integration

### Feed Component
```tsx
// components/home/InstagramFeed.tsx
import { useState, useEffect } from 'react';

interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  
  useEffect(() => {
    // Fetch from your API that calls Instagram Graph API
    fetch('/api/instagram')
      .then(res => res.json())
      .then(setPosts);
  }, []);
  
  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-heading mb-8">
        Follow Us @bellaitalia
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {posts.slice(0, 6).map(post => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square overflow-hidden group"
          >
            <img
              src={post.mediaUrl}
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
```

---

## Admin Dashboard

### Reservations Table
```tsx
// components/admin/ReservationsTable.tsx
'use client';

import { useAdminReservations } from '@/lib/hooks';
import { format } from 'date-fns';

export function ReservationsTable() {
  const { data, isLoading } = useAdminReservations();
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th>Code</th>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(res => (
            <tr key={res.id}>
              <td className="font-mono">{res.confirmationCode}</td>
              <td>{format(new Date(res.date), 'MMM d, yyyy')}</td>
              <td>{res.time}</td>
              <td>{res.guests}</td>
              <td>{res.name}</td>
              <td>
                <StatusBadge status={res.status} />
              </td>
              <td>
                <button onClick={() => updateStatus(res.id, 'confirmed')}>
                  Confirm
                </button>
                <button onClick={() => updateStatus(res.id, 'cancelled')}>
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

---

## Performance Requirements

### Target Metrics
- **Lighthouse Performance**: 100
- **Lighthouse Accessibility**: 100
- **Lighthouse Best Practices**: 100
- **Lighthouse SEO**: 100
- **First Contentful Paint**: < 0.8s
- **Largest Contentful Paint**: < 1.2s
- **Cumulative Layout Shift**: < 0.02
- **Time to Interactive**: < 1.5s

### PWA Features
```typescript
// next.config.ts
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-cache',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\/_next\/image\?url=.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'next-image-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
  ],
});
```

---

## Dynamic OG Images

### API Route
```typescript
// app/api/og/route.ts
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Bella Italia';
  const subtitle = searchParams.get('subtitle');
  
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#8B2635',
          backgroundImage: 'url(https://bellaitalia.com/og-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 60px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Playfair Display',
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: '28px',
                color: 'rgba(255,255,255,0.9)',
                marginTop: '20px',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

---

## Email Templates

### Reservation Confirmation
```tsx
// emails/reservation-confirm.tsx
import { Html, Body, Container, Text, Button } from '@react-email/components';

interface Props {
  name: string;
  date: string;
  time: string;
  guests: number;
  confirmationCode: string;
}

export function ReservationConfirmation({ name, date, time, guests, confirmationCode }: Props) {
  return (
    <Html>
      <Body style={{ backgroundColor: '#f5f5f5' }}>
        <Container style={{ padding: '40px', backgroundColor: 'white', borderRadius: '8px' }}>
          <Text style={{ fontSize: '24px', fontWeight: 'bold', color: '#8B2635' }}>
            Reservation Confirmed
          </Text>
          
          <Text>Dear {name},</Text>
          
          <Text>Your reservation at Bella Italia has been confirmed!</Text>
          
          <Container style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', margin: '20px 0' }}>
            <Text><strong>Date:</strong> {date}</Text>
            <Text><strong>Time:</strong> {time}</Text>
            <Text><strong>Party Size:</strong> {guests} guests</Text>
            <Text><strong>Confirmation Code:</strong> {confirmationCode}</Text>
          </Container>
          
          <Button
            href={`https://bellaitalia.com/reservations/manage/${confirmationCode}`}
            style={{ backgroundColor: '#8B2635', color: 'white', padding: '12px 24px', borderRadius: '4px' }}
          >
            Manage Reservation
          </Button>
          
          <Text style={{ fontSize: '14px', color: '#666', marginTop: '30px' }}>
            If you need to cancel or modify your reservation, please do so at least 24 hours in advance.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
```

---

## Implementation Checklist

### Phase 1: Foundation (Week 1)
- [ ] Set up Next.js with all dependencies
- [ ] Configure database and migrations
- [ ] Set up Sanity CMS
- [ ] Create tRPC router structure
- [ ] Set up authentication for admin

### Phase 2: Core Features (Week 2)
- [ ] Build reservation system
- [ ] Build availability management
- [ ] Create email templates
- [ ] Implement blog system

### Phase 3: Design & UX (Week 3)
- [ ] Build all marketing pages
- [ ] Implement animations
- [ ] Create booking flow UI
- [ ] Build admin dashboard

### Phase 4: Integrations (Week 4)
- [ ] Instagram API integration
- [ ] Search implementation
- [ ] Analytics setup
- [ ] OG image generation

### Phase 5: Polish & Launch (Week 5)
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Testing all flows
- [ ] Launch and monitor

---

## Comparison to $1,000 Tier

| Feature | $1,000 | $2,000 |
|---------|--------|--------|
| Pages | 7+ | 12+ |
| Reservation System | Third-party embed | Custom full system |
| Database | Basic | Full with availability |
| Blog | No | Full blog system |
| Admin Dashboard | No | Yes |
| Multi-location | No | Supported |
| Instagram | No | Live feed |
| Search | No | Full site search |
| Dynamic OG | No | Yes |
| Email Templates | Basic | Rich HTML templates |

---

## Notes for Developers

This tier introduces enterprise-level features:
- Full-stack application (not just marketing site)
- Real-time availability management
- Admin tools for staff
- Content management (blog)
- Third-party integrations

The focus shifts from presentation to functionality. Build for scalability and maintainability.
