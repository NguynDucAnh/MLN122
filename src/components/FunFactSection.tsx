import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Info } from 'lucide-react';

export function FunFactSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-32 px-4 bg-transparent relative overflow-hidden text-slate-700">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-2.5 bg-gradient-to-br from-[#B45309] to-[#1E3A8A] rounded-xl shadow-lg border border-white/50">
                <Info size={20} className="text-white" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B45309] to-[#1E3A8A] font-mono text-sm font-bold tracking-widest uppercase">
                Bí mật đằng sau
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Cuộc chiến <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 drop-shadow-sm">Coca</span> vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 drop-shadow-sm">Pepsi</span><br/>chỉ là bề nổi?
            </h2>
            
            <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
              <p className="text-lg">
                Khi uống Coca-Cola hay Pepsi, lợi nhuận cuối cùng đều chảy về túi các <span className="font-bold text-slate-900">cổ đông lớn nhất</span>.
              </p>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-6 md:p-8 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl text-sm md:text-base italic relative group transition-all duration-500 hover:bg-white/60 hover:shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#991B1B] via-purple-600 to-[#1E3A8A] rounded-l-2xl opacity-80" />
                <p className="relative z-10 text-slate-800">
                  "Thực tế, hai quỹ đầu tư khổng lồ <span className="font-bold text-[#1E3A8A] tracking-wide">BlackRock</span> và <span className="font-bold text-[#991B1B] tracking-wide">Vanguard</span> đang nắm giữ cổ phần chi phối tại hầu hết các công ty trong Top 500 thế giới (S&P 500), kể cả các đối thủ cạnh tranh trực tiếp của nhau."
                </p>
              </motion.div>
              
              <p className="text-lg">
                Có vẻ như sự cạnh tranh khốc liệt giữa các thương hiệu chỉ là vở kịch bề mặt, còn ông chủ thực sự ở phía sau (Giới đầu sỏ tài chính) thì <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#991B1B] to-[#1E3A8A] uppercase tracking-wider">nắm trọn cả hai đầu</span>.
              </p>
            </div>
          </motion.div>

          {/* Right Video Thumbnail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative perspective-1000"
          >
            <div 
              className="aspect-video bg-slate-900 rounded-3xl overflow-hidden relative group shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/60 cursor-pointer hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(30,58,138,0.2)] transition-all duration-500" 
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Fake thumbnail with cinematic grading */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#991B1B]/40 via-transparent to-[#1E3A8A]/40 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-60" />
              <img 
                src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop" 
                alt="Coca vs Pepsi" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110 filter saturate-150 contrast-110" 
              />
              
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                  <Play className="text-white fill-white ml-2" size={36} />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 bg-red-600/30 border border-red-500/50 text-red-100 font-mono text-[10px] font-bold tracking-widest uppercase rounded">Bóc trần</span>
                  <span className="px-2.5 py-1 bg-blue-600/30 border border-blue-500/50 text-blue-100 font-mono text-[10px] font-bold tracking-widest uppercase rounded">Tư bản độc quyền</span>
                </div>
                <p className="text-white text-lg font-display font-bold drop-shadow-md">Ảo tưởng cạnh tranh & Sự thao túng của giới tài phiệt</p>
              </div>
            </div>
            
            {/* Decorative elements behind thumbnail */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>

        </div>
      </div>

      {/* Video Modal - Keep it dark for cinematic feel */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 p-4 md:p-12"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              className="relative w-full max-w-6xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
            >
              <video 
                src="/Ảo_ảnh_sự_lựa_chọn.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-contain bg-black"
              >
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>

              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-red-500/80 hover:border-red-400 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20 z-10 group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
