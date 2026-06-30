import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Landmark, Users, Building, ShieldCheck, HelpCircle, FileText, Globe2 } from 'lucide-react';

interface StructureTier {
  id: number;
  name: string;
  shortTitle: string;
  themeColor: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  title: string;
  bulletPoints: string[];
  thesis: string;
  illustration: string;
}

const structureTiers: StructureTier[] = [
  {
    id: 1,
    name: "TẦNG THƯỢNG (UPPER DECK)",
    shortTitle: "Cơ chế Nhân sự Đa nguyên",
    themeColor: "#ff5e3a",
    textColor: "text-[#ff5e3a]",
    bgColor: "bg-[#ff5e3a]/10",
    borderColor: "border-[#ff5e3a]/30",
    title: "Cơ chế Quan hệ Nhân sự & Thỏa hiệp Đa nguyên",
    bulletPoints: [
      "Sự xuất hiện của thể chế đa nguyên chính trị giúp phân chia quyền lực dập tắt bớt mâu thuẫn đối kháng giai cấp.",
      "Các thế lực tư bản độc quyền thiết lập cơ chế thỏa hiệp ngầm đứng sau các đảng phái chính trị lớn để phân chia quyền lợi cùng tồn tại, không cho bất kỳ tập đoàn đơn lẻ nào có quyền độc tôn tuyệt đối hại đến cả hệ thống."
    ],
    thesis: "Nhà nước tư bản hiện đại đóng vai trò 'Ủy ban quản lý công vụ chung' của giai cấp tư sản lớn, giải quyết tranh chấp và phân xử công bằng lợi ích nội bộ.",
    illustration: "Mối liên kết nhân sự đan chéo giữa các chính trị gia quốc hội và hội đồng quản trị của các tập đoàn nghìn tỷ đô."
  },
  {
    id: 2,
    name: "TẦNG TRUNG (MAIN FLOOR)",
    shortTitle: "Sở hữu & Ngân sách Quốc gia",
    themeColor: "#d4af37",
    textColor: "text-[#d4af37]",
    bgColor: "bg-[#d4af37]/10",
    borderColor: "border-[#d4af37]/30",
    title: "Sự phân lập Sở hữu Nhà nước & Giải phóng rủi ro tư nhân",
    bulletPoints: [
      "Quyền quyết định ngân sách tài khóa thuộc về cơ quan lập pháp (Quốc hội), quản lý chặt chẽ giới hành pháp bằng hệ thống luật pháp tư sản nghiêm ngặt.",
      "Cơ chế 'Gánh vác rủi ro thay tư nhân': Nhà nước trực tiếp bỏ tiền thuế của dân ra đầu tư các ngành nghiên cứu khoa học cơ bản rủi ro cực cao, xây dựng hạ tầng cơ sở tốn kém, và dùng quỹ khẩn cấp bơm giải cứu các tập đoàn 'Too Big To Fail' khi khủng hoảng."
    ],
    thesis: "Xã hội hóa các chi phí rủi ro tổn thất, trong khi tư nhân hóa trọn vẹn mọi dòng lợi nhuận phát sinh khi thành công.",
    illustration: "Các gói cứu trợ khổng lồ của Ngân hàng trung ương Mỹ (Fed) trị giá hàng nghìn tỷ USD cứu nguy các ngân hàng thương mại lớn năm 2008."
  },
  {
    id: 3,
    name: "TẦNG TRỆT (BASEMENT ENGINE)",
    shortTitle: "Công cụ Điều tiết & Viện trợ",
    themeColor: "#7fd8ff",
    textColor: "text-[#7fd8ff]",
    bgColor: "bg-[#7fd8ff]/10",
    borderColor: "border-[#7fd8ff]/30",
    title: "Bộ máy điều tiết vận hành như Công ty Cổ phần",
    bulletPoints: [
      "Bộ máy nhà nước tư sản hiện đại áp dụng triệt để cách quản trị hiệu suất của doanh nghiệp tư nhân khổng lồ, xem quốc gia như một công ty cổ phần lớn phục vụ cổ đông chính.",
      "Viện trợ nước ngoài kiểu mới: Thực chất là công cụ thúc đẩy tiêu thụ hàng hóa tồn đọng trong nước, chuyển giao các công nghệ lỗi thời của các tập đoàn lớn bằng cách buộc nước nhận viện trợ phải mua sản phẩm chỉ định."
    ],
    thesis: "Viện trợ không vị tha, mà là dòng tuần hoàn vốn kích cầu xuất khẩu tư bản nội địa ra thị trường toàn cầu dưới nhãn mác nhân đạo.",
    illustration: "Các khoản tín dụng ràng buộc bắt buộc nước đi vay phải thuê nhà thầu và kỹ sư chính của nước tài trợ."
  }
];

