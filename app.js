/* VIEIRA'S GYM APPLICATION LOGIC */

document.addEventListener('DOMContentLoaded', () => {

    let currentFilter = 'all';

    // Inline pricingFaqs fallback to guarantee availability
    const pricingFaqsFallback = [
        {
            id: "family-plans",
            question: {
                pt: "Planos Familiares — Mensal Pacote Prime",
                en: "Family Plans — Monthly Prime Package"
            },
            answer: {
                pt: `
                    <p>O Pacote Prime familiar está disponível para grupos de 2 a 5 pessoas:</p>
                    <ul>
                        <li>2 pessoas: <strong>7.800 MT</strong> por mês</li>
                        <li>3 pessoas: <strong>11.600 MT</strong> por mês</li>
                        <li>4 pessoas: <strong>15.500 MT</strong> por mês</li>
                        <li>5 pessoas: <strong>19.300 MT</strong> por mês</li>
                    </ul>
                    <p>Este plano corresponde ao Pacote Prime e permite o acesso às modalidades e horários disponíveis, de acordo com as condições do ginásio.</p>
                `,
                en: `
                    <p>The family Prime Package is available for groups of 2 to 5 people:</p>
                    <ul>
                        <li>2 people: <strong>7,800 MT</strong> per month</li>
                        <li>3 people: <strong>11,600 MT</strong> per month</li>
                        <li>4 people: <strong>15,500 MT</strong> per month</li>
                        <li>5 people: <strong>19,300 MT</strong> per month</li>
                    </ul>
                    <p>This plan corresponds to the Prime Package and allows access to the available disciplines and schedules, according to the gym conditions.</p>
                `
            }
        },
        {
            id: "registration",
            question: {
                pt: "Processo de Inscrição e Documentos",
                en: "Registration Process & Documents"
            },
            answer: {
                pt: `
                    <p>A inscrição tem o custo de <strong>1.000 MT</strong>.</p>
                    <p>Para concluir o processo de inscrição, o novo membro deve apresentar:</p>
                    <ul>
                        <li>duas fotografias;</li>
                        <li>uma cópia do Bilhete de Identidade.</li>
                    </ul>
                    <p>Após a inscrição, o membro poderá escolher o pacote ou modalidade mais adequada às suas necessidades.</p>
                `,
                en: `
                    <p>Registration costs <strong>1,000 MT</strong>.</p>
                    <p>To complete the registration process, the new member must submit:</p>
                    <ul>
                        <li>two passport photos;</li>
                        <li>a copy of the Identity Card (B.I.).</li>
                    </ul>
                    <p>After registration, the member can choose the package or discipline best suited to their needs.</p>
                `
            }
        },
        {
            id: "discounts",
            question: {
                pt: "Descontos de Pagamento Antecipado — Pacote Prime",
                en: "Prepayment Discounts — Prime Package"
            },
            answer: {
                pt: `
                    <p>O Pacote Prime oferece condições especiais para pagamentos antecipados:</p>
                    <ul>
                        <li>pagamento trimestral: <strong>11.000 MT</strong>;</li>
                        <li>pagamento semestral: <strong>20.000 MT</strong>;</li>
                        <li>pagamento anual: <strong>35.000 MT</strong>.</li>
                    </ul>
                    <p>Estes valores aplicam-se ao Pacote Prime e permitem beneficiar de um preço reduzido em comparação com o pagamento mensal.</p>
                `,
                en: `
                    <p>The Prime Package offers special conditions for advance payments:</p>
                    <ul>
                        <li>quarterly payment: <strong>11,000 MT</strong>;</li>
                        <li>semiannual payment: <strong>20,000 MT</strong>;</li>
                        <li>annual payment: <strong>35,000 MT</strong>.</li>
                    </ul>
                    <p>These values apply to the Prime Package and allow you to benefit from a reduced price compared to the monthly payment.</p>
                `
            }
        },
        {
            id: "trial-passes",
            question: {
                pt: "Treino Experimental e Passes Diários",
                en: "Trial Training & Daily Passes"
            },
            answer: {
                pt: `
                    <p>No Vieira’s Gym, pode realizar um treino experimental ou adquirir um passe diário pelo valor de <strong>500 MT</strong>.</p>
                    <p>Também existe a opção de treino duas vezes por semana, em dias úteis, entre as 05:30 e as 16:00, pelo valor mensal de <strong>2.300 MT</strong>.</p>
                `,
                en: `
                    <p>Vieira’s Gym offers a trial session or daily pass for <strong>500 MT</strong>.</p>
                    <p>There is also the option of training twice a week, on weekdays, between 05:30 and 16:00, for a monthly fee of <strong>2,300 MT</strong>.</p>
                `
            }
        },
        {
            id: "monthly-packages",
            question: {
                pt: "Quais são os Pacotes Mensais Disponíveis?",
                en: "What Monthly Packages Are Available?"
            },
            answer: {
                pt: `
                    <ul>
                        <li><strong>Pacote Prime — 4.000 MT</strong><br>Acesso a todas as modalidades e horários disponíveis.</li>
                        <li><strong>Pacote Especial — 3.000 MT</strong><br>Acesso a duas modalidades, nos horários disponíveis.</li>
                        <li><strong>Pacote Básico Musculação — 2.500 MT</strong><br>Acesso a uma modalidade, com um horário fixo em dias úteis.</li>
                        <li><strong>Pacote Básico para Aulas de Grupo — 2.500 MT</strong><br>Acesso a uma modalidade, nos horários disponíveis entre as 05:30 e as 16:00.</li>
                        <li><strong>Aula de Grupo Especial — 3.000 MT</strong><br>Acesso a uma modalidade, nos horários disponíveis entre as 05:30 e as 20:00.</li>
                    </ul>
                `,
                en: `
                    <ul>
                        <li><strong>Prime Package — 4,000 MT</strong><br>Access to all available disciplines and schedules.</li>
                        <li><strong>Special Package — 3,000 MT</strong><br>Access to two disciplines, at available schedules.</li>
                        <li><strong>Basic Weight Training Package — 2,500 MT</strong><br>Access to one discipline, with a fixed schedule on weekdays.</li>
                        <li><strong>Basic Group Classes Package — 2,500 MT</strong><br>Access to one discipline, at available schedules between 05:30 and 16:00.</li>
                        <li><strong>Special Group Class — 3,000 MT</strong><br>Access to one discipline, at available schedules between 05:30 and 20:00.</li>
                    </ul>
                `
            }
        },
        {
            id: "available-disciplines",
            question: {
                pt: "Que Modalidades Estão Disponíveis?",
                en: "What Disciplines Are Available?"
            },
            answer: {
                pt: `
                    <p>As modalidades disponíveis incluem:</p>
                    <ul>
                        <li>Musculação</li>
                        <li>Calistenia</li>
                        <li>Treino funcional</li>
                        <li>Kickboxing</li>
                        <li>Taekwondo</li>
                        <li>Boxe</li>
                        <li>Defesa pessoal</li>
                    </ul>
                    <p>O curso de defesa pessoal requer um mínimo de quatro participantes.</p>
                `,
                en: `
                    <p>Available disciplines include:</p>
                    <ul>
                        <li>Weight Training</li>
                        <li>Calisthenics</li>
                        <li>Functional training</li>
                        <li>Kickboxing</li>
                        <li>Taekwondo</li>
                        <li>Boxing</li>
                        <li>Self-defense</li>
                    </ul>
                    <p>The self-defense course requires a minimum of four participants.</p>
                `
            }
        }
    ];

    function getDisciplineName(discipline, lang) {
        const names = {
            strength: { pt: "Musculação", en: "Weight Training" },
            kickboxing: { pt: "Kickboxing", en: "Kickboxing" },
            boxing: { pt: "Boxe", en: "Boxing" },
            taekwondo: { pt: "Taekwondo", en: "Taekwondo" },
            calisthenics: { pt: "Calistenia", en: "Calisthenics" },
            functional: { pt: "Treino Funcional", en: "Functional Training" },
            "self-defence": { pt: "Defesa Pessoal", en: "Self-Defense" }
        };
        return names[discipline] ? names[discipline][lang] : discipline;
    }

    const timetableRows = [
        {
            time: "05:30 - 20:00",
            monday: [{ name: "Musculação", discipline: "strength" }],
            tuesday: [{ name: "Musculação", discipline: "strength" }],
            wednesday: [{ name: "Musculação", discipline: "strength" }],
            thursday: [{ name: "Musculação", discipline: "strength" }],
            friday: [{ name: "Musculação", discipline: "strength" }],
            saturday: [{ name: "Musculação", discipline: "strength" }]
        },
        {
            time: "05:45 - 07:00",
            monday: [
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            tuesday: [],
            wednesday: [
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            thursday: [],
            friday: [
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            saturday: []
        },
        {
            time: "06:00 - 07:00",
            monday: [{ name: "Treino Funcional", discipline: "functional" }],
            tuesday: [{ name: "Calistenia", discipline: "calisthenics" }],
            wednesday: [{ name: "Treino Funcional", discipline: "functional" }],
            thursday: [{ name: "Calistenia", discipline: "calisthenics" }],
            friday: [
                { name: "Treino Funcional", discipline: "functional" },
                { name: "Calistenia", discipline: "calisthenics" }
            ],
            saturday: []
        },
        {
            time: "07:00 - 08:00",
            monday: [{ name: "Defesa Pessoal", discipline: "self-defence" }],
            tuesday: [{ name: "Treino Funcional", discipline: "functional" }],
            wednesday: [{ name: "Defesa Pessoal", discipline: "self-defence" }],
            thursday: [{ name: "Treino Funcional", discipline: "functional" }],
            friday: [],
            saturday: []
        },
        {
            time: "07:45 - 09:00",
            monday: [
                { name: "Taekwondo", discipline: "taekwondo" },
                { name: "Defesa Pessoal", discipline: "self-defence" }
            ],
            tuesday: [
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            wednesday: [
                { name: "Taekwondo", discipline: "taekwondo" },
                { name: "Defesa Pessoal", discipline: "self-defence" }
            ],
            thursday: [
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            friday: [
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Taekwondo", discipline: "taekwondo" },
                { name: "Boxe", discipline: "boxing" }
            ],
            saturday: [
                { name: "Calistenia", discipline: "calisthenics" },
                { name: "Treino Funcional", discipline: "functional" },
                { name: "Taekwondo", discipline: "taekwondo" },
                { name: "Defesa Pessoal", discipline: "self-defence" }
            ]
        },
        {
            time: "08:00 - 09:15",
            monday: [{ name: "Calistenia", discipline: "calisthenics" }],
            tuesday: [],
            wednesday: [{ name: "Calistenia", discipline: "calisthenics" }],
            thursday: [],
            friday: [{ name: "Calistenia", discipline: "calisthenics" }],
            saturday: []
        },
        {
            time: "09:00 - 10:15",
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ]
        },
        {
            time: "15:00 - 16:15",
            monday: [
                { name: "Treino Funcional", discipline: "functional" },
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            tuesday: [{ name: "Taekwondo", discipline: "taekwondo" }],
            wednesday: [
                { name: "Treino Funcional", discipline: "functional" },
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            thursday: [{ name: "Taekwondo", discipline: "taekwondo" }],
            friday: [
                { name: "Treino Funcional", discipline: "functional" },
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            saturday: []
        },
        {
            time: "16:00 - 17:15",
            monday: [{ name: "Taekwondo", discipline: "taekwondo" }],
            tuesday: [{ name: "Taekwondo", discipline: "taekwondo" }],
            wednesday: [{ name: "Taekwondo", discipline: "taekwondo" }],
            thursday: [{ name: "Taekwondo", discipline: "taekwondo" }],
            friday: [{ name: "Taekwondo", discipline: "taekwondo" }],
            saturday: []
        },
        {
            time: "17:00 - 18:15",
            monday: [],
            tuesday: [
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            wednesday: [],
            thursday: [
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            friday: [],
            saturday: []
        },
        {
            time: "17:15 - 18:15",
            monday: [{ name: "Treino Funcional", discipline: "functional" }],
            tuesday: [],
            wednesday: [{ name: "Treino Funcional", discipline: "functional" }],
            thursday: [{ name: "Treino Funcional", discipline: "functional" }],
            friday: [],
            saturday: []
        },
        {
            time: "18:15 - 19:45",
            monday: [
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            tuesday: [{ name: "Taekwondo", discipline: "taekwondo" }],
            wednesday: [
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            thursday: [{ name: "Taekwondo", discipline: "taekwondo" }],
            friday: [
                { name: "Taekwondo", discipline: "taekwondo" },
                { name: "Kickboxing", discipline: "kickboxing" },
                { name: "Boxe", discipline: "boxing" }
            ],
            saturday: []
        }
    ];


    /* ==========================================================================
       1. TRANSLATION DICTIONARY & STATE
       ========================================================================== */

    const translations = {
        pt: {
            nav_about: "Sobre",
            nav_programmes: "Modalidades",
            nav_timetable: "Horários",
            nav_pricing: "Preços",
            nav_contact: "Contacto",
            btn_trial: "Aula Experimental",
            hero_title: "FORÇA FÍSICA E RESILIÊNCIA MENTAL",
            hero_subtitle: "Treino disciplinado e acompanhamento profissional no centro de treinos de artes marciais referência em Maputo.",
            btn_hero_primary: "Marcar Aula Experimental",
            btn_hero_secondary: "Ver Horários",
            problem_tag: "O Desafio",
            problem_title: "O OBSTÁCULO ESTÁ NA MENTE.",
            problem_body: "Falta de consistência, rotinas genéricas e a ausência de uma verdadeira orientação profissional impedem-no de atingir o seu potencial. No Vieira's Gym, não vendemos apenas mensalidades. Oferecemos um caminho de disciplina, suor e superação. Aqui, o corpo segue a mente.",
            step_1_title: "O Problema",
            step_1_desc: "Acomodação, treinos sem rumo e falta de motivação travam a sua evolução física.",
            step_2_title: "O Guia",
            step_2_desc: "No Vieira's Gym, encontra o plano, a estrutura e a liderança de treinadores experientes.",
            step_3_title: "A Transformação",
            step_3_desc: "Resultados reais: um corpo mais forte, hábitos consolidados e mentalidade inabalável.",
            programmes_tag: "Modalidades de Elite",
            programmes_title: "ESCOLHA O SEU CAMINHO.",
            prog_martial_arts: "Artes Marciais",
            prog_martial_arts_desc: "Kickboxing, Taekwondo e Boxe. Foco na precisão técnica, autodefesa, flexibilidade e preparação competitiva. Treine sob a linhagem de campeões.",
            prog_strength: "Força & Calistenia",
            prog_strength_desc: "Musculação clássica e controle do peso corporal. Aumente a densidade muscular, força bruta e a mobilidade estrutural para preparar o corpo para qualquer desafio.",
            prog_performance: "Treino Funcional",
            prog_performance_desc: "Exercícios baseados nos movimentos primordiais (agachar, empurrar, puxar, saltar). Melhore o condicionamento cardiovascular, a queima de gordura e a agilidade atlética.",
            prog_cta: "Quero treinar",
            timetable_tag: "Agenda de Treinos",
            timetable_title: "HORÁRIOS DAS AULAS",
            filter_all: "Ver Todos",
            filter_kickboxing: "Kickboxing",
            filter_taekwondo: "Taekwondo",
            filter_boxing: "Boxe",
            filter_musculacao: "Musculação",
            filter_calistenia: "Calistenia",
            filter_funcional: "Treino Funcional",
            filter_defesa: "Defesa Pessoal",
            th_time: "Horário",
            th_mon: "2ª Feira",
            th_tue: "3ª Feira",
            th_wed: "4ª Feira",
            th_thu: "5ª Feira",
            th_fri: "6ª Feira",
            th_sat: "Sábado",
            gallery_tag: "Foco & Consistência",
            gallery_title: "DISCIPLINA EM AÇÃO",
            founder_tag: "Liderança",
            founder_title: "Fundador & Diretor Técnico",
            founder_credential: "Fundador da WAKO-Moçambique",
            founder_bio_p1: "Eduardo Delfim Vieira é uma das figuras mais respeitadas no cenário das artes marciais em Moçambique. Como fundador e principal impulsionador da WAKO-Moçambique (Associação Mundial de Organizações de Kickboxing), tem dedicado a sua vida à formação técnica, desenvolvimento desportivo de atletas de competição e consolidação da disciplina desportiva.",
            founder_bio_p2: "No Vieira's Gym, Eduardo canaliza décadas de experiência acumulada no tatame para criar um ambiente onde cada treino é guiado por consistência técnica e superação mental. A sua missão ultrapassa a preparação física: formar indivíduos resilientes, autoconfiantes e preparados para vencer dentro e fora do ginásio.",
            founder_gallery_title: "O FUNDADOR EM AÇÃO",
            proof_tag: "Prova Social",
            proof_title: "QUEM TREINA CONNOSCO",
            pricing_tag: "Subscrições",
            pricing_title: "MENSALIDADES POR PACOTES",
            price_basic: "Básico",
            price_prime: "Prime",
            price_special: "Especial",
            basic_f1: "1 Modalidade Fixa",
            basic_f2: "1 Horário Disponível",
            basic_f3: "Aulas de Grupo ou Musculação",
            basic_f4: "Acesso a Salas de Treino",
            prime_f1: "Todas as Modalidades Incluídas",
            prime_f2: "Todos os Horários Disponíveis",
            prime_f3: "Kickboxing, Taekwondo, Boxe",
            prime_f4: "Musculação e Treino Funcional",
            prime_f5: "Acesso Sem Limites a Todas as Salas",
            special_f1: "2 Modalidades à Escolha",
            special_f2: "2 Horários Flexíveis",
            special_f3: "Artes Marciais + Musculação/Funcional",
            special_f4: "Acesso às Salas de Treino Associadas",
            btn_choose: "Aderir ao Plano",
            accordion_title: "TERMOS E INFORMAÇÕES DETALHADAS",
            acc_family: "Planos Familiares (Mensal Pacote Prime)",
            acc_family_desc: "Treine em família com descontos progressivos no Pacote Prime:",
            tbl_members: "Membros",
            tbl_price: "Preço Total Mensal",
            acc_reg: "Processo de Inscrição e Documentos",
            acc_reg_desc: "Para efetivar a sua matrícula, a taxa é de 1.000 MT e deve entregar os seguintes documentos na receção do ginásio:",
            doc_1: "Duas (2) fotos tipo passe recentes.",
            doc_2: "Cópia legível do Bilhete de Identidade (B.I.) ou Passaporte válido.",
            acc_discount: "Descontos de Pagamento Antecipado (Pacote Prime)",
            acc_discount_desc: "Poupe até 13.000 MT ao optar por pagamentos de médio ou longo prazo com super desconto:",
            tbl_period: "Frequência",
            tbl_total: "Valor Total",
            tbl_saving: "Poupança Equivalente",
            term_tri: "Trimestral (3 meses)",
            term_sem: "Semestral (6 meses)",
            term_ann: "Anual (12 meses)",
            save_tri: "Poupe 1.000 MT",
            save_sem: "Poupe 4.000 MT",
            save_ann: "Poupe 13.000 MT",
            acc_trial: "Treino Experimental e Passes Diários",
            acc_trial_desc: "Quer experimentar o nosso ambiente de treino antes de se inscrever?",
            term_trial_label: "Treino experimental / Diária:",
            trial_conditions: "O valor do treino experimental pode ser deduzido na sua matrícula caso decida inscrever-se no próprio dia. Todos os treinos experimentais requerem agendamento prévio.",
            community_tag: "Espírito de Equipa",
            community_title: "CRESCEMOS JUNTOS",
            community_body: "No Vieira's Gym, a força reside na união. Não treinamos para competir uns com os outros, mas para elevar o espírito de todos. Aqui, o ego fica à porta. Apoiamos-nos mutuamente em cada soco, em cada agachamento, em cada exame de graduação e em cada treino finalizado. Esta não é apenas uma academia. É a sua comunidade.",
            btn_join_community: "Fazer parte da Família",
            location_tag: "Localização",
            location_title: "ONDE NOS ENCONTRAR",
            loc_address_title: "Endereço",
            loc_hours_title: "Horário de Funcionamento",
            loc_hours_week: "Segunda a Sexta: 05:30 – 20:00",
            loc_hours_sat: "Sábado: 05:30 – 12:00",
            loc_contacts_title: "Contactos Directos",
            btn_talk: "Falar Connosco",
            btn_maps: "Abrir no Maps",
            btn_directions: "Obter Direções",
            final_cta_title: "COMECE A MUDAR HOJE",
            final_cta_subtitle: "Diga não às desculpas inventadas pela sua mente. Junte-se a nós e treine com acompanhamento profissional.",
            btn_final_cta: "COMEÇAR AGORA",
            footer_slogan: "Disciplina cria campeões. Sucesso é o resultado de pequenos esforços diários.",
            footer_menu_title: "Menu",
            footer_social_title: "Redes Sociais",
            footer_rights: "Todos os direitos reservados.",
            price_visual_text: "FORÇA REAL. RESULTADOS REAIS.",
            proof_card_1_title: "Cerimónia de Premiação de Kickboxing",
            proof_card_1_desc: "Reconhecimento do mérito desportivo e dedicação dos nossos atletas.",
            proof_card_2_title: "Graduação de Cinto Negro",
            proof_card_2_desc: "O pináculo da disciplina e consistência técnica no Vieira's Gym.",
            proof_card_3_title: "Campeonato Provincial de Taekwondo",
            proof_card_3_desc: "Competição e superação: os nossos atletas a demonstrar foco no tatame.",
            proof_card_4_title: "Formação e Seminário Técnico",
            proof_card_4_desc: "Formação contínua para instrutores e monitores credenciados.",
            proof_card_5_title: "Equipa de Arbitragem e Juízes",
            proof_card_5_desc: "Garantia de integridade e profissionalismo em torneios oficiais.",
            proof_card_6_title: "Organização de Eventos WAKO",
            proof_card_6_desc: "Compromisso com o avanço das artes marciais em Moçambique."
        },
        en: {
            nav_about: "About",
            nav_programmes: "Programs",
            nav_timetable: "Schedule",
            nav_pricing: "Pricing",
            nav_contact: "Contact",
            btn_trial: "Trial Class",
            hero_title: "PHYSICAL STRENGTH & MENTAL RESILIENCE",
            hero_subtitle: "Disciplined training and professional coaching at Maputo's premier martial arts training center.",
            btn_hero_primary: "Book Trial Class",
            btn_hero_secondary: "View Schedule",
            problem_tag: "The Challenge",
            problem_title: "THE OBSTACLE IS IN YOUR MIND.",
            problem_body: "Lack of consistency, generic routines, and the absence of true professional guidance prevent you from reaching your potential. At Vieira's Gym, we don't just sell memberships. We offer a path of discipline, sweat, and self-overcoming. Here, the body follows the mind.",
            step_1_title: "The Problem",
            step_1_desc: "Stagnation, directionless workouts, and lack of motivation halt your physical evolution.",
            step_2_title: "The Guide",
            step_2_desc: "Vieira's Gym provides the plan, structure, and leadership of experienced coaches.",
            step_3_title: "The Transformation",
            step_3_desc: "Real results: a stronger body, consolidated habits, and an unshakeable mindset.",
            programmes_tag: "Elite Programs",
            programmes_title: "CHOOSE YOUR PATH.",
            prog_martial_arts: "Martial Arts",
            prog_martial_arts_desc: "Kickboxing, Taekwondo, and Boxing. Focus on technical precision, self-defense, flexibility, and competitive readiness. Train under a lineage of champions.",
            prog_strength: "Strength & Calisthenics",
            prog_strength_desc: "Classic weight training and bodyweight control. Increase muscle density, raw power, and structural mobility to prepare your body for any challenge.",
            prog_performance: "Functional Training",
            prog_performance_desc: "Exercises based on primordial movements (squatting, pushing, pulling, jumping). Improve cardiovascular conditioning, fat loss, and athletic agility.",
            prog_cta: "I want to train",
            timetable_tag: "Training Schedule",
            timetable_title: "CLASS TIMETABLE",
            filter_all: "Show All",
            filter_kickboxing: "Kickboxing",
            filter_taekwondo: "Taekwondo",
            filter_boxing: "Boxing",
            filter_musculacao: "Weight Training",
            filter_calistenia: "Calisthenics",
            filter_funcional: "Functional Training",
            filter_defesa: "Self-Defense",
            th_time: "Time",
            th_mon: "Monday",
            th_tue: "Tuesday",
            th_wed: "Wednesday",
            th_thu: "Thursday",
            th_fri: "Friday",
            th_sat: "Saturday",
            gallery_tag: "Focus & Consistency",
            gallery_title: "DISCIPLINE IN ACTION",
            founder_tag: "Leadership",
            founder_title: "Founder & Technical Director",
            founder_credential: "Founder of WAKO-Mozambique",
            founder_bio_p1: "Eduardo Delfim Vieira is one of the most respected figures in the Mozambican martial arts scene. As the founder and main driver of WAKO-Mozambique (World Association of Kickboxing Organizations), he has dedicated his life to technical training, athletic development of competitors, and consolidating sports discipline.",
            founder_bio_p2: "At Vieira's Gym, Eduardo channels decades of experience on the mat to create an environment where every workout is guided by technical consistency and mental resilience. His mission goes beyond physical preparation: forming resilient, self-confident individuals prepared to win inside and outside the gym.",
            founder_gallery_title: "THE FOUNDER IN ACTION",
            proof_tag: "Social Proof",
            proof_title: "WHO TRAINS WITH US",
            pricing_tag: "Memberships",
            pricing_title: "MONTHLY MEMBERSHIPS",
            price_basic: "Basic",
            price_prime: "Prime",
            price_special: "Special",
            basic_f1: "1 Fixed Discipline",
            basic_f2: "1 Available Schedule",
            basic_f3: "Group Classes or Weight Training",
            basic_f4: "Access to Training Rooms",
            prime_f1: "All Disciplines Included",
            prime_f2: "All Schedules Available",
            prime_f3: "Kickboxing, Taekwondo, Boxing",
            prime_f4: "Weight Training & Functional Training",
            prime_f5: "Unlimited Access to All Rooms",
            special_f1: "2 Selected Disciplines",
            special_f2: "2 Flexible Schedules",
            special_f3: "Martial Arts + Weight/Functional Training",
            special_f4: "Access to Associated Training Rooms",
            btn_choose: "Select Plan",
            accordion_title: "DETAILED TERMS AND INFORMATION",
            acc_family: "Family Plans (Monthly Prime Package)",
            acc_family_desc: "Train with your family with progressive discounts on the Prime Package:",
            tbl_members: "Members",
            tbl_price: "Total Monthly Price",
            acc_reg: "Registration Process & Documents",
            acc_reg_desc: "To complete your registration, the fee is 1,000 MT and you must deliver the following documents at the gym reception:",
            doc_1: "Two (2) recent passport-sized photos.",
            doc_2: "Legible copy of Identity Card (B.I.) or valid Passport.",
            acc_discount: "Prepayment Discounts (Prime Package)",
            acc_discount_desc: "Save up to 13,000 MT by opting for medium or long-term payments with super discounts:",
            tbl_period: "Frequency",
            tbl_total: "Total Value",
            tbl_saving: "Equivalent Savings",
            term_tri: "Quarterly (3 months)",
            term_sem: "Semi-Annual (6 months)",
            term_ann: "Annual (12 months)",
            save_tri: "Save 1,000 MT",
            save_sem: "Save 4,000 MT",
            save_ann: "Save 13,000 MT",
            acc_trial: "Trial Training & Daily Passes",
            acc_trial_desc: "Want to experience our training environment before signing up?",
            term_trial_label: "Trial session / Daily pass:",
            trial_conditions: "The trial training fee can be deducted from your registration if you decide to sign up on the same day. All trial training sessions require prior booking.",
            community_tag: "Team Spirit",
            community_title: "WE GROW TOGETHER",
            community_body: "At Vieira's Gym, strength lies in unity. We do not train to compete against each other, but to elevate everyone's spirit. Here, the ego is left at the door. We support each other in every punch, every squat, every graduation exam, and every finished training. This is not just a gym. It is your community.",
            btn_join_community: "Join the Family",
            location_tag: "Location",
            location_title: "WHERE TO FIND US",
            loc_address_title: "Address",
            loc_hours_title: "Opening Hours",
            loc_hours_week: "Monday to Friday: 05:30 – 20:00",
            loc_hours_sat: "Saturday: 05:30 – 12:00",
            loc_contacts_title: "Direct Contacts",
            btn_talk: "Talk to Us",
            btn_maps: "Open in Maps",
            btn_directions: "Obter Direções",
            final_cta_title: "START TRANSFORMING TODAY",
            final_cta_subtitle: "Say no to the excuses created by your mind. Join us and train with professional guidance.",
            btn_final_cta: "START NOW",
            footer_slogan: "Discipline creates champions. Success is the result of small daily efforts.",
            footer_menu_title: "Menu",
            footer_social_title: "Social Networks",
            footer_rights: "All rights reserved.",
            price_visual_text: "REAL STRENGTH. REAL RESULTS.",
            proof_card_1_title: "Kickboxing Award Ceremony",
            proof_card_1_desc: "Recognition of the athletic merit and dedication of our athletes.",
            proof_card_2_title: "Black Belt Graduation",
            proof_card_2_desc: "The pinnacle of discipline and technical consistency at Vieira's Gym.",
            proof_card_3_title: "Provincial Taekwondo Championship",
            proof_card_3_desc: "Competition and growth: our athletes demonstrating focus on the mat.",
            proof_card_4_title: "Technical Seminar & Training",
            proof_card_4_desc: "Continuous training for certified instructors and coaches.",
            proof_card_5_title: "Referees and Judges Team",
            proof_card_5_desc: "Ensuring integrity and professionalism in official tournaments.",
            proof_card_6_title: "WAKO Event Organisation",
            proof_card_6_desc: "Commitment to the advancement of martial arts in Mozambique."
        }
    };

    let currentLang = localStorage.getItem('vieiras_gym_lang') || 'pt';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('vieiras_gym_lang', lang);
        document.documentElement.lang = lang;

        // Toggle buttons in lang switcher
        document.getElementById('btn-lang-pt').classList.toggle('active', lang === 'pt');
        document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');

        // Translate nodes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Re-render timetable and FAQ items
        renderDesktopTimetable();
        renderMobileTimetable();
        renderFaqs();
    }

    document.getElementById('btn-lang-pt').addEventListener('click', () => setLanguage('pt'));
    document.getElementById('btn-lang-en').addEventListener('click', () => setLanguage('en'));

    // Initialize Language
    setLanguage(currentLang);


    /* ==========================================================================
       2. MOBILE NAVIGATION OVERLAY
       ========================================================================== */

    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');

    if (menuToggle && mobileOverlay) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.classList.contains('open');
            menuToggle.classList.toggle('open', !isOpen);
            mobileOverlay.classList.toggle('open', !isOpen);
            document.body.style.overflow = !isOpen ? 'hidden' : '';
        });

        mobileOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                mobileOverlay.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }


    /* ==========================================================================
       3. TIMETABLE FILTER LOGIC (DYNAMIC RENDERING)
       ========================================================================== */

    // Row-based lesson database (Structured source of truth)





    function renderDesktopTimetable() {
        const gridContainer = document.querySelector('.timetable-grid');
        if (!gridContainer) return;

        // Keep only first 7 headers
        const headers = Array.from(gridContainer.children).slice(0, 7);
        gridContainer.innerHTML = '';
        headers.forEach(h => gridContainer.appendChild(h));

        const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

        // Collapse empty rows:
        const filteredRows = timetableRows.filter(row => {
            if (currentFilter === 'all') return true;
            return days.some(day => 
                row[day] && row[day].some(lesson => lesson.discipline === currentFilter)
            );
        });

        filteredRows.forEach(row => {
            // Add time column
            const timeEl = document.createElement('div');
            timeEl.className = 'grid-time time-col';
            timeEl.textContent = row.time;
            gridContainer.appendChild(timeEl);

            days.forEach(day => {
                const cellEl = document.createElement('div');
                const lessons = row[day] || [];
                const visibleLessons = currentFilter === 'all'
                    ? lessons
                    : lessons.filter(l => l.discipline === currentFilter);

                if (visibleLessons.length === 0) {
                    cellEl.className = 'grid-cell empty';
                } else {
                    const hasMusculacao = visibleLessons.some(l => l.discipline === 'strength');
                    cellEl.className = `grid-cell ${visibleLessons.map(l => l.discipline).join(' ')}`;
                    
                    if (hasMusculacao) {
                        cellEl.classList.add('musculacao');
                        if (row.time.includes("05:30")) {
                            cellEl.classList.add('all-day');
                            if (day === 'saturday') cellEl.classList.add('sat-time');
                        }
                    }
                    if (visibleLessons.length > 1) {
                        cellEl.classList.add('multiple-classes');
                    }
                    if (day === 'saturday' && visibleLessons.some(l => l.discipline === 'calisthenics' || l.discipline === 'functional')) {
                        cellEl.classList.add('sat-stack');
                    }

                    visibleLessons.forEach(lesson => {
                        const labelEl = document.createElement('span');
                        labelEl.className = `discipline-label ${lesson.discipline}-txt`;
                        labelEl.textContent = getDisciplineName(lesson.discipline, currentLang);
                        cellEl.appendChild(labelEl);
                    });

                    // Saturday musculacao subtext override
                    if (hasMusculacao && day === 'saturday' && row.time.includes("05:30")) {
                        const subtextEl = document.createElement('span');
                        subtextEl.className = 'cell-subtext';
                        subtextEl.textContent = '05:30 - 12:00';
                        cellEl.appendChild(subtextEl);
                    }
                }

                gridContainer.appendChild(cellEl);
            });
        });
    }

    function renderMobileTimetable() {
        const container = document.getElementById('mobile-timetable-list');
        if (!container) return;

        const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const dayNamesPT = {
            monday: "Segunda-feira",
            tuesday: "Terça-feira",
            wednesday: "Quarta-feira",
            thursday: "Quinta-feira",
            friday: "Sexta-feira",
            saturday: "Sábado"
        };
        const dayNamesEN = {
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday"
        };
        
        let htmlContent = '';

        days.forEach(day => {
            const dayLessons = [];
            timetableRows.forEach(row => {
                const lessons = row[day] || [];
                const visible = currentFilter === 'all'
                    ? lessons
                    : lessons.filter(l => l.discipline === currentFilter);
                
                visible.forEach(lesson => {
                    let timeRange = row.time;
                    if (lesson.discipline === 'strength' && day === 'saturday' && row.time.includes("05:30")) {
                        timeRange = "05:30 - 12:00";
                    }
                    dayLessons.push({
                        time: timeRange,
                        discipline: lesson.discipline,
                        name: getDisciplineName(lesson.discipline, currentLang)
                    });
                });
            });

            if (dayLessons.length === 0) return;

            // Sort chronologically
            dayLessons.sort((a, b) => {
                const getStart = (t) => t.split('-')[0].trim();
                return getStart(a.time).localeCompare(getStart(b.time));
            });

            const dayTitle = currentLang === 'pt' ? dayNamesPT[day] : dayNamesEN[day];
            htmlContent += `
                <div class="mobile-day-group">
                    <h3 class="mobile-day-title">${dayTitle}</h3>
            `;

            dayLessons.forEach(item => {
                htmlContent += `
                    <div class="mobile-slot-row">
                        <span class="mobile-slot-time">${item.time}</span>
                        <div class="mobile-slot-details">
                            <span class="mobile-slot-discipline" style="color: var(--accent-${item.discipline})">${item.name}</span>
                        </div>
                    </div>
                `;
            });

            htmlContent += `</div>`;
        });

        if (htmlContent === '') {
            htmlContent = `<p class="text-center section-padding" style="opacity: 0.5;">
                ${currentLang === 'pt' ? 'Nenhuma aula encontrada para este filtro.' : 'No classes found for this filter.'}
            </p>`;
        }

        container.innerHTML = htmlContent;
    }

    function filterTimetable(filterClass) {
        currentFilter = filterClass;

        // Toggle active button states
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === filterClass);
        });

        renderDesktopTimetable();
        renderMobileTimetable();
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterTimetable(filter);
        });
    });


    
    /* ==========================================================================
       4. DYNAMIC REELS CAROUSEL GENERATION & SCROLL CONTROLS
       ========================================================================== */

    // General reels (excluding hero, founder bio, and community videos)
    const generalDisciplineReels = [
        '/reels/AQMQ__8K1rdRcHK7YiA6u5VcWBd6aTsjDayS3NXmdJ26HBRi7CdNdi3FK5t3h3-RvHOGiKz5CBt9vWtKTIjdgLvIHAaUQdnpLlZLGdg.mp4',
        '/reels/AQMh7JbFX7ccT2M_UEv2zzFzFGVnjWYDAlcmWioDdiEUm3VedAViaVIulQqxGiBevp8b-QgdWxY4RoZ_NoJq8AMk9wdSG2tWdIZ7duc.mp4',
        '/reels/AQMiJthT0zUOdzouUfqqVJvv40bqJ7LGN-WxOUVvSQbPYAcJiYl92ZoseOxcXoZ9jgHykpfJcMJmyGLNJk0fs1gDJl9cW5sXNuSuRek.mp4',
        '/reels/AQMu9ZJZdZ9y0jevVb6Q20YD57pTiFqaKVoANGZCAIk7bIafXdyaF-QPYbJmrGtpsKzBr1Ceb2Z02cGzPk4Pvlx5T3CkBjhoy784AyE.mp4',
        '/reels/AQNFJfeEharRKFm9EppyhUegVKirptUTfiw-UT1zuzs9dOrQTDMArMd1_Lrqm7VArsR6jAuFEppNYYQiGyCvDXPNLgh1RLT8gvi9sMM.mp4',
        '/reels/AQNFSUrb3hFXBngJEay909TpXTeDaBeqkLO4Zfv653SBfUEDzOM5buJs2Vbxwfq24apS1Ji99Avnm1AFKQI0Vw7BBdxYcyRzCHc8gpE.mp4',
        '/reels/AQNTH2DOShWphlko0I8eHWBshI_BTzMyK_EXlREUtipHHq2HmW8E5V5bDuMLsYD-0bd3-VRiNjOnGS1e0SIOusu3Yf9rg4xah7wkPb32AHU5QQ.mp4',
        '/reels/AQNgYLLEkIfZnK9aWOuiLCCBgBaKX6bpSgYikzhvGCdHMQhjyxbfHf_vjqvpFM7WJKEjohj5cCDGZVP0fAyX8gijUthUp6k84cazW9M.mp4',
        '/reels/AQNm8HZROX8TY4r8dvUJJy7L6CeG4qZeBrhLLD_7rH5nJlzqBgUUtRnQpvMdMjyF0qkqwzHyKJyURefiqJb1geIz4gTL19d8RvvVNFw.mp4',
        '/reels/AQNqlXpNZdAwnCLM6iQybuMwlc4rLYl6dqHF4gE1e5gAoa5nl1q9vtWE44aS3D62PE8wu-_K860PTdD8dSJdXgJ0_c921sIwWorTTDY.mp4',
        '/reels/AQO2Cu4M7xJwJL_M-cejYP_-ry2iK9_9rfu0Sm6-5tmgji7grH2TNj_nURkemM67pFKmOy-58N5-AVysVkFT8bF43PR236DusCl98wE.mp4',
        '/reels/AQO8ydtE-TrUQ2TbFK4ans5HzwaoWCT-Gvj--UUdxoRBLINFpDPdIYuzPx_WtN_3O2U7tbtzTKzqrNTv25v0xw-53IeGpGv0NJx4sUc.mp4',
        '/reels/AQOAvHyO-LUzMTPUnhkMMBuNdpUhXIl0-xI1WCUNV3bTjnAhsS4sLAhdaqVBu8hS-v8kBGcqd6a1n9SNOhBT6FFRYOMwzZENSYNNUvs.mp4',
        '/reels/AQOAzjxP396f1pOYhed_S5IVDOh_fb3XIeU4fynIvM5BMXXMIAvR39ons-k5qm7yOD3lG5zWE2Zyf5cWnqAm3pVT.mp4',
        '/reels/AQOBf3kDpqp2RrgSznzxoW8HpGoEVQFX5zDrYpFX40zUfJXZ1D8-isoncq7hTGBwoF8M9ixMCKff9ripW5XnvaD5bjqRZ4r6YNDH6Gk.mp4',
        '/reels/AQOebTGfHGTVE2bQq3If4D3PFdDYrlLGm65B3jlCMQZBqQS4wMeofhW5o9_stjfNWtFqfhovr0hfBktpPO2zVpnD0eBdAAtjawHJo6o.mp4',
        '/reels/AQPLEyibwlgGZzDBmjZZo_RnUxIyoTLcKYRC1qQC91GFl4bR5mtZR0iohxtqjwqOE0aEZjNDEvWTmouppnClfhDxv7zxVtxKMLWzMKE.mp4',
        '/reels/DISCIPLINE.mp4'
    ];

    // KB reels
    const kbDisciplineReels = [
        '/reels/kb/VID-20260411-WA0162.mp4',
        '/reels/kb/VID-20260411-WA0193.mp4',
        '/reels/kb/VID-20260411-WA0195.mp4'
    ];

    // Combine & Deduplicate
    const allDisciplineReels = [
        ...generalDisciplineReels,
        ...kbDisciplineReels
    ];
    const uniqueDisciplineReels = [...new Set(allDisciplineReels)];

    // Orientations lookup
    const horizontalReelFiles = [
        '/reels/AQNTH2DOShWphlko0I8eHWBshI_BTzMyK_EXlREUtipHHq2HmW8E5V5bDuMLsYD-0bd3-VRiNjOnGS1e0SIOusu3Yf9rg4xah7wkPb32AHU5QQ.mp4',
        '/reels/AQNm8HZROX8TY4r8dvUJJy7L6CeG4qZeBrhLLD_7rH5nJlzqBgUUtRnQpvMdMjyF0qkqwzHyKJyURefiqJb1geIz4gTL19d8RvvVNFw.mp4',
        '/reels/AQNqlXpNZdAwnCLM6iQybuMwlc4rLYl6dqHF4gE1e5gAoa5nl1q9vtWE44aS3D62PE8wu-_K860PTdD8dSJdXgJ0_c921sIwWorTTDY.mp4',
        '/reels/AQOBf3kDpqp2RrgSznzxoW8HpGoEVQFX5zDrYpFX40zUfJXZ1D8-isoncq7hTGBwoF8M9ixMCKff9ripW5XnvaD5bjqRZ4r6YNDH6Gk.mp4',
        '/reels/DISCIPLINE.mp4',
        '/reels/kb/VID-20260411-WA0162.mp4',
        '/reels/kb/VID-20260411-WA0193.mp4',
        '/reels/kb/VID-20260411-WA0195.mp4'
    ];

    const disciplineReels = uniqueDisciplineReels.map(src => ({
        src,
        orientation: horizontalReelFiles.includes(src) ? 'horizontal' : 'vertical'
    }));

    const verticalReels = disciplineReels.filter(reel => reel.orientation === 'vertical');
    const horizontalReels = disciplineReels.filter(reel => reel.orientation === 'horizontal');



    function populateReelsTracks() {
        const vTrack = document.getElementById('vertical-reels-track');
        const hTrack = document.getElementById('horizontal-reels-track');

        if (!vTrack || !hTrack) return;

        vTrack.innerHTML = '';
        hTrack.innerHTML = '';

        verticalReels.forEach((reel) => {
            const card = document.createElement('article');
            card.className = 'vertical-reel-card media-frame';
            card.setAttribute('key', reel.src);

            const video = document.createElement('video');
            video.src = reel.src;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            video.preload = "metadata";
            video.className = "lazy-video";
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.display = 'block';
            video.style.objectFit = reel.src.includes('/kb/') ? 'contain' : 'cover';
            video.onerror = () => console.error("Failed vertical reel:", reel.src);

            card.appendChild(video);
            vTrack.appendChild(card);
        });

        horizontalReels.forEach((reel) => {
            const card = document.createElement('article');
            card.className = 'horizontal-reel-card media-frame';
            card.setAttribute('key', reel.src);

            const video = document.createElement('video');
            video.src = reel.src;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            video.preload = "metadata";
            video.className = "lazy-video";
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.display = 'block';
            video.style.objectFit = reel.src.includes('/kb/') ? 'contain' : 'cover';
            video.onerror = () => console.error("Failed horizontal reel:", reel.src);

            card.appendChild(video);
            hTrack.appendChild(card);
        });

        // Initialize media frames loader on dynamic reels
        if (typeof initMediaFrames === 'function') {
            initMediaFrames(vTrack);
            initMediaFrames(hTrack);
        }

        const vShell = vTrack.closest('.media-carousel-shell');
        if (vShell) vShell.style.display = verticalReels.length === 0 ? 'none' : '';

        const hShell = hTrack.closest('.media-carousel-shell');
        if (hShell) hShell.style.display = horizontalReels.length === 0 ? 'none' : '';
    }

    populateReelsTracks();

    // Setup scroll actions independently for both carousels
    function setupCarouselControls(trackId, prevBtnClass, nextBtnClass) {
        const track = document.getElementById(trackId);
        const prevBtn = document.querySelector(prevBtnClass);
        const nextBtn = document.querySelector(nextBtnClass);

        if (!track || !prevBtn || !nextBtn) return;

        const scrollCarousel = (direction) => {
            const amount = Math.max(track.clientWidth * 0.8, 320);
            track.scrollBy({
                left: direction === "right" ? amount : -amount,
                behavior: "smooth"
            });
        };

        prevBtn.addEventListener('click', () => scrollCarousel('left'));
        nextBtn.addEventListener('click', () => scrollCarousel('right'));

        const updateButtons = () => {
            const scrollLeft = track.scrollLeft;
            const maxScroll = track.scrollWidth - track.clientWidth;
            
            prevBtn.style.opacity = scrollLeft <= 10 ? '0.2' : '1';
            prevBtn.style.pointerEvents = scrollLeft <= 10 ? 'none' : 'auto';
            
            nextBtn.style.opacity = scrollLeft >= maxScroll - 10 ? '0.2' : '1';
            nextBtn.style.pointerEvents = scrollLeft >= maxScroll - 10 ? 'none' : 'auto';
        };

        track.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);
        setTimeout(updateButtons, 500);
    }

    setupCarouselControls('vertical-reels-track', '.carousel-arrow.prev-v', '.carousel-arrow.next-v');
    setupCarouselControls('horizontal-reels-track', '.carousel-arrow.prev-h', '.carousel-arrow.next-h');
    setupCarouselControls('founder-reels-track', '.founder-arrow-left', '.founder-arrow-right');


    /* ==========================================================================
       5. ACCORDION LOGIC FOR FAQ (DYNAMIC RENDERING)
       ========================================================================== */

    function renderFaqs() {
        const container = document.getElementById('faq-accordion');
        if (!container) return;

        container.innerHTML = '';
        
        // Resolve from global array or fallback database
        const faqsList = (typeof pricingFaqs !== 'undefined') ? pricingFaqs : pricingFaqsFallback;

        console.log("pricingFaqs", faqsList);
        console.log("faq count", faqsList.length);

        faqsList.forEach((faq, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'faq-item';
            
            const triggerEl = document.createElement('button');
            triggerEl.className = 'faq-trigger';
            triggerEl.setAttribute('type', 'button');
            
            // First item open by default
            const isOpen = index === 0;
            triggerEl.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            triggerEl.setAttribute('aria-controls', `faq-answer-${index}`);
            if (isOpen) {
                itemEl.classList.add('active');
            }

            const qText = faq.question[currentLang];
            const aText = faq.answer[currentLang];

            triggerEl.innerHTML = `
                <span>${qText}</span>
                <span aria-hidden="true" class="faq-icon">${isOpen ? '−' : '+'}</span>
            `;

            const panelEl = document.createElement('div');
            panelEl.className = 'faq-answer';
            panelEl.id = `faq-answer-${index}`;
            if (isOpen) {
                panelEl.classList.add('open');
            }
            
            panelEl.innerHTML = `<div><div class="accordion-content">${aText}</div></div>`;

            itemEl.appendChild(triggerEl);
            itemEl.appendChild(panelEl);
            container.appendChild(itemEl);

            // Toggle logic on question row click
            triggerEl.addEventListener('click', () => {
                const isActive = panelEl.classList.contains('open');

                // Close all other panels
                document.querySelectorAll('.faq-item').forEach((otherItem) => {
                    if (otherItem !== itemEl) {
                        otherItem.classList.remove('active');
                        const otherTrigger = otherItem.querySelector('.faq-trigger');
                        if (otherTrigger) {
                            otherTrigger.setAttribute('aria-expanded', 'false');
                            const otherIcon = otherTrigger.querySelector('.faq-icon');
                            if (otherIcon) otherIcon.textContent = '+';
                        }
                        const otherPanel = otherItem.querySelector('.faq-answer');
                        if (otherPanel) {
                            otherPanel.classList.remove('open');
                        }
                    }
                });

                // Toggle current item
                itemEl.classList.toggle('active', !isActive);
                panelEl.classList.toggle('open', !isActive);
                triggerEl.setAttribute('aria-expanded', !isActive ? 'true' : 'false');
                triggerEl.querySelector('.faq-icon').textContent = !isActive ? '−' : '+';
            });
        });
    }

    /* ==========================================================================
       6. INTERSECTION OBSERVER LAZY PLAYBACK
       ========================================================================== */

    const setupLazyPlayback = () => {
        const lazyVideos = document.querySelectorAll('video.lazy-video');
        if ('IntersectionObserver' in window) {
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        video.play().catch(() => {});
                    } else {
                        video.pause();
                    }
                });
            }, {
                rootMargin: '100px 0px 100px 0px',
                threshold: 0.1
            });

            lazyVideos.forEach(video => {
                videoObserver.observe(video);
            });
        } else {
            lazyVideos.forEach(video => {
                video.play().catch(() => {});
            });
        }
    };

    setTimeout(setupLazyPlayback, 200);


    /* ==========================================================================
       7. DRAG SCROLL CAROUSEL TRACKS
       ========================================================================== */

    const sliders = document.querySelectorAll('.drag-container');

    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });


    /* ==========================================================================
       8. IMAGE & VIDEO FAIL-SAFE DIAGNOSTICS
       ========================================================================== */

    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('error', () => {
            const path = video.src || (video.querySelector('source') ? video.querySelector('source').src : 'unknown');
            console.error('Video failed to load: ' + path);
            if (video.parentElement) {
                video.parentElement.classList.add('video-failed');
            }
        });
    });

    // Global Media Error Handling - Apply has-error to media-frame wrappers
    window.addEventListener('error', (e) => {
        if (e.target && (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO')) {
            const media = e.target;
            console.error("Failed media:", media.currentSrc || media.src);
            const frame = media.closest(".media-frame");
            if (frame) {
                frame.classList.add("has-error");
            } else {
                media.style.display = 'none';
            }
        }
    }, true);

    /* ==========================================================================
       PROVA SOCIAL GALLERY & SHARED LIGHTBOX
       ========================================================================== */

    const socialProofImages = [
        { src: '/posts/kb/img-20260218-wa0015.webp', w: 1600, h: 1200 },
        { src: '/posts/kb/img-20260218-wa0018.webp', w: 4032, h: 3024 },
        { src: '/posts/kb/img-20260224-wa0005.webp', w: 1280, h: 960 },
        { src: '/posts/kb/img-20260225-wa0000.webp', w: 1600, h: 1200 },
        { src: '/posts/kb/img-20260305-wa0004.webp', w: 2972, h: 2229 },
        { src: '/posts/kb/img-20260314-wa0045.webp', w: 1600, h: 1017 },
        { src: '/posts/kb/img-20260330-wa0011.webp', w: 4160, h: 3120 },
        { src: '/posts/kb/img-20260413-wa0004.webp', w: 4032, h: 3024 },
        { src: '/posts/kb/img-20260414-wa0002.webp', w: 4032, h: 3024 },
        { src: '/posts/kb/img-20260420-wa0007.webp', w: 1600, h: 1200 },
        { src: '/posts/kb/img-20260420-wa0008.webp', w: 900, h: 1600 },
        { src: '/posts/kb/img-20260427-wa0013.webp', w: 1600, h: 920 },
        { src: '/posts/kb/img-20260504-wa0002.webp', w: 1600, h: 1200 },
        { src: '/posts/kb/img-20260506-wa0007.webp', w: 1280, h: 960 },
        { src: '/posts/kb/img-20260520-wa0109.webp', w: 1280, h: 960 },
        { src: '/posts/kb/img-20260522-wa0000.webp', w: 1200, h: 1600 },
        { src: '/posts/kb/img-20260623-wa0002.webp', w: 960, h: 1280 },
        { src: '/posts/kb/img-20260623-wa0006.webp', w: 3120, h: 4160 },
        { src: '/posts/kb/img-20260624-wa0005.webp', w: 1280, h: 960 },
        { src: '/posts/kb/img-20260624-wa0007.webp', w: 3720, h: 2790 },
        { src: '/posts/kb/img-20260701-wa0032-2.webp', w: 1600, h: 1050 },
        { src: '/posts/kb/img-20260721-wa0007.webp', w: 1600, h: 1470 },
        { src: '/posts/kb/img-20260729-wa0001.webp', w: 940, h: 1280 }
    ];

    const communityCollageImages = [
        { src: '/posts/kb/img-20260218-wa0018.webp', w: 4032, h: 3024 },
        { src: '/posts/kb/img-20260330-wa0011.webp', w: 4160, h: 3120 },
        { src: '/posts/kb/img-20260413-wa0004.webp', w: 4032, h: 3024 },
        { src: '/posts/kb/img-20260414-wa0002.webp', w: 4032, h: 3024 },
        { src: '/posts/kb/img-20260624-wa0007.webp', w: 3720, h: 2790 }
    ];

    let lightboxActiveImages = [];
    let lightboxCurrentIndex = 0;

    const lightboxModal = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCloseBtn = document.querySelector('.lightbox-close');
    const lightboxLeftArrow = document.querySelector('.lightbox-arrow-left');
    const lightboxRightArrow = document.querySelector('.lightbox-arrow-right');

    function openSharedLightbox(imagesList, index) {
        if (!lightboxModal || !lightboxImg) return;
        lightboxActiveImages = imagesList;
        lightboxCurrentIndex = index;
        updateLightboxSource();
        lightboxModal.classList.add('active');
        lightboxModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeSharedLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function updateLightboxSource() {
        if (!lightboxImg) return;
        const currentItem = lightboxActiveImages[lightboxCurrentIndex];
        if (currentItem) {
            lightboxImg.src = typeof currentItem === 'string' ? currentItem : currentItem.src;
        }
    }

    function showLightboxNext() {
        if (lightboxActiveImages.length === 0) return;
        lightboxCurrentIndex = (lightboxCurrentIndex + 1) % lightboxActiveImages.length;
        updateLightboxSource();
    }

    function showLightboxPrev() {
        if (lightboxActiveImages.length === 0) return;
        lightboxCurrentIndex = (lightboxCurrentIndex - 1 + lightboxActiveImages.length) % lightboxActiveImages.length;
        updateLightboxSource();
    }

    if (lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener('click', closeSharedLightbox);
    }
    if (lightboxLeftArrow) {
        lightboxLeftArrow.addEventListener('click', showLightboxPrev);
    }
    if (lightboxRightArrow) {
        lightboxRightArrow.addEventListener('click', showLightboxNext);
    }
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
                closeSharedLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeSharedLightbox();
        } else if (e.key === 'ArrowRight') {
            showLightboxNext();
        } else if (e.key === 'ArrowLeft') {
            showLightboxPrev();
        }
    });

    let touchStartX = 0;
    let touchEndX = 0;
    if (lightboxModal) {
        lightboxModal.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        lightboxModal.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const threshold = 50;
            if (touchEndX < touchStartX - threshold) {
                showLightboxNext();
            } else if (touchEndX > touchStartX + threshold) {
                showLightboxPrev();
            }
        }, { passive: true });
    }

    function renderSocialProofGallery() {
        const galleryContainer = document.getElementById('social-proof-gallery');
        if (!galleryContainer) return;

        galleryContainer.innerHTML = '';
        socialProofImages.forEach((itemObj, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item media-frame';
            
            const img = document.createElement('img');
            img.src = itemObj.src;
            img.width = itemObj.w;
            img.height = itemObj.h;
            img.alt = `Atletas e treino no Vieira's Gym`;
            img.loading = 'lazy';
            img.decoding = 'async';
            img.className = 'media-image';
            
            item.appendChild(img);
            
            item.addEventListener('click', () => {
                openSharedLightbox(socialProofImages, index);
            });
            
            galleryContainer.appendChild(item);
        });

        // Initialize media frames loader on dynamic gallery
        if (typeof initMediaFrames === 'function') {
            initMediaFrames(galleryContainer);
        }
    }

    renderSocialProofGallery();

    document.querySelectorAll('.community-collage .collage-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.getAttribute('data-index'), 10);
            if (!isNaN(index)) {
                openSharedLightbox(communityCollageImages, index);
            }
        });
    });

    // Hero Video Autoplay & Loop Safeguards
    const heroVideo = document.querySelector('.hero-background-video');

    async function ensureHeroPlayback() {
        if (!heroVideo) return;

        heroVideo.muted = true;
        heroVideo.defaultMuted = true;
        heroVideo.playsInline = true;
        heroVideo.loop = true;
        heroVideo.playbackRate = 1;

        try {
            await heroVideo.play();
        } catch (error) {
            console.warn("Hero autoplay temporarily blocked:", error);
        }
    }

    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', ensureHeroPlayback);
        heroVideo.addEventListener('canplay', ensureHeroPlayback);

        heroVideo.addEventListener('ended', () => {
            heroVideo.currentTime = 0;
            ensureHeroPlayback();
        });

        heroVideo.addEventListener('pause', () => {
            if (!document.hidden) {
                window.setTimeout(ensureHeroPlayback, 150);
            }
        });

        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                ensureHeroPlayback();
            }
        });

        window.addEventListener('pageshow', ensureHeroPlayback);

        document.addEventListener('touchstart', ensureHeroPlayback, { once: true, passive: true });
        
        // Initial play attempt
        ensureHeroPlayback();
    }

    // Media Frame visual loading placeholders
    function initMediaFrames(root = document) {
        root.querySelectorAll(".media-frame").forEach((frame) => {
            const media = frame.querySelector("img, video");
            if (!media) return;

            const markLoaded = () => {
                frame.classList.add("is-loaded");
            };

            const handleError = () => {
                console.error("Failed media:", media.currentSrc || media.src);
                frame.classList.add("has-error");
            };

            if (media.tagName === "IMG") {
                if (media.complete && media.naturalWidth > 0) {
                    markLoaded();
                } else {
                    media.addEventListener("load", markLoaded, { once: true });
                    media.addEventListener("error", handleError, { once: true });
                }
            } else if (media.tagName === "VIDEO") {
                if (media.readyState >= 2) {
                    markLoaded();
                } else {
                    media.addEventListener("loadeddata", markLoaded, { once: true });
                    media.addEventListener("error", handleError, { once: true });
                }
            }
        });
    }

    // Initialize all media frames on page load
    window.initMediaFrames = initMediaFrames; // Expose helper globally just in case
    initMediaFrames();

    // Intersection Observer for below-the-fold videos
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll("video:not(.hero-background-video)").forEach(video => {
            videoObserver.observe(video);
        });
    }

    // Dynamic Copyright Year Generator
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
