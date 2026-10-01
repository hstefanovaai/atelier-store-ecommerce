import { db } from '@/lib/db'
import { categories } from '@/db/schema'
import { eq, asc } from 'drizzle-orm'

export async function getAllCategories() {
  return db.query.categories.findMany({
    orderBy: [asc(categories.displayOrder)]
  })
}

export async function getCategoryBySlug(slug: string) {
  return db.query.categories.findFirst({
    where: eq(categories.slug, slug),
    with: { products: true }
  })
}
