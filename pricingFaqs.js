/* VIEIRA'S GYM FAQ DATABASE (Source of Truth) */

const pricingFaqs = [
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
