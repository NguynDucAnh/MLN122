import React from 'react';
import { motion } from 'motion/react';
import { Coins, TrendingUp, Landmark, Globe, Briefcase, Factory } from 'lucide-react';

// Reduced number of icons for better performance
const icons = [
  { Icon: Coins, x: "10%", y: "20%", duration: 30 },
  { Icon: TrendingUp, x: "85%", y: "15%", duration: 35 },
  { Icon: Landmark, x: "70%", y: "70%", duration: 25 },
  { Icon: Globe, x: "15%", y: "80%", duration: 32 },
  { Icon: Briefcase, x: "50%", y: "40%", duration: 40 },
  { Icon: Factory, x: "80%", y: "45%", duration: 28 },
];

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#FEFCE8]">
      
      {/* Texture overlay (Removed mix-blend-mode for huge performance gain) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]"></div>

      {/* 
        Abstract Animated Blobs 
        (Performance Fix: Replaced expensive CSS filter:blur with hardware-accelerated radial-gradients)
      */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1], 
          x: [0, 30, 0],
          y: [0, 20, 0],
          opacity: [0.6, 0.8, 0.6] 
        }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(252,211,77,0.3)_0%,transparent_60%)]" 
        style={{ willChange: 'transform' }}
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          x: [0, -30, 0],
          y: [0, -20, 0],
          opacity: [0.4, 0.6, 0.4] 
        }} 
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute top-[10%] -right-[10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(251,146,60,0.2)_0%,transparent_60%)]" 
        style={{ willChange: 'transform' }}
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1], 
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3] 
        }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(248,113,113,0.15)_0%,transparent_60%)]" 
        style={{ willChange: 'transform' }}
      />

      {/* Floating Economy Icons */}
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-[#B45309] opacity-[0.03]"
          style={{ left: item.x, top: item.y, willChange: 'transform' }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <item.Icon size={120 + (index % 3) * 40} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Very subtle grid lines to resemble financial charts */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#B45309 1px, transparent 1px), linear-gradient(90deg, #B45309 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
}
