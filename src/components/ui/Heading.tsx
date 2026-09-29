import React from 'react'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel
  children: React.ReactNode
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 'h1', className = '', children, ...props }, ref) => {
    const Component = level as keyof JSX.IntrinsicElements

    return React.createElement(
      Component,
      { ref, className: `${level} ${className}`, ...props },
      children
    )
  }
)

Heading.displayName = 'Heading'

/* Convenience exports for specific heading levels */

export const H1 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level'>>(
  (props, ref) => <Heading ref={ref} level="h1" {...props} />
)
H1.displayName = 'H1'

export const H2 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level'>>(
  (props, ref) => <Heading ref={ref} level="h2" {...props} />
)
H2.displayName = 'H2'

export const H3 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level'>>(
  (props, ref) => <Heading ref={ref} level="h3" {...props} />
)
H3.displayName = 'H3'

export const H4 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level'>>(
  (props, ref) => <Heading ref={ref} level="h4" {...props} />
)
H4.displayName = 'H4'

export const H5 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level'>>(
  (props, ref) => <Heading ref={ref} level="h5" {...props} />
)
H5.displayName = 'H5'

export const H6 = React.forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'level'>>(
  (props, ref) => <Heading ref={ref} level="h6" {...props} />
)
H6.displayName = 'H6'
