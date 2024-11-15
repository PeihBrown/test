import { Text } from '../components/text'
import { classNames } from '../utils'

const FOOTER_LINKS = [
  { label: '会員登録', href: '/register' },
  { label: '運営会社', href: '/company' },
  { label: '利用規約', href: '/terms' },
  { label: '個人情報の取扱について', href: '/privacy' },
  { label: '特定商取引法に基づく表記', href: '/legal' },
  { label: 'お問い合わせ', href: '/contact' }
]

type FooterLinkProps = {
  label: string
  href: string
}

function FooterLink({ label, href }: FooterLinkProps) {
  return (
    <a 
      href={href}
      className={classNames(
        'mr-10 last:mr-0',
        'hover:text-primary-main transition-colors duration-200',
        'focus:outline-none focus:text-primary-main'
      )}
    >
      <Text 
        as="span"
        size="body2"
        variant="neutral-white"
      >
        {label}
      </Text>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="h-32 bg-background-dark mt-10">
      <div className={classNames(
        'h-full m-auto',
        'w-3/4 md:w-5/6 lg:w-[960px]',
        'flex items-center flex-wrap'
      )}>
        {FOOTER_LINKS.map((link) => (
          <FooterLink
            key={link.href}
            label={link.label}
            href={link.href}
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer 