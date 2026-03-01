import React from 'react';

// ==========================================
// ARQUIVO GERAL DE TEXTOS DA LANDING PAGE
// ==========================================
// Dica: Para textos que contêm estilos diferentes (como cores ou negrito), 
// estamos utilizando a sintaxe JSX (<> ... </>) para permitir a formatação rápida.
// Quando for atualizar, basta alterar os textos entre as tags HTML.

export const siteContent = {
    // -------------------------
    // GLOBAL NAVBAR
    // -------------------------
    navbar: {
        brand: "Agencis",
        links: [
            { label: "Home", href: "#" },
            { label: "Portfólio", href: "#" },
            { label: "Soluções", href: "#" },
            { label: "Hub de Ideias", href: "#" }
        ],
        button: "Fale com a gente"
    },

    // -------------------------
    // SEÇÃO 1: HERO
    // -------------------------
    hero: {
        badge: "Do insight.<br />ao resultado.", 
        title: (
            <>
                Alcance Múltiplo.<br />
                Soluções Únicas. <span className="align-top text-2xl font-light text-gray-400">+</span>
            </>
        ),
        description: (
            <>
                Transformando desafios de mercado em resultados tangíveis. <span className="text-coral">Inteligência estratégica</span>, agilidade e criatividade assertiva para marcas que <span className="text-magenta">desejam liderar</span>.
            </>
        ),
        buttons: {
            primary: "Vamos Conversar?", // Atualizado: Sugestão aprovada
            secondary: "Nossos Cases",
            hint: "30 minutos para explorar múltiplas direções para sua marca." // Atualizado: Valor sobre brinde
        },
        stats: {
            experience: {
                value: "+8",
                label: "anos de mercado",
                description: "Experiência comprovada em múltiplas frentes."
            },
            retention: {
                label: "Visão Estratégica",
                value: "360º",
                description: "Inteligência integrada do branding à performance."
            },
            adBudget: {
                label: "Trabalhos Finalizados",
                value: "8.316", // Dado Real atualizado
                description: "OITO ANOS transformando desafios em resultados para +65 marcas líderes." // Dado Real atualizado
            }
        },
        social: {
            label: "Nossas redes"
        },
        cards: {
            sectionHint: "O que impulsiona o seu sucesso?", // Traduzido
            carouselHint: "Combinamos estratégia, design e cultura para construir soluções que impactam e entregam resultados reais.", // Traduzido
            card1: {
                number: "01",
                title: "Fluxo Estruturado e Olho no Olho —", // Traduzido
                description: "em cada etapa do projeto."
            },
            card2: {
                number: "02",
                title: <>Economia de <span className="text-magenta font-bold">Inteligência</span>, sem retrabalho</>, // Adaptado
                description: "Como um hub 360º, eliminamos a necessidade de múltiplos fornecedores. Uma equipe, múltiplas soluções."
            },
            card3: {
                number: "03",
                title: "Sem Fórmulas Prontas — apenas o que seu negócio realmente precisa." // Traduzido
            }
        }
    },


    // -------------------------
    // SEÇÃO 2: MANIFESTO
    // -------------------------
    manifesto: {
        badge: "QUEM SOMOS",
        title: {
            p1: "A",
            h1: "Tecnologia",
            p2: "Conecta.",
            p3: "O",
            h2: "Relacionamento",
            p4: "Transforma."
        },
        paragraph: {
            p1: "Na Agencis, acreditamos que a base de qualquer grande projeto é a",
            h1: "confiança",
            p2: ". Nosso maior indicador de sucesso não está nas planilhas, mas no atendimento consultivo,",
            h2: "próximo e transparente",
            p3: ". Valorizamos a parceria genuína e o compromisso do",
            h3: "olho no olho",
            p4: "."
        },
        since: "DESDE 2018",
        button: "Conheça Nossa Cultura"
    },

    // -------------------------
    // SEÇÃO 3: PORTFÓLIO (CASES)
    // -------------------------
    cases: {
        badge: "Nosso Portfólio",
        title: {
            p1: "Casos de",
            h1: "Sucesso"
        },
        description: "Construímos produtos e marcas que movem o mercado. Do agronegócio ao varejo, entregamos impacto.",
        reviewCard: {
            title: "Parceria Real",
            subtitle: "Atendimento consultivo e próximo,<br />o verdadeiro 'olho no olho'.",
            ratingLabel: "Avaliação de satisfação"
        },
        button: "EXPLORAR PROJETOS",
        projects: [
            {
                tags: ["Agronegócio", "Institucional"],
                title: "ABRAPA",
                description: "Crescimento 100% orgânico. | Visibilidade Institucional"
            },
            {
                tags: ["Varejo", "Branding"],
                title: "Nessa Distribuidora",
                description: "Posicionamento Consolidado. | Branding Completo"
            },
            {
                tags: ["Agronegócio", "Internacional"],
                title: "ABIEC",
                description: "Impacto Visual & Informação. | Visibilidade Internacional"
            }
        ],
        quotes: [
            {
                p1: "A equipe da Agencis não apenas desenhou nossa marca; eles ",
                h1: "redefiniram nossa presença no mercado",
                p2: " de forma estratégica.",
                author: "Parceiro ABRAPA",
                role: "Setor Agronegócio",
            },
            {
                p1: "Precisávamos de ",
                h1: "agilidade e assertividade",
                p2: ". A Agencis entregou uma estratégia que sustenta nosso crescimento sem perder a essência.",
                author: "Parceiro Nessa",
                role: "Varejo",
            }
        ]
    },

    // -------------------------
    // SEÇÃO 4: DESTAQUES PORTFÓLIO
    // -------------------------
    portfolioHighlights: {
        title: (
            <>
                Resultados<br />que Falam<br />por Nós.
            </>
        ),
        subtitle: (
            <>
                O que impulsiona <span className="text-[#ff6b6b] italic font-normal">o seu</span>
            </>
        ),
        block2Subtitle: "sucesso?",
        items: [
            {
                badge: "Service 01",
                icon: "terminal",
                title: <>Ecossistemas<br />Digitais</>,
                subtitle: "Experiência e Resultado",
                description: "Do branding à conversão, criamos plataformas focadas em performance.",
                linkText: "VER PROJETOS"
            },
            {
                icon: "auto_awesome",
                title: <>Branding &amp;<br />Identity</>,
                subtitle: "Meaning Visualized"
            },
            {
                title: "Digital Marketing",
                tags: ["SMM", "Ads", "Email"],
                icon: "trending_up"
            },
            {
                icon: "wifi_tethering",
                title: "Agencis",
                description: <>We don&apos;t believe in <span className="text-white font-normal">one-size-fits-all solutions.</span> You bring the request — we bring the mix of tools that <span className="text-[#ff6b6b] italic font-normal">will actually work.</span></>,
                linkText: "VER PROJETOS",
                smallText: <>Estratégia sob Medida<br />Desde 2018</>
            },
            {
                icon: "edit_note",
                title: <>Creative &amp;<br />Copywriting</>,
                description: "Texts and ideas that convert interest into business."
            },
            {
                description: <>Você não precisa de tudo — <span className="text-gray-300 border-b border-[#e82c89]">apenas das coisas certas.</span></>
            },
            {
                icon: "rocket_launch",
                title: "Launch",
                subtitle: "Full Cycle"
            }
        ]
    },

    // -------------------------
    // SEÇÃO 5: POR QUE A AGENCIS? (SERVIÇOS)
    // -------------------------
    servicos: {
        badge: "NOSSOS SERVIÇOS",
        title: {
            p1: "Por que a ",
            h1: "Agencis?"
        },
        sectionNumber: "04",
        items: [
            {
                number: "01.",
                title: "Inteligência Estratégica",
                tags: ["Análise de Dados", "Rotas de Impacto"],
                description: {
                    p1: "Não usamos fórmulas prontas. Analisamos dados e o seu mercado para desenhar ",
                    h1: "rotas seguras",
                    p2: " e de alto impacto."
                },
                buttonText: "Explore Now"
            },
            {
                number: "02.",
                title: "Agilidade Assertiva",
                tags: ["Rapidez", "Foco no ROI"]
            },
            {
                number: "03.",
                title: "Comunicação 360",
                tags: ["Online", "Offline"]
            }
        ]
    },

    // -------------------------
    // SEÇÃO 6: CTA E RODAPÉ
    // -------------------------
    ctaFooter: {
        cta: {
            title: {
                p1: "Qual é o",
                p2: "próximo passo da sua marca?",
                plus: "+"
            },
            button: "Vamos criar o próximo?",
            description: "A tecnologia conecta. O relacionamento transforma.",
            stats: {
                label: "Trabalhos finalizados",
                value: "98%",
                metric: "+8 anos",
                avatarsLabel: "+65 parceiros"
            }
        },
        footer: {
            brandDescription: "Transformando desafios de mercado em resultados tangíveis através de inteligência estratégica, agilidade e criatividade assertiva.",
            contactTitle: "Contato",
            contactInfo: [
                "EDIFÍCIO NEO RIBEIRÃO",
                "Av. Maria Jesus de Condeixa, 600 - Sala 735",
                "Ribeirão Preto/SP",
                "Telefone: 16 3289-1573",
                "E-mail: contato@agencis.com.br"
            ],
            policiesTitle: "Políticas & News",
            policiesLinks: ["Termos de Uso", "Política de Privacidade"],
            form: {
                nameLabel: "NOME",
                namePlaceholder: "Seu nome completo",
                emailLabel: "E-MAIL",
                emailPlaceholder: "seu@email.com",
                subjectLabel: "ASSUNTO",
                subjectPlaceholder: "Como podemos ajudar?",
                messageLabel: "MENSAGEM",
                messagePlaceholder: "Conte-nos sobre o seu projeto...",
                submitButton: "ENVIAR MENSAGEM"
            }
        }
    }
};
