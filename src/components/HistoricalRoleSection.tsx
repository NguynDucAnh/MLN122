import { useState } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, Cpu, Users, Globe, Scale, Skull, TrendingDown, AlertTriangle, ArrowRight, Activity, Zap } from 'lucide-react';

export function HistoricalRoleSection() {
  // Slider state from 0 (all Pros) to 100 (all Cons). Default at 55 representing slightly leaning towards Cons.
  const [sliderVal, setSliderVal] = useState(55);

  const leftWidth = 100 - sliderVal;
  const rightWidth = sliderVal;

  const pros = [
    {
      title: 'Bệ phóng Cách mạng KH-CN',
      desc: 'Chuyển biến lao động thủ công thô sơ lên cơ khí hóa, tự động hóa, thúc đẩy cuộc cách mạng công nghiệp 4.0, tạo bệ phóng R&D khổng lồ.',
      icon: <Cpu size={18} />,
    },
    {
      title: 'Xã hội hóa sản xuất quy mô lớn',
      desc: 'Chuyển đổi nền kinh tế hàng hóa nhỏ lẻ tự cấp tự túc thành nền sản xuất liên hoàn đại công nghiệp tập trung quy mô toàn cầu.',
      icon: <Users size={18} />,
    },
    {
      title: 'Tối ưu hóa Phân công Quốc tế',
      desc: 'Đẩy mạnh phân công lao động sâu rộng, liên kết chuỗi sản xuất toàn cầu, biến mọi quốc gia thành mắt xích thống nhất.',
      icon: <Globe size={18} />,
    }
  ];

  const cons = [
    {
      title: 'Bản chất vị kỷ cực đoan',
      desc: 'Mục đích sản xuất không vì an sinh số đông nhân dân lao động mà để chiếm đoạt giá trị thặng dư tối đa cho thiểu số giới tài phiệt.',
      icon: <Skull size={18} />,
    },
    {
      title: 'Hố sâu bất bình đẳng toàn cầu',
      desc: 'Khoét sâu sự phân hóa giàu nghèo tột cùng: nhóm 1% dân số giàu nhất thâu tóm phần lớn của cải, đẩy hàng tỷ người vào nghèo khó.',
      icon: <Scale size={18} />,
    },
    {
      title: 'Khủng hoảng & Chiến tranh sinh tồn',
      desc: 'Tranh giành giật tài nguyên, thị trường là mầm mống trực tiếp/gián tiếp của các cuộc khủng hoảng chu kỳ và xung đột vũ trang tàn khốc.',
      icon: <TrendingDown size={18} />,
    }
  ];

  // Tilting scale rotation angle (-15 deg to +15 deg) based on slider value
  const scaleTiltAngle = ((sliderVal - 50) / 50) * 12;

  return (
    <section className="py-24 px-4 bg-[#040714] relative border-t border-[#131a3a] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-[#d4af37] font-mono text-xs uppercase tracking-[0.22em] font-semibold block mb-3">
            GIAI ĐOẠN 4: VAI TRÒ LỊCH SỬ CỦA CHỦ NGHĨA TƯ BẢN
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            TÍNH BIỆN CHỨNG: <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-200 to-[#ff5e3a]">
              CÂN BẰNG BAO NHIÊU NHỊP TIM?
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Chủ nghĩa tư bản có tính hai mặt mâu thuẫn sâu sắc. Hãy kéo <span className="text-[#d4af37] font-semibold">thanh trượt nhịp tim</span> ở giữa để phân tích thế cân bằng lịch sử này.
          </p>
        </motion.div>

        {/* Dynamic Tilting Scale Visual */}
        <div className="flex flex-col items-center justify-center mb-10">
          <motion.div
            style={{ rotate: scaleTiltAngle }}
            transition={{ type: "spring", stiffness: 60 }}
            className="flex items-center gap-6 bg-[#0d122b]/80 border border-[#1e295d] px-6 py-3 rounded-2xl shadow-xl select-none"
          >
            <div className="flex items-center gap-2 text-emerald-400">
              <Sun size={20} className="animate-spin" style={{ animationDuration: '10s' }} />
              <span className="font-mono text-xs font-bold">MẶT TÍCH CỰC (PROS)</span>
            </div>
            
            <div className="h-4 w-px bg-[#1e295d]" />
            <Scale size={24} className={sliderVal > 50 ? 'text-[#ff5e3a]' : 'text-emerald-400'} />
            <div className="h-4 w-px bg-[#1e295d]" />

            <div className="flex items-center gap-2 text-[#ff5e3a]">
              <Moon size={20} />
              <span className="font-mono text-xs font-bold">MẶT HẠN CHẾ (CONS)</span>
            </div>
          </motion.div>
          
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-2">
            Góc nghiêng phân tích lịch sử: {scaleTiltAngle.toFixed(1)}° về phía {scaleTiltAngle > 0 ? "hạn chế tất yếu" : "vai trò lịch sử"}
          </div>
        </div>

        {/* Interactive Split-Screen Layout */}
        <div className="bg-[#0d122b]/30 border border-[#1e295d]/60 rounded-3xl overflow-hidden shadow-2xl relative">
          
          <div className="flex flex-col md:flex-row min-h-[500px]">
            
            {/* Left Side: Pros (Sáng / Tích cực) */}
            <div 
              className="p-6 sm:p-10 transition-all duration-300 relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#1e295d]/30 w-full md:w-0"
              style={{ flexGrow: leftWidth, flexShrink: 1, flexBasis: 0, minWidth: 0 }}
            >
              {/* Overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
                    <Sun size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold block">VAI TRÒ TÍCH CỰC</span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">Mặt Sáng Lịch Sử</h3>
                  </div>
                </div>

                {/* Pros List */}
                <div className="space-y-6">
                  {pros.map((item, i) => (
                    <div key={i} className="group/item flex gap-3 items-start">
                      <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover/item:text-emerald-400 transition-colors">
                          {item.title}
                        </h4>
                        {leftWidth > 35 && (
                          <p className="text-slate-400 text-xs mt-1 leading-relaxed font-light">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {leftWidth > 40 && (
                <div className="text-xs text-emerald-500/60 font-mono mt-8 border-t border-emerald-500/10 pt-4 flex items-center gap-1.5">
                  <Activity size={12} /> Sức bật giải phóng lực lượng sản xuất xã hội hóa.
                </div>
              )}
            </div>

            {/* Right Side: Cons (Tối / Hạn chế) */}
            <div 
              className="p-6 sm:p-10 transition-all duration-300 relative flex flex-col justify-between w-full md:w-0"
              style={{ flexGrow: rightWidth, flexShrink: 1, flexBasis: 0, minWidth: 0 }}
            >
              {/* Overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-bl from-red-500/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-500/10 border border-red-500/20 text-[#ff5e3a] rounded-lg">
                    <Moon size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#ff5e3a] font-bold block">GIỚI HẠN TẤT YẾU</span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">Mặt Tối Hệ Thống</h3>
                  </div>
                </div>

                {/* Cons List */}
                <div className="space-y-6">
                  {cons.map((item, i) => (
                    <div key={i} className="group/item flex gap-3 items-start">
                      <div className="p-1.5 rounded bg-red-500/10 text-[#ff5e3a] shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover/item:text-[#ff5e3a] transition-colors">
                          {item.title}
                        </h4>
                        {rightWidth > 35 && (
                          <p className="text-slate-400 text-xs mt-1 leading-relaxed font-light">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {rightWidth > 40 && (
                <div className="text-xs text-[#ff5e3a]/60 font-mono mt-8 border-t border-red-500/10 pt-4 flex items-center gap-1.5">
                  <AlertTriangle size={12} /> Mâu thuẫn cốt lõi không thể tự điều chỉnh bên trong chế độ tư hữu.
                </div>
              )}
            </div>

          </div>

          {/* Core Heartbeat line running across the split screens */}
          <div className="absolute bottom-16 left-0 right-0 h-10 pointer-events-none opacity-45">
            <svg viewBox="0 0 1000 40" preserveAspectRatio="none" className="w-full h-full">
              {/* Left wave: smooth, harmonious sinusoidal wave */}
              <path
                d="M 0,20 Q 50,5 100,20 T 200,20 T 300,20 T 400,20"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                className="opacity-80"
              />
              {/* Right wave: jagged, rapid, irregular heartbeat wave in red */}
              <path
                d="M 400,20 L 450,20 L 460,5 L 470,35 L 480,10 L 490,20 L 580,20 L 590,-5 L 600,45 L 610,10 L 620,20 L 750,20 L 760,0 L 770,40 L 780,5 L 790,20 L 1000,20"
                fill="none"
                stroke="#ff5e3a"
                strokeWidth="1.5"
                className="opacity-90 animate-pulse"
              />
            </svg>
          </div>

        </div>

        {/* Heartbeat Slider control bar */}
        <div className="mt-8 bg-[#0d122b]/80 border border-[#1e295d] p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-2 text-slate-300 font-mono text-xs font-semibold shrink-0">
            <Activity className="text-[#ff5e3a] animate-pulse" size={16} />
            <span>KÉO TRƯỢT PHÂN TÍCH BIỆN CHỨNG:</span>
          </div>
          <input
            type="range"
            min="10"
            max="90"
            value={sliderVal}
            onChange={(e) => setSliderVal(Number(e.target.value))}
            className="flex-1 h-1.5 bg-[#1e295d] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
            id="heartbeat-scale-slider"
          />
          <div className="flex gap-4 shrink-0 font-mono text-xs">
            <span className="text-emerald-400 font-bold">Mặt Sáng: {100 - sliderVal}%</span>
            <span className="text-slate-500">|</span>
            <span className="text-[#ff5e3a] font-bold">Mặt Tối: {sliderVal}%</span>
          </div>
        </div>

      </div>
    </section>
  );
}
