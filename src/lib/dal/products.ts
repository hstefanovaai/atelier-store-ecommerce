import { db } from '@/lib/db'
import { products } from '@/db/schema'
import { eq, and, ne, desc } from 'drizzle-orm'

export async function getFeaturedProducts() {
  return db.query.products.findMany({
    where: and(eq(products.isFeatured, true), eq(products.isActive, true)),
    with: { category: true },
    orderBy: [desc(products.createdAt)]
  })
}

export async function getProductBySlug(slug: string) {
  return db.query.products.findFirst({
    where: and(eq(products.slug, slug), eq(products.isActive, true)),
    with: { category: true }
  })
}

export async function getRelatedProducts(categoryId: string, excludeProductId: string, limit = 4) {
  return db.query.products.findMany({
    where: and(
      eq(products.categoryId, categoryId),
      ne(products.id, excludeProductId),
      eq(products.isActive, true)
    ),
    with: { category: true },
    limit
  })
}
