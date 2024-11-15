import { createElement } from 'react'
import { classNames } from '../../utils'

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'white'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ 
  variant = 'default',
  size = 'md',
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const variantStyles = {
    default: 'bg-gradient-primary text-white-light hover:opacity-90',
    primary: 'bg-primary-400 text-white-light hover:bg-primary-500',
    secondary: 'bg-primary-300 text-white-light hover:opacity-90',
    white: 'bg-white-light text-content-dark border border-gray-400 hover:bg-gray-400/10'
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return createElement(
    'button',
    {
      className: classNames(
        'rounded-full font-medium transition-all duration-200',
        variantStyles[variant],
        sizeStyles[size],
        className
      ),
      onClick,
      ...props
    },
    children
  )
} 