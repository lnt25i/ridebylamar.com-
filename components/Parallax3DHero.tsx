'use client';
import { useRef, useEffect, ReactNode } from 'react';

export function Parallax3DHero({ children, className }: {
  children: ReactNode; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: globalThis.MouseEvent) => {
      const rx = (e.clientY / window.innerHeight - 0.5) * -6;
      const ry = (e.clientX / window.innerWidth - 0.5) * 6;
      el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => { el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'; };
    window.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={className}
      style={{ transformStyle:'preserve-3d', transition:'transform 0.1s ease', willChange:'transform' }}>
      {children}
    </div>
  );
}
