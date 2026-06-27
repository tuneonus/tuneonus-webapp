import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'glass';
  hoverEffect?: boolean;
}

export function Card({ className = '', children, variant = 'default', hoverEffect = false, ...props }: CardProps) {
  return (
    <div 
      className={`${styles.card} ${styles[variant]} ${hoverEffect ? styles.hoverable : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
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
