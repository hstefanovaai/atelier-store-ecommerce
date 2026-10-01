'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Grid } from '@/components/ui/Grid'

interface ProductGalleryProps {
  imageUrl: string
  productName: string
}

export function ProductDetailsClient({ imageUrl, productName }: ProductGalleryProps) {
  const [imageIndex, setImageIndex] = useState(0)

  const productImages = [imageUrl, imageUrl, imageUrl, imageUrl]
  const currentImage = productImages[imageIndex] ?? imageUrl

  return (
    <>
      {/* Main Image */}
      <div className="relative bg-neutral-100 aspect-[3/4] overflow-hidden mb-4 group">
        <Image
          src={currentImage}
          alt={productName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />
      </div>

      {/* Thumbnail Gallery */}
      <Grid cols={4} className="gap-2">
        {productImages.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setImageIndex(idx)}
            className={`relative bg-neutral-100 aspect-square overflow-hidden border-2 transition-colors ${
              idx === imageIndex ? 'border-neutral-900' : 'border-transparent hover:border-neutral-300'
            }`}
          >
            <Image
              src={image}
              alt={`View ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw"
            />
          </button>
        ))}
      </Grid>
    </>
  )
}
