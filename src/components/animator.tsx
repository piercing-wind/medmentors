'use client'
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface FadeUpAnimatorProps {
  children: React.ReactNode;
}

const FadeUpAnimator: React.FC<FadeUpAnimatorProps> = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpAnimator;