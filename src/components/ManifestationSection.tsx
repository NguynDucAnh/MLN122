import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ShieldAlert, Cpu, Landmark, Share2, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TentacleNode {
  id: number;
  title: string;
  shortTitle: string;
  x: number; // Percent on map
  y: number; // Percent on map
  manifestationTitle: string;
  bulletPoints: string[];
  modernInsight: string;
  glowColor: string;
}

const tentacleNodes: TentacleNode[] = [
  {
    id: 1,
    title: "1. Tích tụ & Tập trung tư bản mới",
    shortTitle: "Tập Trung Tư Bản",
    x: 25,
    y: 35,
    manifestationTitle: "Sự xuất hiện của các siêu tập đoàn đa quốc gia bên cạnh xí nghiệp vừa và nhỏ",
    bulletPoints: [
      "Xuất hiện các công ty độc quyền xuyên quốc gia (TNCs) hoạt động song song, chi phối các xí nghiệp vừa và nhỏ.",
      "Hình thành các tổ chức độc quyền khổng lồ đa ngành: Concern (liên kết chống rủi ro hệ thống) và Conglomerate (tổ hợp tài chính đa ngành, phi sản xuất trực tiếp)."
    ],
    modernInsight: "Hệ sinh thái hiện đại cho thấy các công ty công nghệ khổng lồ mua lại hàng nghìn startup tiềm năng trước khi họ kịp cạnh tranh.",
    glowColor: "shadow-[0_0_15px_rgba(127,216,255,0.4)] bg-[#7fd8ff]"
  },
  {
    id: 2,
    title: "2. Bành trướng của Tư bản tài chính",
    shortTitle: "Bành Trướng Tài Chính",
    x: 65,
    y: 28,
    manifestationTitle: "Thâm nhập đa ngành kết hợp chế độ ủy nhiệm quyền lực",
    bulletPoints: [
      "Không chỉ gói gọn trong ngân hàng - công nghiệp truyền thống, mà thâm nhập vào các tổ hợp liên hoàn: Công - Nông - Thương - Tín - Dịch vụ.",
      "Bổ sung 'chế độ ủy nhiệm': các nhà tài phiệt nắm quyền ủy nhiệm từ hàng triệu cổ đông nhỏ để chi phối định hướng chiến lược toàn bộ nền kinh tế toàn cầu."
    ],
    modernInsight: "Các quỹ đầu tư khổng lồ như BlackRock, Vanguard nắm cổ phần khống chế ở hầu hết các tập đoàn cạnh tranh cùng ngành trên thế giới.",
    glowColor: "shadow-[0_0_15px_rgba(212,175,55,0.4)] bg-[#d4af37]"
  },
  {
    id: 3,
    title: "3. Xuất khẩu tư bản thế kỷ mới",
    shortTitle: "Xuất Khẩu Tư Bản",
    x: 48,
    y: 50,
    manifestationTitle: "Dòng vốn lưu chuyển hai chiều giữa các nước tư bản phát triển",
    bulletPoints: [
      "Mũi tên hai chiều: luồng vốn chủ yếu chảy qua lại giữa các nước tư bản phát triển với nhau (thay vì chỉ đổ về các nước kém phát triển như cổ điển).",
      "Hình thức đa dạng hóa: kết hợp xuất khẩu hàng hóa và xuất khẩu tư bản (FDI, BOT, BT, PPP).",
      "Tính chất mềm dẻo: bỏ bớt sự áp đặt chính trị thực dân cũ, đề cao nguyên tắc kinh tế 'cùng có lợi'."
    ],
    modernInsight: "Mỹ và châu Âu liên tục đầu tư chéo vào các lĩnh vực như sản xuất bán dẫn, AI, năng lượng xanh của nhau để cùng hưởng lợi thế độc quyền.",
    glowColor: "shadow-[0_0_15px_rgba(255,94,58,0.4)] bg-[#ff5e3a]"
  },
  {
    id: 4,
    title: "4. Phân chia thị trường toàn cầu",
    shortTitle: "Phân Chia Thị Trường",
    x: 35,
    y: 72,
    manifestationTitle: "Đan xen sâu sắc giữa Toàn cầu hóa và Khu vực hóa",
    bulletPoints: [
      "Toàn cầu hóa vượt bậc: Do sức mạnh bành trướng vĩ đại của các tập đoàn xuyên quốc gia (TNCs) phá vỡ các rào cản quốc gia.",
      "Khu vực hóa kinh tế: Sự hình thành các liên minh kinh tế khu vực khép kín (như EU, NAFTA, v.v.) để bảo vệ lợi ích nội bộ trước đối thủ bên ngoài."
    ],
    modernInsight: "Chiến tranh thương mại và các chính sách bảo hộ công nghệ phân mảnh chuỗi cung ứng toàn cầu thành các khối khu vực tin cậy.",
    glowColor: "shadow-[0_0_15px_rgba(168,85,247,0.4)] bg-purple-500"
  },
  {
    id: 5,
    title: "5. Phân chia lãnh thổ ảnh hưởng mới",
    shortTitle: "Biên Giới Mềm Kinh Tế",
    x: 80,
    y: 75,
    manifestationTitle: "Sự thống trị qua chiến lược biên giới mềm",
    bulletPoints: [
      "Thay thế chiến tranh xâm lược lãnh thổ trực tiếp cổ điển bằng 'chiến lược biên giới mềm' và bành trướng 'biên giới kinh tế'.",
      "Sử dụng các bẫy nợ tài chính, trói buộc công nghệ lõi và viện trợ điều kiện để kiểm soát tài nguyên các nước phụ thuộc."
    ],
    modernInsight: "Nước nào nắm giữ công nghệ chế tạo máy quang khắc chip (ASML) hay thiết kế kiến trúc vi xử lý (ARM) sẽ nắm giữ chủ quyền số của nước khác.",
    glowColor: "shadow-[0_0_15px_rgba(34,197,94,0.4)] bg-emerald-500"
  }
];

