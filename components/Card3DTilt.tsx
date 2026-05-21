'use client';
import { useRef, MouseEvent, ReactNode } from 'react';

export function Card3DTilt({ children, className, intensity = 10 }: {
  children: ReactNode; className?: string; intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * intensity;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -intensity;
    el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.03,1.03,1.03)`;
    el.style.boxShadow = `${-x * 2}px ${y * 2}px 40px rgba(255,149,0,0.18)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    el.style.boxShadow = 'none';
  };

  return (
    <div ref={ref} className={className}
      style={{ transition:'transform 0.18s ease, box-shadow 0.18s ease', transformStyle:'preserve-3d', willChange:'transform' }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}
