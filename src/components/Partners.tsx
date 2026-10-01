import { PARTNER_COMPANIES, whatsappUrl } from '../data'
import { Eyebrow, PillButton } from './ui'

/** Lista de convênios atendidos (página inicial e Serviços). */
export function Partners() {
  return (
    <section className="partners" aria-labelledby="convenios">
      <div className="partners__head">
        <Eyebrow>Convênios</Eyebrow>
        <h2 id="convenios" className="h2-medium">
          Convênios
          <br />
          atendidos.
        </h2>
        <p className="body-text">
          Confira os convênios atendidos pela Uliclínica. Ficou com dúvida sobre o seu? Fale com a nossa equipe pelo
          WhatsApp.
        </p>
        <PillButton href={whatsappUrl('Olá! Gostaria de saber se a Uliclínica atende o meu convênio.')} external>
          Consultar meu convênio
        </PillButton>
      </div>
      <ul className="partners__list">
        {PARTNER_COMPANIES.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  )
}
