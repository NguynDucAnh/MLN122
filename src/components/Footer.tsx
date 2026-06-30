import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-[#040714] py-32 px-4 text-center relative overflow-hidden min-h-screen flex flex-col justify-center items-center">
      
      {/* Retracting tentacle / dust animation */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-40">
        <motion.div
          animate={{ 
            scale: [1, 0.2, 0.5, 0], 
            opacity: [0.6, 0.2, 0.4, 0] 
          }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          className="w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,175,55,0.3)_0%,transparent_70%)] rounded-full blur-[40px]"
        />
        {/* Particles retracting */}
        <div className="absolute inset-0 overflow-hidden flex justify-center items-center">
             {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
                  initial={{ 
                    x: (Math.random() - 0.5) * 800, 
                    y: (Math.random() - 0.5) * 800,
                    opacity: 0.5
                  }}
                  animate={{ 
                    x: 0, 
                    y: 0,
                    opacity: 0,
                    scale: 0
                  }}
                  transition={{ 
                    duration: 4 + Math.random() * 4, 
                    repeat: Infinity,
                    delay: Math.random() * 4,
                    ease: "easeIn"
                  }}
                />
             ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 space-y-16">
        
        {/* Section Label */}
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#d4af37] font-mono text-xs uppercase tracking-[0.3em] font-semibold block"
        >
          KẾT LUẬN CHUNG
        </motion.span>

        {/* Core Message Block */}
        <motion.blockquote 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl lg:text-3xl font-display font-light text-slate-200 leading-relaxed italic border-l-2 border-[#d4af37] pl-6 md:pl-10 py-4 text-left shadow-2xl bg-[#0d122b]/30 backdrop-blur-sm rounded-r-2xl"
        >
          "Dù độc quyền tư nhân hay độc quyền nhà nước có thiên biến vạn hóa để tự cứu lấy mình, mọi sự điều chỉnh này chủ yếu vẫn nhằm bảo vệ sự tồn tại của hệ thống tư bản. Với những mâu thuẫn cốt lõi không thể tự khắc phục (tính xã hội hóa cao của lực lượng sản xuất &gt;&lt; chế độ chiếm hữu tư nhân), chủ nghĩa tư bản mang trong mình giới hạn lịch sử tất yếu và không thể tồn tại vĩnh viễn."
        </motion.blockquote>

        {/* Final Open Question */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-[#ff5e3a] text-sm md:text-base font-mono tracking-widest uppercase font-semibold"
        >
          Vậy đến khi nào sinh vật này hết khả năng biến hình?
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#1e295d] to-transparent my-12" />

        {/* Team/Student Info Placeholder */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-slate-400 text-xs font-mono tracking-wider space-y-3 text-center"
        >
          <p>Môn học: Kinh tế Chính trị Mác - Lênin</p>
          <p>GVHD: [Điền Tên Giảng Viên]</p>
          <p>Thực hiện bởi: Nhóm [Số Nhóm] - Lớp [Tên Lớp]</p>
          <p className="mt-12 text-[10px] opacity-40">© 2026. Thiết kế lấy cảm hứng từ cấu trúc biến dạng biện chứng.</p>
        </motion.div>
      </div>
    </footer>
  );
}
