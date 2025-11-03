import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../lib/theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 p-2 rounded-full ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-white'
      } shadow-lg z-50`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 360 : 0,
        }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {theme === 'dark' ? (
          <MoonIcon className="w-6 h-6 text-yellow-400" />
        ) : (
          <SunIcon className="w-6 h-6 text-orange-400" />
        )}
      </motion.div>
    </motion.button>
  );
}