export function ManifestationSection() {
  const [activeNode, setActiveNode] = useState<TentacleNode>(tentacleNodes[0]);

  return (
    <section id="manifestation-section" className="py-24 px-4 bg-[#040714] relative border-t border-[#131a3a] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#7fd8ff] font-mono text-xs uppercase tracking-[0.22em] font-semibold block mb-3">
            GIAI ĐOẠN 2: 5 BIỂU HIỆN MỚI CỦA ĐỘC QUYỀN TƯ NHÂN
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            BẢN ĐỒ <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7fd8ff] via-sky-300 to-[#d4af37]">
              TUA XÚC TU TOÀN CẦU
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Nhấp vào các <span className="text-[#d4af37] font-semibold">tọa độ đỏ/vàng sáng</span> trên bản đồ thế giới cách điệu dưới đây để phân tích các đầu mút xúc tu của sinh vật độc quyền tư bản hiện đại.
          </p>
        </motion.div>

        {/* Master layout: Left SVG Map, Right Sliding Detail Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: SVG Map (Lớn, chiếm 7/12 cột) */}
          <div className="lg:col-span-7 bg-[#0d122b]/40 border border-[#1e295d]/60 rounded-3xl p-6 relative flex items-center justify-center min-h-[380px] overflow-hidden">
            
            {/* SVG Background Map outline (Minimalist style) */}
            <div className="absolute inset-4 opacity-15 pointer-events-none">
              <svg viewBox="0 0 800 450" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Simplified continents vectors */}
                <path d="M50,120 Q80,100 130,120 T180,160 T140,240 T80,260 T50,120" fill="#7fd8ff" stroke="#7fd8ff" strokeWidth="1" />
                <path d="M220,150 Q280,140 330,160 T420,180 T400,260 T320,280 T220,150" fill="#7fd8ff" stroke="#7fd8ff" strokeWidth="1" />
                <path d="M460,110 Q500,100 580,110 T680,150 T650,220 T520,240 T460,110" fill="#7fd8ff" stroke="#7fd8ff" strokeWidth="1" />
                <path d="M120,280 Q150,260 190,300 T210,380 T160,420 T110,360 T120,280" fill="#7fd8ff" stroke="#7fd8ff" strokeWidth="1" />
                <path d="M580,260 Q630,240 680,280 T720,360 T670,410 T590,350 T580,260" fill="#7fd8ff" stroke="#7fd8ff" strokeWidth="1" />
                
                {/* Economic Connection Network Lines linking continents */}
                {tentacleNodes.map((node) => (
                  <g key={node.id}>
                    {/* Pulsing connections linking central node to coordinate nodes */}
                    <path
                      d={`M 400, 225 L ${(node.x / 100) * 800}, ${(node.y / 100) * 450}`}
                      stroke="#1e295d"
                      strokeWidth="1.5"
                      strokeDasharray={node.id === 5 ? "4,4" : "0"} // dotted for border-soft
                    />
                    {/* Double-sided flows (capital flows) */}
                    {node.id === 3 && (
                      <path
                        d="M 400, 225 L 384, 225 Q 390, 200 430, 200"
                        stroke="#ff5e3a"
                        strokeWidth="1"
                        strokeDasharray="2,2"
                        className="opacity-50"
                      />
                    )}
                  </g>
                ))}
                
                {/* Central Headquarters Core */}
                <circle cx="400" cy="225" r="10" fill="#040714" stroke="#ff5e3a" strokeWidth="3" className="filter drop-shadow-[0_0_10px_#ff5e3a]" />
              </svg>
            </div>

            {/* Central Anchor Badge overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-[#040714]/80 border border-[#1e295d] rounded-lg text-xs text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e3a] animate-ping" />
              <span>Trung tâm lũng đoạn kinh tế tài chính</span>
            </div>

            {/* Interactive coordinate nodes */}
            <div className="absolute inset-0">
              {tentacleNodes.map((node) => {
                const isActive = activeNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    className="absolute group/pin cursor-pointer"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    id={`coordinate-node-${node.id}`}
                  >
                    {/* Pulsing visual circles */}
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-55 ${isActive ? 'bg-[#d4af37]' : 'bg-[#7fd8ff]'}`} />
                      <span className={`relative inline-flex rounded-full h-4.5 w-4.5 border border-white/20 items-center justify-center ${node.glowColor} transition-transform group-hover/pin:scale-125`}>
                        <span className="text-[9px] font-bold text-slate-950 font-mono">{node.id}</span>
                      </span>
                    </span>
                    
                    {/* Tooltip Label */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#040714] border border-[#1e295d] rounded-md px-2 py-1 text-[10px] font-mono font-bold text-slate-300 whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none z-30 shadow-lg">
                      {node.shortTitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Coordinate Node Navigation buttons for small devices */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-1 sm:hidden">
              {tentacleNodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`flex-1 text-center py-1 rounded text-[10px] font-bold font-mono ${
                    activeNode.id === node.id ? 'bg-[#d4af37] text-slate-950' : 'bg-[#0d122b] text-slate-400 border border-[#1e295d]'
                  }`}
                >
                  T{node.id}
                </button>
              ))}
            </div>

          </div>

          {/* Right Side: Detail Panel Card (Chiếm 5/12 cột, trượt mượt mà) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0d122b]/80 border border-[#1e295d] rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full backdrop-blur-md shadow-2xl relative"
                id="active-node-details-card"
              >
                {/* Header Tag */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#d4af37] tracking-widest font-semibold uppercase">
                      Xúc Tu Thứ {activeNode.id}
                    </span>
                    <Globe size={18} className="text-slate-500 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-tight">
                    {activeNode.title}
                  </h3>
                  <div className="h-px w-full bg-gradient-to-r from-[#1e295d] to-transparent my-4" />
                  
                  <p className="text-sm font-semibold text-[#7fd8ff] mb-4 bg-[#7fd8ff]/5 border border-[#7fd8ff]/10 p-3 rounded-xl">
                    {activeNode.manifestationTitle}
                  </p>
                </div>

                {/* Core Manifestation Points */}
                <div className="space-y-4 mb-6">
                  {activeNode.bulletPoints.map((pt, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-[#d4af37] shrink-0 mt-0.5" size={16} />
                      <p className="text-slate-300 text-sm leading-relaxed font-light">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 21st Century modern insight box */}
                <div className="bg-[#040714]/80 border-l-2 border-[#ff5e3a] p-4 rounded-r-xl">
                  <span className="text-[10px] font-mono text-[#ff5e3a] uppercase font-bold tracking-wider block mb-1">
                    🔍 Liên hệ Thực tiễn Thế kỷ 21:
                  </span>
                  <p className="text-slate-400 text-xs italic leading-relaxed">
                    {activeNode.modernInsight}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
