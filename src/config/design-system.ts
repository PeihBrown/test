export const typography = {
  h1: {
    desktop: 'font-bold text-4xl leading-tight',
    tablet: 'lg:text-3xl',
    mobile: 'text-2xl',
  },
  h2: {
    desktop: 'text-3xl',
    tablet: 'lg:text-2xl',
    mobile: 'text-xl',
  },
  h3: {
    desktop: 'text-2xl',
    tablet: 'lg:text-xl',
    mobile: 'text-lg',
  },
  h4: {
    desktop: 'text-xl',
    tablet: 'lg:text-lg',
    mobile: 'text-base',
  },
  body1: {
    desktop: 'text-lg',
    tablet: 'lg:text-base',
    mobile: 'text-base',
  },
  body2: {
    desktop: 'text-base font-light',
    tablet: 'lg:text-base font-light',
    mobile: 'text-sm font-light',
  },
  caption: {
    desktop: 'text-sm',
    tablet: 'lg:text-sm',
    mobile: 'text-xs',
  },
  tiny: {
    desktop: 'text-[10px]',
    tablet: 'lg:text-[10px]',
    mobile: 'text-[10px]',
  },
  title: {
    desktop: 'text-[25px]',
    tablet: 'lg:text-[25px]',
    mobile: 'text-[25px]',
  },
} as const

export type TypographySize = keyof typeof typography

export const colors = {
  primary: {
    light: '#FCD34D',
    main: '#FB923C',
    dark: '#F97316',
  },
  secondary: {
    light: '#A5F3FC',
    main: '#86EFAC',
    dark: '#4ADE80',
  },
  neutral: {
    white: '#FFFFFF',
    light: '#F3F4F6',
    main: '#9CA3AF',
    dark: '#404040',
    darker: '#1F2937',
    menu: '#777777',
    menuHover: '#666666',
  },
  background: {
    default: '#FFFFFF',
    paper: '#F9FAFB',
    dark: '#2E2E2E',
  },
} as const

export type ColorKey = keyof typeof colors

export const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const
  