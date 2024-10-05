"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation2({
  text,
  duration = 20, // Increased typing speed
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      setDisplayedText("");
      setI(0);
    }
  }, [isInView]);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]);

  return (
    <h1
      ref={ref}
      className={cn(
        "",
        className,
      )}
    >
      {displayedText.split('').map((char, index) => (
        <span key={`${char}-${index}-${Math.random()}-${Date.now()}`}>{char}</span>
      ))}
    </h1>
  );
}