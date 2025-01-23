import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Honda Motos',
    description: 'Modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    liveUrl: 'https://www.honda.com.br/motos/',
    gradient: 'from-[#FF6B6B] to-[#FF8E53]',
  },
  {
    title: 'Honda Racing',
    description: 'Collaborative task management application',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    technologies: ['JavaScript', 'HTML', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://www.honda.com.br/racing/',
    gradient: 'from-[#4A90E2] to-[#67B26F]',
  },
  {
    title: 'Honda Consórcio',
    description: 'Personal portfolio website with interactive features',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['Vue', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://www.consorcionacionalhonda.com.br/',
    gradient: 'from-[#6C5CE7] to-[#a855f7]',
  },
  {
    title: 'Dia Mundial do Banheiro - Edição 2023',
    description: 'Modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    liveUrl: 'https://diamundialdobanheiro.org.br',
    gradient: 'from-[#FF6B6B] to-[#FF8E53]',
  },
  {
    title: 'Dia Mundial do Banheiro - Edição 2023',
    description: 'Collaborative task management application',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    technologies: ['JavaScript', 'HTML', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://diamundialdobanheiro.org.br/edicao-2023/',
    gradient: 'from-[#4A90E2] to-[#67B26F]',
  },
  {
    title: 'Dia Mundial do Banheiro - Edição 2022',
    description: 'Personal portfolio website with interactive features',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['Vue', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    gradient: 'from-[#6C5CE7] to-[#a855f7]',
  },
  {
    title: 'Observatório do Marco Legal do Saneamento',
    description: 'Modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    liveUrl: 'https://marcolegal.aguaesaneamento.org.br',
    gradient: 'from-[#FF6B6B] to-[#FF8E53]',
  },
  {
    title: 'Instituto Água e Saneamento',
    description: 'Collaborative task management application',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    technologies: ['JavaScript', 'HTML', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://www.aguaesaneamento.org.br',
    gradient: 'from-[#4A90E2] to-[#67B26F]',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent"
        >
          Projetos
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
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
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="relative p-6">
                <div className="absolute inset-0 bg-gradient-to-br opacity-5 transition-opacity duration-300 group-hover:opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${project.gradient.split('from-')[1].split(' ')[0]}, ${project.gradient.split('to-')[1]})`,
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
                    {project.technologies.map((tech) => (
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
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-4 py-2 text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver Projeto
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
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