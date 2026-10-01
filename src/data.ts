import allan from './assets/profissionais/allan.webp'
import luana from './assets/profissionais/luana.webp'
import lynamara from './assets/profissionais/lynamara.webp'
import marcelo from './assets/profissionais/marcelo.webp'
import oscar from './assets/profissionais/oscar.webp'
import rui from './assets/profissionais/rui.webp'

export type Tab = 'menu' | 'sobre' | 'prof' | 'serv' | 'canal' | 'priv'

export const TABS: { id: Tab; label: string; slug: string; inNav?: false }[] = [
  { id: 'menu', label: 'Início', slug: '' },
  { id: 'sobre', label: 'Quem Somos', slug: 'quem-somos' },
  { id: 'prof', label: 'Profissionais', slug: 'profissionais' },
  { id: 'serv', label: 'Serviços', slug: 'servicos' },
  { id: 'canal', label: 'Portal do Paciente', slug: 'portal' },
  { id: 'priv', label: 'Política de Privacidade', slug: 'privacidade', inNav: false },
]

/** Páginas que aparecem nos menus (a política de privacidade fica só no rodapé). */
export const NAV_TABS = TABS.filter((t) => t.inNav !== false)

/** Endereço de cada aba no formato #/slug (o "/" evita conflito com âncoras de seção). */
export const tabHref = (t: Tab) => `#/${TABS.find((x) => x.id === t)?.slug ?? ''}`

/** Aba correspondente ao hash; `null` para âncoras comuns (ex.: #conteudo), que não trocam de página. */
export const tabFromHash = (hash: string): Tab | null => {
  if (hash && hash !== '#' && !hash.startsWith('#/')) return null
  const slug = hash.replace(/^#\/?/, '')
  return TABS.find((t) => t.slug === slug)?.id ?? 'menu'
}

export const SERVICES = [
  { name: 'Clínico Geral', desc: 'Avaliação completa, prevenção, diagnóstico e acompanhamento de condições crônicas, com encaminhamento integrado às demais especialidades.' },
  { name: 'Ginecologia', desc: 'Cuidado integral à saúde da mulher: consultas de rotina, exames preventivos, planejamento familiar e acompanhamento em todas as fases da vida.' },
  { name: 'Ortopedia', desc: 'Diagnóstico e tratamento de lesões e doenças de ossos, articulações, músculos e coluna, em sintonia com a fisioterapia.' },
  { name: 'Fisioterapia', desc: 'Reabilitação funcional, controle da dor e recuperação de movimentos com planos terapêuticos individualizados.' },
  { name: 'Fonoaudiologia', desc: 'Avaliação e terapia de fala, voz, linguagem, audição e deglutição, da infância à terceira idade.' },
  { name: 'Nutrição', desc: 'Planos alimentares personalizados para prevenção, controle de doenças, emagrecimento saudável e qualidade de vida.' },
  { name: 'Psicologia', desc: 'Psicoterapia e acompanhamento da saúde emocional em ambiente acolhedor, ético e sigiloso.' },
  { name: 'Ultrassonografia', desc: 'Exames de ultrassom realizados por médica ultrassonografista, com laudo para o seu acompanhamento.' },
  { name: 'Laboratório', desc: 'Coleta no local e análises clínicas com controle de qualidade, e resultados disponíveis no Portal do Paciente.' },
  { name: 'Medicina do Trabalho', desc: 'Exames admissionais, periódicos, de retorno ao trabalho, mudança de função e demissionais, com emissão de ASO.' },
  { name: 'Segurança do Trabalho', desc: 'Assessoria técnica às empresas na gestão de riscos ocupacionais, programas de segurança e treinamentos.' },
]

// Corpo clínico informado pela clínica em 01/10/2026. Sem `photo`, o card mostra as iniciais.
export const PROFESSIONALS: { id: string; name: string; area: string; reg: string; photo?: string }[] = [
  { id: 'rui', name: 'Dr. Rui Borralho', area: 'Medicina do Trabalho e Clínica Geral', reg: 'CRM-PA 1383', photo: rui },
  { id: 'maria-cristina', name: 'Dra. Maria Cristina', area: 'Clínica Geral e Ultrassonografia', reg: 'CRM-PA 6233' },
  { id: 'jose-alan', name: 'Dr. José Alan', area: 'Clínica Geral', reg: 'CRM-PA 19424', photo: allan },
  { id: 'erinaldo', name: 'Dr. Erinaldo', area: 'Ortopedia e Traumatologia', reg: 'CRM-PA 13831 · RQE 5299' },
  { id: 'jose-henrique', name: 'Dr. José Henrique', area: 'Ginecologia e Obstetrícia', reg: 'CRM-PA 10147' },
  { id: 'oscar', name: 'Dr. Oscar José', area: 'Fonoaudiologia', reg: 'CRFa 7951', photo: oscar },
  { id: 'marcelo', name: 'Dr. Marcelo', area: 'Psicologia', reg: 'CRP 05/33314', photo: marcelo },
  { id: 'lynamara', name: 'Dra. Lynamara', area: 'Nutrição', reg: 'CRN 5018', photo: lynamara },
  { id: 'luana', name: 'Dra. Luana Pinheiro', area: 'Fisioterapia', reg: 'CREFITO 12/422740-F', photo: luana },
]

// Fundação: 11/06/2010.
export const FOUNDED_YEAR = 2010
export const YEARS_OF_HISTORY = new Date().getFullYear() - FOUNDED_YEAR

export const DIFFERENTIALS = [
  { value: String(SERVICES.length), suffix: '', title: 'Especialidades integradas', desc: 'Da atenção primária à saúde ocupacional, com as áreas trabalhando em conjunto.' },
  { value: String(PROFESSIONALS.length), suffix: '', title: 'Profissionais de saúde', desc: 'Corpo clínico habilitado e registrado em seus respectivos conselhos de classe.' },
  { value: String(YEARS_OF_HISTORY), suffix: '+', title: 'Anos de história', desc: `Desde ${FOUNDED_YEAR} cuidando da saúde de Ulianópolis e região.` },
  { value: '360', suffix: '°', title: 'Cuidado integrado', desc: 'Acompanhamento coordenado do diagnóstico ao tratamento e à reabilitação.' },
]

export const VALUES = [
  { title: 'Acolhimento', desc: 'Escuta atenta e atendimento empático, do primeiro contato ao acompanhamento após a consulta.' },
  { title: 'Ética e transparência', desc: 'Condutas pautadas pelos códigos de ética profissional e comunicação clara em cada etapa do cuidado.' },
  { title: 'Respeito', desc: 'A dignidade, a diversidade e a individualidade de cada paciente no centro das decisões.' },
  { title: 'Qualidade e segurança', desc: 'Protocolos clínicos, atualização constante da equipe e melhoria contínua dos processos.' },
  { title: 'Privacidade', desc: 'Sigilo profissional e proteção dos dados de saúde, em conformidade com a LGPD.' },
  { title: 'Compromisso com a comunidade', desc: 'Promoção da saúde e da prevenção para as pessoas e empresas de Ulianópolis e região.' },
]

export const PORTAL_STEPS = [
  { title: 'Acesse o portal', desc: 'Clique em “Acessar o portal” e você será direcionado ao ambiente seguro de resultados da Uliclínica.' },
  { title: 'Identifique-se', desc: 'Informe o número do protocolo recebido na coleta e o seu CPF ou data de nascimento.' },
  { title: 'Consulte e baixe', desc: 'Visualize seus laudos e salve em PDF para levar à consulta sempre que precisar.' },
]

// Link do sistema de resultados. Enquanto for null, o botão do portal leva ao WhatsApp.
export const PORTAL_URL: string | null = null

const WHATSAPP_NUMBER = '5591981394221'
const ADDRESS_QUERY = 'Avenida Paraíba, 171, Caminho das Árvores, Ulianópolis - PA'

export const CONTACT = {
  street: 'Avenida Paraíba, 171',
  district: 'Caminho das Árvores',
  city: 'Ulianópolis–PA',
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_QUERY)}`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_QUERY)}&output=embed`,
  phone: '(91) 98139-4221',
  telUrl: `tel:+${WHATSAPP_NUMBER}`,
  instagramHandle: '@uliclinica',
  instagramUrl: 'https://www.instagram.com/uliclinica/',
  facebookUrl: 'https://www.facebook.com/uliclinica',
  hours: 'Segunda a sexta · 6h30–11h e 14h–17h',
}

