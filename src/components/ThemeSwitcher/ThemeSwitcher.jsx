import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';
const ThemeSwitcher = () => {
  const [isOn, setIsOn] = useState(false);
  console.log(isOn);
  return (
    <div
      className="container"
      data-darkmode={isOn}
      onClick={() => setIsOn(!isOn)}
      style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
    >
      <motion.div layout className="handle">
        <AnimatePresence mode="wait" initial={false}>
          <motion.i
            className={`icon far fa-${isOn ? 'moon' : 'sun'}`}
            key={isOn ? 'moon' : 'sun'}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.i>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;
