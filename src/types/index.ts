import type { categories, products } from '@/db/schema'

export type User = {
  id: string
  email: string
  name?: string | null
  createdAt: Date
  updatedAt: Date
}

export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert

export type Product = typeof products.$inferSelect
export type NewProduct = typeof products.$inferInsert

export type ProductWithCategory = Product & {
  category: Category
}
