import { useEffect, useState } from 'react'
import logo from '../assets/logo/uliclinica-logo.png'
import { NAV_TABS, tabHref, whatsappUrl, type Tab } from '../data'
import { CloseIcon, MenuIcon } from './icons'

export function Header({ tab }: { tab: Tab }) {
  // O menu do celular fica aberto só na aba em que foi aberto: trocar de página já o fecha.
  const [openOn, setOpenOn] = useState<Tab | null>(null)
  const open = openOn === tab
  const setOpen = (v: boolean) => setOpenOn(v ? tab : null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenOn(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`header${open ? ' is-open' : ''}`}>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <a className="header__logo" href={tabHref('menu')} aria-label="Uliclínica — página inicial">
        <img src={logo} alt="Uliclínica" width={75} height={64} />
      </a>
      <nav id="menu-principal" className="header__nav" aria-label="Menu principal">
        {NAV_TABS.map((t) => (
          <a
            key={t.id}
            href={tabHref(t.id)}
            className={`header__tab${tab === t.id ? ' is-active' : ''}`}
            aria-current={tab === t.id ? 'page' : undefined}
          >
            {t.label}
          </a>
        ))}
      </nav>
      <a href={whatsappUrl()} target="_blank" rel="noopener" className="header__cta">
        Agendar
      </a>
      <button
        type="button"
        className="header__toggle"
        aria-expanded={open}
        aria-controls="menu-principal"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  )
}
