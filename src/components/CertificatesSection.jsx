'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';
import { staggerContainer, scaleIn } from '@/lib/animations';

const certificates = [
  {
    name: 'Build AI Agents and Automate Workflows with n8n',
    platform: 'LinkedIn Learning',
    link: 'https://www.linkedin.com/learning/certificates/0b88f07509345a369465ed5d3818c90b1de3ee5641d16997806447c38d65f8db'
  },
  {
    name: 'Design User Experiences with Figma',
    platform: 'LinkedIn Learning',
    link: 'https://www.linkedin.com/learning/certificates/42fff727be93833f000906c6d203ce98728cc9d93c55455fc7dfa6531974770f'
  },
  {
    name: 'Getting Started with Front-End and Web Development',
    platform: 'Coursera',
    link: 'https://coursera.org/share/d34e6794cb9d3a588dacab2854a895ad'
  },
  {
    name: 'Developing Front-End Apps with React',
    platform: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/H66SY46661K5'
  },
  {
    name: 'Getting Started with Git and GitHub',
    platform: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/H66SY46661K5'
  },
  {
    name: 'Google Project Management',
    platform: 'Coursera',
    link: 'https://coursera.org/share/0344959eece99702d4bfd1916cd8816b'
  },
  {
    name: 'Google UX Design',
    platform: 'Coursera',
    link: 'https://coursera.org/share/41027820cb705f4cd7581469ec7fb08d'
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/30 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-orange-100/20"></div>
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
              Professional Certificates
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="relative h-full"
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full cursor-pointer"
              >
                <Card className="group transition-all duration-500 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 hover:scale-105 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="pb-0 p-5 relative z-10 flex-1 flex flex-col justify-between">
                    <motion.div 
                      className="flex items-start gap-4 w-full mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex-shrink-0"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Award className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-1">
                          {cert.name}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {cert.platform}
                        </p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
