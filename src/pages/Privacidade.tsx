import { Eyebrow } from '../components/ui'
import { CONTACT, LEGAL, whatsappUrl } from '../data'

// Rascunho baseado na LGPD (Lei 13.709/2018). Deve ser revisado pela clínica antes da publicação.
export function Privacidade() {
  return (
    <>
      <section className="page-head">
        <div className="page-head__title">
          <Eyebrow>Transparência</Eyebrow>
          <h1 className="page-title">
            Política de
            <br />
            privacidade.
          </h1>
        </div>
        <p className="body-text">
          Como a Uliclínica coleta, usa, protege e compartilha dados pessoais de pacientes e visitantes, em conformidade
          com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Última atualização: {LEGAL.privacyUpdatedAt}.
        </p>
      </section>

      <article className="legal">
        <section>
          <h2>1. Quem é o responsável pelos dados</h2>
          <p>
            A Uliclínica, inscrita no CNPJ {LEGAL.cnpj}, com sede na {CONTACT.street}, {CONTACT.district},{' '}
            {CONTACT.city}, é a controladora dos dados pessoais tratados em seus atendimentos e neste site.
          </p>
        </section>

        <section>
          <h2>2. Quais dados coletamos</h2>
          <p>
            <strong>No site:</strong> este site não possui formulários nem área de login e não coleta dados diretamente.
            Ao clicar nos botões de WhatsApp, Instagram ou Facebook, você é direcionado a esses serviços, que tratam seus
            dados de acordo com as próprias políticas.
          </p>
          <p>
            <strong>No atendimento:</strong> dados de identificação e contato (nome, CPF, data de nascimento, telefone,
            endereço) e dados de saúde (histórico clínico, resultados de exames, prontuário), considerados dados sensíveis
            pela LGPD.
          </p>
          <p>
            <strong>Medicina e Segurança do Trabalho:</strong> dados de trabalhadores encaminhados por empresas
            contratantes, necessários à realização dos exames ocupacionais.
          </p>
        </section>

        <section>
          <h2>3. Para que usamos os dados</h2>
          <ul>
            <li>Agendar, realizar e acompanhar consultas, exames e terapias.</li>
            <li>Elaborar e manter o prontuário e emitir laudos, atestados e resultados.</li>
            <li>Cumprir obrigações legais e regulatórias dos conselhos profissionais e das autoridades sanitárias.</li>
            <li>Entrar em contato sobre agendamentos, resultados e orientações do seu atendimento.</li>
          </ul>
        </section>

        <section>
          <h2>4. Base legal</h2>
          <p>
            Tratamos dados de saúde para a tutela da saúde, em procedimento realizado por profissionais de saúde (art. 11,
            II, "f", da LGPD), e para o cumprimento de obrigações legais e regulatórias (art. 7º, II, e art. 11, II, "a"),
            como a guarda do prontuário. Quando necessário, pediremos o seu consentimento de forma específica.
          </p>
        </section>

        <section>
          <h2>5. Com quem compartilhamos</h2>
          <ul>
            <li>Laboratórios de apoio, quando um exame precisa ser analisado externamente.</li>
            <li>
              Empresas contratantes, no caso de exames ocupacionais — limitado ao que a legislação trabalhista exige, como a
              conclusão de aptidão do ASO, sem detalhes do seu diagnóstico.
            </li>
            <li>Autoridades públicas, quando houver obrigação legal ou ordem judicial.</li>
            <li>Fornecedores de sistemas que nos ajudam a operar, sob contrato e dever de sigilo.</li>
          </ul>
          <p>Não vendemos nem cedemos seus dados para fins de publicidade.</p>
        </section>

        <section>
          <h2>6. Por quanto tempo guardamos</h2>
          <p>
            O prontuário é guardado pelo prazo mínimo de 20 anos a partir do último registro, conforme a Lei nº
            13.787/2018. Os demais dados são mantidos apenas pelo tempo necessário às finalidades acima ou ao cumprimento
            de obrigações legais.
          </p>
        </section>

        <section>
          <h2>7. Como protegemos</h2>
          <p>
            Adotamos medidas técnicas e administrativas para proteger os dados contra acesso não autorizado, perda ou
            alteração, e todos os profissionais estão sujeitos ao sigilo profissional.
          </p>
        </section>

        <section>
          <h2>8. Seus direitos</h2>
          <p>Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:</p>
          <ul>
            <li>confirmação de que tratamos seus dados e acesso a eles;</li>
            <li>correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>informação sobre com quem seus dados foram compartilhados;</li>
            <li>
              eliminação ou anonimização de dados desnecessários — respeitados os prazos legais de guarda, como o do
              prontuário;
            </li>
            <li>revogação do consentimento, quando o tratamento se basear nele.</li>
          </ul>
        </section>

        <section>
          <h2>9. Cookies e serviços de terceiros neste site</h2>
          <p>
            Este site não usa cookies próprios de rastreamento ou publicidade. Ele carrega fontes do Google Fonts e um mapa
            do Google Maps, que podem registrar seu endereço IP e usar cookies conforme a política do Google.
          </p>
        </section>

        <section>
          <h2>10. Fale com o encarregado de dados</h2>
          <p>
            Para exercer seus direitos ou tirar dúvidas sobre privacidade, fale com o encarregado de dados,{' '}
            {LEGAL.dpoName}, {LEGAL.dpoEmail && <>pelo e-mail {LEGAL.dpoEmail} ou </>}pelo{' '}
            <a href={whatsappUrl('Olá! Tenho uma solicitação sobre meus dados pessoais (LGPD).')} target="_blank" rel="noopener">
              WhatsApp {CONTACT.phone}
            </a>
            . Você também pode recorrer à Autoridade Nacional de Proteção de Dados (ANPD).
          </p>
        </section>

        <section>
          <h2>11. Alterações</h2>
          <p>
            Esta política pode ser atualizada a qualquer momento. A data da última atualização aparece no início desta
            página.
          </p>
        </section>
      </article>
    </>
  )
}
