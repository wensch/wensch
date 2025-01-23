import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Angular', color: '#DD0031' },
  { name: 'Vue', color: '#42B883' },
  { name: 'JavaScript', color: '#F7DF1E' }
];

export const TechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <span className="text-xl text-gray/90">
        {t('hero.buildingWith')}
      </span>
      <div className="h-10 relative min-w-[180px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: [1, 1.1, 1],
              transition: {
                scale: {
                  duration: 0.3,
                  times: [0, 0.5, 1]
                }
              }
            }}
            exit={{ opacity: 0, y: -20 }}
            style={{ color: technologies[currentIndex].color }}
            className="absolute inset-0 text-2xl sm:text-3xl font-bold text-center drop-shadow-lg"
          >
            {technologies[currentIndex].name}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};