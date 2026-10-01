import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Grid } from '@/components/ui/Grid'
import { ProductCard } from '@/components/ProductCard'
import { ProductDetailsClient } from './client'
import { getProductBySlug, getRelatedProducts } from '@/lib/dal/products'
import { formatPrice } from '@/lib/utils/format'

interface ProductDetailsPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { slug } = await params

  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.categoryId, product.id)

  const ratingNum = parseFloat(product.rating)

  return (
    <main>
      {/* Breadcrumb */}
      <Section className="bg-neutral-50 border-b border-neutral-200">
        <Container>
          <div className="text-sm text-neutral-600">
            <a href="/" className="hover:text-neutral-900 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/products" className="hover:text-neutral-900 transition-colors">Products</a>
            <span className="mx-2">/</span>
            <span className="text-neutral-900">{product.name}</span>
          </div>
        </Container>
      </Section>

      {/* Product Details */}
      <Section className="bg-white">
        <Container>
          <Grid cols={2} className="gap-12 items-start">
            {/* Image Gallery */}
            <div>
              <ProductDetailsClient imageUrl={product.imageUrl} productName={product.name} />
            </div>

            {/* Product Info */}
            <div>
              {/* Header */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
                  {product.category.name}
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-light mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.floor(ratingNum) ? 'text-accent-red text-lg' : 'text-neutral-300 text-lg'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Price & Stock */}
              <div className="border-b border-neutral-200 pb-6 mb-6">
                <div className="flex items-baseline gap-3 mb-4">
                  <p className="text-4xl font-semibold">
                    {formatPrice(product.priceInCents)}
                  </p>
                  {product.compareAtPriceInCents && (
                    <p className="text-lg text-neutral-500 line-through">
                      {formatPrice(product.compareAtPriceInCents)}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {product.stock > 0 ? (
                    <>
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm font-semibold text-green-600">
                        In Stock ({product.stock} available)
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-sm font-semibold text-red-600">
                        Out of Stock
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div className="mb-8">
                  <p className="text-neutral-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Size Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold uppercase tracking-wide mb-3 text-neutral-900">
                  Size
                </label>
                <div className="flex gap-2 flex-wrap">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="w-12 h-12 border-2 border-neutral-300 hover:border-neutral-900 transition-colors flex items-center justify-center text-sm font-semibold"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 mb-8">
                <div className="flex items-center border border-neutral-300">
                  <button
                    className="w-12 h-12 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="flex-1 h-12 flex items-center justify-center text-center font-semibold">
                    1
                  </span>
                  <button
                    className="w-12 h-12 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                  >
                    +
                  </button>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1"
                >
                  Add to Cart
                </Button>
              </div>

              <Button
                variant="tertiary"
                size="lg"
                className="w-full mb-8"
              >
                ♡ Add to Wishlist
              </Button>

              {/* Product Details */}
              <div className="border-t border-neutral-200 pt-8 space-y-4">
                {product.material && (
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-600">Material</span>
                    <span className="text-sm font-semibold">{product.material}</span>
                  </div>
                )}
                {product.careInstructions && (
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-600">Care</span>
                    <span className="text-sm font-semibold">{product.careInstructions}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-sm text-neutral-600">Shipping</span>
                  <span className="text-sm font-semibold">Free Worldwide Shipping</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-neutral-600">Returns</span>
                  <span className="text-sm font-semibold">30-Day Returns</span>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Description & Details Tabs */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-light mb-6">About This Piece</h2>
            <div className="prose prose-sm text-neutral-700 space-y-4">
              <p>
                This exclusive design represents the pinnacle of our design philosophy. Every stitch
                has been carefully considered to ensure both comfort and elegance. The fabric selection
                is the result of extensive sourcing across premium suppliers.
              </p>
              <p>
                Designed for the discerning individual who values quality and sustainability.
                We employ ethical production methods and sustainable materials wherever possible,
                without compromising on luxury and style.
              </p>
              <h3 className="font-display text-xl font-light mt-8 mb-3">Design Details</h3>
              <ul className="space-y-2">
                <li>• Hand-finished seams for durability</li>
                <li>• Breathable fabric blend for all-day comfort</li>
                <li>• Timeless silhouette with modern proportions</li>
                <li>• Versatile styling options</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section className="bg-white">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
                Related Products
              </h2>
              <p className="text-neutral-600 text-lg max-w-xl mx-auto">
                You might also like these curated selections
              </p>
            </div>

            <Grid cols={4} className="gap-6 md:gap-8">
              {relatedProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  slug={prod.slug}
                  name={prod.name}
                  priceInCents={prod.priceInCents}
                  imageUrl={prod.imageUrl}
                  categoryName={prod.category.name}
                  rating={prod.rating}
                  reviewCount={prod.reviewCount}
                />
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      {/* CTA Section */}
      <Section className="bg-neutral-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
              Explore the Collection
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Discover more pieces from our curated selection
            </p>
            <Button variant="secondary" size="lg">
              View All Products
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  )
}
