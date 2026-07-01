import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Globe2, Users } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Text } from '@react-three/drei';
import * as THREE from 'three';

interface StructureTier {
  id: number;
  name: string;
  shortTitle: string;
  themeColor: string;
  hexColor: string;
  title: string;
  bulletPoints: string[];
  thesis: string;
  illustration: string;
}

const structureTiers: StructureTier[] = [
  {
    id: 1,
    name: "TẦNG THƯỢNG - NHÂN SỰ ĐA NGUYÊN",
    shortTitle: "Cơ chế Nhân sự Đa nguyên",
    themeColor: "text-[#991B1B] border-[#991B1B]",
    hexColor: "#991B1B",
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
    name: "TẦNG TRUNG - SỞ HỮU & NGÂN SÁCH GÁNH RỦI RO",
    shortTitle: "Sở hữu & Ngân sách Quốc gia",
    themeColor: "text-[#B45309] border-[#B45309]",
    hexColor: "#B45309",
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
    name: "TẦNG TRỆT - CÔNG CỤ ĐIỀU TIẾT CỦA CÔNG TY CỔ PHẦN",
    shortTitle: "Công cụ Điều tiết & Viện trợ",
    themeColor: "text-[#1E3A8A] border-[#1E3A8A]",
    hexColor: "#1E3A8A",
    title: "Bộ máy điều tiết vận hành như Công ty Cổ phần",
    bulletPoints: [
      "Bộ máy nhà nước tư sản hiện đại áp dụng triệt để cách quản trị hiệu suất của doanh nghiệp tư nhân khổng lồ, xem quốc gia như một công ty cổ phần lớn phục vụ cổ đông chính.",
      "Viện trợ nước ngoài kiểu mới: Thực chất là công cụ thúc đẩy tiêu thụ hàng hóa tồn đọng trong nước, chuyển giao các công nghệ lỗi thời của các tập đoàn lớn bằng cách buộc nước nhận viện trợ phải mua sản phẩm chỉ định."
    ],
    thesis: "Viện trợ không vị tha, mà là dòng tuần hoàn vốn kích cầu xuất khẩu tư bản nội địa ra thị trường toàn cầu dưới nhãn mác nhân đạo.",
    illustration: "Các khoản tín dụng ràng buộc bắt buộc nước đi vay phải thuê nhà thầu và kỹ sư chính của nước tài trợ."
  }
];

