/*
 *  author: Yagnik Poshiya
 *  github: https://github.com/neuroworklabs/Neurons
 */

'use client';

import { useEffect, useRef } from 'react';

import {
  ambientOffsetFromCursor,
  cursorToPercent,
  DEFAULT_CURSOR_POINT,
  lerpCursor,
} from '@/lib/home/home-cursor-gradient-logic';

const CURSOR_SMOOTHING = 0.075;

export function HomeCursorGradient() {
  const ambientRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(DEFAULT_CURSOR_POINT);
  const currentRef = useRef(DEFAULT_CURSOR_POINT);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const applyCursorStyles = () => {
      const { x, y } = cursorToPercent(currentRef.current);
      const offset = ambientOffsetFromCursor(currentRef.current);

      if (ambientRef.current) {
        ambientRef.current.style.setProperty('--cursor-x', x);
        ambientRef.current.style.setProperty('--cursor-y', y);
        ambientRef.current.style.transform = `translate3d(${offset.x}%, ${offset.y}%, 0)`;
      }

      if (cursorRef.current) {
        cursorRef.current.style.setProperty('--cursor-x', x);
        cursorRef.current.style.setProperty('--cursor-y', y);
      }
    };

    const onMove = (event: MouseEvent) => {
      targetRef.current = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };
    };

    const onLeave = () => {
      targetRef.current = DEFAULT_CURSOR_POINT;
    };

    const tick = () => {
      currentRef.current = lerpCursor(currentRef.current, targetRef.current, CURSOR_SMOOTHING);
      applyCursorStyles();
      rafRef.current = requestAnimationFrame(tick);
    };

    applyCursorStyles();
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      <div aria-hidden className="home-page-bg pointer-events-none absolute inset-0" />
      <div ref={ambientRef} className="home-gradient-ambient" aria-hidden="true" />
      <div ref={cursorRef} className="home-gradient-cursor" aria-hidden="true" />
    </>
  );
}
