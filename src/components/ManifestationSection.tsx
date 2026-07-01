import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Building2, Landmark, ArrowRightLeft, PieChart, Flag, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface TentacleNode {
  id: number;
  title: string;
  shortTitle: string;
  manifestationTitle: string;
  bulletPoints: string[];
  modernInsight: string;
  themeColor: string;
  Icon: any;
}

const tentacleNodes: TentacleNode[] = [
  {
    id: 1,
    title: "1. Tích tụ & Tập trung tư bản",
    shortTitle: "Tập Trung Tư Bản",
    manifestationTitle: "Sự xuất hiện của các siêu tập đoàn đa quốc gia bên cạnh xí nghiệp vừa và nhỏ",
    bulletPoints: [
      "Xuất hiện các công ty độc quyền xuyên quốc gia (TNCs) hoạt động song song, chi phối các xí nghiệp vừa và nhỏ.",
      "Hình thành các tổ chức độc quyền khổng lồ đa ngành: Concern (liên kết chống rủi ro hệ thống) và Conglomerate (tổ hợp tài chính đa ngành, phi sản xuất trực tiếp)."
    ],
    modernInsight: " hiện đại cho thấy các công ty công nghệ khổng lồ mua lại hàng nghìn startup tiềm năng trước khi họ kịp cạnh tranh.",
    themeColor: "text-[#1E3A8A] border-[#1E3A8A]",
    Icon: Building2
  },
  {
    id: 2,
    title: "2. Bành trướng Tư bản tài chính",
    shortTitle: "Bành Trướng Tài Chính",
    manifestationTitle: "Thâm nhập đa ngành kết hợp chế độ ủy nhiệm quyền lực",
    bulletPoints: [
      "Không chỉ gói gọn trong ngân hàng - công nghiệp truyền thống, mà thâm nhập vào các tổ hợp liên hoàn: Công - Nông - Thương - Tín - Dịch vụ.",
      "Bổ sung 'chế độ ủy nhiệm': các nhà tài phiệt nắm quyền ủy nhiệm từ hàng triệu cổ đông nhỏ để chi phối định hướng chiến lược toàn bộ nền kinh tế toàn cầu."
    ],
    modernInsight: "Các quỹ đầu tư khổng lồ như BlackRock, Vanguard nắm cổ phần khống chế ở hầu hết các tập đoàn cạnh tranh cùng ngành trên thế giới.",
    themeColor: "text-[#B45309] border-[#B45309]",
    Icon: Landmark
  },
  {
    id: 3,
    title: "3. Xuất khẩu tư bản thế kỷ mới",
    shortTitle: "Xuất Khẩu Tư Bản",
    manifestationTitle: "Dòng vốn lưu chuyển hai chiều giữa các nước tư bản phát triển",
    bulletPoints: [
      "Mũi tên hai chiều: luồng vốn chủ yếu chảy qua lại giữa các nước tư bản phát triển với nhau (thay vì chỉ đổ về các nước kém phát triển).",
      "Hình thức đa dạng hóa: kết hợp xuất khẩu hàng hóa và xuất khẩu tư bản (FDI, BOT, BT, PPP).",
      "Tính chất mềm dẻo: bỏ bớt sự áp đặt chính trị thực dân cũ, đề cao nguyên tắc kinh tế 'cùng có lợi'."
    ],
    modernInsight: "Mỹ và châu Âu liên tục đầu tư chéo vào các lĩnh vực như sản xuất bán dẫn, AI, năng lượng xanh của nhau để cùng hưởng lợi thế độc quyền.",
    themeColor: "text-[#991B1B] border-[#991B1B]",
    Icon: ArrowRightLeft
  },
  {
    id: 4,
    title: "4. Phân chia thị trường toàn cầu",
    shortTitle: "Phân Chia Thị Trường",
    manifestationTitle: "Đan xen sâu sắc giữa Toàn cầu hóa và Khu vực hóa",
    bulletPoints: [
      "Toàn cầu hóa vượt bậc: Do sức mạnh bành trướng vĩ đại của các tập đoàn xuyên quốc gia (TNCs) phá vỡ các rào cản quốc gia.",
      "Khu vực hóa kinh tế: Sự hình thành các liên minh kinh tế khu vực khép kín (như EU, NAFTA, v.v.) để bảo vệ lợi ích nội bộ trước đối thủ bên ngoài."
    ],
    modernInsight: "Chiến tranh thương mại và các chính sách bảo hộ công nghệ phân mảnh chuỗi cung ứng toàn cầu thành các khối khu vực tin cậy.",
    themeColor: "text-purple-800 border-purple-800",
    Icon: PieChart
  },
  {
    id: 5,
    title: "5. Phân chia lãnh thổ ảnh hưởng",
    shortTitle: "Biên Giới Mềm Kinh Tế",
    manifestationTitle: "Sự thống trị qua chiến lược biên giới mềm",
    bulletPoints: [
      "Thay thế chiến tranh xâm lược lãnh thổ trực tiếp cổ điển bằng 'chiến lược biên giới mềm' và bành trướng 'biên giới kinh tế'.",
      "Sử dụng các bẫy nợ tài chính, trói buộc công nghệ lõi và viện trợ điều kiện để kiểm soát tài nguyên các nước phụ thuộc."
    ],
    modernInsight: "Nước nào nắm giữ công nghệ chế tạo máy quang khắc chip (ASML) hay thiết kế kiến trúc vi xử lý (ARM) sẽ nắm giữ chủ quyền số của nước khác.",
    themeColor: "text-emerald-800 border-emerald-800",
    Icon: Flag
  }
];

