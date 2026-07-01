import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ManifestationSection } from './components/ManifestationSection';
import { StateMonopolySection } from './components/StateMonopolySection';
import { HistoricalRoleSection } from './components/HistoricalRoleSection';
import { FunFactSection } from './components/FunFactSection';
import { GlobalBackground } from './components/GlobalBackground';
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
    <div className="min-h-screen selection:bg-[#991B1B]/20 font-sans relative bg-transparent text-slate-800 overflow-x-hidden">
      <GlobalBackground />

      {/* Minimal fixed header — Theme Sáng */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        {/* Reading progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#1E3A8A] via-[#B45309] to-[#991B1B] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="py-3 px-4 sm:px-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#991B1B] animate-pulse shrink-0" />
          <span className="font-display font-bold text-sm tracking-wide text-slate-800 uppercase hidden sm:inline-block">
            Sinh vật không bao giờ chết
          </span>
          <span className="font-mono text-xs text-[#1E3A8A] font-semibold border border-[#1E3A8A]/20 px-2 py-0.5 rounded-md bg-[#1E3A8A]/5">
            Kinh tế Chính trị Mác - Lênin · Chương 4
          </span>
        </div>
      </header>

      {/* SCROLLYTELLING FLOW */}
      <div className="pt-14">
        {/* SECTION 1: Hero — Sinh vật 3D */}
        <HeroSection />

        {/* Tentacle connector 1→2 */}
        <div className="w-full h-28 relative overflow-hidden flex justify-center pointer-events-none -mt-4 z-20">
          <svg viewBox="0 0 60 100" preserveAspectRatio="none" className="w-14 h-full fill-none">
            <path d="M 30 0 Q 18 50 30 100" stroke="#1E3A8A" strokeWidth="1" opacity="0.15" />
            <path d="M 30 0 Q 18 50 30 100" stroke="#1E3A8A" strokeWidth="2" strokeDasharray="8 24" opacity="0.5" />
            <circle cx="30" cy="100" r="3" fill="#1E3A8A" opacity="0.6" />
          </svg>
        </div>

        {/* SECTION 2: 5 Biểu Hiện Mới — Card Coverflow */}
        <ManifestationSection />

        {/* Tentacle connector 2→3 */}
        <div className="w-full h-28 relative overflow-hidden flex justify-center pointer-events-none -mt-4 z-20">
          <svg viewBox="0 0 60 100" preserveAspectRatio="none" className="w-14 h-full fill-none">
            <path d="M 30 0 Q 42 50 30 100" stroke="#B45309" strokeWidth="1" opacity="0.15" />
            <path d="M 30 0 Q 42 50 30 100" stroke="#B45309" strokeWidth="2" strokeDasharray="6 20" opacity="0.5" />
            <circle cx="30" cy="100" r="3" fill="#B45309" opacity="0.6" />
          </svg>
        </div>

        {/* SECTION 3: Độc Quyền Nhà Nước — 3D Exploded View */}
        <StateMonopolySection />

        {/* Tentacle connector 3→4 */}
        <div className="w-full h-28 relative overflow-hidden flex justify-center pointer-events-none -mt-4 z-20">
          <svg viewBox="0 0 60 100" preserveAspectRatio="none" className="w-14 h-full fill-none">
            <path d="M 30 0 Q 24 50 30 100" stroke="#991B1B" strokeWidth="1" opacity="0.15" />
            <path d="M 30 0 Q 24 50 30 100" stroke="#991B1B" strokeWidth="2" strokeDasharray="10 28" opacity="0.5" />
            <circle cx="30" cy="100" r="3" fill="#991B1B" opacity="0.6" />
          </svg>
        </div>

        {/* SECTION 4: Vai Trò Lịch Sử — Cán cân 3D */}
        <HistoricalRoleSection />

        {/* Tentacle connector 4→5 */}
        <div className="w-full h-28 relative overflow-hidden flex justify-center pointer-events-none -mt-4 z-20">
          <svg viewBox="0 0 60 100" preserveAspectRatio="none" className="w-14 h-full fill-none">
            <path d="M 30 0 Q 36 50 30 100" stroke="#78350F" strokeWidth="1" opacity="0.15" />
            <path d="M 30 0 Q 36 50 30 100" stroke="#78350F" strokeWidth="2" strokeDasharray="8 24" opacity="0.5" />
            <circle cx="30" cy="100" r="3" fill="#78350F" opacity="0.6" />
          </svg>
        </div>

        {/* SECTION 5: Fun Fact — Video Modal */}
        <FunFactSection />

        {/* Tentacle connector 5→Footer */}
        <div className="w-full h-28 relative overflow-hidden flex justify-center pointer-events-none z-20">
          <svg viewBox="0 0 60 100" preserveAspectRatio="none" className="w-14 h-full fill-none">
            <path d="M 30 0 Q 30 50 30 100" stroke="#78350F" strokeWidth="1" opacity="0.1" />
            <path d="M 30 0 Q 30 50 30 100" stroke="#78350F" strokeWidth="2" strokeDasharray="4 36" opacity="0.3" />
            <circle cx="30" cy="100" r="3" fill="#78350F" opacity="0.5" />
          </svg>
        </div>

        {/* SECTION 5: Footer */}
        <Footer />
      </div>
    </div>
  );
}
