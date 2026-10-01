import { Eyebrow, PillButton } from '../components/ui'
import { CONTACT, FAQ, PORTAL_STEPS, PORTAL_URL, pad, whatsappUrl } from '../data'

export function Portal() {
  return (
    <>
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
              Em breve você poderá consultar seus laudos on-line. Enquanto isso, solicite seu resultado pelo WhatsApp:
              nossa equipe envia o PDF com segurança, após confirmar seus dados.
            </p>
          )}
          <div className="portal__actions">
            {PORTAL_URL ? (
              <PillButton size="lg" href={PORTAL_URL} external>
                Acessar o portal
              </PillButton>
            ) : (
              <PillButton size="lg" href={whatsappUrl('Olá! Gostaria de receber o resultado do meu exame.')} external>
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

      {PORTAL_URL && (
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
      )}

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
