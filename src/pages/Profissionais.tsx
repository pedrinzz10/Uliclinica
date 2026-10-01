import { ImageSlot } from '../components/ImageSlot'
import { Eyebrow } from '../components/ui'
import { PROFESSIONALS } from '../data'

// Iniciais do nome, sem o título (Dr./Dra.): "Dra. Maria Cristina" → "MC".
const initials = (name: string) =>
  name
    .replace(/^Dra?\.\s*/, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export function Profissionais() {
  return (
    <>
      <section className="page-head">
        <div className="page-head__title">
          <Eyebrow>Profissionais</Eyebrow>
          <h1 className="page-title">
            Corpo
            <br />
            clínico.
          </h1>
        </div>
        <p className="body-text">
          Médicos e profissionais de saúde habilitados e registrados em seus conselhos de classe, que atuam de forma
          integrada para oferecer um cuidado completo, ético e baseado em evidências.
        </p>
      </section>

      <section className="card-grid card-grid--260">
        {PROFESSIONALS.map((p) => (
          <article key={p.id} className="media-card">
            <div className="media-card__img media-card__img--portrait">
              {p.photo ? (
                <ImageSlot src={p.photo} alt={p.name} placeholder={p.name} />
              ) : (
                <div className="monogram" aria-hidden="true">
                  {initials(p.name)}
                </div>
              )}
            </div>
            <div className="media-card__body">
              <span className="kicker">{p.area}</span>
              <h3>{p.name}</h3>
              <span className="media-card__reg">{p.reg}</span>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
