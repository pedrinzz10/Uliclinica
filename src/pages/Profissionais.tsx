import { ImageSlot } from '../components/ImageSlot'
import { Eyebrow } from '../components/ui'
import { PROFESSIONALS } from '../data'

// Só aparecem na página os profissionais que já têm foto.
const WITH_PHOTO = PROFESSIONALS.filter((p) => p.photo)

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
        {WITH_PHOTO.map((p) => (
          <article key={p.id} className="media-card">
            <div className="media-card__img media-card__img--portrait">
              <ImageSlot src={p.photo} alt={p.name} placeholder={p.name} />
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
