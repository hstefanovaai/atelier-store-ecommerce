import React from 'react'
import Image from 'next/image'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  rating: number
  reviews: number
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  rating,
  reviews,
}) => {
  return (
    <div className="card-flat p-0 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden bg-neutral-100 aspect-[3/4] group">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
      </div>

      <div className="p-4">
        <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
          {category}
        </p>
        <h3 className="font-display text-base mb-1 line-clamp-2">{name}</h3>

        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold text-lg">${price.toLocaleString()}</p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < Math.floor(rating) ? 'text-accent-red' : 'text-neutral-300'}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-neutral-500">({reviews})</span>
        </div>
      </div>

      <div className="p-4 pt-0">
        <a href={`/products/${id}`} className="btn btn-primary w-full py-2 text-sm block text-center">
          View Product
        </a>
      </div>
    </div>
  )
}
