import { useTypewriter, useInView, InkSettle } from '../hooks';

/**
 * HERO — The newspaper front page.
 * 
 * Design decisions:
 * - Masthead is the ONLY place blackletter appears (UnifrakturMaguntia).
 *   Using it elsewhere would dilute its impact.
 * - The typewriter is the single animated moment. Everything else is static.
 *   This restraint makes the typewriter feel real, not decorative.
 * - The 3-column layout uses unequal widths (2:5:2) like a real editorial page,
 *   not a symmetrical grid.
 * - The octopus illustration is larger and positioned as a visual anchor —
 *   this is the signature element that carries into section connectors.
 */
export function HeroSection() {
  const { ref: heroRef, isInView } = useInView();
  const hookText = 'Nếu chủ nghĩa tư bản là một sinh vật, nó đã chết theo dự đoán của Marx chưa?';
  const { displayed, isDone } = useTypewriter(hookText, 42, 600, isInView);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="paper-grain foxing-tl foxing-br relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--color-paper-fresh)' }}
    >
      <div className="relative z-10 max-w-[880px] mx-auto w-full px-5 sm:px-10 py-10 flex flex-col min-h-screen">

        {/* ===== MASTHEAD ===== */}
        <InkSettle>
          <header className="text-center mb-1">
            <p className="t-label mb-4 tracking-[0.25em]" style={{ fontSize: '0.55rem' }}>
              Cơ quan ngôn luận của Hệ thống — Phát hành từ Thế kỷ XIX đến nay
            </p>

            <h1 className="t-masthead text-6xl sm:text-8xl md:text-[7rem]"
              style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.06)' }}
            >
              Thời Báo Tư Bản
            </h1>

            {/* Double rule */}
            <div className="mx-auto max-w-[650px] mt-3">
              <div className="rule-double" />
            </div>

            <p className="t-label mt-4 tracking-[0.18em]" style={{ fontSize: '0.55rem' }}>
              Ấn Bản Đặc Biệt ✦ Kỷ Nguyên Mới ✦ Giá: Một Giá Trị Thặng Dư
            </p>
          </header>
        </InkSettle>

        <div className="rule-light my-5" />

        {/* ===== TYPEWRITER HOOK — the one animated moment ===== */}
        <InkSettle delay={150}>
          <div className="text-center mb-6 min-h-[3.5em]">
            <p className={`t-data italic text-base sm:text-lg max-w-[560px] mx-auto leading-relaxed ${isDone ? '' : 'typewriter-cursor'}`}
              style={{ color: 'var(--color-ink-spread)' }}
            >
              {displayed || '\u00A0'}
            </p>
          </div>
        </InkSettle>

        {/* ===== HEADLINE ===== */}
        <InkSettle delay={300}>
          <h2 className="t-headline t-headline-lg text-center mb-3">
            SỰ VẬN ĐỘNG CỦA<br />
            CHỦ NGHĨA TƯ BẢN<br />
            TRONG KỶ NGUYÊN MỚI
          </h2>
          <p className="t-deck text-center mb-4">
            Cạnh tranh, Độc quyền &amp; Vai trò lịch sử
          </p>
        </InkSettle>

        <div className="rule-double my-4 max-w-[400px] mx-auto" />

        {/* ===== 3-COLUMN: TOC / Lead / Illustration (2:5:2 ratio) ===== */}
        <InkSettle delay={450}>
          <div className="flex flex-col md:flex-row gap-5 mt-5 flex-grow">

            {/* TOC — narrow left sidebar */}
            <nav className="md:w-[18%] rule-col pr-3 flex-shrink-0">
              <p className="t-label mb-3">Trong số này</p>
              {[
                'Tr.2 — 5 Biểu hiện mới của Độc quyền Tư nhân',
                'Tr.3 — Độc quyền Nhà nước dưới kính lúp',
                'Tr.4 — Hai mặt của một đồng xu lịch sử',
                'Tr.5 — Xã luận: Sinh vật này còn sống bao lâu?',
              ].map((item, i) => (
                <p key={i} className="t-body text-[0.75rem] leading-snug mb-2 cursor-pointer hover:underline"
                  style={{ color: 'var(--color-ink-spread)' }}
                >
                  {item}
                </p>
              ))}
            </nav>

            {/* Lead article — wide center */}
            <article className="md:w-[55%] rule-col pr-4">
              <p className="t-body drop-cap text-justify">
                Trong bối cảnh toàn cầu hóa và cách mạng khoa học - công nghệ, chủ nghĩa tư bản độc quyền
                không hề đứng im mà luôn tự điều chỉnh để thích nghi. Sự vận động này tạo ra những biểu hiện
                vô cùng phức tạp ở cả cấp độ tư nhân lẫn nhà nước. Mỗi lần tưởng như sắp sụp đổ, hệ thống
                lại tìm ra phương thức mới để tồn tại — như một sinh vật biết lột xác.
              </p>
            </article>

            {/* Illustration — signature octopus, larger */}
            <aside className="md:w-[27%] flex flex-col items-center justify-start pt-2">
              <OctopusIllustration />
              <p className="t-data text-[0.6rem] mt-2 text-center italic"
                style={{ color: 'var(--color-ink-ghost)' }}
              >
                Hình khắc gỗ: Bạch tuộc Độc quyền
              </p>
            </aside>
          </div>
        </InkSettle>

        {/* Scroll prompt — understated */}
        <InkSettle delay={600}>
          <div className="text-center mt-auto pt-8 pb-4">
            <button
              onClick={() => document.getElementById('chapter1')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none"
              aria-label="Cuộn xuống trang tiếp theo"
            >
              <span className="t-label text-[0.5rem]">Lật trang</span>
              <svg width="16" height="22" viewBox="0 0 16 22" className="group-hover:translate-y-1 transition-transform duration-200">
                <path d="M8 0 L8 18 M2 13 L8 19 L14 13" stroke="var(--color-ink-ghost)" strokeWidth="1.2" fill="none" />
              </svg>
            </button>
          </div>
        </InkSettle>
      </div>
    </section>
  );
}

