'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Grid } from '@/components/ui/Grid'
import { ProductCard } from '@/components/ProductCard'
import { CollectionCard } from '@/components/CollectionCard'
import {
  collections,
  featuredProducts,
  heroSection,
  stories,
} from '@/lib/sample-data'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroSection.image}
          alt="Hero"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-display font-light mb-4 tracking-tight">
            {heroSection.headline}
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto opacity-90">
            {heroSection.subheadline}
          </p>
          <Button variant="secondary" size="lg">
            {heroSection.cta}
          </Button>
        </div>
      </section>

      {/* Featured Collections */}
      <Section className="bg-white">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
              Discover Collections
            </h2>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto">
              Explore our curated selections featuring the finest in contemporary design
            </p>
          </div>

          <Grid cols={2} className="gap-8 md:gap-12">
            {collections.map((collection) => (
              <CollectionCard
                key={collection.id}
                {...collection}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Featured Products */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="mb-12 text-center">
            <p className="uppercase text-sm tracking-widest text-neutral-500 mb-3">
              New Arrivals
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
              Signature Pieces
            </h2>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto">
              Hand-selected items that embody our design philosophy
            </p>
          </div>

          <Grid cols={3} className="gap-6 md:gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </Grid>

          <div className="text-center">
            <Button variant="secondary" size="lg">
              View All Products
            </Button>
          </div>
        </Container>
      </Section>

      {/* Stories Section */}
      <Section className="bg-white">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
              Our Story
            </h2>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto">
              Behind every creation is a commitment to excellence and authenticity
            </p>
          </div>

          <Grid cols={3} className="gap-8">
            {stories.map((story) => (
              <div key={story.id} className="group">
                <div className="relative overflow-hidden bg-neutral-100 aspect-[4/3] mb-4">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-display text-xl mb-2 group-hover:text-accent-red transition-colors">
                  {story.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {story.excerpt}
                </p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-neutral-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
              Stay Connected
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our newsletter for exclusive updates, new collections, and insider access
            </p>

            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 text-white placeholder-neutral-400 rounded border border-neutral-700 focus:border-accent-red focus:outline-none transition-colors"
                required
              />
              <Button variant="accent" size="lg" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white py-16">
        <Container>
          <Grid cols={4} className="gap-8 mb-12">
            <div>
              <h4 className="font-semibold uppercase text-sm tracking-wide mb-4">
                Shop
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold uppercase text-sm tracking-wide mb-4">
                About
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Craftsmanship</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold uppercase text-sm tracking-wide mb-4">
                Support
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold uppercase text-sm tracking-wide mb-4">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </Grid>

          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
              <p>&copy; 2025 Atelier Store. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
