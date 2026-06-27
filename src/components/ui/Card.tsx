'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'glass';
  hoverEffect?: boolean;
}

export function Card({ className = '', children, variant = 'default', hoverEffect = false, ...props }: CardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverEffect) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!hoverEffect) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      className={`${styles.card} ${styles[variant]} ${hoverEffect ? styles.hoverable : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: hoverEffect ? rotateX : 0,
        rotateY: hoverEffect ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      whileHover={hoverEffect ? { scale: 1.02 } : {}}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`${styles.header} ${className}`} {...props}>{children}</div>;
}

export function CardTitle({ className = '', children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`${styles.title} ${className}`} {...props}>{children}</h3>;
}

export function CardContent({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`${styles.content} ${className}`} {...props}>{children}</div>;
}

export function CardFooter({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`${styles.footer} ${className}`} {...props}>{children}</div>;
}
