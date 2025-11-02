'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Database, TestTube, Briefcase, Zap } from 'lucide-react';
import { staggerContainer, scaleIn } from '@/lib/animations';

const skills = {
  frontend: [
    'JavaScript (ES6+)', 'HTML5', 'CSS3', 'React.js', 'React Hooks', 
    'Next.js', 'jQuery', 'Ajax'
  ],
  backend: ['SQL', 'MongoDB', 'Node.js'],
  frameworks: [
    'Tailwind CSS', 'SASS/SCSS', 'Bootstrap', 'Styled Components', 
    'Material UI', 'ShadCN/UI'
  ],
  stateManagement: ['Redux', 'Context API', 'Zustand'],
  tools: [
    'WordPress', 'Shopify', 'Git', 'Webpack', 'npm/Yarn', 'Figma', 'Jira'
  ],
  testing: ['Jest', 'React Testing Library']
};

const skillCategories = [
  {
    key: 'frontend',
    title: 'Frontend Technologies',
    icon: Code,
    iconBg: 'bg-gradient-to-r from-blue-500 to-blue-600',
    titleGradient: 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent',
    skillBg: 'bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800',
    skillText: 'text-blue-800 dark:text-blue-200',
    skills: skills.frontend
  },
  {
    key: 'backend',
    title: 'Backend',
    icon: Database,
    iconBg: 'bg-gradient-to-r from-green-500 to-green-600',
    titleGradient: 'bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent',
    skillBg: 'bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800',
    skillText: 'text-green-800 dark:text-green-200',
    skills: skills.backend
  },
  {
    key: 'frameworks',
    title: 'CSS Frameworks',
    icon: Palette,
    iconBg: 'bg-gradient-to-r from-purple-500 to-purple-600',
    titleGradient: 'bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent',
    skillBg: 'bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800',
    skillText: 'text-purple-800 dark:text-purple-200',
    skills: skills.frameworks
  },
  {
    key: 'stateManagement',
    title: 'State Management',
    icon: Briefcase,
    iconBg: 'bg-gradient-to-r from-orange-500 to-orange-600',
    titleGradient: 'bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent',
    skillBg: 'bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800',
    skillText: 'text-orange-800 dark:text-orange-200',
    skills: skills.stateManagement
  },
  {
    key: 'tools',
    title: 'Tools & CMS',
    icon: Zap,
    iconBg: 'bg-gradient-to-r from-red-500 to-red-600',
    titleGradient: 'bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent',
    skillBg: 'bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900 dark:to-red-800',
    skillText: 'text-red-800 dark:text-red-200',
    skills: skills.tools
  },
  {
    key: 'testing',
    title: 'Testing',
    icon: TestTube,
    iconBg: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
    titleGradient: 'bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent',
    skillBg: 'bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800',
    skillText: 'text-indigo-800 dark:text-indigo-200',
    skills: skills.testing
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, responsive web applications
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={category.key} variants={scaleIn}>
                <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105 h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <motion.div
                        className={`p-2 ${category.iconBg} rounded-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <span className={`${category.titleGradient} font-bold`}>
                        {category.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => (
                        <motion.span 
                          key={index} 
                          className={`px-4 py-2 ${category.skillBg} ${category.skillText} rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
