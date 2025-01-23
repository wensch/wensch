import React from 'react';
import { motion } from 'framer-motion';
import { RotatingText } from './RotatingText';
import { TechStack } from './TechStack';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-4"
    >
      <div className="text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold sm:text-8xl tracking-tight bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent mb-4"
        >
          Mateus Wensch
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <RotatingText />
          <TechStack />
        </motion.div>
      </div>
    </section>
  );
};