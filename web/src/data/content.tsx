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
        button: {
            label: "Fale com a gente",
            href: "https://api.whatsapp.com/send?phone=5516993890207"
        }
    },

    // -------------------------
    // SEÇÃO 1: HERO
    // -------------------------
    hero: {
        badge: "Do insight.<br />ao resultado.",
        title: (
            <>
                Alcance Múltiplo.<br />
                Soluções Únicas. <span className="align-top text-2xl font-light text-gray-400 font-sans">*</span>
            </>
        ),
        description: (
            <>
                Transformando desafios de mercado em resultados tangíveis. <span className="text-coral">Inteligência estratégica</span>, agilidade e criatividade assertiva para marcas que <span className="text-magenta">desejam destacar-se no mercado</span>.
            </>
        ),
        buttons: {
            primary: {
                label: "Vamos Conversar?",
                href: "https://api.whatsapp.com/send?phone=5516993890207"
            },
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
            label: "Nossas redes",
            links: {
                instagram: "https://www.instagram.com/agenciscomunicacao",
                facebook: "https://www.facebook.com/agenciscomunicacao",
                linkedin: "https://www.linkedin.com/company/agencis-comunica%C3%A7%C3%A3o",
                whatsapp: "https://api.whatsapp.com/send?phone=5516993890207"
            }
        },
        cards: {
            sectionSymbol: "*",
            sectionHint: "O asterisco é só para te avisar: Fórmulas prontas não têm lugar aqui.", // Traduzido
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
            },
            card4: {
                number: "04",
                title: "Expertise no Offline —",
                description: "Somos calejados na comunicação tangível. Dominamos a excelência da produção gráfica, editorial e OOH, garantindo que o impacto da sua marca no mundo físico tenha a mesma precisão, acabamento e qualidade técnica de um projeto digital de elite."
            },
            card5: {
                number: "05",
                title: "Viciados no Novo —",
                description: "Nossa curiosidade é inesgotável. De Inteligência Artificial a Motion Design e estratégias de performance, estamos na vanguarda das tendências para garantir que sua marca lidere as conversas digitais e utilize as ferramentas mais avançadas do mercado hoje."
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
            p1: "Cases de",
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
                description: "Crescimento 100% orgânico. | Visibilidade Institucional",
                image: "/images/img_abrapa.webp"
            },
            {
                tags: ["Varejo", "Branding"],
                title: "Nessa Distribuidora",
                description: "Posicionamento Consolidado. | Branding Completo",
                image: "/images/img_nessa.webp"
            },
            {
                tags: ["Agronegócio", "Internacional"],
                title: "ABIEC",
                description: "Impacto Visual & Informação. | Visibilidade Internacional",
                image: "/images/img_abiec.webp"
            }
        ],
        quotes: [
            {
                p1: "A equipe da Agencis não apenas desenhou nossa marca; eles ",
                h1: "redefiniram nossa presença no mercado",
                p2: " de forma estratégica.",
                author: "Parceiro ABRAPA",
                role: "Setor Agronegócio",
                avatar: "/images/avatar-1.jpg"
            },
            {
                p1: "A equipe da Agencis ",
                h1: "não apenas desenhou nossa marca",
                p2: "; eles redefiniram nossa presença no mercado de forma visual e estratégica.",
                author: "João Marcelo Sarrassini",
                role: "CEO Nessa Distribuidora",
                avatar: "/images/joao_nessa.webp"
            },
            {
                p1: "Design que traduziu nossa ",
                h1: "identidade com precisão",
                p2: ", atraindo visitantes e reforçando a imagem do Brazilian Beef em escala global.",
                author: "Bruno Guzzo",
                role: "Comunicação da ABIEC",
                avatar: "/images/bruno_abiec.webp"
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
                title: <>Branding &amp;<br />Identidade</>,
                subtitle: "Lumi Pizza",
                image: "/images/home_lumi_pizza.webp"
            },
            {
                icon: "play_circle",
                title: <>Nova linha,<br />nova embalagem</>,
                subtitle: "Nafta Brasil",
                image: "/images/vid_nafta.webp",
                video: "/images/vid_nafta.mp4"
            },
            {
                icon: "auto_awesome",
                title: <>Branding &amp;<br />Identidade</>,
                subtitle: "Arroyo",
                image: "/images/home_arroyo.webp",
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
                title: "Inteligência Estratégica —",
                tags: ["Análise de Dados", "Rotas de Impacto"],
                image: "/images/serv_1.jpg",
                description: {
                    p1: "Não usamos fórmulas prontas. Analisamos dados e o seu mercado para desenhar ",
                    h1: "rotas seguras",
                    p2: " e de alto impacto."
                },
                buttonText: "Saiba mais"
            },
            {
                number: "02.",
                title: "Agilidade Assertiva —",
                tags: ["Rapidez", "Foco no ROI"],
                image: "/images/serv_2.jpg",
                description: {
                    p1: "O mercado não espera por fórmulas lentas. Executamos com rapidez e ",
                    h1: "precisão cirúrgica",
                    p2: ", adaptando estratégias em tempo real para garantir que sua marca nunca perca o foco no ROI e nos resultados."
                },
                buttonText: "Saiba mais"
            },
            {
                number: "03.",
                title: "Comunicação 360º —",
                tags: ["Online", "Offline"],
                image: "/images/serv_3.jpg",
                description: {
                    p1: "Do pixel à impressão, da estratégia à conversão. Integramos o marketing digital à ",
                    h1: "excelência do offline",
                    p2: " para cuidar de cada ponto de contato da sua marca, garantindo uma presença única, coerente e de alto impacto."
                },
                buttonText: "Saiba mais"
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
                "Telefone: 16 3289-1573"
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
