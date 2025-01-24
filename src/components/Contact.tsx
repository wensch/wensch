import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="h-[50vh] py-20 flex items-center">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-[rgb(221,155,255)]"
        >
          {t('contact.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-8 text-lg text-foreground/80">
            {t('contact.description')}
          </p>
          <a
            href="mailto:wensch22@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#A566FF] px-6 py-3 text-white transition-all duration-300 hover:border-[#A566FF] hover:shadow-lg border-2 border-transparent"
          >
            <Mail className="h-5 w-5" />
            {t('contact.button')}
          </a>
        </motion.div>

        <div className="flex justify-center gap-8">
          <motion.a
            href="https://github.com/wensch"
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
            href="https://www.linkedin.com/in/mateus-wensch-5a822411a/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 transition-all duration-300 hover:text-[#A566FF] hover:-translate-y-1"
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="https://wa.me/5511993218514?text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 transition-all duration-300 hover:text-[#A566FF] hover:-translate-y-1"
          >
            <Phone className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};