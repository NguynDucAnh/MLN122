import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16 pb-24 overflow-hidden bg-[#040714]" id="hero">

      {/* Background Bio-Pulse Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/8 to-amber-500/8 rounded-full blur-[160px] pointer-events-none bio-pulse-glow-1 z-0" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none bio-pulse-glow-2 z-0" />

      {/* Cybernetic Bio-Tentacle SVG — Sinh vật thức giấc */}
      <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
        <svg viewBox="0 0 1000 1000" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Central Nucleus — trái tim của sinh vật */}
          <motion.circle
            cx="500" cy="500" r="18"
            fill="#d4af37"
            className="filter drop-shadow-[0_0_18px_#d4af37]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="500" cy="500" r="35" stroke="#7fd8ff" strokeWidth="0.8" strokeDasharray="5 8" className="opacity-30" />
          <circle cx="500" cy="500" r="70" stroke="#7fd8ff" strokeWidth="0.4" className="opacity-15" />
          <motion.circle
            cx="500" cy="500" r="110"
            stroke="#d4af37" strokeWidth="0.3"
            strokeDasharray="3 20"
            className="opacity-20"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* 6 Xúc tu vươn ra từ tâm — sinh vật thức giấc */}
          {[
            { d: "M500,500 C400,300 200,450 80,220", color: "#7fd8ff" },
            { d: "M500,500 C620,320 820,180 940,320", color: "#d4af37" },
            { d: "M500,500 C280,580 180,780 100,920", color: "#7fd8ff" },
            { d: "M500,500 C720,640 860,760 880,960", color: "#d4af37" },
            { d: "M500,500 C440,380 620,520 820,480", color: "#ff5e3a" },
            { d: "M500,500 C340,480 240,380 120,520", color: "#ff5e3a" },
          ].map((t, idx) => (
            <g key={idx}>
              {/* Track shadow */}
              <path d={t.d} stroke="#1e295d" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              {/* Animated glow path */}
              <motion.path
                d={t.d}
                stroke={t.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="50, 200"
                animate={{ strokeDashoffset: [0, -250] }}
                transition={{ duration: 7 + idx * 1.5, repeat: Infinity, ease: "linear" }}
                className="filter drop-shadow-[0_0_6px_currentColor]"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Decorative matrix grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1330_1px,transparent_1px),linear-gradient(to_bottom,#0c1330_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_50%,#000_55%,transparent_100%)] opacity-25 z-0" />

      {/* Content */}
      <div className="z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center px-4 relative">

        {/* Course Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d122b]/80 border border-[#1e295d] text-slate-300 text-xs font-mono mb-10 shadow-2xl backdrop-blur-md"
        >
          <Sparkles className="text-amber-500 animate-pulse" size={13} />
          <span>Kinh tế Chính trị Mác - Lênin · Chương 4 · Chủ nghĩa Tư bản Độc quyền</span>
        </motion.div>

        {/* Hook câu hỏi — xuất hiện trước tiêu đề */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="text-[#ff5e3a]/90 font-mono text-xs sm:text-sm uppercase tracking-[0.18em] mb-6 font-semibold italic max-w-2xl"
        >
          "Nếu chủ nghĩa tư bản là một sinh vật,<br className="hidden sm:block" />
          nó đã chết theo dự đoán của Marx chưa?"
        </motion.p>

        {/* H1 Tiêu đề chính theo spec */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-4 leading-[1.1] tracking-tight"
        >
          SỰ VẬN ĐỘNG CỦA<br className="hidden sm:block" />
          <span className="italic shimmer-text">
            CHỦ NGHĨA TƯ BẢN
          </span>
        </motion.h1>

        {/* H2 Subtitle theo spec */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-lg sm:text-xl font-sans text-slate-300 max-w-2xl mb-8 leading-relaxed font-light"
        >
          Cạnh tranh, <span className="text-[#d4af37] font-semibold">Độc quyền</span> &amp; <span className="text-[#7fd8ff] font-semibold">Vai trò lịch sử</span>
        </motion.h2>

        {/* Lead text theo spec */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-slate-400 text-sm sm:text-base max-w-2xl mb-16 leading-relaxed font-sans"
        >
          Trong bối cảnh toàn cầu hóa và cách mạng khoa học - công nghệ, chủ nghĩa tư bản độc quyền không hề đứng im mà luôn tự điều chỉnh để thích nghi. Sự vận động này tạo ra những biểu hiện vô cùng phức tạp ở cả cấp độ tư nhân lẫn nhà nước.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 opacity-50 cursor-pointer"
          onClick={() => {
            document.getElementById('manifestation-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase">Cuộn để khám phá</span>
          <div className="w-5 h-8 border border-slate-600 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-1.5 bg-[#d4af37] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
