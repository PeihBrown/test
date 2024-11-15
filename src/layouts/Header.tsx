import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { 
  BrandLogoIcon,
  DocumentIcon,
  ChallengeIcon,
  InfoSquareIcon,
  HamburgerMenuIcon,
  XIcon 
} from '../components/icons'
import { MenuDropdown } from '../components/menu-dropdown'
import { Text } from '../components/text'
import { classNames } from '../utils'

type NavigationItem = {
  icon: React.ReactNode
  label: string
  path: string
  noticeCount?: number
}

type MenuOption = {
  label: string
  href: string
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { 
    icon: <DocumentIcon fontSize={26} />, 
    label: '自分の記録', 
    path: '/my-record' 
  },
  { 
    icon: <ChallengeIcon fontSize={26} />, 
    label: 'チャレンジ', 
    path: '/coming-soon' 
  },
  { 
    icon: <InfoSquareIcon fontSize={26} />, 
    label: 'お知らせ', 
    path: '/coming-soon', 
    noticeCount: 1 
  },
]

const MENU_OPTIONS: MenuOption[] = [
  { label: "自分の記録", href: "/my-record" },
  { label: "体重グラフ", href: "/coming-soon" },
  { label: "目標", href: "/coming-soon" },
  { label: "選択中のコース", href: "/coming-soon" },
  { label: "コラム一覧", href: "/columns" },
  { label: "設定", href: "/coming-soon" },
]

const NavigationLink: React.FC<NavigationItem> = ({ icon, label, path, noticeCount }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => classNames(
        'flex items-center gap-2',
        'text-white hover:text-primary-400 transition-colors duration-200',
        isActive && 'text-primary-400'
      )}
    >
      <span className="flex items-center justify-center relative">
        {icon}
        {noticeCount && (
          <span className="absolute -top-1 -right-1 w-[16px] h-[16px] bg-primary-400 rounded-full flex items-center justify-center">
            <Text 
              as="span" 
              size="tiny"
              variant="neutral-white"
            >
              {noticeCount}
            </Text>
          </span>
        )}
      </span>
      <Text 
        as="span" 
        size="body2"
        variant="neutral-white" 
        className={classNames(
          "lg:block hidden",
          "hover:text-primary-400"
        )}
      >
        {label}
      </Text>
    </NavLink>
  )
}

function Header() {
  const [isOpen, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  
  // Merge navigation items with menu options when on mobile
  const mobileMenuOptions = [
    ...NAVIGATION_ITEMS.map(item => ({ 
      label: item.label, 
      href: item.path,
      icon: item.icon,
      noticeCount: item.noticeCount 
    })),
    ...MENU_OPTIONS
  ]

  return (
    <header className="h-[64px] md:h-[84px] w-full bg-background-dark fixed top-0 left-0 z-50">
      <div className="w-[95%] md:w-[90%] lg:w-3/4 h-full m-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <BrandLogoIcon className="h-12 w-28 md:h-16 md:w-36" />
        </NavLink>
        
        <nav className="flex items-center">
          <div className="hidden lg:flex items-center gap-8 lg:gap-12 mr-8 lg:mr-16">
            {NAVIGATION_ITEMS.map((item) => (
              <NavigationLink key={item.path} {...item} />
            ))}
          </div>
          <MenuDropdown 
            open={isOpen} 
            onClose={handleClose}
            items={window.innerWidth >= 1024 ? MENU_OPTIONS : mobileMenuOptions}
            className="w-full lg:w-[320px]"
          >
            {isOpen ? (
              <XIcon 
                fontSize={24}
                className="text-neutral-white hover:text-primary-main transition-colors duration-200" 
                onClick={() => setOpen(false)} 
              />
            ) : (
              <HamburgerMenuIcon 
                fontSize={24}
                className="text-neutral-white hover:text-primary-main transition-colors duration-200" 
                onClick={() => setOpen(true)} 
              />
            )}
          </MenuDropdown>
        </nav>
      </div>
    </header>
  )
}

export default Header
