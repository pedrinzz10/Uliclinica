import { ServiceIcon } from '../components/serviceIcons'
import { Partners } from '../components/Partners'
import { Eyebrow } from '../components/ui'
import { SERVICES, pad, scheduleUrl } from '../data'

export function Servicos() {
  return (
    <>
      <section className="page-head">
        <div className="page-head__title">
          <Eyebrow>Especialidades</Eyebrow>
          <h1 className="page-title">
            Atenção
            <br />
            integral.
          </h1>
        </div>
        <p className="body-text">
          {SERVICES.length} especialidades integradas em um só endereço — da consulta clínica à reabilitação, dos exames laboratoriais à
          saúde ocupacional para empresas.
        </p>
      </section>

      <section className="card-grid card-grid--300">
        {SERVICES.map((s, i) => (
          <article key={s.name} className="media-card">
            <div className="media-card__img media-card__img--wide media-card__img--icon">
              <ServiceIcon name={s.name} size="lg" />
            </div>
            <div className="media-card__body media-card__body--grow">
              <div className="media-card__title-row">
                <span>{pad(i + 1)}</span>
                <h3>{s.name}</h3>
              </div>
              <p className="media-card__desc">{s.desc}</p>
              <a href={scheduleUrl(s.name)} target="_blank" rel="noopener" className="link media-card__link">
                Agendar
              </a>
            </div>
          </article>
        ))}
      </section>

      <Partners />
    </>
  )
}