// Convênios atendidos (informados pela clínica em 01/10/2026).
export const PARTNER_COMPANIES = [
  'Pagrisa',
  'Uliana',
  'MX Serviços',
  'Solplac',
  'RS Terra Maq',
  'Posto Goes',
  'B4',
  'Araguaia',
  'Rabelo e Silveira',
  'Preserve',
  'Gusfel',
  'Proserv Agrícola',
  'Suzano',
]

export const DEVELOPER = {
  name: 'Pedro Henrique de Oliveira',
  githubUrl: 'https://github.com/pedrinzz10',
  linkedinUrl: 'https://www.linkedin.com/in/pedro-henrique-oliveira-484336261/',
}

// Exigido pelo CFM (Res. 2.336/2023) em sites de estabelecimentos médicos.
export const LEGAL = {
  technicalDirector: 'Dr. Rui José Borralho dos Santos',
  technicalDirectorCrm: 'CRM-PA 1383',
  cnpj: '12.071.530/0001-00',
  // Encarregado de dados (LGPD, art. 41): o próprio responsável técnico. E-mail opcional — vazio, a política indica só o WhatsApp.
  dpoName: 'Dr. Rui José Borralho dos Santos',
  dpoEmail: '',
  privacyUpdatedAt: '29 de setembro de 2026',
}

export const FAQ = [
  { q: 'Qual o prazo para os resultados?', a: 'Exames de rotina ficam prontos no mesmo dia. Exames especializados levam de 7 a 8 dias úteis — o prazo exato é informado no momento da coleta.' },
  { q: 'Não encontrei meu exame. E agora?', a: `Alguns exames exigem mais tempo de análise. Se o prazo informado já passou, fale com nossa equipe pelo WhatsApp ${CONTACT.phone}.` },
  { q: 'Perdi meu protocolo', a: `Sem problema. Fale com a recepção pelo WhatsApp ${CONTACT.phone} ou compareça à ${CONTACT.street} com um documento com foto e CPF para recuperar o número.` },
]

/** Link do WhatsApp da clínica, com mensagem opcional já preenchida. */
export const whatsappUrl = (message = 'Olá! Gostaria de agendar uma consulta na Uliclínica.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const scheduleUrl = (service: string) =>
  whatsappUrl(`Olá! Gostaria de agendar um atendimento de ${service} na Uliclínica.`)

export const pad = (n: number) => String(n).padStart(2, '0')
