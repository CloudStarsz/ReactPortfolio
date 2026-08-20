const shared = {
  technologies: [
    '.NET',
    'Minimal APIs',
    'Entity Framework Core',
    'PostgreSQL',
    'RabbitMQ',
    'React',
    'TypeScript',
    'Vite',
    'Keycloak',
  ],
};

const pt = {
  architecture: [
    { label: 'React + TypeScript', detail: 'Frontend' },
    { label: '.NET Minimal APIs', detail: 'API e domínio' },
    { label: 'PostgreSQL', detail: 'Write model append-only' },
    { label: 'RabbitMQ', detail: 'Eventos assíncronos' },
    { label: 'Worker', detail: 'Processamento idempotente' },
    { label: 'EspelhoPonto', detail: 'Read model' },
  ],
  engineering: [
    'Clean Architecture',
    'Domain-Driven Design',
    'CQRS',
    'Event Sourcing',
    'Idempotência',
    'Multi-tenancy',
    'Concorrência otimista',
  ],
  meta: {
    back: 'Voltar aos projetos',
    eyebrow: 'Case study · SaaS B2B',
    title: 'ShiftSync',
    headline: 'A jornada do time, em perfeita sincronia.',
    summary: 'Uma plataforma completa para controle de ponto, acompanhamento de jornada e gestão de equipes — do primeiro registro ao fechamento mensal.',
    tags: ['Produto autoral', 'Full stack', 'Arquitetura orientada a eventos'],
    stats: [
      { value: '17', label: 'telas documentadas' },
      { value: '3', label: 'perfis de acesso' },
      { value: '2', label: 'formatos de relatório' },
    ],
    imageAlt: 'Landing page do ShiftSync',
    explore: 'Explorar o projeto',
  },
  overview: {
    kicker: 'Visão do produto',
    title: 'Um único fluxo para quem registra e para quem administra.',
    paragraphs: [
      'O ShiftSync conecta o registro diário do colaborador a dashboards mensais, ajustes auditáveis, solicitações, automações e relatórios para o fechamento operacional.',
      'O produto atende tanto profissionais que desejam controlar a própria jornada quanto empresas que precisam administrar colaboradores, permissões, saldos de horas e documentos de ponto.',
    ],
    cards: [
      { number: '01', title: 'Registro sem atrito', text: 'Entrada, pausa, retorno e saída com histórico diário e chave de idempotência.' },
      { number: '02', title: 'Gestão centralizada', text: 'Equipe, perfis, status, solicitações e saldos reunidos em um só lugar.' },
      { number: '03', title: 'Fechamento confiável', text: 'Espelhos mensais em PDF e Excel gerados a partir do estado processado.' },
    ],
  },
  capabilities: {
    kicker: 'O que foi construído',
    title: 'Da batida ao relatório.',
    items: [
      { title: 'Controle de jornada', text: 'Entrada, pausa, retorno e saída com visão do dia em tempo real.' },
      { title: 'Histórico mensal', text: 'Linha do tempo visual com horas trabalhadas, extras e faltantes.' },
      { title: 'Ajustes auditáveis', text: 'Modelo append-only que preserva os eventos originais e sua rastreabilidade.' },
      { title: 'Gestão de equipe', text: 'Usuários, perfis, status e acesso ao histórico de cada colaborador.' },
      { title: 'Solicitações', text: 'Abono, folga, ajuste, banco de horas, atestado e outras ocorrências.' },
      { title: 'Automações', text: 'Rotinas configuráveis para entrada, almoço e saída, com tolerâncias próprias.' },
      { title: 'Relatórios', text: 'Espelho individual e consolidado da equipe exportados em PDF e Excel.' },
      { title: 'Controle de acesso', text: 'Autorização por tenant e perfil, validada no backend.' },
    ],
  },
  system: {
    kicker: 'Por baixo do produto',
    title: 'Arquitetura preparada para consistência e escala.',
    description: 'As batidas formam um write model append-only. Cada evento é publicado no RabbitMQ e processado de forma assíncrona por um Worker, que atualiza o EspelhoPonto consumido pelos dashboards e relatórios.',
    engineeringTitle: 'Decisões de engenharia',
    architectureLabel: 'Fluxo de dados',
  },
  flow: {
    kicker: 'Fluxo principal',
    title: 'O caminho de uma batida.',
    items: [
      'O usuário registra uma batida com uma chave de idempotência.',
      'A API valida autenticação, tenant e contexto do usuário.',
      'O evento entra no histórico append-only e é publicado no RabbitMQ.',
      'O Worker reprocessa os eventos efetivos do dia.',
      'O EspelhoPonto é atualizado como projeção de consulta.',
      'Dashboards e relatórios leem o estado materializado.',
    ],
  },
  gallery: {
    kicker: 'Produto em uso',
    title: 'A experiência completa, perfil por perfil.',
    intro: 'As telas abaixo foram capturadas com dados representativos para mostrar o produto de ponta a ponta. Clique em qualquer imagem para ampliar.',
    groups: [
      {
        title: 'Descoberta e acesso',
        description: 'Da proposta de valor à criação segura de uma conta individual ou de equipe.',
        images: [
          { file: '01-landing-hero.png', title: 'Landing page', caption: 'Hero com proposta de valor, prévia do dashboard e chamadas para cadastro.', featured: true },
          { file: '02-landing-completa.png', title: 'Narrativa comercial completa', caption: 'Recursos, funcionamento, segurança e opções de uso em uma página integral.', tall: true },
          { file: '03-login.png', title: 'Login', caption: 'Início do fluxo OpenID Connect com retorno ao contexto correto do tenant.' },
          { file: '04-cadastro.png', title: 'Cadastro de conta', caption: 'Criação de tenant, usuário inicial e identidade para contas individuais ou de equipe.' },
        ],
      },
      {
        title: 'Conta individual',
        description: 'Autonomia para registrar, acompanhar e documentar a própria jornada.',
        images: [
          { file: '05-dashboard-individual.png', title: 'Dashboard individual', caption: 'Ponto atual, totais do dia, saldo e histórico mensal em uma linha do tempo.' },
          { file: '06-relatorios-individual.png', title: 'Relatórios individuais', caption: 'Geração do espelho mensal em PDF ou Excel.' },
          { file: '07-automacoes-individual.png', title: 'Automações individuais', caption: 'Horários automáticos, tolerâncias e comportamento em feriados.' },
        ],
      },
      {
        title: 'Administração da equipe',
        description: 'Visibilidade operacional e controle para quem administra pessoas e jornadas.',
        images: [
          { file: '08-dashboard-admin-equipe.png', title: 'Dashboard do administrador', caption: 'Jornada pessoal com acesso adicional aos módulos administrativos.' },
          { file: '09-gestao-equipe.png', title: 'Gestão de equipe', caption: 'Indicadores, status, último acesso e ações por colaborador.', featured: true },
          { file: '09b-dashboard-colaborador-pelo-admin.png', title: 'Jornada de um colaborador', caption: 'Histórico mensal, totais, ajustes e relatório sem sair da gestão da equipe.' },
          { file: '10-relatorios-admin-equipe.png', title: 'Relatórios da equipe', caption: 'Espelho próprio, relatório individual e consolidado de todo o tenant.' },
          { file: '11-solicitacoes-admin.png', title: 'Central de solicitações', caption: 'Pesquisa e triagem de ocorrências pendentes, aprovadas e recusadas.' },
          { file: '11b-detalhe-solicitacao.png', title: 'Análise de solicitação', caption: 'Justificativa, anexos, histórico e decisão com resposta ao colaborador.' },
          { file: '12-automacoes-equipe.png', title: 'Automações da equipe', caption: 'Rotinas por tenant com seleção dos colaboradores participantes.' },
        ],
      },
      {
        title: 'Experiência do colaborador',
        description: 'Um acesso direto, seguro e limitado ao que cada pessoa realmente precisa.',
        images: [
          { file: '13-dashboard-colaborador.png', title: 'Dashboard da colaboradora', caption: 'Jornada e histórico mensal com navegação adaptada ao perfil Standard.' },
          { file: '14-solicitacoes-colaborador.png', title: 'Minhas solicitações', caption: 'Criação e acompanhamento de ajustes, abonos, folgas e ausências justificadas.' },
          { file: '15-relatorios-colaborador.png', title: 'Relatórios da colaboradora', caption: 'Acesso exclusivo ao próprio espelho mensal em PDF ou Excel.' },
        ],
      },
    ],
  },
  demo: {
    kicker: 'Cenário demonstrado',
    title: 'Três perspectivas, o mesmo produto.',
    description: 'O ambiente local foi preparado com jornadas de agosto de 2026, automações e solicitações em diferentes estados para representar situações reais de uso.',
    profiles: [
      { initials: 'MC', role: 'Conta individual', name: 'Marina Costa', description: 'Controla a própria jornada, automações e relatórios.' },
      { initials: 'RO', role: 'Administrador', name: 'Rafael Oliveira', description: 'Gerencia a equipe, solicitações e documentos do tenant.' },
      { initials: 'CS', role: 'Colaboradora', name: 'Camila Souza', description: 'Registra a jornada e acompanha as próprias ocorrências.' },
    ],
    note: 'Capturas produzidas localmente em 20 de agosto de 2026, na resolução de 1440 × 1000. A seleção de plano e o ciclo de cobrança existem no produto, mas estavam desabilitados por feature flags e não integram esta galeria.',
  },
  modal: {
    close: 'Fechar imagem',
    previous: 'Imagem anterior',
    next: 'Próxima imagem',
  },
};