export function StateMonopolySection() {
  const [selectedTierId, setSelectedTierId] = useState(2); // Start on main floor (Sở hữu)

  const activeTier = structureTiers.find(t => t.id === selectedTierId) || structureTiers[1];

  return (
    <section className="py-24 px-4 bg-[#070b21] relative border-t border-[#131a3a] overflow-hidden">
      
      {/* Background radial highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,#11163b,transparent_70%)] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#ff5e3a] font-mono text-xs uppercase tracking-[0.22em] font-semibold block mb-3">
            GIAI ĐOẠN 3: ĐỘC QUYỀN NHÀ NƯỚC HIỆN ĐẠI
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            BẢN ĐỒ GIẢI PHẪU: <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e3a] via-amber-200 to-[#d4af37]">
              X-RAY BỘ MÁY NHÀ NƯỚC
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Nhấp trực tiếp vào từng tầng của <span className="text-[#ff5e3a] font-semibold">Tòa nhà Nghị viện cách điệu</span> bên dưới để X-ray và bóc trần cấu trúc bộ máy nhà nước vận hành như một công ty cổ phần.
          </p>
        </motion.div>

        {/* Master layout: Left SVG Architectural building, Right Info panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Dynamic SVG classical building */}
          <div className="lg:col-span-6 bg-[#0d122b]/40 border border-[#1e295d]/60 rounded-3xl p-8 relative flex flex-col items-center justify-center min-h-[420px]">
            
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest absolute top-4 left-4">
              Sơ đồ kiến trúc thể chế CNTB ĐQNN
            </span>

            {/* Glowing state architecture SVG */}
            <svg viewBox="0 0 320 340" fill="none" className="w-full max-w-[280px] h-auto transition-all duration-500" xmlns="http://www.w3.org/2000/svg">
              
              {/* Classical triangular roof pediment (representing Upper Deck) */}
              <g
                className="cursor-pointer transition-all duration-300"
                onClick={() => setSelectedTierId(1)}
              >
                <path
                  d="M 160 20 L 40 80 L 280 80 Z"
                  fill={selectedTierId === 1 ? "rgba(255, 94, 58, 0.25)" : "rgba(30, 41, 93, 0.15)"}
                  stroke={selectedTierId === 1 ? "#ff5e3a" : "#1e295d"}
                  strokeWidth="2"
                  className="transition-all"
                />
                <circle cx="160" cy="50" r="10" stroke={selectedTierId === 1 ? "#ff5e3a" : "#1e295d"} strokeWidth="1.5" fill="none" />
                <text x="160" y="73" fill={selectedTierId === 1 ? "#ff5e3a" : "#475569"} fontSize="10" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">NHÂN SỰ ĐA NGUYÊN</text>
              </g>

              {/* Main Pillars Floor (representing Middle Deck) */}
              <g
                className="cursor-pointer transition-all duration-300"
                onClick={() => setSelectedTierId(2)}
              >
                <rect
                  x="50"
                  y="90"
                  width="220"
                  height="120"
                  rx="6"
                  fill={selectedTierId === 2 ? "rgba(212, 175, 55, 0.2)" : "rgba(30, 41, 93, 0.1)"}
                  stroke={selectedTierId === 2 ? "#d4af37" : "#1e295d"}
                  strokeWidth="2"
                  className="transition-all"
                />
                
                {/* Visual pillars representing state institutions */}
                <rect x="75" y="105" width="16" height="90" fill="none" stroke={selectedTierId === 2 ? "#d4af37" : "#1e295d"} strokeWidth="1" />
                <rect x="125" y="105" width="16" height="90" fill="none" stroke={selectedTierId === 2 ? "#d4af37" : "#1e295d"} strokeWidth="1" />
                <rect x="175" y="105" width="16" height="90" fill="none" stroke={selectedTierId === 2 ? "#d4af37" : "#1e295d"} strokeWidth="1" />
                <rect x="225" y="105" width="16" height="90" fill="none" stroke={selectedTierId === 2 ? "#d4af37" : "#1e295d"} strokeWidth="1" />

                <text x="160" y="150" fill={selectedTierId === 2 ? "#d4af37" : "#475569"} fontSize="10" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">SỞ HỮU & NGÂN SÁCH GÁNH RỦI RO</text>
              </g>

              {/* Heavy Basement Foundation (representing Ground Engine) */}
              <g
                className="cursor-pointer transition-all duration-300"
                onClick={() => setSelectedTierId(3)}
              >
                <rect
                  x="30"
                  y="220"
                  width="260"
                  height="80"
                  rx="6"
                  fill={selectedTierId === 3 ? "rgba(127, 216, 255, 0.2)" : "rgba(30, 41, 93, 0.15)"}
                  stroke={selectedTierId === 3 ? "#7fd8ff" : "#1e295d"}
                  strokeWidth="2"
                  className="transition-all"
                />
                {/* Gears inside ground floor representing mechanic engine */}
                <line x1="60" y1="260" x2="260" y2="260" stroke={selectedTierId === 3 ? "#7fd8ff" : "#1e295d"} strokeWidth="1" strokeDasharray="5 5" />
                <circle cx="110" cy="260" r="12" stroke={selectedTierId === 3 ? "#7fd8ff" : "#1e295d"} strokeWidth="1" fill="none" />
                <circle cx="210" cy="260" r="12" stroke={selectedTierId === 3 ? "#7fd8ff" : "#1e295d"} strokeWidth="1" fill="none" />
                
                <text x="160" y="285" fill={selectedTierId === 3 ? "#7fd8ff" : "#475569"} fontSize="10" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">CÔNG CỤ ĐIỀU TIẾT CỦA CÔNG TY CỔ PHẦN</text>
              </g>

              {/* Heavy foundation soil line */}
              <line x1="10" y1="315" x2="310" y2="315" stroke="#1e295d" strokeWidth="3" strokeLinecap="round" />
            </svg>

            {/* Quick tier button list */}
            <div className="mt-6 flex flex-wrap gap-2 w-full justify-center">
              {structureTiers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTierId(t.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono tracking-wider transition-colors cursor-pointer border ${
                    selectedTierId === t.id
                      ? 'bg-white text-[#040714] border-white'
                      : 'bg-[#0d122b]/60 text-slate-400 border-[#1e295d]'
                  }`}
                  id={`building-tier-btn-${t.id}`}
                >
                  Tầng {t.id}
                </button>
              ))}
            </div>

          </div>

          {/* Right Side: Deep Analysis Panel Card */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier.id}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0d122b]/80 border border-[#1e295d] rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full backdrop-blur-md shadow-2xl relative"
                id="state-monopoly-tier-card"
              >
                {/* Header Tag info */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full bg-current ${activeTier.textColor} animate-pulse`} />
                    <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                      CƠ CHẾ GIẢI PHẪU {activeTier.id} / 3
                    </span>
                  </div>

                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 inline-block ${activeTier.bgColor} ${activeTier.textColor} border ${activeTier.borderColor}`}>
                    {activeTier.name}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-2 leading-tight">
                    {activeTier.title}
                  </h3>

                  <div className="h-px w-full bg-gradient-to-r from-[#1e295d] to-transparent my-4" />

                  {/* Bullet points detailing mechanism */}
                  <div className="space-y-4 mb-6">
                    {activeTier.bulletPoints.map((pt, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <Users className={`shrink-0 mt-0.5 ${activeTier.textColor}`} size={16} />
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {pt}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footnotes / Conclusions */}
                <div className="space-y-4">
                  {/* Analytical thesis */}
                  <div className="bg-[#040714]/60 border-l-2 border-amber-500 p-4 rounded-r-xl">
                    <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-bold block mb-1">
                      💡 Bản Chất Quy Luật:
                    </span>
                    <p className="text-slate-300 text-xs italic leading-relaxed">
                      "{activeTier.thesis}"
                    </p>
                  </div>

                  {/* Real World Illustration details */}
                  <div className="text-xs text-slate-400 flex items-start gap-2 font-mono">
                    <span className="text-[#ff5e3a] font-bold">● Minh họa:</span>
                    <span>{activeTier.illustration}</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
