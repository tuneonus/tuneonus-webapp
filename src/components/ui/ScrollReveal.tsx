'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  amount?: number | 'all' | 'some';
}

export function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  amount = 0.2
}: ScrollRevealProps) {
  
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 40, x: 0 };
      case 'down': return { y: -40, x: 0 };
      case 'left': return { x: 40, y: 0 };
      case 'right': return { x: -40, y: 0 };
      case 'none': return { x: 0, y: 0 };
      default: return { y: 40, x: 0 };
    }
  };

  const offset = getDirectionOffset();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
}
