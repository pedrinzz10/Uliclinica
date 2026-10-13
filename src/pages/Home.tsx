import recepcaoCard from '../assets/espaco/recepcao-card.webp'
import heroAllan from '../assets/hero-allan.webp'
import equipeDupla from '../assets/equipe-dupla.webp'
import { ImageSlot } from '../components/ImageSlot'
import { Partners } from '../components/Partners'
import { ServiceIcon } from '../components/serviceIcons'
import { ChatIcon, InstagramIcon, PhoneIcon, PinIcon } from '../components/icons'
import { Callout, Eyebrow, PillButton } from '../components/ui'
import { CONTACT, DIFFERENTIALS, PROFESSIONALS, SERVICES, YEARS_OF_HISTORY, scheduleUrl, tabHref, whatsappUrl } from '../data'

const heroDoctor = PROFESSIONALS.find((p) => p.id === 'jose-alan')!

export function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__text">
          <div className="hero__intro">
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              Centro médico multiprofissional · Ulianópolis–PA
            </span>
            <h1 id="hero-title" className="hero__title">
              Uliclínica
            </h1>
            <p className="hero__lead">
              Consultas, exames, terapias e saúde ocupacional em um só endereço. <strong>Uma equipe integrada</strong>{' '}
              para cuidar de você em cada etapa — da prevenção ao acompanhamento contínuo.
            </p>
            <div className="hero__actions">
              <PillButton size="lg" href={tabHref('prof')}>
                Encontrar profissional
              </PillButton>
              <a href={tabHref('serv')} className="hero__secondary">
                Ver especialidades
              </a>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stats-img">
              <ImageSlot src={recepcaoCard} alt="Recepção da Uliclínica" placeholder="Recepção · 480×300px" />
            </div>
            <div className="hero__stats-body">
              <span>Estrutura completa para a sua saúde</span>
              <div className="hero__stats-nums">
                <div>
                  <div className="stat-num">{SERVICES.length}</div>
                  <div className="stat-label">{'especiali­dades'}</div>
                </div>
                <div>
                  <div className="stat-num">{YEARS_OF_HISTORY}+</div>
                  <div className="stat-label">anos de história</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__glow-wrap">
            <div className="hero__glow" />
          </div>
          <div className="hero__photo">
            <ImageSlot src={heroAllan} alt={`${heroDoctor.name}, ${heroDoctor.area}, da Uliclínica`} fit="contain" transparent placeholder="Profissional recortado (PNG transparente) · 1200×1400px" />
          </div>
          <div className="hero__topbar">
            <a href={CONTACT.mapsUrl} target="_blank" rel="noopener" className="hero__address" aria-label={`Ver ${CONTACT.street} no mapa`}>
              <PinIcon />
              <span>
                {CONTACT.street}
                <br />
                {CONTACT.district}
                <span className="hero__city"> · {CONTACT.city}</span>
              </span>
            </a>
            <div className="hero__icons">
              <a href={CONTACT.telUrl} className="round-icon" aria-label={`Ligar para ${CONTACT.phone}`}>
                <PhoneIcon />
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener"
                className="round-icon round-icon--glass"
                aria-label={`Instagram ${CONTACT.instagramHandle}`}
              >
                <InstagramIcon />
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noopener" className="round-icon" aria-label={`WhatsApp ${CONTACT.phone}`}>
                <ChatIcon />
              </a>
            </div>
          </div>
          <div className="hero__side">
            <h2>Cuidado integrado</h2>
            <p>
              Especialistas que trabalham em conjunto e acompanham o seu caso <strong>de ponta a ponta</strong>, com escuta
              atenta e orientação clara.
            </p>
            <ul className="hero__chips" aria-label="Nossos pilares">
              {['Acolhimento', 'Ética', 'Excelência'].map((label) => (
                <li key={label}>
                  <Callout label={label} reverse className="hero__chip" />
                </li>
              ))}
            </ul>
          </div>
          <div className="hero__doctor">
            <strong>{heroDoctor.name}</strong>
            <span>{heroDoctor.area}</span>
          </div>
        </div>
      </section>

      <section className="about">
        <span className="about__eyebrow">
          <span className="rule" />
          Uliclínica
          <span className="rule" />
        </span>
        <h2 className="about__title">
          <strong>Medicina de excelência</strong>{' '}
          <span className="toggle-pill">
            <span />
          </span>{' '}
          com olhar humano, para que cada paciente{' '}
          <span className="avatars">
            <span />
            <span />
            <span />
          </span>{' '}
          <strong>se sinta seguro e bem cuidado.</strong>
        </h2>
        <p className="about__text">
          Reunimos especialistas de diferentes áreas, protocolos clínicos bem definidos e uma estrutura pensada para um{' '}
          <strong>atendimento resolutivo e seguro</strong> — com a proximidade de quem conhece a comunidade.
        </p>
        <PillButton href={tabHref('sobre')}>Conheça a Uliclínica</PillButton>
      </section>

      <section className="panel panel--tint">
        <div className="panel__head">
          <h2 className="h2-light">
            Nossas
            <br />
            especialidades <span className="h2-note">Atenção integral</span>
          </h2>
          <div className="panel__aside">
            <p>Consultas, exames laboratoriais, reabilitação e saúde ocupacional para empresas — tudo em um só lugar.</p>
            <a href={tabHref('serv')} className="link">
              Ver todas as especialidades
            </a>
          </div>
        </div>
        <div className="service-grid">
          <article className="service-banner">
            <div className="orb orb--lg" />
            <div className="orb orb--sm" />
            <div className="outline-text service-banner__title">Uliclínica</div>
            <p>{SERVICES.length} especialidades integradas em Ulianópolis–PA, com agendamento rápido pelo WhatsApp.</p>
          </article>
          {SERVICES.map((s) => (
            <article key={s.name} className="service-card">
              <ServiceIcon name={s.name} />
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <a href={scheduleUrl(s.name)} target="_blank" rel="noopener" className="link">
                Agendar
              </a>
            </article>
          ))}
        </div>
      </section>

      <Partners />

      <section className="why">
        <div className="why__visual">
          <div className="why__photo">
            <ImageSlot src={equipeDupla} alt="Dr. Rui Borralho e Dr. Oscar José, do corpo clínico da Uliclínica" fit="contain" transparent placeholder="Dois profissionais recortados (PNG) · 1200×900px" />
          </div>
          <div className="why__heading">
            <h2 className="h2-light">
              Por que escolher
              <br />a Uliclínica?
            </h2>
            <div className="why__lead">
              <p>
                <strong>Corpo clínico habilitado e registrado</strong> — somos também a pioneira da cidade!
              </p>
              <p>
                Resultados precisos e profissionais com <strong>mais de 25 anos de experiência</strong> comprovada!
              </p>
            </div>
          </div>
          <Callout size="sm" label="Equipe multiprofissional" style={{ left: '10%', top: '56%' }} />
          <Callout size="sm" label="Profissionais habilitados" reverse style={{ right: '10%', top: '66%' }} />
          <Callout size="sm" label="Atendimento integrado" style={{ left: '26%', top: '80%' }} />
          <span className="why__tag micro">
            <strong>Ambiente</strong> acolhedor
          </span>
        </div>
        <div className="why__body">
          <Eyebrow>Diferenciais</Eyebrow>
          <div className="why__stats">
            {DIFFERENTIALS.map((d) => (
              <div key={d.title} className="why__stat">
                <div className="why__stat-num">
                  {d.value}
                  {d.suffix && <span>{d.suffix}</span>}
                </div>
                <strong>{d.title}</strong>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="why__cta">
            <PillButton href={tabHref('prof')}>Conhecer o corpo clínico</PillButton>
          </div>
        </div>
      </section>
    </>
  )
}
