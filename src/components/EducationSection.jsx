'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { School, MenuBook, EmojiEvents } from '@mui/icons-material';

const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Velammal College of Engineering and Technology',
    period: '08/2020 - 05/2024',
    location: 'Madurai, Tamil Nadu',
    grade: 'CGPA: 8.88',
    year: '2024',
    level: 'Bachelor\'s Degree',
    icon: <School />
  },
  {
    degree: 'Higher Secondary (XII)',
    institution: 'Mahatma Montessori Matriculation Higher Secondary School',
    period: '05/2018 - 03/2020',
    location: 'Madurai, Tamil Nadu',
    grade: 'Percentage: 89.83%',
    year: '2020',
    level: 'Higher Secondary',
    icon: <EmojiEvents />
  },
  {
    degree: 'Secondary (X)',
    institution: 'Fusco\'s Matriculation School',
    period: '05/2017 - 03/2018',
    location: 'Madurai, Tamil Nadu',
    grade: 'Percentage: 97%',
    year: '2018',
    level: 'Secondary',
    icon: <MenuBook />
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/30 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative flex items-start gap-2 md:gap-8"
              >
                {/* Timeline line - only show if not the last item */}
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500"
                      style={{ height: `calc(100% + 48px)` }}></div>
                )}
                
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(245, 158, 11, 0.7)",
                        "0 0 0 10px rgba(245, 158, 11, 0)",
                        "0 0 0 0 rgba(245, 158, 11, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="text-white text-xl">
                      {edu.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div 
                  className="flex-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-orange-600 dark:text-orange-400 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                        {edu.year}
                      </span>
                      <span className="px-3 py-1 border-2 border-orange-500 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold">
                        {edu.level}
                      </span>
                    </div>
                  </div>

                  {/* Grade and Details */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <GraduationCap className="w-5 h-5 text-white" />
                      </motion.div>
                      <span className="font-semibold text-green-700 dark:text-green-300">
                        {edu.grade}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-slate-600 dark:text-slate-300 font-medium">
                          {edu.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-500" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}