import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="h-[50vh] py-20 flex items-center">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-[rgb(221,155,255)]"
        >
          Contato
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-8 text-lg text-foreground/80">
            Interessado em trabalhar juntos? Entre em contato!
          </p>
          <a
            href="mailto:seu-email@exemplo.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#A566FF] px-6 py-3 text-white transition-all duration-300 hover:border-[#FFA94D] hover:shadow-lg border-2 border-transparent"
          >
            <Mail className="h-5 w-5" />
            Entre em Contato
          </a>
        </motion.div>

        <div className="flex justify-center gap-8">
          <motion.a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-foreground/60 transition-all duration-300 hover:text-[#A566FF] hover:-translate-y-1"
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 transition-all duration-300 hover:text-[#FFA94D] hover:-translate-y-1"
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="https://twitter.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 transition-all duration-300 hover:text-[#A566FF] hover:-translate-y-1"
          >
            <Twitter className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};