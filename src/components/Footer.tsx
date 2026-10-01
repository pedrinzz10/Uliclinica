import { CONTACT, DEVELOPER, LEGAL, NAV_TABS, tabHref, whatsappUrl } from '../data'
import { ChatIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, PinIcon } from './icons'
import { PillButton } from './ui'

export function Footer() {
  return (
    <>
      <footer id="contato" className="footer">
        <div className="footer__top">
          <h2 className="footer__title">
            Sua saúde em
            <br />
            boas mãos.
          </h2>
          <PillButton variant="light" href={whatsappUrl()} external>
            Agendar pelo WhatsApp
          </PillButton>
        </div>
        <div className="footer__grid">
          <div className="footer__col">
            <strong>Endereço</strong>
            <a href={CONTACT.mapsUrl} target="_blank" rel="noopener" className="footer__link">
              <PinIcon />
              <span>
                {CONTACT.street}
                <br />
                {CONTACT.district} · {CONTACT.city}
              </span>
            </a>
          </div>
          <div className="footer__col">
            <strong>WhatsApp</strong>
            <a href={whatsappUrl()} target="_blank" rel="noopener" className="footer__link">
              <ChatIcon />
              <span>{CONTACT.phone}</span>
            </a>
          </div>
          <div className="footer__col">
            <strong>Horário</strong>
            <span>{CONTACT.hours}</span>
          </div>
          <div className="footer__col">
            <strong>Redes sociais</strong>
            <div className="footer__social">
              <a href={CONTACT.instagramUrl} target="_blank" rel="noopener">
                <InstagramIcon width={16} height={16} />
                {CONTACT.instagramHandle}
              </a>
              <a href={CONTACT.facebookUrl} target="_blank" rel="noopener">
                <FacebookIcon width={16} height={16} />
                Facebook
              </a>
            </div>
          </div>
        </div>
        <nav className="footer__nav" aria-label="Páginas">
          {NAV_TABS.map((t) => (
            <a key={t.id} href={tabHref(t.id)}>
              {t.label}
            </a>
          ))}
        </nav>
      </footer>
      <div className="copyright">
        <p>
          Responsável técnico: {LEGAL.technicalDirector} · {LEGAL.technicalDirectorCrm} · CNPJ {LEGAL.cnpj}
        </p>
        <p>
          © {new Date().getFullYear()} Uliclínica · {CONTACT.city}. Todos os direitos reservados. ·{' '}
          <a href={tabHref('priv')}>Política de Privacidade</a>
        </p>
        <p className="credit">
          <span>
            Site desenvolvido por <strong>{DEVELOPER.name}</strong>
          </span>
          <a href={DEVELOPER.githubUrl} target="_blank" rel="noopener" aria-label={`GitHub de ${DEVELOPER.name}`}>
            <GithubIcon width={14} height={14} />
            GitHub
          </a>
          <a href={DEVELOPER.linkedinUrl} target="_blank" rel="noopener" aria-label={`LinkedIn de ${DEVELOPER.name}`}>
            <LinkedinIcon width={14} height={14} />
            LinkedIn
          </a>
        </p>
      </div>
    </>
  )
}
