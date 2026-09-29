import React from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`container ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
