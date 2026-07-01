import { useState } from 'react';
import { InkSettle } from '../hooks';

/**
 * CHAPTER 2 — State Monopoly Capitalism
 * 
 * Design decisions:
 * - The classified document aesthetic is the ONE structural device in this section.
 *   Dashed border + stamp = investigation metaphor.
 * - Building diagram is interactive — click a floor to reveal its content.
 *   This interaction mirrors the "investigation" of peeling back layers.
 * - Red accent used only for the active floor's border — consistent restraint.
 * - Floor details use bullet points with red squares, keeping visual rhythm.
 */

interface FloorDef {
  id: string;
  label: string;
  sub: string;
  headline: string;
  summary: string;
  body: string;
  bullets?: string[];
}

const floors: FloorDef[] = [
  {
    id: 'f1', label: 'TẦNG THƯỢNG', sub: 'Cơ chế Quan hệ Nhân sự',
    headline: 'ĐA NGUYÊN QUYỀN LỰC: AI THỰC SỰ NẮM QUYỀN?',
    summary: 'Không phe nhóm nào được độc tôn — các thế lực tư bản buộc phải thỏa hiệp.',
    body: 'Sự nâng cao trình độ dân trí và cạnh tranh xã hội làm thay đổi quan hệ nhân sự trong bộ máy nhà nước tư sản. Thể chế đa nguyên trong phân chia quyền lực trở nên phổ biến. Các thế lực tư bản độc quyền phải thiết lập cơ chế thỏa hiệp để cùng tồn tại, không cho phép bất kỳ phe nhóm nào độc tôn quyền lực chính trị.',
  },
  {
    id: 'f2', label: 'TẦNG GIỮA', sub: 'Sở hữu & Ngân sách Nhà nước',
    headline: 'NGÂN SÁCH CÔNG — TẤM ĐỆM CHO TƯ NHÂN MẠO HIỂM',
    summary: 'Quyền chi ngân sách thuộc lập pháp; nhà nước gánh rủi ro lớn thay tư nhân.',
    body: 'Việc ra quyết định chi tiêu ngân sách thuộc thẩm quyền của Nghị viện/Quốc hội, trong khi Chính phủ bị giới hạn chặt bởi luật ngân sách. Đầu tư công ngày càng tập trung gánh vác rủi ro lớn thay khối tư nhân:',
    bullets: [
      'Nghiên cứu khoa học cơ bản — chi phí khổng lồ, lợi nhuận không trực tiếp',
      'Xây dựng kết cấu hạ tầng và đáp ứng nhu cầu xã hội',
      'Dùng ngân sách giải cứu các tập đoàn độc quyền khỏi phá sản trong khủng hoảng',
    ],
  },
  {
    id: 'f3', label: 'TẦNG NỀN', sub: 'Công cụ Điều tiết Kinh tế',
    headline: 'VIỆN TRỢ NƯỚC NGOÀI: VŨ KHÍ GIẢI QUYẾT HÀNG TỒN KHO',
    summary: 'Nhà nước vận hành như công ty cổ phần — viện trợ thực chất là xuất khẩu hàng tồn đọng.',
    body: 'Chính phủ và Nghị viện tư sản hiện đại được tổ chức và vận hành tương tự một công ty cổ phần, nơi các quyết sách chịu ảnh hưởng lớn từ các tập đoàn tài phiệt. Các khoản viện trợ ưu đãi nước ngoài thực chất là công cụ điều tiết kinh tế trong nước: giải quyết hàng hóa tồn đọng, công nghệ lỗi thời bằng cách buộc nước nhận viện trợ phải mua thiết bị, hàng hóa và thuê chuyên gia từ nước cung cấp.',
  },
];

