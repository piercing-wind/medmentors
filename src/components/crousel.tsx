'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const images = [
      "/course1.png",
      "/course2.png",
      "/course3.jpeg",
      "/course4.jpeg",
      "/course5.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setProgress(0);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgress(0);
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    setProgress(newProgress);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          handleNext();
          return 0;
        }
        return prevProgress + 1;
      });
    }, 50);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          handleNext();
          return 0;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
   <>
    <section className="h-[16rem] sm:h-[18rem] md:h-[32rem] lg:h-[38rem] w-[22rem] sm:w-[32rem] md:w-[40rem] lg:w-[50rem] 2xl:w-[70rem] mx-auto relative flex items-center justify-center shadow-xl rounded-3xl my-14 mb-5">
      <button
        onClick={handlePrev}
        className="absolute -left-8 sm:-left-24 md:-left-32 p-2 z-10"
      >
       <ChevronLeftIcon size={100} className='text-blue-400'/> 
      </button>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="w-full h-full flex items-center justify-center absolute rounded-2xl overflow-hidden "
        >
          <Image 
            unoptimized
            loading='lazy'
            src={images[currentIndex]} 
            alt="Medmentor Services" 
            className="h-full w-full" 
            fill
            style={{
               objectFit: 'fill',
            }}
          />

        </motion.div>
      </AnimatePresence>
      <button
        onClick={handleNext}
        className="absolute -right-8 sm:-right-24 md:-right-32 z-10 p-2"
      >
       <ChevronRightIcon size={100} className='text-blue-400'/> 
      </button>
    </section>
      <div
        className="h-[4px] bg-goldLight cursor-pointer w-40 rounded-2xl mx-auto my-4"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-gold rounded-2xl"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-center space-x-2 my">
         {images.slice().reverse().map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${index === images.length - 1 - currentIndex ? 'bg-gold' : 'bg-goldLight'}`}
              onClick={() => handleDotClick(images.length - 1 - index)}
            />
          ))}
      </div>
    </>
  );
};

export default Carousel;