import { useState, useEffect, useRef } from 'react';
import { useInView, useTypewriter, InkSettle } from '../hooks';

/**
 * FOOTER — Editorial: How Long Will This Creature Live?
 * 
 * Design decisions:
 * - This is where restraint pays off. The burn effect is THE dramatic
 *   moment of the entire page — earned because nothing else competed.
 * - Narrow editorial column (max 520px) creates intimacy.
 * - Typewriter for the conclusion is the second use of this device
 *   (first was the hero hook), bookending the experience.
 * - The open question is the last thing visible as the page "burns" away.
 * - References in IBM Plex Mono — functional, not decorative.
 */
export function Footer() {
  const { ref, isInView } = useInView();
  const containerRef = useRef<HTMLDivElement>(null);
  const [burn, setBurn] = useState(0);

  const conclusion = 'Dù độc quyền tư nhân hay độc quyền nhà nước có thiên biến vạn hóa để tự cứu lấy mình, mọi sự điều chỉnh này chủ yếu vẫn nhằm bảo vệ sự tồn tại của hệ thống tư bản. Với những mâu thuẫn cốt lõi không thể tự khắc phục, chủ nghĩa tư bản mang trong mình giới hạn lịch sử tất yếu và không thể tồn tại vĩnh viễn.';
  const { displayed, isDone } = useTypewriter(conclusion, 28, 400, isInView);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height) * 1.6 - 0.25));
      setBurn(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const refs = [
    'Giáo trình Kinh tế chính trị Mác - Lênin (2019 - Bộ GD&ĐT). Chương 4.',
    'Slide bài giảng Session 15: Biểu hiện mới của độc quyền.',
    'Slide bài giảng Session 16: Vai trò lịch sử của chủ nghĩa tư bản.',
  ];

  return (
    <section id="footer" ref={ref} className="relative py-14 overflow-hidden"
      style={{ backgroundColor: 'var(--color-paper-aged)' }}
    >
      <div ref={containerRef} className="max-w-[620px] mx-auto px-4 sm:px-8 relative">

        {/* Burn ember glow — intensifies on scroll */}
        <div className="absolute inset-0 pointer-events-none z-20 rounded-sm"
          style={{
            boxShadow: `
              inset 0 0 ${20 + burn * 70}px rgba(200, 60, 0, ${burn * 0.25}),
              inset 0 0 ${50 + burn * 100}px rgba(160, 30, 0, ${burn * 0.1}),
              inset 0 0 ${8 + burn * 30}px rgba(0, 0, 0, ${burn * 0.15})
            `,
            transition: 'box-shadow 0.4s ease',
          }}
        />

        {/* Edge darkening */}
        <div className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `
              linear-gradient(to right, rgba(60,25,0,${burn * 0.1}) 0%, transparent 12%, transparent 88%, rgba(60,25,0,${burn * 0.1}) 100%),
              linear-gradient(to bottom, transparent 75%, rgba(30,10,0,${burn * 0.15}) 100%)
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-30 paper-grain p-6 sm:p-10"
          style={{
            backgroundColor: 'var(--color-paper-fresh)',
            filter: `sepia(${burn * 0.35}) brightness(${1 - burn * 0.12})`,
            transition: 'filter 0.4s ease',
          }}
        >
          {/* Header */}
          <InkSettle>
            <div className="flex items-baseline justify-between mb-1">
              <span className="t-label">Trang 5 — Xã luận</span>
              <span className="t-label">Ban Biên Tập</span>
            </div>
            <div className="rule-heavy mb-5" />
          </InkSettle>

          {/* Editorial headline */}
          <InkSettle delay={80}>
            <h2 className="t-headline t-headline-lg text-center mb-1">
              XÃ LUẬN: SINH VẬT NÀY<br />
              CÒN SỐNG BAO LÂU?
            </h2>
            <p className="t-data text-center italic mb-6 text-[0.65rem]" style={{ color: 'var(--color-ink-ghost)' }}>
              Ban Biên Tập — Thời Báo Tư Bản
            </p>
          </InkSettle>

          <div className="rule-light mb-6" />

          {/* Conclusion — typewriter, narrow column */}
          <InkSettle delay={150}>
            <div className="max-w-[520px] mx-auto">
              <p className={`t-body text-[0.92rem] leading-loose text-justify ${isDone ? '' : 'typewriter-cursor'}`}
                style={{ minHeight: '7em' }}
              >
                {displayed || '\u00A0'}
              </p>
            </div>
          </InkSettle>

          {/* Open question — the last line before the page burns */}
          <InkSettle delay={350}>
            <div className="text-center mt-8 mb-6">
              <p className="t-headline text-[1.15rem] sm:text-[1.4rem] italic"
                style={{ color: 'var(--color-red-press)' }}
              >
                "Vậy đến khi nào tờ báo này in số cuối cùng?"
              </p>
            </div>
          </InkSettle>

          <div className="rule-double mb-6" />

          {/* Credits */}
          <InkSettle delay={450}>
            <div className="text-center py-4 px-4"
              style={{ backgroundColor: 'rgba(217, 202, 176, 0.3)' }}
            >
              <p className="t-label mb-1 tracking-[0.18em]" style={{ fontSize: '0.55rem' }}>
                Kinh tế Chính trị Mác - Lênin
              </p>
              <p className="t-headline text-[1.1rem]">MLN122</p>
              <div className="rule-light my-3 max-w-[160px] mx-auto" />
              <p className="t-data italic text-[0.6rem]" style={{ color: 'var(--color-ink-ghost)' }}>
                Bài thuyết trình nhóm
              </p>
            </div>
          </InkSettle>

          {/* References */}
          <InkSettle delay={500}>
            <div className="mt-5">
              <p className="t-label mb-2" style={{ fontSize: '0.5rem' }}>Tài liệu tham khảo</p>
              <ol className="space-y-1">
                {refs.map((r, i) => (
                  <li key={i} className="t-data text-[0.6rem] flex gap-1.5" style={{ color: 'var(--color-ink-ghost)' }}>
                    <span className="flex-shrink-0">[{i + 1}]</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ol>
            </div>
          </InkSettle>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 pb-6">
        <p className="t-label" style={{ fontSize: '0.45rem' }}>
          © Thời Báo Tư Bản — Ấn bản giáo dục
        </p>
      </div>
    </section>
  );
}
