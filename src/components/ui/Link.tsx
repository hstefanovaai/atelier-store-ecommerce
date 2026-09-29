import React from 'react'
import NextLink from 'next/link'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  underlined?: boolean
  children: React.ReactNode
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className = '', underlined = false, children, ...props }, ref) => {
    const baseClasses = 'link'
    const underlinedClasses = underlined ? 'link-underlined' : ''

    return (
      <NextLink
        ref={ref}
        href={href}
        className={`${baseClasses} ${underlinedClasses} ${className}`}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = 'Link'
