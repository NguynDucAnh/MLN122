import React, { useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

// --- Procedural 3D Octopus (Tư Bản Độc Quyền) ---
const ContinuousTentacle = ({ index, total }: { index: number, total: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const angle = (index / total) * Math.PI * 2;

  const geometry = useMemo(() => {
    // radiusTop, radiusBottom, height, radialSegments, heightSegments
    const geo = new THREE.CylinderGeometry(0.3, 0.02, 5, 24, 64);
    // Translate so the root (top) is at Y=0 and the tip (bottom) is at Y=-5
    geo.translate(0, -2.5, 0);
    geo.userData.originalPositions = Float32Array.from(geo.attributes.position.array);
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const positions = meshRef.current.geometry.attributes.position;
    const orig = meshRef.current.geometry.userData.originalPositions;

    for (let i = 0; i < positions.count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      const ox = orig[ix];
      const oy = orig[iy]; // ranges from 0 to -5
      const oz = orig[iz];

      const depth = Math.abs(oy); // 0 to 5

      // Sinuous wiggling (sine waves)
      const waveX = Math.sin(t * 2.5 - depth * 1.5) * (depth * 0.15);
      const waveZ = Math.cos(t * 2.0 - depth * 1.2) * (depth * 0.15);

      // Base outward curl (spreads out into an umbrella shape)
      const curlSpread = Math.pow(depth, 1.2) * 0.5;
      const curlX = Math.cos(angle) * curlSpread;
      const curlZ = Math.sin(angle) * curlSpread;

      // Curl up at the tips to make them look alive
      const curlY = Math.pow(depth, 1.4) * 0.15;

      positions.array[ix] = ox + waveX + curlX;
      positions.array[iy] = oy + curlY;
      positions.array[iz] = oz + waveZ + curlZ;
    }
    positions.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        color="#991B1B"
        roughness={0.15}
        metalness={0.5}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
};

function CapitalismOctopus3D() {
  const octopusRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const numTentacles = 8;

  useFrame((state) => {
    // Chỉ giữ lại các chuyển động của xúc tu bên trên
    // Toàn bộ phần đầu và trục của bạch tuộc đứng yên hoàn toàn
  });

  return (
    <group ref={octopusRef} rotation={[0, 0, 0]}>
      {/* Octopus Head (Brain of Monopoly Capital) */}
      <mesh ref={headRef} position={[0, 0.5, 0]}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshPhysicalMaterial
          color="#991B1B"
          roughness={0.15}
          metalness={0.5}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Glowing Cyber Eyes (đặt ra mặt trước) */}
      <mesh position={[0.3, 0.6, 1.25]} rotation={[0.1, 0.2, -0.2]}>
        <capsuleGeometry args={[0.08, 0.25, 4, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={4} />
      </mesh>
      <mesh position={[-0.3, 0.6, 1.25]} rotation={[0.1, -0.2, 0.2]}>
        <capsuleGeometry args={[0.08, 0.25, 4, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={4} />
      </mesh>

      {/* Smooth Tentacles */}
      {Array.from({ length: numTentacles }).map((_, i) => (
        <ContinuousTentacle key={i} index={i} total={numTentacles} />
      ))}
    </group>
  );
}

// --- Entities Being Controlled (Các thực thể bị chi phối) ---
function ControlledEntities() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        // Subtle floating
        child.position.y = (child.userData.baseY || 0) + Math.sin(t * 1.5 + i) * 0.15;
        // Rotating
        child.rotation.y = t * (0.5 + i * 0.2);
        child.rotation.x = Math.sin(t + i) * 0.2;
      });
    }
  });

  return (
    <group ref={groupRef}>

      {/* 1. Tiền tệ / Tài chính (Đồng tiền vàng) - Bên trái */}
      <mesh position={[-1.8, -2.5, 1]} userData={{ baseY: -2.5 }}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
        <meshStandardMaterial color="#fbbf24" metalness={1} roughness={0.1} />
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.3, 0.4, 32]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={1} />
        </mesh>
      </mesh>

      {/* 2. Thị trường toàn cầu (Quả cầu thế giới) - Ở giữa dưới cùng */}
      <mesh position={[0, -3.2, 0]} userData={{ baseY: -3.2 }}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.2} roughness={0.8} />
        <mesh>
          <sphereGeometry args={[0.72, 16, 16]} />
          <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.3} />
        </mesh>
      </mesh>

      {/* 3. Công nghệ / Viễn thông (Khối đa diện Cyber) - Bên phải */}
      <mesh position={[1.8, -2.2, 1]} userData={{ baseY: -2.2 }}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#1E3A8A" wireframe />
        <mesh>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
        </mesh>
      </mesh>
    </group>
  );
}

