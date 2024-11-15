import { createElement } from 'react'
import { typography, TypographySize, colors } from '../../config/design-system'
import { classNames } from '../../utils'

type ColorVariant = 
  | `primary-${keyof typeof colors.primary}` 
  | `secondary-${keyof typeof colors.secondary}`
  | `neutral-${keyof typeof colors.neutral}`
  | `background-${keyof typeof colors.background}`

type TextProps = {
  size?: TypographySize
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
  variant?: ColorVariant
  children: React.ReactNode
}

export function Text({ 
  size = 'body1', 
  as = 'p', 
  variant = 'neutral-main',
  className,
  children 
}: TextProps) {
  const styles = typography[size]
  
  return createElement(
    as,
    {
      className: classNames(
        styles.mobile,
        styles.tablet,
        styles.desktop,
        variant && `text-${variant}`,
        className
      ),
    },
    children
  )
} 