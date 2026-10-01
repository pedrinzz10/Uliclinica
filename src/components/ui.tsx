import type { CSSProperties, ReactNode } from 'react'
import { ArrowRightIcon, ExternalIcon } from './icons'

type PillProps = {
  children: ReactNode
  href: string
  icon?: ReactNode
  variant?: 'blue' | 'dark' | 'light'
  size?: 'md' | 'lg'
  external?: boolean
}

/** Botão-pílula com círculo de seta à direita (seta diagonal quando abre outro site). */
export function PillButton({ children, href, icon, variant = 'blue', size = 'md', external }: PillProps) {
  return (
    <a
      href={href}
      className={`pill pill--${variant} pill--${size}`}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {children}
      <span className="pill__icon">{icon ?? (external ? <ExternalIcon /> : <ArrowRightIcon />)}</span>
    </a>
  )
}

/** Etiqueta flutuante com linha e ponto, usada sobre as fotos. */
export function Callout({ label, reverse, style, className = '', size = 'md' }: { label: string; reverse?: boolean; style?: CSSProperties; className?: string; size?: 'sm' | 'md' }) {
  return (
    <div className={`callout callout--${size}${reverse ? ' callout--reverse' : ''} ${className}`} style={style}>
      <span className="callout__label">{label}</span>
      <span className="callout__line" />
      <span className="callout__dot" />
    </div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>
}
