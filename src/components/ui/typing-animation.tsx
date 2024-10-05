"use client";

import React, { useEffect, useState, ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import parse, { domToReact, DOMNode, Element, Text } from "html-react-parser";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text = "",
  duration = 10,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<ReactNode[]>([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (inView && typeof text === "string") {
      setDisplayedText([]);
      let i = 0;
      let startTime: number | null = null;

      const parsedText = parse(text, {
        replace: (domNode: DOMNode) => {
          if (domNode instanceof Element && domNode.children) {
            return domToReact(domNode.children as DOMNode[]);
          }
          if (domNode instanceof Text) {
            return domNode.data.split('').map((char, index) => (
              <span key={`${char}-${index}-${Date.now()}`}>{char}</span>
            ));
          }
        },
      });

      const flattenText = (nodes: ReactNode[]): ReactNode[] => {
        return nodes.flatMap<ReactNode>((node, nodeIndex) => {
          if (typeof node === 'string') {
            return node.split('').map((char, index) => <span key={`${char}-${nodeIndex}-${index}-${Date.now()}`}>{char}</span>);
          } else if (React.isValidElement(node) && node.props.children) {
            return [React.cloneElement(node, { key: `${nodeIndex}-${Date.now()}` }, flattenText(React.Children.toArray(node.props.children)))];
          } else {
            return [node];
          }
        });
      };

      const flatText = flattenText(Array.isArray(parsedText) ? parsedText : [parsedText]);

      const typeCharacter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        if (elapsed > duration) {
          if (i < flatText.length) {
            setDisplayedText((prev) => [...prev, flatText[i]]);
            i++;
            startTime = timestamp;
          }
        }

        if (i < flatText.length) {
          animationFrameRef.current = requestAnimationFrame(typeCharacter);
        }
      };

      animationFrameRef.current = requestAnimationFrame(typeCharacter);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        startTime = null;
      };
    }
  }, [inView, duration, text]);

  return (
    <div ref={ref} className={cn("text-xl md:w-[38rem] my-4 tracking-wide", className)}>
      {displayedText.map((char, index) => (
        <span key={`${char}-${index}-${Date.now()}`}>{char}</span>
      ))}
    </div>
  );
}