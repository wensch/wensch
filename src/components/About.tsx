import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Code2,
  Users,
  Rocket,
  TestTube,
  Blocks,
  ChevronDown,
  Building2,
  Laptop,
  LineChart,
  Gauge,
  BookOpen,
  Layout,
  Zap,
  Repeat,
  Network
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const timeline = [
  {
    role: 'about.experience.seniorFrontendSafra.role',
    company: 'about.experience.seniorFrontendSafra.company',
    period: 'about.experience.seniorFrontendSafra.period',
    type: 'about.experience.seniorFrontendSafra.type',
    icon: Building2,
    skills: [
      { text: 'Angular', icon: Code2 },
      { text: 'TypeScript', icon: Code2 },
      { text: 'RxJS', icon: Repeat },
      { text: 'Front-end Architecture', icon: Layout },
      { text: 'Clean Code', icon: Code2 },
      { text: 'SOLID', icon: Blocks },
      { text: 'Design Patterns', icon: Layout },
      { text: 'Performance', icon: Zap },
      { text: 'Automated Testing', icon: TestTube },
      { text: 'API Integration', icon: Network },
    ],
    highlights: 'about.experience.seniorFrontendSafra.highlights',
  },
  {
    role: 'about.experience.techLead.role',
    company: 'about.experience.techLead.company',
    period: 'about.experience.techLead.period',
    type: 'about.experience.techLead.type',
    icon: Building2,
    skills: [
      { text: 'Vue.js', icon: Code2 },
      { text: 'Nuxt.js', icon: Code2 },
      { text: 'Cypress', icon: TestTube },
      { text: 'Storybook', icon: Blocks },
      { text: 'Agile', icon: Users },
    ],
    highlights: 'about.experience.techLead.highlights',
  },
  {
    role: 'about.experience.frontendFbiz.role',
    company: 'about.experience.frontendFbiz.company',
    period: 'about.experience.frontendFbiz.period',
    type: 'about.experience.frontendFbiz.type',
    icon: Laptop,
    skills: [
      { text: 'HTML5', icon: Code2 },
      { text: 'CSS', icon: Code2 },
      { text: 'JavaScript', icon: Code2 },
      { text: 'Webpack', icon: Blocks },
      { text: 'Gulp', icon: Gauge },
    ],
    highlights: 'about.experience.frontendFbiz.highlights',
  },
  {
    role: 'about.experience.frontendUpperid.role',
    company: 'about.experience.frontendUpperid.company',
    period: 'about.experience.frontendUpperid.period',
    type: 'about.experience.frontendUpperid.type',
    icon: Building2,
    skills: [
      { text: 'JavaScript', icon: Code2 },
      { text: 'PHP', icon: Code2 },
      { text: 'WordPress', icon: Code2 },
      { text: 'SEO', icon: LineChart },
    ],
    highlights: 'about.experience.frontendUpperid.highlights',
  },
];

type Experience = (typeof timeline)[number];

// Os textos em pt/en usam <b>...</b> para destacar o início do item; renderiza
// como <strong> sem usar dangerouslySetInnerHTML.
const renderHighlight = (text: string): ReactNode[] =>
  text.split(/(<b>.*?<\/b>)/g).map((part, index) =>
    part.startsWith('<b>') ? (
      <strong key={index} className="font-semibold text-white">
        {part.slice(3, -4)}
      </strong>
    ) : (
      part
    )
  );

interface ExperienceCardProps {
  experience: Experience;
  isOpen: boolean;
  onToggle: () => void;
}

const ExperienceCard = ({ experience, isOpen, onToggle }: ExperienceCardProps) => {
  const { t } = useTranslation();
  const highlights = t(experience.highlights, { returnObjects: true }) as string[];

  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isOpen ? 'rgba(255, 119, 224, 0.05)' : 'transparent' }}
      className="rounded-xl border border-[#2E2E2E] transition-colors duration-200"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <div className="flex items-start gap-4">
          <div className={`p-2 rounded-lg ${isOpen ? 'bg-[#FF77E0]' : 'bg-[#7DE0FF]'} bg-opacity-10`}>
            <experience.icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-xl text-[#dd9bff]">
              {t(experience.role)}
            </h4>
            <p className="text-sm text-gray-300 mt-1">
              {t(experience.company)} • {t(experience.period)}
            </p>
            <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-[#FF77E0]/10 text-[#FF77E0] border border-[#FF77E0]/20">
              {t(experience.type)}
            </span>
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
                {experience.skills.map((skill, skillIndex) => (
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
                {highlights.map((highlight, highlightIndex) => (
                  <div
                    key={highlightIndex}
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Rocket className="h-5 w-5 mt-0.5 text-[#7DE0FF] opacity-60" />
                    <p className="text-sm leading-relaxed">
                      {renderHighlight(highlight)}
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
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-bold"
        >
          {t('about.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-lg bg-[#2E2E2E]/20 backdrop-blur-sm p-6 border border-[#2E2E2E]"
        >
          <p className="text-lg text-gray-300">
            {t('about.intro')}
          </p>
        </motion.div>

        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-[#f740cc] flex items-center gap-2 mb-8">
            <Briefcase className="h-5 w-5" />
            {t('about.career')}
          </h3>

          <div className="space-y-4">
            {timeline.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-[#f740cc] flex items-center gap-2 mb-8">
            <GraduationCap className="h-5 w-5" />
            {t('about.education.title')}
          </h3>

          <div className="rounded-xl border border-[#2E2E2E] p-6 bg-[#2E2E2E]/20 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#7DE0FF] bg-opacity-10">
                <BookOpen className="h-5 w-5 text-[#7DE0FF]" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-[#dd9bff] mb-2">
                  {t('about.education.institution')}
                </h4>
                <p className="text-white font-medium mb-3">
                  {t('about.education.degree')}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('about.education.description')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};