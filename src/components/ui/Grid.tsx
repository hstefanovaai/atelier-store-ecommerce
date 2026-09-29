import React from 'react'

type GridCols = 1 | 2 | 3 | 4

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: GridCols
  children: React.ReactNode
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 1, className = '', children, ...props }, ref) => {
    const colsClass = `grid-cols-${cols}`

    return (
      <div ref={ref} className={`grid ${colsClass} ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

Grid.displayName = 'Grid'