// Interactive 3D Building Component
function IsometricBuilding({ activeId, setActiveId, rotationY }: { activeId: number, setActiveId: (id: number) => void, rotationY: number }) {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef} rotation={[Math.PI / 6, rotationY, 0]} position={[0, -1, 0]}>
      {/* Base Plane (Foundation) */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[6, 0.2, 6]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.8} />
      </mesh>

      {/* Tầng 3 (Basement Engine) */}
      <Float speed={2} rotationIntensity={0} floatIntensity={activeId === 3 ? 3 : 0.5}>
        <mesh 
          position={[0, activeId === 3 ? 0 : -1, 0]} 
          onClick={(e) => { e.stopPropagation(); setActiveId(3); }}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
        >
          <boxGeometry args={[5, 1, 5]} />
          <meshStandardMaterial 
            color={activeId === 3 ? "#1E3A8A" : "#e2e8f0"} 
            opacity={activeId === 3 ? 0.9 : 0.6} 
            transparent 
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>
      </Float>

      {/* Tầng 2 (Main Floor) */}
      <Float speed={2} rotationIntensity={0} floatIntensity={activeId === 2 ? 3 : 0.5}>
        <mesh 
          position={[0, activeId === 2 ? 2.5 : 0.5, 0]} 
          onClick={(e) => { e.stopPropagation(); setActiveId(2); }}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
          visible={activeId <= 2}
        >
          <boxGeometry args={[4.5, 1.2, 4.5]} />
          <meshStandardMaterial 
            color={activeId === 2 ? "#B45309" : "#f1f5f9"} 
            opacity={activeId === 2 ? 0.9 : 0.6} 
            transparent
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>
      </Float>

      {/* Tầng 1 (Upper Deck) */}
      <Float speed={2} rotationIntensity={0} floatIntensity={activeId === 1 ? 3 : 0.5}>
        <group 
          position={[0, activeId === 1 ? 5 : 2, 0]}
          onClick={(e) => { e.stopPropagation(); setActiveId(1); }}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
          visible={activeId <= 1}
        >
          <mesh>
            {/* Pyramid roof for upper deck */}
            <cylinderGeometry args={[0, 3, 2, 4]} />
            <meshStandardMaterial 
              color={activeId === 1 ? "#991B1B" : "#f8fafc"} 
              opacity={activeId === 1 ? 0.9 : 0.6} 
              transparent
              roughness={0.2}
              metalness={0.5}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export function StateMonopolySection() {
  const [selectedTierId, setSelectedTierId] = useState(2); // Start on main floor
  const [rotationY, setRotationY] = useState(-Math.PI / 4);

  const activeTier = structureTiers.find(t => t.id === selectedTierId) || structureTiers[1];

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background subtle mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,58,138,0.03),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(153,27,27,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#991B1B] font-mono text-xs uppercase tracking-[0.22em] font-semibold block mb-3">
            GIAI ĐOẠN 3: ĐỘC QUYỀN NHÀ NƯỚC HIỆN ĐẠI
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A] mb-6">
            BẢN ĐỒ GIẢI PHẪU: <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#991B1B] via-[#B45309] to-[#1E3A8A]">
              X-RAY BỘ MÁY NHÀ NƯỚC
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Nhấp trực tiếp vào các <span className="text-[#991B1B] font-semibold">Tầng 3D</span> của mô hình Tòa Nghị viện cách điệu để bóc trần cấu trúc bộ máy nhà nước vận hành như một công ty cổ phần.
          </p>
        </motion.div>

        {/* Master layout: Left 3D Canvas, Right Info panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch w-full">
          
          {/* Left Side: 3D Exploded View */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-[#FDFBF7] border border-slate-200 rounded-[2rem] p-4 relative min-h-[500px] shadow-lg flex flex-col"
          >
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest absolute top-6 left-6 z-10">
              Mô hình bóc tách 3D (Exploded View)
            </span>
            
            <div className="flex-grow w-full h-full cursor-grab active:cursor-grabbing pb-16">
              <Canvas camera={{ position: [10, 8, 10], fov: 40 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 15, 10]} intensity={1.5} color="#ffffff" castShadow />
                <directionalLight position={[-10, 5, -10]} intensity={0.5} color="#cbd5e1" />
                <Environment preset="city" />
                
                <IsometricBuilding activeId={selectedTierId} setActiveId={setSelectedTierId} rotationY={rotationY} />
              </Canvas>
            </div>

            {/* Slider to rotate building */}
            <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center z-10 px-6">
              <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1 flex justify-between w-48 sm:w-64">
                <span>-180°</span>
                <span className="text-[#991B1B] font-bold">Xoay mô hình</span>
                <span>180°</span>
              </label>
              <input 
                type="range" 
                min={-Math.PI} 
                max={Math.PI} 
                step={0.01}
                value={rotationY}
                onChange={(e) => setRotationY(parseFloat(e.target.value))}
                className="w-48 sm:w-64 accent-[#991B1B]"
              />
            </div>

            {/* Quick tier button list */}
            <div className="absolute bottom-4 left-0 right-0 flex flex-wrap gap-3 w-full justify-center z-10 px-4">
              {structureTiers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTierId(t.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono tracking-wider transition-all shadow-sm ${
                    selectedTierId === t.id
                      ? `bg-[${t.hexColor}] text-white ring-2 ring-offset-2 ring-[${t.hexColor}]`
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                  style={{
                    backgroundColor: selectedTierId === t.id ? t.hexColor : '',
                  }}
                >
                  Tầng {t.id}
                </button>
              ))}
            </div>

          </motion.div>

          {/* Right Side: Deep Analysis Panel Card */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier.id}
                initial={{ opacity: 0, scale: 0.96, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: -20 }}
                transition={{ duration: 0.4, type: "spring" }}
                className={`bg-white border-2 ${activeTier.themeColor.split(' ')[1]} rounded-[2rem] p-8 sm:p-10 flex flex-col h-full shadow-2xl relative`}
              >
                {/* Header Tag info */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full bg-current ${activeTier.themeColor.split(' ')[0]} animate-pulse`} />
                    <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold">
                      CƠ CHẾ GIẢI PHẪU {activeTier.id} / 3
                    </span>
                  </div>

                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg mb-3 inline-block bg-slate-100 ${activeTier.themeColor.split(' ')[0]} border border-slate-200`}>
                    {activeTier.name}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-2 leading-tight">
                    {activeTier.title}
                  </h3>

                  <div className="h-px w-full bg-gradient-to-r from-slate-200 to-transparent my-6" />

                  {/* Bullet points detailing mechanism */}
                  <div className="space-y-5 mb-8 flex-grow">
                    {activeTier.bulletPoints.map((pt, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex gap-3 items-start"
                      >
                        <Users className={`shrink-0 mt-0.5 ${activeTier.themeColor.split(' ')[0]}`} size={18} />
                        <p className="text-slate-700 text-[15px] leading-relaxed font-medium">
                          {pt}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footnotes / Conclusions */}
                <div className="space-y-5 mt-auto pt-6 border-t border-slate-100">
                  {/* Analytical thesis */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={`bg-slate-50 border-l-4 ${activeTier.themeColor.split(' ')[1]} p-5 rounded-r-2xl shadow-sm`}
                  >
                    <span className={`text-[11px] font-mono ${activeTier.themeColor.split(' ')[0]} uppercase tracking-widest font-bold block mb-2 flex items-center gap-2`}>
                      <ShieldCheck size={16} /> Bản Chất Quy Luật:
                    </span>
                    <p className="text-slate-700 text-sm italic leading-relaxed">
                      "{activeTier.thesis}"
                    </p>
                  </motion.div>

                  {/* Real World Illustration details */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xs text-slate-600 flex items-start gap-2 font-mono bg-white p-3 rounded-xl border border-slate-200"
                  >
                    <span className={`${activeTier.themeColor.split(' ')[0]} font-bold flex shrink-0 items-center gap-1`}>
                      <Globe2 size={12}/> Minh họa:
                    </span>
                    <span className="leading-relaxed">{activeTier.illustration}</span>
                  </motion.div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
