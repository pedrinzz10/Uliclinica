import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { WhatsappButton } from './components/WhatsappButton'
import { TABS, tabFromHash, type Tab } from './data'
import { Home } from './pages/Home'
import { Portal } from './pages/Portal'
import { Privacidade } from './pages/Privacidade'
import { Profissionais } from './pages/Profissionais'
import { Servicos } from './pages/Servicos'
import { Sobre } from './pages/Sobre'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function App() {
  const [tab, setTab] = useState<Tab>(() => tabFromHash(window.location.hash) ?? 'menu')

  // A aba vive na URL (#/sobre, #/portal…): voltar/avançar, recarregar e compartilhar funcionam.
  useEffect(() => {
    const onHashChange = () => {
      const next = tabFromHash(window.location.hash)
      if (!next) return
      setTab(next)
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const label = TABS.find((t) => t.id === tab)?.label
    document.title = tab === 'menu' ? 'Uliclínica · Ulianópolis–PA' : `${label} · Uliclínica`
  }, [tab])

  return (
    <div className="page">
      <Header tab={tab} />
      <main id="conteudo">
        {tab === 'menu' && <Home />}
        {tab === 'sobre' && <Sobre />}
        {tab === 'prof' && <Profissionais />}
        {tab === 'serv' && <Servicos />}
        {tab === 'canal' && <Portal />}
        {tab === 'priv' && <Privacidade />}
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  )
}
