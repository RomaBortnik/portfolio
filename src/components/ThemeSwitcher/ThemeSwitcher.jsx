import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';
const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleThemeChange = async () => {
    await setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div
      className="container"
      data-darkmode={isDarkTheme}
      onClick={handleThemeChange}
      style={{ justifyContent: isDarkTheme ? 'flex-end' : 'flex-start' }}
    >
      <motion.div layout className="handle">
        <AnimatePresence mode="wait" initial={false}>
          <motion.i
            className={`icon fi-rr-${isDarkTheme ? 'moon' : 'sun'}`}
            key={isDarkTheme ? 'moon' : 'sun'}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 2, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.i>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;
