'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function FloatUp3D({ children, index=0, className }: {
  children: ReactNode; index?: number; className?: string;
}) {
  return (
    <motion.div className={className}
      initial={{ opacity:0, y:60, rotateX:20, z:-50 }}
      whileInView={{ opacity:1, y:0, rotateX:0, z:0 }}
      viewport={{ once:true, margin:'-60px' }}
      transition={{ duration:0.75, delay:index*0.1, ease:[0.22,1,0.36,1] }}
      style={{ transformStyle:'preserve-3d', perspective:800 }}>
      {children}
    </motion.div>
  );
}
