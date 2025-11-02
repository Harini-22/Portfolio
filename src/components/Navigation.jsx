'use client';

import { motion } from 'framer-motion';

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Navigation() {
  return (
    <motion.nav 
      className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl z-50 border-b border-white/20 dark:border-slate-700/50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
