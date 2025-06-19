
import React, { useRef, useMemo } from 'react';
import useIntersectionObserver from '@/lib/useIntersectionObserver';
import { cn } from '@/lib/utils';

type AnimationDirection = 'up' | 'down' | 'left' | 'right';
const ANIMATION_DIRECTIONS: AnimationDirection[] = ['up', 'down', 'left', 'right'];

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: AnimationDirection | 'random';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, direction = 'up' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const finalDirection = useMemo(() => {
    if (direction === 'random') {
      return ANIMATION_DIRECTIONS[Math.floor(Math.random() * ANIMATION_DIRECTIONS.length)];
    }
    return direction;
  }, [direction]);

  const animationClass = {
    up: 'animate-fade-in-up',
    down: 'animate-fade-in-down',
    left: 'animate-fade-in-left',
    right: 'animate-fade-in-right',
  }[finalDirection as AnimationDirection];

  return (
    <div
      ref={sectionRef}
      className={cn(
        'opacity-0',
        isVisible && animationClass,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