export function HeroSection() {
  return (
    <section
      className="min-h-screen relative overflow-hidden flex flex-col justify-center bg-transparent"
      id="hero"
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center justify-between z-10 gap-12 relative">

        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 flex flex-col items-start text-left relative z-20">

          {/* Course Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-slate-200 text-slate-700 text-xs font-mono mb-8 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="text-[#B45309] animate-pulse" size={14} />
            <span className="font-semibold">Kinh tế Chính trị Mác - Lênin · Chương 4</span>
          </motion.div>

          {/* Hook câu hỏi */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.15 }}
            className="text-[#991B1B] font-mono text-sm uppercase tracking-widest mb-4 font-bold italic"
          >
            "Nếu chủ nghĩa tư bản là một sinh vật,<br className="hidden sm:block" />
            nó đã chết theo dự đoán của Marx chưa?"
          </motion.p>

          {/* H1 Tiêu đề chính */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-5xl lg:text-7xl font-display font-bold text-[#0F172A] mb-6 leading-[1.1] tracking-tight"
          >
            SỰ VẬN ĐỘNG CỦA<br />
            <span className="italic shimmer-text relative inline-block">
              CHỦ NGHĨA TƯ BẢN
              <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#991B1B] via-[#B45309] to-transparent rounded-full" />
            </span>
          </motion.h1>

          {/* H2 Subtitle */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-xl font-sans text-slate-700 max-w-xl mb-6 leading-relaxed font-medium"
          >
            Cạnh tranh, <span className="text-[#B45309] font-bold">Độc quyền</span> &amp; <span className="text-[#1E3A8A] font-bold">Vai trò lịch sử</span>
          </motion.h2>

          {/* Lead text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-slate-500 text-base max-w-xl mb-12 leading-relaxed font-sans border-l-4 border-slate-200 pl-4"
          >
            Trong bối cảnh toàn cầu hóa và cách mạng khoa học - công nghệ, chủ nghĩa tư bản độc quyền không hề đứng im mà luôn tự điều chỉnh để thích nghi. Sự vận động này tạo ra những biểu hiện vô cùng phức tạp ở cả cấp độ tư nhân lẫn nhà nước.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 opacity-70 cursor-pointer group"
            onClick={() => {
              document.getElementById('manifestation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-12 border-2 border-slate-300 rounded-full flex justify-center pt-2 group-hover:border-[#B45309] transition-colors">
              <motion.div
                className="w-1.5 h-2.5 bg-[#B45309] rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase group-hover:text-[#B45309] transition-colors font-semibold">
              Cuộn để phân tích
            </span>
          </motion.div>
        </div>

        {/* Right Side: 3D Canvas */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative z-10 cursor-grab active:cursor-grabbing">
          
          {/* --- SOLAR SYSTEM BACKGROUND --- */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none flex items-center justify-center">
            
            {/* Vòng Quỹ đạo 1 */}
            <div className="absolute w-[250px] h-[250px] border border-slate-200 rounded-full animate-[spin_20s_linear_infinite]">
              {/* Hành tinh / Vệ tinh 1 (Nhấp nháy vàng 1s) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-2.5 h-2.5 bg-[#facc15] rounded-full shadow-[0_0_12px_#facc15]" />
                <div className="absolute inset-0 bg-[#facc15] rounded-full animate-ping" />
              </div>
            </div>

            {/* Vòng Quỹ đạo 2 */}
            <div className="absolute w-[450px] h-[450px] border border-slate-200/60 rounded-full border-dashed animate-[spin_35s_linear_infinite_reverse]">
              {/* Hành tinh / Vệ tinh 2 */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                <div className="w-3.5 h-3.5 bg-[#fde047] rounded-full shadow-[0_0_15px_#fde047]" />
                <div className="absolute inset-0 bg-[#fde047] rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
              </div>
              {/* Hành tinh / Vệ tinh 3 */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="w-2 h-2 bg-[#eab308] rounded-full shadow-[0_0_8px_#eab308]" />
                <div className="absolute inset-0 bg-[#eab308] rounded-full animate-ping" style={{ animationDelay: '0.7s' }} />
              </div>
            </div>

            {/* Vòng Quỹ đạo 3 */}
            <div className="absolute w-[650px] h-[650px] border border-slate-200/40 rounded-full animate-[spin_60s_linear_infinite]">
              {/* Hành tinh / Vệ tinh 4 */}
              <div className="absolute top-[14%] left-[14%] -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-[#eab308] rounded-full shadow-[0_0_15px_#eab308]" />
                <div className="absolute inset-0 bg-[#eab308] rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            
          </div>
          {/* --- END SOLAR SYSTEM BACKGROUND --- */}

          <Canvas camera={{ position: [0, 2, 9], fov: 45 }} className="w-full h-full relative z-10">
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FDFBF7" />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#1E3A8A" />
            <Environment preset="city" />

            <group position={[0, 1.5, 0]}>
              <group scale={0.75}>
                <CapitalismOctopus3D />
              </group>
              <ControlledEntities />
            </group>
          </Canvas>

          <div className="absolute bottom-10 right-10 text-[10px] font-mono tracking-widest text-slate-400 uppercase text-right pointer-events-none">
            Mô phỏng 3D <br />
            <span className="font-bold text-[#991B1B]">Xúc tu Độc quyền & Các thực thể</span>
          </div>
        </div>

      </div>
    </section>
  );
}
