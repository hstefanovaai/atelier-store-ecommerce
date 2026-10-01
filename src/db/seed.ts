import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { categories, products } from './schema'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set')
}

const client = postgres(process.env.DATABASE_URL)
const db = drizzle(client)

async function seed() {
  console.log('Seeding database...')

  // Clear existing data (products first due to FK)
  await db.delete(products)
  await db.delete(categories)

  // Insert categories
  const insertedCategories = await db.insert(categories).values([
    {
      name: 'Ready to Wear',
      slug: 'ready-to-wear',
      description: 'Timeless pieces for everyday elegance',
      displayOrder: 1,
    },
    {
      name: 'Accessories',
      slug: 'accessories',
      description: 'Curated selection of luxury accessories',
      displayOrder: 2,
    },
  ]).returning()

  const readyToWear = insertedCategories[0]!
  const accessories = insertedCategories[1]!

  console.log(`Inserted ${insertedCategories.length} categories`)

  // Insert products (prices converted to cents)
  const seedProducts = [
    {
      slug: 'dress-001',
      name: 'Milano Evening Gown',
      description: 'Crafted from premium materials with meticulous attention to detail, this piece embodies our commitment to timeless elegance. Each garment is designed to be a versatile staple in your wardrobe, seamlessly transitioning from day to evening.',
      priceInCents: 285000,
      compareAtPriceInCents: 327750,
      imageUrl: 'https://images.unsplash.com/photo-1595777707802-221556e37f7b?w=500&h=600&fit=crop',
      categoryId: readyToWear.id,
      stock: 12,
      rating: '5.0',
      reviewCount: 24,
      isFeatured: true,
      material: '100% Premium Silk & Cotton Blend',
      careInstructions: 'Dry Clean Only',
    },
    {
      slug: 'bag-001',
      name: 'Vogue Structured Tote',
      description: 'A statement piece that combines functionality with refined aesthetics. The structured silhouette and premium leather construction make this tote an essential companion for the modern individual.',
      priceInCents: 165000,
      compareAtPriceInCents: 189750,
      imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=600&fit=crop',
      categoryId: accessories.id,
      stock: 8,
      rating: '5.0',
      reviewCount: 18,
      isFeatured: true,
      material: 'Full-Grain Italian Leather',
      careInstructions: 'Wipe with damp cloth. Store in dust bag.',
    },
    {
      slug: 'jacket-001',
      name: 'Tailored Wool Blazer',
      description: 'Impeccably tailored from the finest wool, this blazer offers a contemporary take on classic sophistication. Perfect for both professional settings and elevated casual occasions.',
      priceInCents: 145000,
      compareAtPriceInCents: 166750,
      imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=600&fit=crop',
      categoryId: readyToWear.id,
      stock: 15,
      rating: '4.8',
      reviewCount: 32,
      isFeatured: true,
      material: '100% Merino Wool',
      careInstructions: 'Dry Clean Only',
    },
    {
      slug: 'shoes-001',
      name: 'Signature Heeled Mules',
      description: 'Elegant mules crafted from supple leather with a sculpted heel. The minimalist design ensures effortless pairing with any ensemble, from tailored trousers to flowing dresses.',
      priceInCents: 79500,
      compareAtPriceInCents: 91425,
      imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=600&fit=crop',
      categoryId: accessories.id,
      stock: 20,
      rating: '4.9',
      reviewCount: 27,
      isFeatured: true,
      material: 'Nappa Leather with Leather Sole',
      careInstructions: 'Use leather conditioner. Avoid water exposure.',
    },
    {
      slug: 'suit-001',
      name: 'Bespoke Two-Piece Suit',
      description: 'Our signature suit represents the pinnacle of tailoring excellence. Each piece is constructed with traditional techniques and modern precision for a flawless fit.',
      priceInCents: 245000,
      compareAtPriceInCents: 281750,
      imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop',
      categoryId: readyToWear.id,
      stock: 6,
      rating: '5.0',
      reviewCount: 19,
      isFeatured: true,
      material: 'Super 120s Wool',
      careInstructions: 'Dry Clean Only',
    },
    {
      slug: 'scarf-001',
      name: 'Silk Heritage Scarf',
      description: 'A luxurious silk scarf featuring our signature heritage print. Hand-rolled edges and vibrant color saturation make this an enduring accessory for any season.',
      priceInCents: 42500,
      compareAtPriceInCents: 48875,
      imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop',
      categoryId: accessories.id,
      stock: 25,
      rating: '4.7',
      reviewCount: 41,
      isFeatured: true,
      material: '100% Mulberry Silk',
      careInstructions: 'Hand wash cold. Lay flat to dry.',
    },
  ]

  await db.insert(products).values(seedProducts)
  console.log(`Inserted ${seedProducts.length} products`)

  console.log('Seeding complete!')
  await client.end()
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
