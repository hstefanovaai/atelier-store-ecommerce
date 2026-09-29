import React from 'react'
import Image from 'next/image'

interface CollectionCardProps {
  id: string
  name: string
  description: string
  image: string
  href: string
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  id,
  name,
  description,
  image,
  href,
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-neutral-100 aspect-[4/3] mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div>
        <h3 className="font-display text-xl mb-2 group-hover:text-accent-red transition-colors">
          {name}
        </h3>
        <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <a
          href={href}
          className="inline-flex items-center text-sm font-medium uppercase tracking-wide hover:text-accent-red transition-colors"
        >
          Explore
          <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  )
}
