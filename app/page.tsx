import { Hero } from "@/components/home/Hero";
import { FeaturedDishes } from "@/components/home/FeaturedDishes";
import { ChefSpecial } from "@/components/home/ChefSpecial";
import { PrivateDiningCTA } from "@/components/home/PrivateDiningCTA";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";
import { InstagramFeed } from "@/components/home/InstagramFeed";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedDishes />
      <ChefSpecial />
      <Testimonials />
      <PrivateDiningCTA />
      <Newsletter />
      <InstagramFeed />
    </main>
  );
}
