'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'bounce';
  delay?: number;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animations = {
    fadeUp: `animate-fade-in-up ${delay}ms ease-out`,
    fadeLeft: `animate-fade-in-left ${delay}ms ease-out`,
    fadeRight: `animate-fade-in-right ${delay}ms ease-out`,
    scaleIn: `animate-scale-in ${delay}ms ease-out`,
    bounce: `animate-bounce-in ${delay}ms ease-out`,
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? animations[animation] : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}
