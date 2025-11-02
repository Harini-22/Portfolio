'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white py-12 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-slate-100/5"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Harini K K
          </h3>
          <p className="text-slate-300 text-lg">Frontend Developer</p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:harinikarthikeyan22@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </motion.a>
          <motion.a
            href="tel:+917200797370"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4" />
            <span>Phone</span>
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 pt-6"
        >
          <p className="text-slate-400 mb-2">&copy; 2024 Harini K K. All rights reserved.</p>
          <p className="text-slate-500 text-sm">
            Built with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> using Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

