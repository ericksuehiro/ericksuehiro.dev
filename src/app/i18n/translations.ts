export type Locale = "en" | "pt";

const translations = {
  en: {
    // Header
    nav: {
      projects: "Projects",
      utils: "Utils",
    },

    // Hero
    hero: {
      label: "Software Engineer",
      roles: ["Full Stack Developer", "Frontend", "Backend", "Problem Solver"],
      bio: "Building robust digital experiences with clean code and modern technologies. Focused on performance, scalability, and craft.",
      scroll: "Scroll",
    },

    // Journey
    journey: {
      label: "Experience",
      title: "My Journey",
      experiences: [
        {
          company: "Santander",
          period: "2022 — Present",
          role: "Developer",
          description:
            "Joined as a backend developer specializing in Java microservices with Spring. Transitioned to front-end development, delivering solutions with Angular as the primary framework.",
        },
        {
          company: "Accenture",
          period: "2021 — 2022",
          role: "Analyst",
          description:
            "Backend developer focused on Java microservices using Camel and Spring. Led the migration from IIB to Camel, ensuring seamless transition and improved performance.",
        },
      ],
    },

    // Projects
    projects: {
      label: "Portfolio",
      title: "Projects",
      description: "Things I've built and contributed to.",
      moreComingSoon: "More coming soon",
      items: [
        {
          title: "CareerUp.me",
          description:
            "A platform designed to help professionals level up their careers with smart tools and resources for job searching, resume building, and interview preparation.",
        },
        {
          title: "ericksuehiro.dev",
          description:
            "My personal portfolio website, built from scratch to showcase my journey, skills, and projects. Features animated gradients, scroll-based animations, and a clean modern design.",
        },
      ],
    },

    // Utils
    utils: {
      label: "Toolbox",
      title: "Utils",
      description: "Free tools to make your life easier. Everything runs in your browser.",
      moreComingSoon: "More tools coming soon",
      pdfToText: {
        title: "PDF to Text",
        description: "Extract text content from PDF files instantly. 100% client-side — your files never leave your browser.",
        dropHere: "Drop your PDF here",
        dragOrClick: "Drag & drop a PDF or click to browse",
        localOnly: "Your file is processed locally and never uploaded",
        processing: "Processing",
        invalidFile: "Please drop a valid PDF file.",
        failed: "Failed to process PDF",
        copyAll: "Copy all",
        copied: "Copied",
        tryAgain: "Try again",
        newFile: "New file",
      },
      htmlPreview: {
        title: "HTML Preview",
        description: "Write HTML code and see it rendered in real time. Perfect for quick prototyping and testing.",
        placeholder: "Type your HTML here...",
        preview: "Preview",
        code: "Code",
      },
      textDiff: {
        title: "Text Diff",
        description: "Compare two texts and instantly see the differences highlighted. Great for code reviews and document comparison.",
        original: "Original",
        modified: "Modified",
        originalPlaceholder: "Paste original text here...",
        modifiedPlaceholder: "Paste modified text here...",
        added: "Added",
        removed: "Removed",
        unchanged: "Unchanged",
        noDifferences: "No differences found",
        compare: "Compare",
      },
      apiTester: {
        title: "API Tester",
        description: "Test HTTP requests directly from your browser. Like Postman, but lightweight and instant.",
        url: "URL",
        urlPlaceholder: "https://api.example.com/endpoint",
        send: "Send",
        sending: "Sending...",
        headers: "Headers",
        body: "Body",
        response: "Response",
        status: "Status",
        time: "Time",
        size: "Size",
        headerKey: "Key",
        headerValue: "Value",
        addHeader: "Add header",
        copyAsCurl: "Copy as cURL",
        copied: "Copied!",
        copyResponse: "Copy",
        noResponse: "Send a request to see the response",
        error: "Request failed",
      },
    },

    // Footer
    footer: {
      role: "Software Engineer",
    },
  },

  pt: {
    // Header
    nav: {
      projects: "Projetos",
      utils: "Utils",
    },

    // Hero
    hero: {
      label: "Engenheiro de Software",
      roles: ["Full Stack Developer", "Frontend", "Backend", "Problem Solver"],
      bio: "Construindo experiências digitais robustas com código limpo e tecnologias modernas. Focado em performance, escalabilidade e qualidade.",
      scroll: "Scroll",
    },

    // Journey
    journey: {
      label: "Experiência",
      title: "Minha Jornada",
      experiences: [
        {
          company: "Santander",
          period: "2022 — Presente",
          role: "Desenvolvedor",
          description:
            "Entrei como desenvolvedor backend especializado em microsserviços Java com Spring. Fiz a transição para desenvolvimento front-end, entregando soluções com Angular como framework principal.",
        },
        {
          company: "Accenture",
          period: "2021 — 2022",
          role: "Analista",
          description:
            "Desenvolvedor backend focado em microsserviços Java usando Camel e Spring. Liderei a migração de IIB para Camel, garantindo uma transição suave e melhor performance.",
        },
      ],
    },

    // Projects
    projects: {
      label: "Portfólio",
      title: "Projetos",
      description: "Coisas que eu construí e contribuí.",
      moreComingSoon: "Mais em breve",
      items: [
        {
          title: "CareerUp.me",
          description:
            "Uma plataforma projetada para ajudar profissionais a evoluírem suas carreiras com ferramentas inteligentes e recursos para busca de emprego, criação de currículo e preparação para entrevistas.",
        },
        {
          title: "ericksuehiro.dev",
          description:
            "Meu site pessoal de portfólio, construído do zero para mostrar minha jornada, habilidades e projetos. Possui gradientes animados, animações baseadas em scroll e um design moderno e limpo.",
        },
      ],
    },

    // Utils
    utils: {
      label: "Ferramentas",
      title: "Utils",
      description: "Ferramentas gratuitas para facilitar sua vida. Tudo roda no seu navegador.",
      moreComingSoon: "Mais ferramentas em breve",
      pdfToText: {
        title: "PDF para Texto",
        description: "Extraia o conteúdo de texto de arquivos PDF instantaneamente. 100% client-side — seus arquivos nunca saem do seu navegador.",
        dropHere: "Solte seu PDF aqui",
        dragOrClick: "Arraste e solte um PDF ou clique para buscar",
        localOnly: "Seu arquivo é processado localmente e nunca enviado",
        processing: "Processando",
        invalidFile: "Por favor, solte um arquivo PDF válido.",
        failed: "Falha ao processar PDF",
        copyAll: "Copiar tudo",
        copied: "Copiado",
        tryAgain: "Tentar novamente",
        newFile: "Novo arquivo",
      },
      htmlPreview: {
        title: "Preview HTML",
        description: "Escreva código HTML e veja renderizado em tempo real. Perfeito para prototipagem e testes rápidos.",
        placeholder: "Digite seu HTML aqui...",
        preview: "Preview",
        code: "Código",
      },
      textDiff: {
        title: "Comparar Textos",
        description: "Compare dois textos e veja as diferenças destacadas instantaneamente. Ótimo para revisões de código e comparação de documentos.",
        original: "Original",
        modified: "Modificado",
        originalPlaceholder: "Cole o texto original aqui...",
        modifiedPlaceholder: "Cole o texto modificado aqui...",
        added: "Adicionado",
        removed: "Removido",
        unchanged: "Sem alteração",
        noDifferences: "Nenhuma diferença encontrada",
        compare: "Comparar",
      },
      apiTester: {
        title: "API Tester",
        description: "Teste requisições HTTP direto do seu navegador. Como um Postman, mas leve e instantâneo.",
        url: "URL",
        urlPlaceholder: "https://api.example.com/endpoint",
        send: "Enviar",
        sending: "Enviando...",
        headers: "Headers",
        body: "Body",
        response: "Resposta",
        status: "Status",
        time: "Tempo",
        size: "Tamanho",
        headerKey: "Chave",
        headerValue: "Valor",
        addHeader: "Adicionar header",
        copyAsCurl: "Copiar como cURL",
        copied: "Copiado!",
        copyResponse: "Copiar",
        noResponse: "Envie uma requisição para ver a resposta",
        error: "Requisição falhou",
      },
    },

    // Footer
    footer: {
      role: "Engenheiro de Software",
    },
  },
} as const;

