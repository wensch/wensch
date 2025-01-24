import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Languages, FileDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const menuItems = [
  { label: 'header.home', href: '#home' },
  { label: 'header.about', href: '#about' },
  { label: 'header.skills', href: '#skills' },
  { label: 'header.projects', href: '#projects' },
  { label: 'header.contact', href: '#contact' },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  const pdfLink = i18n.language === 'pt' 
    ? '/files/mateus-wensch-cv-pt.pdf' 
    : '/files/mateus-wensch-cv-en.pdf';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className={`nav-link ${
                    activeSection === item.href.slice(1) ? 'active' : ''
                  }`}
                >
                  {t(item.label)}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Link para o PDF local dependendo do idioma */}
          <a
            href={pdfLink}
            download
            className="flex items-center gap-2 rounded-full border border-[rgb(221,155,255)]/50 px-3 py-1.5 text-[rgb(221,155,255)] text-sm transition-all duration-300 hover:border-[rgb(221,155,255)] hover:bg-[rgb(221,155,255)]/5"
          >
            <FileDown className="h-4 w-4" />
            <span className="hidden sm:inline">{t('header.downloadCV')}</span>
          </a>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-gray hover:text-[rgb(221,155,255)] transition-colors text-sm"
          >
            <Languages className="h-4 w-4" />
            <span className="hidden sm:inline">
              {i18n.language === 'pt' ? 'EN' : 'PT'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className={`lg:hidden fixed left-0 right-0 top-16 overflow-hidden bg-background/95 backdrop-blur-sm ${
            isMenuOpen ? 'border-b border-white/10' : ''
          }`}
        >
          <ul className="px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block py-2 text-lg ${
                    activeSection === item.href.slice(1)
                      ? 'text-[rgb(221,155,255)]'
                      : 'text-gray hover:text-[rgb(221,155,255)]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </header>
  );
};
