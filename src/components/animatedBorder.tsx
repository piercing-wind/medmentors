'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface AnimatedBorderProps {
  start?: string;
  end?: string;
}

const AnimatedBorder: React.FC<AnimatedBorderProps> = ({ start = '10%', end = '40%' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="border-b-2 border-spacing-3 border-blue-500 mt-8"
      initial={{ width: start }}
      animate={inView ? { width: end } : { width: start }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    />
  );
};

export default AnimatedBorder;