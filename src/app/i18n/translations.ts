export type Locale = "en" | "pt";

const translations = {
  en: {
    // Header
    nav: {
      projects: "Projects",
      utils: "Utils",
      home: "Home",
      language: "Português",
    },

    // Hero
    hero: {
      kicker: "Software engineer · Brazil",
      now: "Developer at Santander",
      statement:
        "Developer at Santander since 2022: Java and Spring on the backend, Angular on the front. Outside the bank I build products end to end — AI résumés, D&D character sheets, a coding school and daily K-pop games.",
    },

    sections: {
      work: "Selected work",
      experience: "Experience",
      tools: "Tools",
      toolsNote: "Small utilities that run entirely in your browser.",
      seeAll: "All projects",
      visit: "Visit",
    },

    // Journey
    journey: {
      label: "Experience",
      title: "Experience",
      experiences: [
        {
          company: "Santander",
          period: "2022 — now",
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
      description: "Things I've designed, built and shipped — mostly on my own, end to end.",
      moreComingSoon: "More coming soon",
      items: [
        {
          id: "kguess",
          title: "K-GUESS",
          kind: "Game · 2026",
          description:
            "Nine daily K-pop guessing games: name the MV from its frames, the song from its intro, the idol behind the effect, and more. Every win opens a pack of collectible photocards in a 3D opening scene. The server owns the game, so answers never reach the browser. Available in Portuguese, English and Spanish.",
        },
        {
          id: "careerup",
          title: "CareerUp.me",
          kind: "SaaS",
          description:
            "A platform designed to help professionals level up their careers with smart tools and resources for job searching, resume building, and interview preparation.",
        },
        {
          id: "grimorio",
          title: "Grimório RPG",
          kind: "RPG platform",
          description:
            "A D&D 5e character sheet and session management platform with an integrated AI assistant. Create characters, form groups, run sessions with DM tools, and get real-time help with rules, spells, and mechanics.",
        },
        {
          id: "aprendeai",
          title: "AprendeAi",
          kind: "Education",
          description:
            "An AI-powered programming education platform that creates personalized learning paths. Features adaptive study plans, integrated code challenges with automated testing, and a real-time AI tutor.",
        },
        {
          id: "site",
          title: "ericksuehiro.dev",
          kind: "This site",
          description:
            "This site. Next.js and the Geist typeface, real screenshots of the work, and a toolbox of utilities that run in the browser.",
        },
      ],
    },

    // Utils
    utils: {
      label: "Toolbox",
      title: "Utils",
      description: "Free tools to make your life easier. Everything runs in your browser.",
      moreComingSoon: "More tools coming soon",
      favorite: "Favorite",
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
      base64: {
        title: "Base64",
        description: "Encode and decode Base64 strings and images. Everything runs locally in your browser.",
        encode: "Encode",
        decode: "Decode",
        text: "Text",
        image: "Image",
        inputPlaceholder: "Type or paste text here...",
        base64Placeholder: "Paste Base64 string here...",
        dropImage: "Drop an image here",
        dragOrClick: "Drag & drop an image or click to browse",
        output: "Output",
        copy: "Copy",
        copied: "Copied!",
        download: "Download",
        clear: "Clear",
        invalidBase64: "Invalid Base64 string",
        invalidImage: "Please drop a valid image file",
        noOutput: "Enter text or an image to see the Base64 output",
      },
    },

    // Footer
    footer: {
      role: "Software Engineer",
      cta: "Let's talk.",
      ctaText: "The quickest way to reach me is LinkedIn.",
      built: "Designed and built by hand.",
    },
  },

  pt: {
    // Header
    nav: {
      projects: "Projetos",
      utils: "Utils",
      home: "Início",
      language: "English",
    },

    // Hero
    hero: {
      kicker: "Engenheiro de software · Brasil",
      now: "Desenvolvedor no Santander",
      statement:
        "Desenvolvedor no Santander desde 2022: Java e Spring no backend, Angular no front. Fora do banco, construo produtos de ponta a ponta — currículos com IA, fichas de D&D, uma escola de programação e jogos diários de K-pop.",
    },

    sections: {
      work: "Trabalhos selecionados",
      experience: "Experiência",
      tools: "Ferramentas",
      toolsNote: "Utilitários pequenos que rodam inteiros no seu navegador.",
      seeAll: "Todos os projetos",
      visit: "Visitar",
    },

    // Journey
    journey: {
      label: "Experiência",
      title: "Experiência",
      experiences: [
        {
          company: "Santander",
          period: "2022 — hoje",
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
      description: "Coisas que eu desenhei, construí e coloquei no ar — quase sempre sozinho, de ponta a ponta.",
      moreComingSoon: "Mais em breve",
      items: [
        {
          id: "kguess",
          title: "K-GUESS",
          kind: "Jogo · 2026",
          description:
            "Nove jogos diários de K-pop: adivinhe o MV pelos frames, a música pelo começo, o idol escondido atrás do efeito e mais. Cada acerto abre um pacote de photocards colecionáveis numa abertura em 3D. O servidor é o dono do jogo, então a resposta nunca chega ao navegador. Em português, inglês e espanhol.",
        },
        {
          id: "careerup",
          title: "CareerUp.me",
          kind: "SaaS",
          description:
            "Uma plataforma projetada para ajudar profissionais a evoluírem suas carreiras com ferramentas inteligentes e recursos para busca de emprego, criação de currículo e preparação para entrevistas.",
        },
        {
          id: "grimorio",
          title: "Grimório RPG",
          kind: "Plataforma de RPG",
          description:
            "Uma plataforma de fichas de personagem e gerenciamento de sessões para D&D 5e com assistente de IA integrado. Crie personagens, forme grupos, conduza sessões com ferramentas de mestre e receba ajuda em tempo real com regras, magias e mecânicas.",
        },
        {
          id: "aprendeai",
          title: "AprendeAi",
          kind: "Educação",
          description:
            "Uma plataforma de ensino de programação com IA que cria trilhas de aprendizado personalizadas. Possui planos de estudo adaptativos, desafios de código integrados com testes automatizados e um tutor de IA em tempo real.",
        },
        {
          id: "site",
          title: "ericksuehiro.dev",
          kind: "Este site",
          description:
            "Este site. Next.js e a fonte Geist, prints de verdade dos projetos e uma caixa de ferramentas que roda no navegador.",
        },
      ],
    },

    // Utils
    utils: {
      label: "Ferramentas",
      title: "Utils",
      description: "Ferramentas gratuitas para facilitar sua vida. Tudo roda no seu navegador.",
      moreComingSoon: "Mais ferramentas em breve",
      favorite: "Favoritar",
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
      base64: {
        title: "Base64",
        description: "Codifique e decodifique strings e imagens em Base64. Tudo roda localmente no seu navegador.",
        encode: "Codificar",
        decode: "Decodificar",
        text: "Texto",
        image: "Imagem",
        inputPlaceholder: "Digite ou cole o texto aqui...",
        base64Placeholder: "Cole a string Base64 aqui...",
        dropImage: "Solte uma imagem aqui",
        dragOrClick: "Arraste e solte uma imagem ou clique para buscar",
        output: "Saída",
        copy: "Copiar",
        copied: "Copiado!",
        download: "Baixar",
        clear: "Limpar",
        invalidBase64: "String Base64 inválida",
        invalidImage: "Por favor, solte um arquivo de imagem válido",
        noOutput: "Digite texto ou uma imagem para ver a saída em Base64",
      },
    },

    // Footer
    footer: {
      role: "Engenheiro de Software",
      cta: "Vamos conversar.",
      ctaText: "O jeito mais rápido de falar comigo é pelo LinkedIn.",
      built: "Desenhado e construído à mão.",
    },
  },
} as const;

export type Translations = {
  nav: { projects: string; utils: string; home: string; language: string };
  hero: { kicker: string; now: string; statement: string };
  sections: { work: string; experience: string; tools: string; toolsNote: string; seeAll: string; visit: string };
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
    items: readonly { id: string; title: string; kind: string; description: string }[];
  };
  utils: {
    label: string;
    title: string;
    description: string;
    moreComingSoon: string;
    favorite: string;
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
    base64: {
      title: string;
      description: string;
      encode: string;
      decode: string;
      text: string;
      image: string;
      inputPlaceholder: string;
      base64Placeholder: string;
      dropImage: string;
      dragOrClick: string;
      output: string;
      copy: string;
      copied: string;
      download: string;
      clear: string;
      invalidBase64: string;
      invalidImage: string;
      noOutput: string;
    };
  };
  footer: { role: string; cta: string; ctaText: string; built: string };
};

export default translations as Record<Locale, Translations>;
