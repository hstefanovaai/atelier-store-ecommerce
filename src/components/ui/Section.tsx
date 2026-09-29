import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <section ref={ref} className={`section ${className}`} {...props}>
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'