export function ManifestationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % tentacleNodes.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + tentacleNodes.length) % tentacleNodes.length);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + tentacleNodes.length) % tentacleNodes.length;
    // Normalized diff: -2, -1, 0, 1, 2
    let normDiff = diff;
    if (diff > 2) normDiff = diff - 5;

    // 3D Coverflow transformations
    if (normDiff === 0) {
      return { x: "0%", scale: 1, rotateY: 0, zIndex: 30, opacity: 1, blur: 0 };
    } else if (normDiff === 1) {
      return { x: "85%", scale: 0.85, rotateY: -25, zIndex: 20, opacity: 0.6, blur: 2 };
    } else if (normDiff === -1) {
      return { x: "-85%", scale: 0.85, rotateY: 25, zIndex: 20, opacity: 0.6, blur: 2 };
    } else if (normDiff === 2) {
      return { x: "150%", scale: 0.7, rotateY: -40, zIndex: 10, opacity: 0.2, blur: 4 };
    } else {
      return { x: "-150%", scale: 0.7, rotateY: 40, zIndex: 10, opacity: 0.2, blur: 4 };
    }
  };

  return (
    <section id="manifestation-section" className="py-24 px-4 bg-transparent relative overflow-hidden preserve-3d min-h-screen flex flex-col justify-center">
      {/* Subtle Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#1E3A8A] font-mono text-xs uppercase tracking-[0.22em] font-semibold block mb-3">
            GIAI ĐOẠN 2: 5 BIỂU HIỆN MỚI CỦA ĐỘC QUYỀN TƯ NHÂN
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A] mb-6">
            BẢN ĐỒ <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#B45309] to-[#991B1B]">
              TUA XÚC TU TOÀN CẦU
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Mô hình <span className="text-[#B45309] font-semibold">Tập hồ sơ lịch sử (Historical Deck)</span>: Lướt qua 5 khía cạnh bành trướng của sinh thể độc quyền trong thời đại mới.
          </p>
        </motion.div>

        {/* 3D Coverflow Container */}
        <div className="relative w-full max-w-3xl h-[650px] flex items-center justify-center perspective-[1500px]">

          <AnimatePresence initial={false}>
            {tentacleNodes.map((node, index) => {
              const styleProps = getCardStyle(index);
              const isActive = index === activeIndex;

              return (
                  <motion.div
                    key={node.id}
                    animate={{
                      x: styleProps.x,
                      scale: styleProps.scale,
                      rotateY: styleProps.rotateY,
                      zIndex: styleProps.zIndex,
                      opacity: styleProps.opacity,
                      filter: `blur(${styleProps.blur}px)`
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 20, mass: 1 }}
                    className={`absolute w-full max-w-md h-[580px] bg-white border ${isActive ? 'border-slate-300 shadow-2xl' : 'border-slate-200 shadow-lg'} rounded-3xl p-8 flex flex-col justify-between overflow-hidden cursor-pointer select-none backface-hidden`}
                    onClick={() => setActiveIndex(index)}
                  >
                  {/* Decorative background watermark */}
                  <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                    <node.Icon size={240} />
                  </div>

                  {/* Top Bar */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-slate-500 tracking-widest font-bold uppercase bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                        Hồ sơ {node.id}/5
                      </span>
                      <node.Icon size={24} className={`${node.themeColor.split(' ')[0]} opacity-80`} />
                    </div>

                    <h3 className="text-2xl font-display font-bold text-slate-900 leading-tight">
                      {node.title}
                    </h3>

                    <div className="h-px w-full bg-gradient-to-r from-slate-200 to-transparent my-4" />

                    <p className={`text-sm font-semibold mb-6 p-4 rounded-xl leading-relaxed bg-slate-50 border-l-4 ${node.themeColor}`}>
                      {node.manifestationTitle}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="relative z-10 space-y-4 flex-grow">
                    {node.bulletPoints.map((pt, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className={`shrink-0 mt-0.5 ${node.themeColor.split(' ')[0]}`} size={16} />
                        <p className="text-slate-600 text-sm leading-relaxed font-medium">
                          {pt}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Modern Insight */}
                  <div className="relative z-10 mt-6 pt-5 border-t border-slate-100">
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-wider block mb-2 flex items-center gap-2">
                      <Globe size={12} className={isActive ? "animate-spin" : ""} style={{ animationDuration: '6s' }} />
                      Liên hệ Thực tiễn Thế kỷ 21
                    </span>
                    <p className="text-slate-700 text-xs italic leading-relaxed">
                      "{node.modernInsight}"
                    </p>
                  </div>

                  {/* Hover/Click Overlay if not active */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-white/30 z-20 hover:bg-transparent transition-colors duration-300" />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {tentacleNodes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-[#B45309]' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
