'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Rocket, ArrowRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function ProjectsSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    arrows: false
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/30 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-orange-100/20"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between flex-col sm:flex-row gap-4 mb-4">
            <div className="text-center sm:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
                Showcasing innovative solutions and creative problem-solving
              </p>
            </div>
            <Link href="/projects" className="cursor-pointer">
              <Button 
                className="gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
        
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {projects.map((project, index) => (
              <div key={index} className="px-3 h-full">
                <Card className="group h-full transition-all duration-500 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 hover:scale-[1.02] relative overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                      <motion.div
                        className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Rocket className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10 flex flex-col flex-grow">
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <motion.span 
                          key={idx} 
                          className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                        <Button 
                          variant="outline" 
                          className="w-full gap-2 border-2 border-orange-300 dark:border-orange-600 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </Button>
                      </a>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

