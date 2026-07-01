import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Cpu, Users, Globe, Scale as ScaleIcon, Skull, TrendingDown, AlertTriangle, Activity } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// 3D Scale Component
function BalanceScale3D({ tiltValue }: { tiltValue: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const beamRef = useRef<THREE.Group>(null);

  // tiltValue is 10 to 90. 50 is balanced.
  // Convert to radians: -0.3 to 0.3
  const targetAngle = ((tiltValue - 50) / 50) * -0.5;

  useFrame(() => {
    if (beamRef.current) {
      beamRef.current.rotation.z = THREE.MathUtils.lerp(beamRef.current.rotation.z, targetAngle, 0.1);
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002; // slow spin
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      {/* Base */}
      <Cylinder args={[1.5, 2, 0.5, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#cbd5e1" metalness={0.6} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[1.2, 1.5, 0.5, 32]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#cbd5e1" metalness={0.6} roughness={0.2} />
      </Cylinder>

      {/* Main Pillar */}
      <Cylinder args={[0.2, 0.4, 6, 32]} position={[0, 3.5, 0]}>
        <meshStandardMaterial color="#B45309" metalness={0.8} roughness={0.2} />
      </Cylinder>

      {/* Top Cap */}
      <Cylinder args={[0.4, 0.2, 0.5, 32]} position={[0, 6.75, 0]}>
        <meshStandardMaterial color="#B45309" metalness={0.8} roughness={0.2} />
      </Cylinder>

      {/* Moving Beam Group */}
      <group ref={beamRef} position={[0, 6, 0]}>
        {/* Horizontal Beam */}
        <Box args={[8, 0.2, 0.4]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1E3A8A" metalness={0.7} roughness={0.2} />
        </Box>

        {/* Left Pan (Pros) */}
        <group position={[-3.8, -0.1, 0]}>
          <Cylinder args={[0.03, 0.03, 3.1, 8]} position={[-0.4, -1.5, 0]} rotation={[0, 0, -0.26]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.8} />
          </Cylinder>
          <Cylinder args={[0.03, 0.03, 3.1, 8]} position={[0.4, -1.5, 0]} rotation={[0, 0, 0.26]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.8} />
          </Cylinder>
          <Cylinder args={[0.03, 0.03, 3.1, 8]} position={[0, -1.5, 0.4]} rotation={[-0.26, 0, 0]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.8} />
          </Cylinder>
          <Cylinder args={[0.03, 0.03, 3.1, 8]} position={[0, -1.5, -0.4]} rotation={[0.26, 0, 0]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.8} />
          </Cylinder>
          {/* Pan base */}
          <Cylinder args={[1.5, 1, 0.2, 32]} position={[0, -3, 0]}>
            <meshStandardMaterial color="#10b981" metalness={0.5} roughness={0.3} />
          </Cylinder>
          {/* Weight */}
          <Cylinder args={[0.8, 0.8, 1.2, 32]} position={[0, -2.3, 0]}>
            <meshStandardMaterial color="#10b981" metalness={0.3} roughness={0.5} />
          </Cylinder>
        </group>

        {/* Right Pan (Cons) */}
        <group position={[3.8, -0.1, 0]}>
          <Cylinder args={[0.03, 0.03, 3.1, 8]} position={[-0.4, -1.5, 0]} rotation={[0, 0, -0.26]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.8} />
          </Cylinder>
          <Cylinder args={[0.03, 0.03, 3.1, 8]} position={[0.4, -1.5, 0]} rotation={[0, 0, 0.26]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.8} />
          </Cylinder>
          <Cylinder args={[0.03, 0.03, 3.1, 8]} position={[0, -1.5, 0.4]} rotation={[-0.26, 0, 0]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.8} />
          </Cylinder>
          <Cylinder args={[0.03, 0.03, 3.1, 8]} position={[0, -1.5, -0.4]} rotation={[0.26, 0, 0]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.8} />
          </Cylinder>
          {/* Pan base */}
          <Cylinder args={[1.5, 1, 0.2, 32]} position={[0, -3, 0]}>
            <meshStandardMaterial color="#991B1B" metalness={0.5} roughness={0.3} />
          </Cylinder>
          {/* Weight */}
          <Cylinder args={[0.8, 0.8, 1.5, 32]} position={[0, -2.15, 0]}>
            <meshStandardMaterial color="#991B1B" metalness={0.3} roughness={0.5} />
          </Cylinder>
        </group>
      </group>
    </group>
  );
}

export function HistoricalRoleSection() {
  const [sliderVal, setSliderVal] = useState(50);

  // Derive states
  const isProsActive = sliderVal <= 45;
  const isConsActive = sliderVal >= 55;
  const isBalanced = !isProsActive && !isConsActive;

  const pros = [
    {
      title: 'Bệ phóng Cách mạng KH-CN',
      desc: 'Chuyển biến lao động thủ công thô sơ lên cơ khí hóa, tự động hóa, thúc đẩy cuộc cách mạng công nghiệp 4.0, tạo bệ phóng R&D khổng lồ.',
      icon: <Cpu size={18} />,
      threshold: 40
    },
    {
      title: 'Xã hội hóa sản xuất quy mô lớn',
      desc: 'Chuyển đổi nền kinh tế hàng hóa nhỏ lẻ tự cấp tự túc thành nền sản xuất liên hoàn đại công nghiệp tập trung quy mô toàn cầu.',
      icon: <Users size={18} />,
      threshold: 25
    },
    {
      title: 'Tối ưu hóa Phân công Quốc tế',
      desc: 'Đẩy mạnh phân công lao động sâu rộng, liên kết chuỗi sản xuất toàn cầu, biến mọi quốc gia thành mắt xích thống nhất.',
      icon: <Globe size={18} />,
      threshold: 10
    }
  ];

  const cons = [
    {
      title: 'Bản chất vị kỷ cực đoan',
      desc: 'Mục đích sản xuất không vì an sinh số đông nhân dân lao động mà để chiếm đoạt giá trị thặng dư tối đa cho thiểu số giới tài phiệt.',
      icon: <Skull size={18} />,
      threshold: 60
    },
    {
      title: 'Hố sâu bất bình đẳng toàn cầu',
      desc: 'Khoét sâu sự phân hóa giàu nghèo tột cùng: nhóm 1% dân số giàu nhất thâu tóm phần lớn của cải, đẩy hàng tỷ người vào nghèo khó.',
      icon: <ScaleIcon size={18} />,
      threshold: 75
    },
    {
      title: 'Khủng hoảng & Chiến tranh sinh tồn',
      desc: 'Tranh giành giật tài nguyên, thị trường là mầm mống trực tiếp/gián tiếp của các cuộc khủng hoảng chu kỳ và xung đột vũ trang tàn khốc.',
      icon: <TrendingDown size={18} />,
      threshold: 90
    }
  ];

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden">
      
      {/* Subtle Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="text-[#B45309] font-mono text-xs uppercase tracking-[0.22em] font-semibold block mb-3">
            GIAI ĐOẠN 4: VAI TRÒ LỊCH SỬ CỦA CHỦ NGHĨA TƯ BẢN
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A] mb-6">
            TÍNH BIỆN CHỨNG: <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-[#B45309] to-[#991B1B]">
              CÂN BẰNG LỊCH SỬ
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Chủ nghĩa tư bản có tính hai mặt mâu thuẫn sâu sắc. Hãy <span className="text-[#B45309] font-semibold">kéo thanh trượt</span> dưới đây để kiểm soát trọng tâm phân tích của bài thuyết trình.
          </p>
        </motion.div>

        {/* 3-Column Layout: Pros Card | 3D Scale & Slider | Cons Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative">
          
          {/* Left Side: Pros (Sáng / Tích cực) */}
          <div className={`lg:col-span-4 flex-1 bg-white border ${isProsActive ? 'border-emerald-300 shadow-emerald-900/5' : 'border-slate-100 shadow-sm'} rounded-[2rem] p-6 shadow-xl relative overflow-hidden transition-all duration-500 ${isProsActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98] grayscale-[30%]'}`}>
            <div className={`absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent pointer-events-none transition-opacity duration-500 ${isProsActive ? 'opacity-100' : 'opacity-0'}`} />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center gap-2 mb-6">
                <div className="p-3 bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-full shadow-sm">
                  <Sun size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold block tracking-widest">VAI TRÒ TÍCH CỰC</span>
                  <h3 className="text-xl font-display font-bold text-slate-900 mt-1">Mặt Sáng</h3>
                </div>
              </div>

              <div className="space-y-4">
                {pros.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20, height: 0 }}
                    animate={
                      sliderVal <= item.threshold 
                        ? { opacity: 1, x: 0, height: 'auto', marginBottom: 16 } 
                        : { opacity: 0, x: -20, height: 0, marginBottom: 0 }
                    }
                    transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                    className="flex flex-col gap-2 items-start overflow-hidden bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50"
                  >
                    <div className="flex items-center gap-2 text-emerald-700">
                      {item.icon}
                      <h4 className="text-[13px] font-bold text-slate-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
                
                {/* Empty state hint */}
                {sliderVal > 40 && isProsActive && (
                  <p className="text-xs text-slate-400 italic text-center py-4 font-medium animate-pulse">
                    Kéo sang trái...
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Center: 3D Canvas Area & Controls */}
          <div className="lg:col-span-4 flex flex-col gap-6 relative">
            <div className="w-full h-[400px] lg:h-[450px] relative bg-slate-50/50 rounded-[2rem] border border-slate-200 shadow-inner overflow-hidden">
              <Canvas camera={{ position: [0, 2, 16], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
                <directionalLight position={[-10, 5, -5]} intensity={0.5} color="#cbd5e1" />
                <Environment preset="city" />
                
                <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
                  <BalanceScale3D tiltValue={sliderVal} />
                </Float>
              </Canvas>
            </div>

            {/* Dialectical Slider control bar */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col items-center gap-4 shadow-xl relative z-20">
              <div className="w-full flex justify-between px-2 text-[10px] font-mono font-bold uppercase tracking-widest">
                <span className={`transition-colors duration-300 ${isProsActive ? 'text-emerald-600' : 'text-slate-400'}`}>Tích cực</span>
                <span className={`transition-colors duration-300 ${isBalanced ? 'text-slate-800' : 'text-slate-400'}`}>Cân bằng</span>
                <span className={`transition-colors duration-300 ${isConsActive ? 'text-[#991B1B]' : 'text-slate-400'}`}>Tiêu cực</span>
              </div>
              
              <div className="relative w-full flex items-center h-8">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderVal}
                  onChange={(e) => {
                    setSliderVal(Number(e.target.value));
                  }}
                  className="absolute w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer z-20 outline-none shadow-inner transition-all"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${sliderVal}%, #991B1B ${sliderVal}%, #991B1B 100%)`
                  }}
                />
                {/* Center tick */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-6 bg-slate-400 rounded-full z-10 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Right Side: Cons (Tối / Hạn chế) */}
          <div className={`lg:col-span-4 flex-1 bg-white border ${isConsActive ? 'border-red-300 shadow-red-900/5' : 'border-slate-100 shadow-sm'} rounded-[2rem] p-6 shadow-xl relative overflow-hidden transition-all duration-500 ${isConsActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98] grayscale-[30%]'}`}>
            <div className={`absolute inset-0 bg-gradient-to-bl from-red-50 to-transparent pointer-events-none transition-opacity duration-500 ${isConsActive ? 'opacity-100' : 'opacity-0'}`} />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center gap-2 mb-6">
                <div className="p-3 bg-red-100 border border-red-200 text-[#991B1B] rounded-full shadow-sm">
                  <Moon size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#991B1B] font-bold block tracking-widest">GIỚI HẠN TẤT YẾU</span>
                  <h3 className="text-xl font-display font-bold text-slate-900 mt-1">Mặt Tối</h3>
                </div>
              </div>

              <div className="space-y-4">
                {cons.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20, height: 0 }}
                    animate={
                      sliderVal >= item.threshold 
                        ? { opacity: 1, x: 0, height: 'auto', marginBottom: 16 } 
                        : { opacity: 0, x: 20, height: 0, marginBottom: 0 }
                    }
                    transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                    className="flex flex-col gap-2 items-start overflow-hidden bg-red-50/50 p-4 rounded-xl border border-red-100/50"
                  >
                    <div className="flex items-center gap-2 text-[#991B1B]">
                      {item.icon}
                      <h4 className="text-[13px] font-bold text-slate-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}

                {/* Empty state hint */}
                {sliderVal < 60 && isConsActive && (
                  <p className="text-xs text-slate-400 italic text-center py-4 font-medium animate-pulse">
                    Kéo sang phải...
                  </p>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