function BuildingSVG({ active, onFloor }: { active: string | null; onFloor: (id: string) => void }) {
  const floorRects = [
    { id: 'f1', y: 15, h: 65 },
    { id: 'f2', y: 90, h: 65 },
    { id: 'f3', y: 165, h: 65 },
  ];

  return (
    <svg viewBox="0 0 240 260" className="w-full max-w-[260px] mx-auto" fill="none" stroke="var(--color-ink-full)">
      {/* Roof */}
      <path d="M35 15 L120 -15 L205 15" strokeWidth="2" />
      <line x1="120" y1="-15" x2="120" y2="-30" strokeWidth="1.5" />
      <rect x="120" y="-40" width="16" height="11" fill="var(--color-red-press)" opacity="0.6" strokeWidth="0" />

      {/* Building shell */}
      <rect x="35" y="15" width="170" height="220" strokeWidth="2" />

      {/* Columns */}
      <line x1="75" y1="15" x2="75" y2="235" strokeWidth="0.8" opacity="0.4" />
      <line x1="120" y1="15" x2="120" y2="235" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
      <line x1="165" y1="15" x2="165" y2="235" strokeWidth="0.8" opacity="0.4" />

      {/* Door */}
      <rect x="100" y="205" width="40" height="30" strokeWidth="1.5" />
      <circle cx="135" cy="220" r="2" fill="var(--color-ink-spread)" />

      {/* Steps */}
      <rect x="90" y="234" width="60" height="5" strokeWidth="1" />

      {/* Floor separators and interactive areas */}
      {floorRects.map((fr) => {
        const isActive = active === fr.id;
        return (
          <g key={fr.id} onClick={() => onFloor(fr.id)} className="cursor-pointer">
            <line x1="35" y1={fr.y + fr.h} x2="205" y2={fr.y + fr.h} strokeWidth="1" />
            <rect x="36" y={fr.y + 1} width="168" height={fr.h - 2}
              fill={isActive ? 'rgba(160, 24, 24, 0.08)' : 'transparent'}
              stroke={isActive ? 'var(--color-red-press)' : 'transparent'}
              strokeWidth="1.5"
              style={{ transition: 'all 0.3s' }}
            />
            {/* Windows */}
            {[55, 85, 115, 145, 175].map((wx) => (
              <rect key={wx} x={wx} y={fr.y + 25} width="10" height="14"
                strokeWidth="0.7" opacity="0.35" />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export function StateMonopolySection() {
  const [active, setActive] = useState<string | null>(null);
  const toggle = (id: string) => setActive(active === id ? null : id);

  return (
    <section
      id="chapter2"
      className="paper-grain classified relative py-14 mx-3 sm:mx-6 my-6"
      style={{ backgroundColor: 'var(--color-paper-fresh)' }}
    >
      <div className="max-w-[960px] mx-auto px-4 sm:px-8">

        {/* Header */}
        <InkSettle>
          <div className="flex items-center justify-between mb-1">
            <span className="t-label">Trang 3 — Phóng sự Điều tra</span>
            <span className="stamp">Tài liệu được giải mật</span>
          </div>
          <div className="rule-heavy mb-5" />
        </InkSettle>

        {/* Headline */}
        <InkSettle delay={80}>
          <h2 className="t-headline t-headline-lg text-center mb-2">
            BÍ MẬT BÊN TRONG TÒA NHÀ TRẮNG:<br className="hidden sm:block" />
            NHÀ NƯỚC TƯ BẢN VẬN HÀNH NHƯ<br className="hidden sm:block" />
            MỘT CÔNG TY CỔ PHẦN
          </h2>
          <p className="t-deck text-center mb-8">
            Phóng sự đặc biệt — Cách bộ máy nhà nước hiện đại phục vụ quyền lợi tư bản độc quyền
          </p>
        </InkSettle>

        <div className="rule-light mb-8" />

        {/* Building diagram + Floor details — side by side */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Building (sticky on desktop) */}
          <InkSettle delay={150} className="md:w-[38%] flex-shrink-0">
            <div className="md:sticky md:top-20">
              <BuildingSVG active={active} onFloor={toggle} />
              <p className="t-data text-center mt-3 italic text-[0.6rem]"
                style={{ color: 'var(--color-ink-ghost)' }}
              >
                Sơ đồ mặt cắt bộ máy nhà nước — bấm vào tầng để xem chi tiết
              </p>
            </div>
          </InkSettle>

          {/* Floor details */}
          <div className="md:w-[62%] space-y-5">
            {floors.map((fl, idx) => (
              <InkSettle key={fl.id} delay={200 + idx * 100}>
                <div
                  className={`floor p-4 ${active === fl.id ? 'is-active' : ''}`}
                  onClick={() => toggle(fl.id)}
                  onMouseEnter={() => setActive(fl.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="t-label px-2 py-0.5"
                      style={{
                        color: 'var(--color-red-press)',
                        backgroundColor: 'rgba(160, 24, 24, 0.06)',
                        fontSize: '0.55rem',
                      }}
                    >
                      {fl.label}
                    </span>
                    <span className="t-data italic text-[0.65rem]" style={{ color: 'var(--color-ink-ghost)' }}>
                      {fl.sub}
                    </span>
                  </div>

                  <h3 className="t-headline t-headline-md mb-1">{fl.headline}</h3>
                  <p className="t-deck text-[0.85rem] mb-3">{fl.summary}</p>
                  <p className="t-body text-[0.85rem]">{fl.body}</p>

                  {fl.bullets && (
                    <ul className="mt-3 space-y-1.5 ml-3">
                      {fl.bullets.map((b, i) => (
                        <li key={i} className="t-body text-[0.8rem] flex gap-2 items-start"
                          style={{ color: 'var(--color-ink-spread)' }}
                        >
                          <span className="mt-1 flex-shrink-0" style={{ color: 'var(--color-red-press)', fontSize: '0.5rem' }}>■</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {idx < floors.length - 1 && <div className="rule-light mt-4" />}
                </div>
              </InkSettle>
            ))}
          </div>
        </div>

        <div className="rule-double mt-10" />
      </div>
    </section>
  );
}
