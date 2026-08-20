const shared = {
  technologies: ['C#', '.NET 9', 'React', 'Vite', 'Chakra UI', 'Docker'],
};

const pt = {
  meta: {
    back: 'Voltar aos projetos',
    eyebrow: 'Case study · Pet care',
    title: 'TailTrack',
    headline: 'Agendamento pet sem complicação, para clientes e estabelecimentos.',
    summary: 'Uma aplicação full stack que conecta tutores a serviços de banho, tosa e atendimento veterinário, enquanto oferece à loja uma visão operacional da agenda.',
    tags: ['Produto full stack', 'Experiência responsiva', 'Monorepo'],
    stats: [
      { value: '2', label: 'experiências conectadas' },
      { value: '3', label: 'categorias de serviço' },
      { value: '6', label: 'telas documentadas' },
    ],
    explore: 'Conhecer o produto',
    imageAlt: 'Dashboard administrativo do TailTrack',
  },
  overview: {
    kicker: 'Visão do produto',
    title: 'A agenda do pet e a operação da loja no mesmo fluxo.',
    text: 'O TailTrack reduz o atrito entre marcar um serviço e organizar a capacidade do estabelecimento. O cliente agenda um ou mais pets, acompanha seus compromissos e mantém o perfil; o administrador controla horários, limites simultâneos e os dados públicos da loja.',
    audiences: [
      {
        icon: 'client',
        label: 'Para o cliente',
        title: 'Agende vários pets de uma vez.',
        text: 'Nome, espécie, serviço, data e horário são reunidos em um fluxo direto, com acompanhamento dos próximos agendamentos.',
      },
      {
        icon: 'business',
        label: 'Para o estabelecimento',
        title: 'Enxergue a capacidade do dia.',
        text: 'A grade operacional organiza horários, tutores, pets e serviços, incluindo os encaixes e limites disponíveis por categoria.',
      },
    ],
  },
  capabilities: {
    kicker: 'Principais entregas',
    title: 'O essencial para a rotina funcionar.',
    items: [
      { title: 'Agendamento multi-pet', text: 'Mais de um animal pode ser incluído na mesma solicitação.' },
      { title: 'Agenda do cliente', text: 'Próximos serviços, quantidade de pets, status e ações em uma única tela.' },
      { title: 'Painel diário', text: 'Visão por horário com ocupação, tutor, pet, espécie e serviço.' },
      { title: 'Capacidade configurável', text: 'Limites simultâneos independentes para banhos, tosas e consultas.' },
      { title: 'Dias de funcionamento', text: 'Configuração simples da disponibilidade semanal do estabelecimento.' },
      { title: 'Perfil da loja', text: 'Logo, dados públicos, WhatsApp, e-mail administrativo e segurança da conta.' },
    ],
  },
  workflow: {
    kicker: 'Jornada principal',
    title: 'Do tutor até a agenda da loja.',
    items: [
      { number: '01', title: 'Identificação', text: 'O cliente entra com e-mail ou telefone.' },
      { number: '02', title: 'Agendamento', text: 'Adiciona seus pets, escolhe serviços e define o horário.' },
      { number: '03', title: 'Acompanhamento', text: 'Consulta os compromissos e seus respectivos status.' },
      { number: '04', title: 'Operação', text: 'A loja recebe tudo organizado por horário e capacidade.' },
    ],
  },
  gallery: {
    kicker: 'Produto em uso',
    title: 'Duas perspectivas, uma agenda sincronizada.',
    intro: 'A galeria percorre a experiência do cliente e o painel administrativo. Clique em qualquer imagem para ampliar.',
    groups: [
      {
        title: 'Experiência do cliente',
        description: 'Acesso, novo agendamento e acompanhamento dos serviços marcados.',
        images: [
          { file: 'Screenshot_1.png', title: 'Acesso ao TailTrack', caption: 'Login por e-mail ou telefone, preparado para o contato cotidiano via WhatsApp.' },
          { file: 'Screenshot_2.png', title: 'Novo agendamento', caption: 'Cadastro de múltiplos pets com espécie, serviço, data e horário.' },
          { file: 'Screenshot_3.png', title: 'Meus agendamentos', caption: 'Próximos compromissos, serviços e status reunidos para o tutor.' },
        ],
      },
      {
        title: 'Gestão do estabelecimento',
        description: 'Controle da ocupação diária, capacidade de atendimento e informações da loja.',
        images: [
          { file: 'Screenshot_4.png', title: 'Painel operacional', caption: 'Agenda diária por horário, com capacidade e detalhes de cada atendimento.', featured: true },
          { file: 'Screenshot_5.png', title: 'Configurações', caption: 'Limites simultâneos por serviço e dias de funcionamento.' },
          { file: 'Screenshot_6.png', title: 'Perfil da loja', caption: 'Identidade pública, canais de contato e atualização de senha.' },
        ],
      },
    ],
  },
  closing: {
    label: 'Stack do projeto',
    title: 'Uma base full stack pronta para evoluir.',
    text: 'O TailTrack está organizado como monorepo e combina a solidez do ecossistema .NET com uma interface React construída em Vite e Chakra UI, além de um ambiente reproduzível com Docker.',
  },
  modal: {
    close: 'Fechar imagem',
    previous: 'Imagem anterior',
    next: 'Próxima imagem',
  },
};

