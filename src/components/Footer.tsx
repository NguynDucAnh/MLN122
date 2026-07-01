import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-24 px-4 bg-transparent overflow-hidden flex flex-col items-center justify-center border-t border-[#B45309]/20 backdrop-blur-sm">
      
      {/* Background soft glow base */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(254,252,232,0.8)_0%,transparent_100%)]" />

      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B45309]/50 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="p-4 bg-orange-100/50 backdrop-blur-md border border-orange-200/60 text-[#B45309] rounded-full shadow-[0_0_30px_rgba(180,83,9,0.15)]">
            <Sparkles size={32} className="animate-pulse" />
          </div>
        </motion.div>

        {/* Conclusion Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight drop-shadow-sm"
        >
          KẾT LUẬN
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-slate-700 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto mb-16"
        >
          Chủ nghĩa tư bản độc quyền, dù có sức mạnh điều tiết và thích nghi to lớn đến đâu, vẫn không thể vượt qua được giới hạn lịch sử của chính mình. Những mâu thuẫn nội tại vẫn tiếp tục tích tụ, tạo tiền đề vật chất khách quan cho một phương thức sản xuất mới, ưu việt hơn trong tương lai.
        </motion.p>

        {/* Sign off */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="border-t border-slate-300/50 pt-8 mt-8 flex flex-col items-center gap-3"
        >
          <span className="text-[11px] font-mono tracking-widest text-[#B45309] uppercase font-bold">
            Bài thuyết trình môn Triết học Mác - Lênin
          </span>
          <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase">
            Designed for Impact & Clarity
          </span>
        </motion.div>

      </div>
    </footer>
  );
}
