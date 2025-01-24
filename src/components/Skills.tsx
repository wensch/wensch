import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Server, Database, Wrench, CheckCircle, Repeat } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Palette, // Ícone para Frontend
    skills: [
      'HTML',
      'CSS',
      'Sass',
      'Tailwind',
      'Styled Components',
      'Storybook',
      'Bootstrap',
      'Material-UI',
      'Handlebars',
      'SEO' // Adicionada da seção Others
    ],
    color: '#A566FF',
  },
  {
    title: 'Programming',
    icon: Code2, // Ícone para Programação
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Vue.js',
      'Angular',
      'Next.js',
      'Nuxt.js',
      'Node.js',
      'Jest',
      'TDD',
      'PHP',
      'WordPress',
    ],
    color: '#FFA94D',
  },
  {
    title: 'Backend & Database',
    icon: Database, // Ícone para Backend e Bancos de Dados
    skills: [
      'Node.js',
      'MySQL',
      'SQL',
      'MongoDB',
      'PostgreSQL',
      'SQLite',
      'Firebase',
      'REST APIs',
      'GraphQL',
      'WebSockets', // Adicionada da seção Others
      'Microservices' // Adicionada da seção Others
    ],
    color: '#6CC644',
  },
  {
    title: 'Testing & Quality',
    icon: CheckCircle, // Ícone para Testes e Qualidade
    skills: [
      'Cypress',
      'Jest'
    ],
    color: '#FF6B6B',
  },
  {
    title: 'DevOps',
    icon: Server, // Ícone para DevOps
    skills: [
      'Docker',
      'Git',
      'GitHub',
      'CI/CD',
      'Jenkins',
      'Azure DevOps',
      'Webpack',
      'ESLint'
    ],
    color: '#4D96FF',
  },
  {
    title: 'Agile Methodologies',
    icon: Repeat, // Ícone para Metodologias Ágeis
    skills: [
      'Agile/Scrum',
      'Kanban'
    ],
    color: '#FFD700',
  }
];

export default skillCategories;

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-[#9238ff]"
        >
          Skills
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-[#2E2E2E]/20 backdrop-blur-sm p-6 border border-[#2E2E2E] hover:border-[#FFA94D]/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#A566FF]/5 to-[#FFA94D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2 rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: category.color }}
                  >
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#dd9bff]">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="relative rounded-full px-4 py-2 text-sm text-white backdrop-blur-sm border border-[#FFA94D]/20 hover:border-[#A566FF]/40 transition-all duration-300 overflow-hidden group/skill"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#A566FF]/10 to-[#FFA94D]/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">{skill}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};