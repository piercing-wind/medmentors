"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import parse, { domToReact, DOMNode, Element, Text } from "html-react-parser";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 20, // Increased typing speed
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<React.ReactNode[]>([]);
  const [i, setI] = useState<number>(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      setDisplayedText([]);
      setI(0);
    }
  }, [isInView]);

  useEffect(() => {
    const parsedText = parse(text, {
      replace: (domNode: DOMNode) => {
        if (domNode instanceof Element && domNode.children) {
          return domToReact(domNode.children as DOMNode[]);
        }
        if (domNode instanceof Text) {
          return domNode.data.split('').map((char, index) => (
            <span key={`${char}-${index}`}>{char}</span>
          ));
        }
      },
    });

    const flattenText = (nodes: React.ReactNode[]): React.ReactNode[] => {
      return nodes.flatMap<React.ReactNode>((node, nodeIndex) => {
        if (typeof node === 'string') {
          return node.split('').map((char, index) => <span key={`${char}-${nodeIndex}-${index}`}>{char}</span>);
        } else if (React.isValidElement(node) && node.props.children) {
          return [React.cloneElement(node, { key: `${nodeIndex}` }, flattenText(React.Children.toArray(node.props.children)))];
        } else {
          return [node];
        }
      });
    };

    const flatText = flattenText(Array.isArray(parsedText) ? parsedText : [parsedText]);

    const typingEffect = setInterval(() => {
      if (i < flatText.length) {
        setDisplayedText((prev) => [...prev, flatText[i]]);
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text, isInView]);

  return (
    <div ref={ref} className={cn("text-xl md:w-[38rem] my-4 tracking-wide", className)}>
      {displayedText}
    </div>
  );
}