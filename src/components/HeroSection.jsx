'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="inline-block"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Harini K K
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Frontend Developer with <span className="font-semibold text-yellow-600 dark:text-yellow-400">1+ years</span> of experience specializing in 
            <span className="font-semibold text-orange-600 dark:text-orange-400"> responsive web design</span> and 
            <span className="font-semibold text-red-600 dark:text-red-400"> e-commerce development</span>. 
            Expert in HTML5, CSS3, and JavaScript with proven React.js skills. Strong eye for pixel-perfect design implementation 
            and cross-browser compatibility.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-300 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="font-medium">Chennai, India</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone className="w-5 h-5 text-green-500" />
              <span className="font-medium">+91 7200797370</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail className="w-5 h-5 text-red-500" />
              <span className="font-medium">harinikarthikeyan22@gmail.com</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="gap-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-3 border-2 border-slate-300 dark:border-slate-600 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
