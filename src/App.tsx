import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ManifestationSection } from './components/ManifestationSection';
import { StateMonopolySection } from './components/StateMonopolySection';
import { HistoricalRoleSection } from './components/HistoricalRoleSection';
import { Footer } from './components/Footer';

/**
 * APP — The newspaper as a single scroll.
 * 
 * Structure:
 * - Fixed header with paper name + progress bar (ink-style).
 * - Sections separated by "page folds" — the crease between pages.
 * - Each fold has a tentacle connector: a drawn line with an octopus
 *   suction cup at the end, visually threading the signature motif
 *   through the entire page.
 */
export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min((top / total) * 100, 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden"
      style={{ backgroundColor: 'var(--color-paper-aged)', fontFamily: 'var(--font-body)' }}
    >
      {/* Fixed header — quiet, functional */}
      <header className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: 'var(--color-overlay)', backdropFilter: 'blur(6px)' }}
      >
        <div className="h-[2px]"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(to right, var(--color-ink-full), var(--color-red-press))',
            transition: 'width 80ms ease',
          }}
        />
        <div className="py-2 px-4 sm:px-8 flex items-center justify-between"
          style={{ borderBottom: '1px solid rgba(74,63,46,0.12)' }}
        >
          <span className="t-label tracking-[0.2em]" style={{ fontSize: '0.55rem' }}>
            Thời Báo Tư Bản
          </span>
          <span className="t-data text-[0.55rem]" style={{ color: 'var(--color-ink-ghost)' }}>
            MLN122
          </span>
        </div>
      </header>

      <div className="h-10" />

      <HeroSection />
      <TentacleFold />
      <ManifestationSection />
      <TentacleFold />
      <StateMonopolySection />
      <TentacleFold />
      <HistoricalRoleSection />
      <TentacleFold />
      <Footer />
    </div>
  );
}

/**
 * TentacleFold — the signature connector between sections.
 * A single drawn tentacle line with a suction cup node,
 * threading the octopus metaphor through the entire page.
 * This is the ONE recurring visual motif.
 */
function TentacleFold() {
  return (
    <div className="relative h-14 overflow-hidden flex justify-center"
      style={{ backgroundColor: 'var(--color-paper-foxed)' }}
    >
      {/* Crease shadow */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.04) 100%)',
        }}
      />
      {/* Tentacle line + suction cup */}
      <svg viewBox="0 0 20 56" className="w-4 h-full" fill="none">
        <path d="M10 0 Q7 20 10 28 Q13 36 10 56" stroke="var(--color-ink-spread)" strokeWidth="1.2" opacity="0.35" />
        <circle cx="10" cy="28" r="3" fill="var(--color-ink-spread)" opacity="0.25" />
        <circle cx="10" cy="28" r="1.5" fill="var(--color-paper-foxed)" />
      </svg>
    </div>
  );
}
