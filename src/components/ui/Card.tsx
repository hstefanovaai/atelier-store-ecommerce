import React from 'react'

type CardVariant = 'default' | 'elevated' | 'flat'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  children: React.ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className = '', children, ...props }, ref) => {
    const baseClasses = 'card'
    const variantClasses = variant !== 'default' ? `card-${variant}` : ''

    return (
      <div ref={ref} className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`pb-4 border-b border-neutral-200 ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`py-4 ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

CardBody.displayName = 'CardBody'

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`pt-4 border-t border-neutral-200 ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'
