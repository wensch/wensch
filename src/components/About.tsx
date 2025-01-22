import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Globe2, 
  Code2, 
  GitBranch, 
  Users, 
  Rocket,
  TestTube,
  GitPullRequest,
  Blocks,
  Webhook,
  ChevronDown
} from 'lucide-react';

const timeline = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2022 - Present',
    type: 'Remoto',
    icon: Globe2,
    skills: [
      { text: 'React', icon: Code2 },
      { text: 'TypeScript', icon: Code2 },
      { text: 'Jest', icon: TestTube },
      { text: 'GraphQL', icon: Webhook },
    ],
    highlights: [
      {
        icon: Code2,
        text: 'Liderando o desenvolvimento de aplicações web modernas e responsivas utilizando React e TypeScript.',
      },
      {
        icon: GitBranch,
        text: 'Implementando práticas de Clean Code e padrões de projeto para garantir a manutenibilidade do código.',
      },
      {
        icon: Users,
        text: 'Mentorando desenvolvedores júniors e realizando code reviews.',
      },
      {
        icon: Rocket,
        text: 'Colaborando com equipes de UX/UI para criar interfaces intuitivas e acessíveis.',
      },
      {
        icon: TestTube,
        text: 'Implementando testes automatizados com Jest e Testing Library.',
      },
      {
        icon: GitPullRequest,
        text: 'Gerenciando esteira de CI/CD com GitHub Actions.',
      },
      {
        icon: Users,
        text: 'Participando ativamente das cerimônias ágeis e planejamento de sprints.',
      },
      {
        icon: Blocks,
        text: 'Desenvolvendo componentes reutilizáveis com Storybook.',
      },
      {
        icon: Webhook,
        text: 'Integrando APIs RESTful e GraphQL em aplicações frontend.',
      },
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Innovations',
    period: 'Mar 2020 - Dec 2021',
    type: 'Híbrido',
    icon: Briefcase,
    skills: [
      { text: 'Vue.js', icon: Code2 },
      { text: 'Nuxt.js', icon: Code2 },
      { text: 'REST APIs', icon: Webhook },
    ],
    highlights: [
      {
        icon: Code2,
        text: 'Desenvolvimento de interfaces responsivas com Vue.js e Nuxt.js.',
      },
      {
        icon: Rocket,
        text: 'Implementação de features complexas em aplicações SPA e SSR.',
      },
      {
        icon: Blocks,
        text: 'Criação de animações e transições suaves para melhor UX.',
      },
      {
        icon: Webhook,
        text: 'Integração com APIs REST e implementação de autenticação.',
      },
      {
        icon: Rocket,
        text: 'Otimização de performance e tempo de carregamento.',
      },
      {
        icon: Code2,
        text: 'Desenvolvimento de temas customizáveis com Sass.',
      },
      {
        icon: GitPullRequest,
        text: 'Participação em code reviews e pair programming.',
      },
      {
        icon: GitBranch,
        text: 'Documentação de código e componentes.',
      },
      {
        icon: Code2,
        text: 'Manutenção e refatoração de código legado.',
      },
      {
        icon: Users,
        text: 'Colaboração próxima com designers e backend developers.',
      },
    ],
  },
];

const ExperienceCard = ({ experience, isOpen, onToggle, isFirst }: any) => {
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

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-bold text-[#7DE0FF]"
        >
          Sobre
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-lg bg-[#2E2E2E]/20 backdrop-blur-sm p-6 border border-[#2E2E2E]"
        >
          <p className="text-lg text-gray-300">
            Desenvolvedor Frontend apaixonado por criar experiências web excepcionais
            e interfaces intuitivas. Com forte experiência em React e TypeScript,
            busco sempre as melhores práticas e tecnologias mais modernas para
            entregar soluções de alta qualidade.
          </p>
        </motion.div>

        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-[#7DE0FF] flex items-center gap-2 mb-8">
            <Briefcase className="h-5 w-5" />
            Trajetória Profissional
          </h3>
          <div className="space-y-4">
            {timeline.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};