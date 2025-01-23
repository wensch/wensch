import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap,
  Code2, 
  GitBranch, 
  Users, 
  Rocket,
  TestTube,
  GitPullRequest,
  Blocks,
  Webhook,
  ChevronDown,
  Building2,
  Laptop,
  LineChart,
  Gauge,
  BookOpen
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const timeline = [
  {
    role: 'Tech Lead',
    company: 'Banco Alfa S.A.',
    period: 'Nov 2020 - Atual',
    type: 'Remoto',
    icon: Building2,
    skills: [
      { text: 'Vue.js', icon: Code2 },
      { text: 'Nuxt.js', icon: Code2 },
      { text: 'Cypress', icon: TestTube },
      { text: 'Storybook', icon: Blocks },
      { text: 'Agile', icon: Users },
    ],
    highlights: [
      {
        icon: Rocket,
        text: 'Avaliação de viabilidade técnica de projetos.',
      },
      {
        icon: Users,
        text: 'Divisão de tarefas entre os desenvolvedores.',
      },
      {
        icon: GitBranch,
        text: 'Consultoria técnica e mentoria para a equipe.',
      },
      {
        icon: Code2,
        text: 'Desenvolvimento de arquiteturas front-end para aplicações financeiras.',
      },
      {
        icon: LineChart,
        text: 'Análise e resolução de débitos técnicos da squad.',
      },
      {
        icon: Blocks,
        text: 'Documentação de componentes reutilizáveis com Storybook.',
      },
      {
        icon: TestTube,
        text: 'Implementação de testes automatizados com Cypress.',
      },
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'F.biz',
    period: 'Out 2016 - Out 2020',
    type: 'Híbrido',
    icon: Laptop,
    skills: [
      { text: 'HTML5', icon: Code2 },
      { text: 'CSS', icon: Code2 },
      { text: 'JavaScript', icon: Code2 },
      { text: 'Webpack', icon: Blocks },
      { text: 'Gulp', icon: Gauge },
    ],
    highlights: [
      {
        icon: Code2,
        text: 'Desenvolvimento, refatoração e manutenção de projetos e landing pages.',
      },
      {
        icon: Laptop,
        text: 'Foco em desenvolvimento responsivo e Mobile First.',
      },
      {
        icon: Blocks,
        text: 'Configuração de builds utilizando ferramentas como Webpack e Gulp.',
      },
      {
        icon: Code2,
        text: 'Criação de interfaces utilizando Handlebars e Nunjucks.',
      },
      {
        icon: Gauge,
        text: 'Aplicação de práticas para melhorar SEO e performance.',
      },
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'UpperID',
    period: 'Out 2014 - Set 2016',
    type: 'Presencial',
    icon: Building2,
    skills: [
      { text: 'JavaScript', icon: Code2 },
      { text: 'PHP', icon: Code2 },
      { text: 'WordPress', icon: Code2 },
      { text: 'SEO', icon: LineChart },
    ],
    highlights: [
      {
        icon: Code2,
        text: 'Desenvolvimento de aplicações web focadas em SEO e performance.',
      },
      {
        icon: Laptop,
        text: 'Otimização de usabilidade em dispositivos móveis.',
      },
      {
        icon: Blocks,
        text: 'Criação de temas personalizados e integrações com WordPress.',
      },
      {
        icon: Gauge,
        text: 'Melhorias de tempo de carregamento e performance.',
      },
    ],
  },
];

const education = {
  institution: 'Fiap',
  degree: 'Graduação em Sistemas para Internet',
  description: 'Durante o curso de Tecnologia em Sistemas de Internet, adquiri conhecimentos para criar experiências omnichannel e desenvolver plataformas tecnológicas que suportam o processo de transformação digital do mercado.',
};

const ExperienceCard = ({ experience, isOpen, onToggle }: any) => {
  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isOpen ? 'rgba(255, 119, 224, 0.05)' : 'transparent' }}
      className="rounded-xl border border-[#2E2E2E] transition-colors duration-200"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <div className="flex items-start gap-4">
          <div className={`p-2 rounded-lg ${isOpen ? 'bg-[#FF77E0]' : 'bg-[#7DE0FF]'} bg-opacity-10`}>
            <experience.icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-xl text-[#7DE0FF]">
              {experience.role}
            </h4>
            <p className="text-sm text-gray-300 mt-1">
              {experience.company} • {experience.period}
            </p>
            <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-[#FF77E0]/10 text-[#FF77E0] border border-[#FF77E0]/20">
              {experience.type}
            </span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-[#7DE0FF]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="mb-6 flex flex-wrap gap-2">
                {experience.skills.map((skill: any, skillIndex: number) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center gap-1 rounded-full bg-[#FF77E0]/10 px-3 py-1 text-sm text-white border border-[#FF77E0]/20"
                  >
                    <skill.icon className="h-3.5 w-3.5" />
                    {skill.text}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                {experience.highlights.map((highlight: any, highlightIndex: number) => (
                  <div
                    key={highlightIndex}
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <highlight.icon className="h-5 w-5 mt-0.5 text-[#7DE0FF] opacity-60" />
                    <p className="text-sm leading-relaxed">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const About = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-bold"
        >
          {t('about.title')}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-lg bg-[#2E2E2E]/20 backdrop-blur-sm p-6 border border-[#2E2E2E]"
        >
          <p className="text-lg text-gray-300">
            {t('about.intro')}
          </p>
        </motion.div>

        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-[#7DE0FF] flex items-center gap-2 mb-8">
            <Briefcase className="h-5 w-5" />
            {t('about.career')}
          </h3>
          
          <div className="space-y-4">
            {timeline.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-[#7DE0FF] flex items-center gap-2 mb-8">
            <GraduationCap className="h-5 w-5" />
            Educação
          </h3>
          
          <div className="rounded-xl border border-[#2E2E2E] p-6 bg-[#2E2E2E]/20 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#7DE0FF] bg-opacity-10">
                <BookOpen className="h-5 w-5 text-[#7DE0FF]" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-[#7DE0FF] mb-2">
                  {education.institution}
                </h4>
                <p className="text-white font-medium mb-3">
                  {education.degree}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {education.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};