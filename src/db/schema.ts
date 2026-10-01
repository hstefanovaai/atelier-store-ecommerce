import { pgTable, text, timestamp, uuid, integer, decimal, boolean, index } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').unique().notNull(),
  name: text('name'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
})

export const categories = pgTable('categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull().unique(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  displayOrder: integer('display_order').notNull().default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
})

export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  priceInCents: integer('price_in_cents').notNull(),
  compareAtPriceInCents: integer('compare_at_price_in_cents'),
  imageUrl: text('image_url').notNull(),
  categoryId: uuid('category_id').notNull().references(() => categories.id),
  stock: integer('stock').notNull().default(0),
  rating: decimal('rating', { precision: 2, scale: 1 }).notNull().default('0'),
  reviewCount: integer('review_count').notNull().default(0),
  isFeatured: boolean('is_featured').notNull().default(false),
  isActive: boolean('is_active').notNull().default(true),
  material: text('material'),
  careInstructions: text('care_instructions'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
}, (table) => ({
  categoryIdIdx: index('products_category_id_idx').on(table.categoryId),
  isFeaturedIdx: index('products_is_featured_idx').on(table.isFeatured),
  isActiveIdx: index('products_is_active_idx').on(table.isActive),
}))

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products)
}))

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id]
  })
}))
