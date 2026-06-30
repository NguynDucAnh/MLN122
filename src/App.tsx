import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ManifestationSection } from './components/ManifestationSection';
import { StateMonopolySection } from './components/StateMonopolySection';
import { HistoricalRoleSection } from './components/HistoricalRoleSection';
import { Footer } from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-amber-500/30 font-sans relative bg-[#040714] text-slate-100 overflow-x-hidden">

      {/* Minimal fixed header — chỉ tên bài + progress bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#040714]/70 backdrop-blur-md border-b border-[#1e295d]/30">
        {/* Reading progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#7fd8ff] via-[#d4af37] to-[#ff5e3a] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="py-3 px-4 sm:px-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse shrink-0" />
          <span className="font-display font-bold text-sm tracking-wide text-white uppercase hidden sm:inline-block">
            Sinh vật không bao giờ chết
          </span>
          <span className="font-mono text-xs text-[#7fd8ff] font-semibold border border-[#1e295d] px-2 py-0.5 rounded-md bg-[#0d122b]/60">
            Kinh tế Chính trị Mác - Lênin · Chương 4
          </span>
        </div>
      </header>

      {/* SCROLLYTELLING FLOW */}
      <div className="pt-14">
        {/* SECTION 1: Hero — Sinh vật thức giấc */}
        <HeroSection />

        {/* Tentacle connector 1→2 */}
        <div className="w-full h-28 relative overflow-hidden flex justify-center pointer-events-none">
          <svg viewBox="0 0 60 100" preserveAspectRatio="none" className="w-14 h-full fill-none">
            <path d="M 30 0 Q 18 50 30 100" stroke="#d4af37" strokeWidth="0.5" opacity="0.25" />
            <path d="M 30 0 Q 18 50 30 100" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="8 24" opacity="0.6" />
            <circle cx="30" cy="100" r="2.5" fill="#d4af37" opacity="0.7" />
          </svg>
        </div>

        {/* SECTION 2: 5 Biểu Hiện Mới — Bản đồ xúc tu */}
        <ManifestationSection />

        {/* Tentacle connector 2→3 */}
        <div className="w-full h-28 relative overflow-hidden flex justify-center pointer-events-none">
          <svg viewBox="0 0 60 100" preserveAspectRatio="none" className="w-14 h-full fill-none">
            <path d="M 30 0 Q 42 50 30 100" stroke="#ff5e3a" strokeWidth="0.5" opacity="0.25" />
            <path d="M 30 0 Q 42 50 30 100" stroke="#ff5e3a" strokeWidth="1.5" strokeDasharray="6 20" opacity="0.6" />
            <circle cx="30" cy="100" r="2.5" fill="#ff5e3a" opacity="0.7" />
          </svg>
        </div>

        {/* SECTION 3: Độc Quyền Nhà Nước — X-ray bộ máy */}
        <StateMonopolySection />

        {/* Tentacle connector 3→4 */}
        <div className="w-full h-28 relative overflow-hidden flex justify-center pointer-events-none">
          <svg viewBox="0 0 60 100" preserveAspectRatio="none" className="w-14 h-full fill-none">
            <path d="M 30 0 Q 24 50 30 100" stroke="#7fd8ff" strokeWidth="0.5" opacity="0.25" />
            <path d="M 30 0 Q 24 50 30 100" stroke="#7fd8ff" strokeWidth="1.5" strokeDasharray="10 28" opacity="0.6" />
            <circle cx="30" cy="100" r="2.5" fill="#7fd8ff" opacity="0.7" />
          </svg>
        </div>

        {/* SECTION 4: Vai Trò Lịch Sử — Cán cân có nhịp tim */}
        <HistoricalRoleSection />

        {/* Tentacle connector 4→Footer */}
        <div className="w-full h-28 relative overflow-hidden flex justify-center pointer-events-none">
          <svg viewBox="0 0 60 100" preserveAspectRatio="none" className="w-14 h-full fill-none">
            <path d="M 30 0 Q 30 50 30 100" stroke="#ff5e3a" strokeWidth="0.5" opacity="0.15" />
            <path d="M 30 0 Q 30 50 30 100" stroke="#ff5e3a" strokeWidth="1" strokeDasharray="4 36" opacity="0.4" />
            <circle cx="30" cy="100" r="2" fill="#ff5e3a" opacity="0.4" />
          </svg>
        </div>

        {/* SECTION 5: Footer — Sinh vật co lại */}
        <Footer />
      </div>
    </div>
  );
}
