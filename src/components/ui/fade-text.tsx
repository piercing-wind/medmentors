"use client";

import { useMemo, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

type FadeTextProps = {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
  text: string;
};

export function FadeText({
  direction = "up",
  className,
  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring" } },
  },
  text,
}: FadeTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.1 });

  const directionOffset = useMemo(() => {
    const map = { up: 50, down: -50, left: -50, right: 50 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps as {
      [name: string]: { [name: string]: number; opacity: number };
    };

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={FADE_ANIMATION_VARIANTS}
    >
      <motion.span className={className}>{text}</motion.span>
    </motion.div>
  );
}