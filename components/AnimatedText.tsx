import React from 'react';
import { motion } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
};

const heading = {
  hidden: {
    opacity: 1,
  },
  visible: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const textSpan = {
  hidden: { 
    opacity: 0,
    y: 50, 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({text, className=""}: AnimatedTextProps) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1 
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className} dark:text-light`}
        variants={heading}
        initial="hidden"
        animate="visible"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word+'-'+index}
            className="inline-block"
            variants={textSpan}
          >
            {word}&nbsp;
          </motion.span>
        ))}

      </motion.h1>
    </div>
  );
};

export default AnimatedText;