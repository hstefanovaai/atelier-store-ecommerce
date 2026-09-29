import React from 'react'

type BadgeVariant = 'default' | 'accent' | 'success'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  children: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className = '', children, ...props }, ref) => {
    const baseClasses = 'badge'
    const variantClasses = variant !== 'default' ? `badge-${variant}` : ''

    return (
      <span ref={ref} className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
