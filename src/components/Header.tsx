'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="font-display text-2xl font-light tracking-tight">
            Atelier
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#collections" className="text-sm font-medium uppercase tracking-wide hover:text-accent-red transition-colors">
              Collections
            </a>
            <a href="#products" className="text-sm font-medium uppercase tracking-wide hover:text-accent-red transition-colors">
              Products
            </a>
            <a href="#about" className="text-sm font-medium uppercase tracking-wide hover:text-accent-red transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium uppercase tracking-wide hover:text-accent-red transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="p-2 hover:text-accent-red transition-colors text-xl"
            >
              🔍
            </button>
            <button
              aria-label="Account"
              className="p-2 hover:text-accent-red transition-colors text-xl"
            >
              👤
            </button>
            <button
              aria-label="Shopping bag"
              className="p-2 hover:text-accent-red transition-colors text-xl relative"
            >
              🛍️
              <span className="absolute top-0 right-0 w-4 h-4 bg-accent-red text-white text-xs flex items-center justify-center rounded-full">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:text-accent-red transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-neutral-200 mt-4 space-y-2">
            <a
              href="#collections"
              className="block py-2 text-sm font-medium uppercase tracking-wide hover:text-accent-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="#products"
              className="block py-2 text-sm font-medium uppercase tracking-wide hover:text-accent-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#about"
              className="block py-2 text-sm font-medium uppercase tracking-wide hover:text-accent-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-sm font-medium uppercase tracking-wide hover:text-accent-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </Container>
    </header>
  )
}
