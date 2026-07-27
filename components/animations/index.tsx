'use client';

import React, { ReactNode, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * FadeIn animation component
 * Respects prefers-reduced-motion
 * Smooth fade-in on component mount
 */
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: FadeInProps) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  }), []);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SlideInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * SlideIn animation component
 * Respects prefers-reduced-motion
 * Slides in from specified direction
 */
export const SlideIn = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
}: SlideInProps) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = useMemo(() => {
    const baseVariants = {
      up: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
      down: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } },
      left: { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } },
      right: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } },
    };
    return baseVariants[direction];
  }, [direction]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * ScaleIn animation component
 * Respects prefers-reduced-motion
 * Scales up from small to full size
 */
export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: ScaleInProps) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = useMemo(() => ({
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  }), []);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
