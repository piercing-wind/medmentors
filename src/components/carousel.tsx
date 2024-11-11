'use client'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const thumbnailRefs = useRef<(HTMLLIElement | null)[]>([]);

  const slides = [
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/course1.png`,
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/course2.png`,
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/course3.jpeg`,
    `${process.env.NEXT_PUBLIC_WEBSITE_URL}/course5.png`,
  ];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const updateActiveSlide = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  const handleNextClick = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevClick();
      if (e.key === 'ArrowRight') handleNextClick();
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
   if (thumbnailRefs.current[activeIndex]) {
     const thumbnail = thumbnailRefs.current[activeIndex];
     const rect = thumbnail.getBoundingClientRect();
     const isInView = rect.left >= 0 && rect.right <= window.innerWidth;
 
     if (!isInView) {
       thumbnail.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
         inline: 'center',
       });
     }
   }
 }, [activeIndex]);

  return (
    <div className="p-4 max-w-5xl flex flex-col gap-4 relative mx-auto mb-14 overflow-x-hidden">
      <section className="rounded-xl overflow-hidden min-h-[30vmin] aspect-[4/3] sm:aspect-[16/9] shadow-lg">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full relative flex bg-gradient-to-r from-gray-400 to-gray-200"
          >
            <Image src={slides[activeIndex]} alt="" fill style={{ objectFit: 'fill' }} />
          </motion.div>
        </AnimatePresence>
      </section>
      <section className="flex relative gap-3 h-full max-w-5xl items-center justify-between p-1 overflow-x-hidden">
        <button
          type="button"
          className="flex-1 absolute -left-0 sm:relative bg-transparent border-none cursor-pointer flex items-center flex-shrink-0"
          aria-label="Previous slide"
          onClick={handlePrevClick}
        >
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="mx-auto outline-none border-0 scale-100 flex-shrink-0 inline-grid w-[max(80%,1.5rem)] h-[max(80%,1.5rem)] text-gray-500 hover:text-gray-800"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
            />
          </svg>
        </button>
        <ul className="flex h-full overflow-x-auto scrollbar-hide w-[90%] mx-4 sm:mx-auto pr-8">
          {slides.map((slide, index) => (
            <motion.li
              key={index}
              ref={(el) => {
                thumbnailRefs.current[index] = el;
              }}
              className={`cursor-pointer scrollbar-hide h-14 w-24 sm:h-24 rounded-md flex-shrink-0 m-1 flex-1 ${index === activeIndex ? 'outline outline-2 outline-blue-500' : ''}`}
              onClick={() => updateActiveSlide(index)}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={index === activeIndex ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="relative h-full w-full rounded-md overflow-hidden flex-shrink-0">
                <Image loading="lazy" src={slide} alt="" fill style={{ objectFit: 'cover' }} />
              </div>
            </motion.li>
          ))}
        </ul>
        <button
          type="button"
          className="flex-1 bg-transparent absolute right-2 sm:relative border-none cursor-pointer flex items-center flex-shrink-0"
          aria-label="Next slide"
          onClick={handleNextClick}
        >
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="mx-auto outline-none flex-shrink-0 border-0 scale-100 inline-grid w-[max(80%,1.5rem)] h-[max(80%,1.5rem)] text-gray-500 hover:text-gray-800"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        </button>
      </section>
    </div>
  );
};

export default Carousel;