const en = {
  meta: {
    back: 'Back to projects',
    eyebrow: 'Case study · Pet care',
    title: 'TailTrack',
    headline: 'Effortless pet scheduling for customers and businesses.',
    summary: 'A full-stack application connecting pet owners to grooming and veterinary services while giving businesses an operational view of their schedule.',
    tags: ['Full-stack product', 'Responsive experience', 'Monorepo'],
    stats: [
      { value: '2', label: 'connected experiences' },
      { value: '3', label: 'service categories' },
      { value: '6', label: 'documented screens' },
    ],
    explore: 'Explore the product',
    imageAlt: 'TailTrack administration dashboard',
  },
  overview: {
    kicker: 'Product overview',
    title: 'The pet’s appointment and store operations in one workflow.',
    text: 'TailTrack reduces friction between booking a service and managing business capacity. Customers schedule one or more pets, track appointments, and maintain their profile; administrators control schedules, simultaneous limits, and public store information.',
    audiences: [
      {
        icon: 'client',
        label: 'For customers',
        title: 'Book multiple pets at once.',
        text: 'Name, species, service, date, and time come together in a direct flow, followed by an overview of upcoming appointments.',
      },
      {
        icon: 'business',
        label: 'For businesses',
        title: 'See the day’s capacity.',
        text: 'The operational schedule organizes times, owners, pets, and services, including walk-ins and available limits per category.',
      },
    ],
  },
  capabilities: {
    kicker: 'Core deliveries',
    title: 'Everything the daily routine needs.',
    items: [
      { title: 'Multi-pet booking', text: 'More than one animal can be included in the same request.' },
      { title: 'Customer schedule', text: 'Upcoming services, number of pets, status, and actions on one screen.' },
      { title: 'Daily dashboard', text: 'Time-based view with occupancy, owner, pet, species, and service.' },
      { title: 'Configurable capacity', text: 'Independent simultaneous limits for baths, grooming, and appointments.' },
      { title: 'Business days', text: 'Simple configuration of the business’s weekly availability.' },
      { title: 'Store profile', text: 'Logo, public information, WhatsApp, admin email, and account security.' },
    ],
  },
  workflow: {
    kicker: 'Main journey',
    title: 'From the pet owner to the store schedule.',
    items: [
      { number: '01', title: 'Identification', text: 'The customer signs in with email or phone.' },
      { number: '02', title: 'Booking', text: 'Adds pets, chooses services, and defines the time.' },
      { number: '03', title: 'Tracking', text: 'Reviews appointments and their current statuses.' },
      { number: '04', title: 'Operations', text: 'The store receives everything organized by time and capacity.' },
    ],
  },
  gallery: {
    kicker: 'Product in action',
    title: 'Two perspectives, one synchronized schedule.',
    intro: 'The gallery covers both the customer experience and administration dashboard. Click any image to enlarge it.',
    groups: [
      {
        title: 'Customer experience',
        description: 'Access, new bookings, and monitoring scheduled services.',
        images: [
          { file: 'Screenshot_1.png', title: 'TailTrack access', caption: 'Sign in with email or phone, ready for everyday WhatsApp contact.' },
          { file: 'Screenshot_2.png', title: 'New booking', caption: 'Register multiple pets with species, service, date, and time.' },
          { file: 'Screenshot_3.png', title: 'My appointments', caption: 'Upcoming commitments, services, and statuses gathered for the owner.' },
        ],
      },
      {
        title: 'Business management',
        description: 'Daily occupancy, service capacity, and store information controls.',
        images: [
          { file: 'Screenshot_4.png', title: 'Operations dashboard', caption: 'Daily schedule by time with capacity and appointment details.', featured: true },
          { file: 'Screenshot_5.png', title: 'Settings', caption: 'Simultaneous limits by service and weekly business days.' },
          { file: 'Screenshot_6.png', title: 'Store profile', caption: 'Public identity, contact channels, and password updates.' },
        ],
      },
    ],
  },
  closing: {
    label: 'Project stack',
    title: 'A full-stack foundation ready to evolve.',
    text: 'TailTrack is organized as a monorepo, combining the strength of the .NET ecosystem with a React interface built using Vite and Chakra UI, plus a reproducible Docker environment.',
  },
  modal: {
    close: 'Close image',
    previous: 'Previous image',
    next: 'Next image',
  },
};

export const tailTrackProject = {
  pt: { ...pt, ...shared },
  en: { ...en, ...shared },
};
