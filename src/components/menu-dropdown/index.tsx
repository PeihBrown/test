import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from '../../utils'
import { useClickOutside } from '../../hooks/useClickOutside'
import { Text } from '../text'

type MenuItem = {
  label: string
  href: string
  icon?: React.ReactNode
  noticeCount?: number
}

type MenuDropdownProps = {
  open: boolean
  onClose: () => void
  items: MenuItem[]
  children: ReactNode
  className?: string
}

export function MenuDropdown({ open, onClose, items, children, className }: MenuDropdownProps) {
  const menuRef = useClickOutside<HTMLDivElement>(onClose)

  return (
    <div className="relative" ref={menuRef}>
      {/* Trigger button */}
      <div className="cursor-pointer">
        {children}
      </div>

      {/* Dropdown menu */}
      {open && (
        <div 
          className={classNames(
            // Mobile styles
            'fixed top-[64px] inset-x-0 bottom-0',
            'w-full bg-neutral-menu flex flex-col',
            'overflow-y-auto',
            // Desktop styles
            'lg:absolute lg:inset-auto',
            'lg:top-8 lg:right-0',
            'lg:w-[320px] lg:h-auto',
            className
          )}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={classNames(
                'w-full px-6 py-4 text-left text-neutral-white',
                'hover:bg-neutral-menu-hover transition-colors duration-200',
                'focus:outline-none focus:bg-neutral-menu-hover',
                'border-b border-black/10',
                'flex items-center gap-4'
              )}
              onClick={onClose}
            >
              {item.icon && (
                <span className="flex items-center justify-center relative">
                  {item.icon}
                  {item.noticeCount && (
                    <span className="absolute -top-1 -right-1 w-[16px] h-[16px] bg-primary-400 rounded-full flex items-center justify-center">
                      <Text as="span" size="tiny" variant="neutral-white">
                        {item.noticeCount}
                      </Text>
                    </span>
                  )}
                </span>
              )}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 