'use client'
import { delay, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface FadeUpAnimatorProps {
  children: React.ReactNode;
  className?: string;
  delay? : number;
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

export const ZoomAnimator: React.FC<FadeUpAnimatorProps> = ({ children, className, delay = 0.2}) => {
   const ref = useRef(null);
   const inView = useInView(ref, { once: false, amount: 0.2 });
 
   const variants = {
     hidden: { opacity: 0, scale: 0.5 },
     visible: { 
       opacity: 1, 
       scale: 1, 
       transition: { 
         type: 'spring', 
         stiffness: 100, 
         damping: 10, 
         duration: 0.5,
         delay : delay
       } 
     },
   };
 
   return (
     <motion.div
       ref={ref}
       initial="hidden"
       animate={inView ? 'visible' : 'hidden'}
       variants={variants}
       className={className}
     >
       {children}
     </motion.div>
   );
 };
 