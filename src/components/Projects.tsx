import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    image: '/img/sites/Portifolio.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-[#FF6B6B] to-[#FF8E53]',
  },
  {
    image: '/img/sites/Honda_Motos_1.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-[#FF6B6B] to-[#FF8E53]',
  },
  {
    image: '/img/sites/Honda_Racing_1.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-[#4A90E2] to-[#67B26F]',
  },
  {
    image: '/img/sites/Honda_Concessionaria_1.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-[#6C5CE7] to-[#a855f7]',
  },
  {
    image: '/img/sites/DMB-1.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-[#FF6B6B] to-[#FF8E53]',
  },
  {
    image: '/img/sites/DMB-2.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-[#4A90E2] to-[#67B26F]',
  },
  {
    image: '/img/sites/DMB-3.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-[#6C5CE7] to-[#a855f7]',
  },
  {
    image: '/img/sites/IAS.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-[#4A90E2] to-[#67B26F]',
  },
  {
    image: '/img/sites/Marco_Legal.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gradient: 'from-[#6C5CE7] to-[#a855f7]',
  },
];

export const Projects = () => {
  const { t } = useTranslation();
  const projectItems = t('projects.items', { returnObjects: true });

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent"
        >
          {t('projects.title')}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectItems.map((project: any, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-secondary/40 backdrop-blur-sm border border-white/5"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={projects[index].image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="relative p-6">
                <div className="absolute inset-0 bg-gradient-to-br opacity-5 transition-opacity duration-300 group-hover:opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${projects[index].gradient.split('from-')[1].split(' ')[0]}, ${projects[index].gradient.split('to-')[1]})`,
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm border border-white/10"
                      >
                        <Code2 className="h-3.5 w-3.5" />
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={projects[index].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-4 py-2 text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.viewProject}
                    </a>
                    {/* <a
                      href={projects[index].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                    >
                      <Github className="h-4 w-4" />
                      {project.viewCode}
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};