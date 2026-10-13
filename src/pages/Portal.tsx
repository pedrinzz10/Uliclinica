import { useEffect, useRef } from 'react'
import { Eyebrow, PillButton } from '../components/ui'
import { CONTACT, FAQ, PORTAL_MAINTENANCE, PORTAL_STEPS, PORTAL_URL, pad, tabHref, whatsappUrl } from '../data'

const REQUEST_RESULT_URL = whatsappUrl('Olá! Gostaria de receber o resultado do meu exame.')

export function Portal() {
  return (
    <>
      {PORTAL_MAINTENANCE && <MaintenanceDialog />}
      <Hero />

      {PORTAL_URL && <Steps />}

      <section className="faq">
        <div className="faq__intro">
          <h2 className="h2-light">
            Dúvidas
            <br />
            frequentes
          </h2>
          <p>Não encontrou o que procura? Nossa equipe de atendimento ajuda você pelo WhatsApp.</p>
          <PillButton variant="dark" href={whatsappUrl('Olá! Preciso de ajuda com o Portal do Paciente da Uliclínica.')} external>
            WhatsApp {CONTACT.phone}
          </PillButton>
        </div>
        <div className="faq__list">
          {FAQ.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                {f.q} <span>+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}

/** Pop-up exibido ao abrir o Portal enquanto PORTAL_MAINTENANCE for true. */
function MaintenanceDialog() {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
    return () => dialog?.close()
  }, [])

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="manutencao-titulo"
      aria-describedby="manutencao-texto"
      // Esc leva para o início, como o botão "Voltar ao início".
      onCancel={(e) => {
        e.preventDefault()
        window.location.hash = tabHref('menu')
      }}
    >
      <h2 id="manutencao-titulo" className="modal__title">
        Portal do Paciente em manutenção
      </h2>
      <p id="manutencao-texto" className="modal__text">
        Estamos preparando o novo Portal para você consultar seus laudos on-line. Enquanto isso, solicite seu resultado
        pelo WhatsApp: nossa equipe envia com segurança, após confirmar seus dados.
      </p>
      <div className="modal__actions">
        <PillButton href={REQUEST_RESULT_URL} external>
          Falar no WhatsApp
        </PillButton>
        <a href={tabHref('menu')} className="modal__secondary">
          Voltar ao início
        </a>
      </div>
    </dialog>
  )
}

function Hero() {
  return (
    <section className="split">
      <div className="split__text">
        <Eyebrow>Portal do Paciente</Eyebrow>
        <h1 className="page-title">
          Seus exames,
          <br />a um clique.
        </h1>
        {PORTAL_URL ? (
          <p className="body-text">
            Consulte e baixe seus laudos com praticidade e segurança, de onde estiver. O portal funciona em um ambiente
            externo e protegido — ao clicar, você será direcionado para outra página.
          </p>
        ) : (
          <p className="body-text">
            Em breve você poderá consultar seus laudos on-line. Enquanto isso, solicite seu resultado pelo WhatsApp: nossa
            equipe envia o PDF com segurança, após confirmar seus dados.
          </p>
        )}
        <div className="portal__actions">
          {PORTAL_URL ? (
            <PillButton size="lg" href={PORTAL_URL} external>
              Acessar o portal
            </PillButton>
          ) : (
            <PillButton size="lg" href={REQUEST_RESULT_URL} external>
              Solicitar resultado
            </PillButton>
          )}
          <span className="portal__secure">
            <span className="dot" />
            Ambiente seguro e sigiloso
          </span>
        </div>
      </div>
      <div className="split__media portal__visual">
        <div className="orb orb--corner" />
        <div className="orb orb--float" />
        <div className="portal__card">
          <span className="kicker">Tenha em mãos</span>
          <div className="portal__rows">
            <div>
              <span>Número do protocolo</span>
              <span className="muted">entregue na coleta</span>
            </div>
            <div>
              <span>CPF do paciente</span>
              <span className="muted">ou data de nasc.</span>
            </div>
            <div>
              <span>Resultado</span>
              <span className="accent">PDF ↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section className="panel panel--tint">
      <div className="panel__head">
        <h2 className="h2-light">
          Como
          <br />
          acessar <span className="h2-note">3 passos simples</span>
        </h2>
        <p className="panel__aside-text">Leva menos de um minuto. Tenha em mãos o protocolo entregue no momento da coleta.</p>
      </div>
      <div className="steps">
        {PORTAL_STEPS.map((s, i) => {
          const last = i === PORTAL_STEPS.length - 1
          return (
            <div key={s.title} className={`step${last ? ' step--blue' : ''}`}>
              {last && <div className="orb orb--step" />}
              <div className="outline-num">{pad(i + 1)}</div>
              <strong>{s.title}</strong>
              <p>{s.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
