import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const { t } = useTranslation();

  const roles = [
    t('hero.roles.frontend'),
    t('hero.roles.techlead'),
    t('hero.roles.cleancode'),
    t('hero.roles.uiux')
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = roles[currentIndex];
    
    if (isTyping && displayText !== currentText) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
    } else if (isTyping && displayText === currentText) {
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    } else if (!isTyping && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 50);
    } else if (!isTyping && displayText.length === 0) {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      setIsTyping(true);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isTyping, roles]);

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-300 tracking-wide"
        >
          {displayText}
          <span className="typewriter-cursor" />
        </motion.p>
      </div>
    </div>
  );
};