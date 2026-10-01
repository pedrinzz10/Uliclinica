import { CONTACT, whatsappUrl } from '../data'
import { WhatsappIcon } from './icons'

/** Atalho fixo para o WhatsApp, presente em todas as páginas. */
export function WhatsappButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener"
      className="wa-fab"
      aria-label={`Fale conosco pelo WhatsApp ${CONTACT.phone}`}
    >
      <WhatsappIcon />
      <span className="wa-fab__label" aria-hidden="true">
        Fale conosco
      </span>
    </a>
  )
}