/**
 * The octopus — signature visual element.
 * Larger, more detailed, with tentacles that suggest
 * reaching into different domains.
 * Hand-drawn quality via irregular strokes.
 */
function OctopusIllustration() {
  return (
    <div className="w-full max-w-[220px] aspect-square p-2">
      <svg viewBox="0 0 220 220" className="w-full h-full" fill="none" stroke="var(--color-ink-full)" strokeLinecap="round">
        {/* Globe — the world it grips */}
        <circle cx="110" cy="72" r="38" strokeWidth="2" />
        <ellipse cx="110" cy="72" rx="38" ry="14" strokeWidth="0.8" />
        <path d="M72 72 Q110 56 148 72" strokeWidth="0.8" />
        <path d="M72 72 Q110 88 148 72" strokeWidth="0.8" />
        <line x1="110" y1="34" x2="110" y2="110" strokeWidth="0.8" />
        
        {/* Body mass below globe — subtle */}
        <ellipse cx="110" cy="108" rx="28" ry="12" strokeWidth="1.5" opacity="0.6" />

        {/* 8 tentacles — each reaching toward a different institution */}
        {/* Left side */}
        <path d="M88 115 Q55 135 28 120 Q15 112 10 130" strokeWidth="2.2" />
        <path d="M82 118 Q50 155 22 170" strokeWidth="1.8" />
        <path d="M92 120 Q68 165 45 195" strokeWidth="2" />
        
        {/* Center */}
        <path d="M105 120 Q95 165 85 205" strokeWidth="1.6" />
        <path d="M115 120 Q125 165 135 205" strokeWidth="1.6" />
        
        {/* Right side */}
        <path d="M128 120 Q152 165 175 195" strokeWidth="2" />
        <path d="M138 118 Q170 155 198 170" strokeWidth="1.8" />
        <path d="M132 115 Q165 135 192 120 Q205 112 210 130" strokeWidth="2.2" />

        {/* Suction cups — small dots along tentacles */}
        {[
          [40, 140], [30, 155], [22, 165],
          [55, 165], [48, 180], [45, 190],
          [90, 175], [87, 190],
          [130, 175], [133, 190],
          [165, 165], [172, 180], [175, 190],
          [180, 140], [190, 155], [198, 165],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.8" fill="var(--color-ink-spread)" opacity="0.4" />
        ))}

        {/* Small institution icons at tentacle tips */}
        {/* Factory (left) */}
        <rect x="4" y="126" width="10" height="8" strokeWidth="1" opacity="0.5" />
        <rect x="6" y="122" width="3" height="4" strokeWidth="0.8" opacity="0.5" />
        
        {/* Bank (right) */}
        <rect x="204" y="126" width="10" height="8" strokeWidth="1" opacity="0.5" />
        <path d="M204 126 L209 120 L214 126" strokeWidth="0.8" opacity="0.5" />
        
        {/* Ship (bottom left) */}
        <path d="M16 168 Q22 164 28 168" strokeWidth="1" opacity="0.5" />
        <line x1="22" y1="164" x2="22" y2="158" strokeWidth="0.8" opacity="0.5" />
        
        {/* Flag (bottom right) */}
        <line x1="196" y1="168" x2="196" y2="158" strokeWidth="0.8" opacity="0.5" />
        <rect x="196" y="158" width="6" height="4" fill="var(--color-red-press)" opacity="0.3" strokeWidth="0" />
      </svg>
    </div>
  );
}