export type Translations = {
  nav: { projects: string; utils: string };
  hero: { label: string; roles: readonly string[]; bio: string; scroll: string };
  journey: {
    label: string;
    title: string;
    experiences: readonly { company: string; period: string; role: string; description: string }[];
  };
  projects: {
    label: string;
    title: string;
    description: string;
    moreComingSoon: string;
    items: readonly { title: string; description: string }[];
  };
  utils: {
    label: string;
    title: string;
    description: string;
    moreComingSoon: string;
    pdfToText: {
      title: string;
      description: string;
      dropHere: string;
      dragOrClick: string;
      localOnly: string;
      processing: string;
      invalidFile: string;
      failed: string;
      copyAll: string;
      copied: string;
      tryAgain: string;
      newFile: string;
    };
    htmlPreview: {
      title: string;
      description: string;
      placeholder: string;
      preview: string;
      code: string;
    };
    textDiff: {
      title: string;
      description: string;
      original: string;
      modified: string;
      originalPlaceholder: string;
      modifiedPlaceholder: string;
      added: string;
      removed: string;
      unchanged: string;
      noDifferences: string;
      compare: string;
    };
    apiTester: {
      title: string;
      description: string;
      url: string;
      urlPlaceholder: string;
      send: string;
      sending: string;
      headers: string;
      body: string;
      response: string;
      status: string;
      time: string;
      size: string;
      headerKey: string;
      headerValue: string;
      addHeader: string;
      copyAsCurl: string;
      copied: string;
      copyResponse: string;
      noResponse: string;
      error: string;
    };
  };
  footer: { role: string };
};

export default translations as Record<Locale, Translations>;