const en = {
  architecture: [
    { label: 'React + TypeScript', detail: 'Frontend' },
    { label: '.NET Minimal APIs', detail: 'API and domain' },
    { label: 'PostgreSQL', detail: 'Append-only write model' },
    { label: 'RabbitMQ', detail: 'Asynchronous events' },
    { label: 'Worker', detail: 'Idempotent processing' },
    { label: 'EspelhoPonto', detail: 'Read model' },
  ],
  engineering: [
    'Clean Architecture',
    'Domain-Driven Design',
    'CQRS',
    'Event Sourcing',
    'Idempotency',
    'Multi-tenancy',
    'Optimistic concurrency',
  ],
  meta: {
    back: 'Back to projects',
    eyebrow: 'Case study · B2B SaaS',
    title: 'ShiftSync',
    headline: 'Your team’s workday, perfectly in sync.',
    summary: 'A complete platform for time tracking, workday monitoring, and team management — from the first clock-in to monthly closing.',
    tags: ['Independent product', 'Full stack', 'Event-driven architecture'],
    stats: [
      { value: '17', label: 'documented screens' },
      { value: '3', label: 'access profiles' },
      { value: '2', label: 'report formats' },
    ],
    imageAlt: 'ShiftSync landing page',
    explore: 'Explore the project',
  },
  overview: {
    kicker: 'Product overview',
    title: 'One workflow for those who track time and those who manage it.',
    paragraphs: [
      'ShiftSync connects each employee’s daily time entries to monthly dashboards, auditable adjustments, requests, automations, and operational closing reports.',
      'The product serves both professionals managing their own workday and companies managing employees, permissions, hour balances, and time documents.',
    ],
    cards: [
      { number: '01', title: 'Effortless tracking', text: 'Clock-in, break, return, and clock-out with a daily history and idempotency key.' },
      { number: '02', title: 'Centralized management', text: 'Team, profiles, status, requests, and balances brought together.' },
      { number: '03', title: 'Reliable closing', text: 'Monthly PDF and Excel timesheets generated from processed state.' },
    ],
  },
  capabilities: {
    kicker: 'What was built',
    title: 'From clock-in to report.',
    items: [
      { title: 'Workday tracking', text: 'Clock-in, break, return, and clock-out with a real-time daily view.' },
      { title: 'Monthly history', text: 'A visual timeline with worked hours, overtime, and missing hours.' },
      { title: 'Auditable changes', text: 'An append-only model that preserves original events and traceability.' },
      { title: 'Team management', text: 'Users, profiles, statuses, and each employee’s time history.' },
      { title: 'Requests', text: 'Excused time, time off, adjustments, time banks, medical notes, and more.' },
      { title: 'Automations', text: 'Configurable clock-in, lunch, and clock-out routines with custom tolerances.' },
      { title: 'Reports', text: 'Individual timesheets and team summaries exported as PDF and Excel.' },
      { title: 'Access control', text: 'Tenant- and profile-based authorization enforced by the backend.' },
    ],
  },
  system: {
    kicker: 'Under the hood',
    title: 'An architecture designed for consistency and scale.',
    description: 'Time entries form an append-only write model. Every event is published to RabbitMQ and asynchronously processed by a Worker, which updates the EspelhoPonto read model used by dashboards and reports.',
    engineeringTitle: 'Engineering decisions',
    architectureLabel: 'Data flow',
  },
  flow: {
    kicker: 'Main workflow',
    title: 'The path of a time entry.',
    items: [
      'The user submits a time entry with an idempotency key.',
      'The API validates authentication, tenant, and user context.',
      'The event is stored in the append-only history and published to RabbitMQ.',
      'The Worker reprocesses the day’s effective events.',
      'EspelhoPonto is updated as a query projection.',
      'Dashboards and reports read the materialized state.',
    ],
  },
  gallery: {
    kicker: 'Product in action',
    title: 'The complete experience, profile by profile.',
    intro: 'The screens below use representative data to show the product end to end. Click any image to enlarge it.',
    groups: [
      {
        title: 'Discovery and access',
        description: 'From the value proposition to securely creating an individual or team account.',
        images: [
          { file: '01-landing-hero.png', title: 'Landing page', caption: 'Value proposition, dashboard preview, and sign-up calls to action.', featured: true },
          { file: '02-landing-completa.png', title: 'Complete commercial story', caption: 'Features, workflow, security, and usage options in a full-page view.', tall: true },
          { file: '03-login.png', title: 'Login', caption: 'The OpenID Connect flow starts here and returns to the correct tenant context.' },
          { file: '04-cadastro.png', title: 'Account registration', caption: 'Creates the tenant, initial user, and identity for individual or team accounts.' },
        ],
      },
      {
        title: 'Individual account',
        description: 'Autonomy to track, review, and document one’s own workday.',
        images: [
          { file: '05-dashboard-individual.png', title: 'Individual dashboard', caption: 'Current status, daily totals, balance, and monthly timeline.' },
          { file: '06-relatorios-individual.png', title: 'Individual reports', caption: 'Monthly timesheet generation in PDF or Excel.' },
          { file: '07-automacoes-individual.png', title: 'Individual automations', caption: 'Automated schedules, tolerances, and holiday behavior.' },
        ],
      },
      {
        title: 'Team administration',
        description: 'Operational visibility and control for people and workday managers.',
        images: [
          { file: '08-dashboard-admin-equipe.png', title: 'Administrator dashboard', caption: 'Personal workday with additional access to administrative modules.' },
          { file: '09-gestao-equipe.png', title: 'Team management', caption: 'Indicators, statuses, last access, and actions per employee.', featured: true },
          { file: '09b-dashboard-colaborador-pelo-admin.png', title: 'Employee workday', caption: 'Monthly history, totals, adjustments, and reports within team management.' },
          { file: '10-relatorios-admin-equipe.png', title: 'Team reports', caption: 'Own timesheet, individual report, and consolidated tenant export.' },
          { file: '11-solicitacoes-admin.png', title: 'Request center', caption: 'Search and triage pending, approved, and rejected occurrences.' },
          { file: '11b-detalhe-solicitacao.png', title: 'Request review', caption: 'Reason, attachments, history, and decision with an employee response.' },
          { file: '12-automacoes-equipe.png', title: 'Team automations', caption: 'Tenant-wide routines with participating employee selection.' },
        ],
      },
      {
        title: 'Employee experience',
        description: 'Direct, secure access limited to what each person actually needs.',
        images: [
          { file: '13-dashboard-colaborador.png', title: 'Employee dashboard', caption: 'Workday and monthly history with navigation tailored to the Standard profile.' },
          { file: '14-solicitacoes-colaborador.png', title: 'My requests', caption: 'Create and monitor adjustments, excused hours, time off, and absences.' },
          { file: '15-relatorios-colaborador.png', title: 'Employee reports', caption: 'Exclusive access to one’s own monthly PDF or Excel timesheet.' },
        ],
      },
    ],
  },
  demo: {
    kicker: 'Demonstrated scenario',
    title: 'Three perspectives, one product.',
    description: 'The local environment was prepared with August 2026 workdays, automations, and requests in different states to represent real usage.',
    profiles: [
      { initials: 'MC', role: 'Individual account', name: 'Marina Costa', description: 'Manages her own workday, automations, and reports.' },
      { initials: 'RO', role: 'Administrator', name: 'Rafael Oliveira', description: 'Manages the team, requests, and tenant documents.' },
      { initials: 'CS', role: 'Employee', name: 'Camila Souza', description: 'Tracks her workday and monitors her own occurrences.' },
    ],
    note: 'Screens captured locally on August 20, 2026, at 1440 × 1000. Plan selection and billing cycles exist in the product but were disabled by feature flags and are not part of this gallery.',
  },
  modal: {
    close: 'Close image',
    previous: 'Previous image',
    next: 'Next image',
  },
};

export const shiftSyncProject = {
  pt: { ...pt, ...shared },
  en: { ...en, ...shared },
};
