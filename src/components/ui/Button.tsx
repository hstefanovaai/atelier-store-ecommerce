import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'accent'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  full?: boolean
  loading?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', full = false, loading = false, disabled, children, ...props }, ref) => {
    const baseClasses = 'btn'
    const variantClasses = `btn-${variant}`
    const sizeClasses = size !== 'md' ? `btn-${size}` : ''
    const fullClasses = full ? 'btn-full' : ''
    const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed' : ''

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${fullClasses} ${disabledClasses} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
