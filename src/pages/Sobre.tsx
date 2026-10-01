import equipeRecepcao from '../assets/espaco/equipe-recepcao.webp'
import fachadaVertical from '../assets/espaco/fachada-vertical.webp'
import fachadaRua from '../assets/espaco/fachada-rua.webp'
import recepcao from '../assets/espaco/recepcao.webp'
import { ImageSlot } from '../components/ImageSlot'
import { ChatIcon, InstagramIcon, PinIcon } from '../components/icons'
import { Eyebrow, PillButton } from '../components/ui'
import { CONTACT, FOUNDED_YEAR, SERVICES, VALUES, whatsappUrl } from '../data'

// Fotos do espaço físico. A galeria só aparece quando houver ao menos uma foto (importe e preencha `src`).
const GALLERY: { alt: string; src?: string; position?: string }[] = [
  { alt: 'Recepção da Uliclínica', src: recepcao },
  { alt: 'Profissionais da Uliclínica na recepção', src: equipeRecepcao, position: 'center 15%' },
  // Pendentes: consultório, sala de exames, laboratório.
]
const gallery = GALLERY.filter((g) => g.src)

export function Sobre() {
  return (
    <>
      <section className="split split--soft">
        <div className="split__text">
          <Eyebrow>Quem somos</Eyebrow>
          <h1 className="page-title">
            Cuidado que
            <br />
            começa pela escuta.
          </h1>
          <p className="body-text">
            A Uliclínica é um centro de saúde multiprofissional em Ulianópolis–PA que reúne, em um só endereço,
            consultas médicas, terapias, exames laboratoriais e soluções em saúde ocupacional para empresas.
          </p>
          <p className="body-text">
            Nosso modelo de atendimento integra especialistas de diferentes áreas em torno de cada paciente: avaliações
            mais completas, tratamentos coordenados e acompanhamento próximo — com a segurança de protocolos bem
            definidos e o acolhimento de quem conhece a comunidade.
          </p>
        </div>
        <div className="split__media split__media--blue split__media--facade">
          <ImageSlot
            src={fachadaVertical}
            alt={`Fachada da Uliclínica, ${CONTACT.street}, ${CONTACT.district}`}
            placeholder="Fachada da clínica · 960×1280px"
          />
        </div>
      </section>

      <section className="history">
        <div className="history__head">
          <Eyebrow>Nossa história</Eyebrow>
          <h2 className="h2-medium">
            Desde {FOUNDED_YEAR},
            <br />
            ao lado de Ulianópolis.
          </h2>
        </div>
        <div className="history__body">
          <p className="body-text">
            Fundada em {FOUNDED_YEAR}, a Uliclínica nasceu com um propósito claro: ampliar o acesso a atendimento especializado de qualidade em
            Ulianópolis e região, para que ninguém precise ir longe em busca de cuidado.
          </p>
          <p className="body-text">
            Hoje, reunimos {SERVICES.length} especialidades, laboratório de análises clínicas e serviços de saúde ocupacional, com uma
            equipe que alia formação técnica, atualização constante e atendimento humanizado.
          </p>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="gallery" aria-label="Nosso espaço">
          {gallery.map((g) => (
            <div key={g.alt} className="gallery__item">
              <ImageSlot src={g.src} alt={g.alt} position={g.position} placeholder={g.alt} />
            </div>
          ))}
        </section>
      )}

      <section className="mv">
        <article className="mv__card">
          <div className="big-num">01</div>
          <h3>Missão</h3>
          <p>
            Promover saúde com excelência técnica, ética e acolhimento, oferecendo atendimento integrado e resolutivo às
            pessoas e empresas de Ulianópolis e região.
          </p>
        </article>
        <article className="mv__card mv__card--blue">
          <div className="big-num">02</div>
          <h3>Visão</h3>
          <p>
            Ser referência regional em atendimento multiprofissional, reconhecida pela qualidade assistencial, pela
            segurança do paciente e pela confiança construída com cada pessoa atendida.
          </p>
        </article>
      </section>

      <section className="values">
        <div className="values__head">
          <div className="big-num">03</div>
          <h2 className="h2-medium">Nossos valores</h2>
        </div>
        <div className="values__grid">
          {VALUES.map((v) => (
            <div key={v.title} className="value-card">
              <strong>{v.title}</strong>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="location" aria-labelledby="onde-estamos">
        <div className="location__info">
          <Eyebrow>Onde estamos</Eyebrow>
          <h2 id="onde-estamos" className="h2-medium">
            Venha nos
            <br />
            visitar.
          </h2>
          <ul className="location__list">
            <li>
              <PinIcon />
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener">
                {CONTACT.street}
                <br />
                {CONTACT.district} · {CONTACT.city}
              </a>
            </li>
            <li>
              <ChatIcon />
              <a href={whatsappUrl()} target="_blank" rel="noopener">
                WhatsApp {CONTACT.phone}
              </a>
            </li>
            <li>
              <InstagramIcon />
              <a href={CONTACT.instagramUrl} target="_blank" rel="noopener">
                {CONTACT.instagramHandle}
              </a>
            </li>
          </ul>
          <p className="body-text">
            Agende pelo WhatsApp e seja recebido por nossa equipe no bairro{' '}
            {CONTACT.district}.
          </p>
          <PillButton href={CONTACT.mapsUrl} external>
            Como chegar
          </PillButton>
        </div>
        <div className="location__photo">
          <img
            src={fachadaRua}
            alt={`Fachada da Uliclínica vista da rua, ${CONTACT.street}`}
            loading="lazy"
            width={900}
            height={1200}
          />
          <span className="location__photo-tag">Procure pela placa Uli Clínica</span>
        </div>
        <div className="location__map">
          <iframe
            title={`Mapa: ${CONTACT.street}, ${CONTACT.district}, ${CONTACT.city}`}
            src={CONTACT.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
