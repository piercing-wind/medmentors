'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const images = [
  `${process.env.NEXT_PUBLIC_WEBSITE_URL}/course1.png`,
  `${process.env.NEXT_PUBLIC_WEBSITE_URL}/course2.png`,
  `${process.env.NEXT_PUBLIC_WEBSITE_URL}/course3.jpeg`,
  `${process.env.NEXT_PUBLIC_WEBSITE_URL}/course4.jpeg`,
  `${process.env.NEXT_PUBLIC_WEBSITE_URL}/course5.png`,
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
    trackTouch: true,
  });

  return (
    <main>
      <section
        {...swipeHandlers}
        className="relative flex items-center justify-center w-[90%] md:w-[70%] h-[16rem] sm:h-[18rem] md:h-[26rem] lg:h-[32rem] 2xl:h-[38rem] mx-auto shadow-xl rounded-3xl my-14 mb-5"
      >
 
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex items-center justify-center rounded-xl md:rounded-3xl overflow-hidden z-50 shadow-lg"
            style={{boxShadow: '0 0 10px 2px rgba(0, 0, 255, 0.3)'}}
          >
            <Image
              unoptimized
              loading='lazy'
              src={images[currentIndex]}
              alt="Medmentor Services"
              className="h-full w-full object-cover"
              fill
              style={{
                objectFit: 'fill',
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Preview of previous image */}
        <div className="absolute -left-4 md:-left-12 -bottom-4 w-full h-full opacity-50 rounded-xl md:rounded-3xl overflow-hidden shadow-md border border-b-0">
          <div className='relative h-full w-full '>
            <Image
              unoptimized
              loading='lazy'
              src={images[(currentIndex - 1 + images.length) % images.length]}
              alt="Previous Image"
              fill
              style={{
                objectFit: 'fill',
                zIndex: -20,
              }}
            />
          </div>
        </div>
        {/* Preview of next image */}
        <div className="absolute -right-4 md:-right-12 -bottom-4 w-full h-full opacity-50 rounded-xl md:rounded-3xl overflow-hidden shadow-md border border-b-0">
          <div className='relative h-full w-full '>
            <Image
              unoptimized
              loading='lazy'
              src={images[(currentIndex + 1) % images.length]}
              alt="Next Image"
              fill
              style={{
                objectFit: 'fill',
                zIndex: -20,
              }}
            />
          </div>
        </div>
      </section>
      <div className='relative w-[50%] mx-auto flex items-center justify-between mt-14'>
         <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-1 opacity-60 rounded-full border border-blue-400"
         >
            <ChevronLeftIcon size={32} className='text-blue-400' />
         </button>
         <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-1 opacity-60 rounded-full border border-blue-400"
         >
            <ChevronRightIcon size={32} className='text-blue-400' />
         </button>
      </div>
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
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-gold' : 'bg-goldLight'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </main>
  );
};

export default Carousel;