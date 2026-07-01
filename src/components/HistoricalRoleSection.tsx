import { useEffect, useState, useRef } from 'react';
import { useInView, InkSettle } from '../hooks';

/**
 * CHAPTER 3 — Historical Role: Two Sides of the Same Coin
 * 
 * Design decisions:
 * - The diptych is the structural metaphor: two newspapers placed side by side.
 * - Left paper: warm, light, uses gold ink for headlines (progress).
 * - Right paper: dark, uses red ink that bleeds on scroll (critique).
 * - The red bleed is the ONLY scroll-driven visual effect in this section.
 *   Restraint elsewhere makes it land harder.
 * - The center divider carries actual content ("Mâu thuẫn cốt lõi"),
 *   not decoration — structure encodes information.
 */

interface Article {
  id: string;
  headline: string;
  body: string;
}

const positive: Article[] = [
  { id: 'p1', headline: 'Từ Cuốc Xẻng Tới Trí Tuệ Nhân Tạo: Hành Trình 300 Năm', body: 'Chủ nghĩa tư bản đã chuyển đổi kỹ thuật lao động thủ công thô sơ lên cơ khí hóa, tự động hóa và tin học hóa. Đây là bệ phóng cho các cuộc cách mạng công nghiệp, đưa nhân loại vào thời đại kinh tế tri thức.' },
  { id: 'p2', headline: 'Nền Sản Xuất Lớn: Của Cải Vật Chất Tràn Ngập Thị Trường', body: 'Thay thế kinh tế hàng hóa giản đơn bằng nền sản xuất tập trung quy mô lớn, hiện đại. Kích thích cải tiến kỹ thuật, tăng năng suất và tạo ra khối lượng của cải vật chất khổng lồ chưa từng có trong lịch sử.' },
  { id: 'p3', headline: 'Thế Giới Phẳng: Khi Các Quốc Gia Trở Thành Một Hệ Thống', body: 'Đẩy mạnh phân công lao động xã hội cả theo chiều rộng lẫn chiều sâu. Liên kết các ngành, lĩnh vực và quốc gia lại thành một hệ thống sản xuất xã hội thống nhất.' },
];

const negative: Article[] = [
  { id: 'n1', headline: 'Sản Xuất Vì Ai? Giá Trị Thặng Dư Chảy Về Túi Của Thiểu Số', body: 'Nền sản xuất tư bản chủ nghĩa không nhằm phục vụ đông đảo quần chúng lao động. Cốt lõi vẫn là tìm kiếm giá trị thặng dư và phục vụ lợi ích của thiểu số giai cấp tư sản.' },
  { id: 'n2', headline: 'Hai Cuộc Đại Chiến Và Vô Vàn Xung Đột Mang Tên \'Thị Trường\'', body: 'Để tranh giành thị trường và thuộc địa, chủ nghĩa tư bản là nguyên nhân trực tiếp hoặc gián tiếp gây ra các cuộc chiến tranh thế giới, xung đột khu vực và chiến tranh sắc tộc ở nhiều nơi.' },
  { id: 'n3', headline: '1% Dân Số Nắm 50% Của Cải: Bất Bình Đẳng Leo Thang', body: 'Phân hóa giàu nghèo ngày càng trầm trọng trong lòng mỗi quốc gia và khoét sâu hố ngăn cách giữa nước phát triển với nước kém phát triển trên toàn cầu.' },
];

function RedBleed() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(ellipse at 100% 100%, rgba(160,24,24,${0.05 + progress * 0.2}) 0%, rgba(107,16,16,${progress * 0.1}) 40%, transparent 70%)`,
        transition: 'background 0.4s ease',
      }}
    />
  );
}

export function HistoricalRoleSection() {
  return (
    <section id="chapter3" className="relative py-14" style={{ backgroundColor: 'var(--color-paper-aged)' }}>
      <div className="max-w-[1060px] mx-auto px-4 sm:px-8">

        <InkSettle>
          <div className="flex items-baseline justify-between mb-1">
            <span className="t-label">Trang 4 — Chuyên đề Lịch sử</span>
            <span className="t-label">Chương 3</span>
          </div>
          <div className="rule-heavy mb-5" />
        </InkSettle>

        <InkSettle delay={80}>
          <h2 className="t-headline t-headline-lg text-center mb-6">
            HAI MẶT CỦA MỘT ĐỒNG XU:<br className="hidden sm:block" />
            CÔNG LAO VĨ ĐẠI VÀ TỘI ÁC KHÔNG THỂ XÓA
          </h2>
        </InkSettle>

        {/* ===== DIPTYCH ===== */}
        <InkSettle delay={150}>
          <div className="flex flex-col md:flex-row overflow-hidden shadow-lg">

            {/* LEFT — Công Báo Tiến Bộ */}
            <div className="diptych-light md:w-[48%] p-6 sm:p-8 paper-grain">
              <div className="text-center mb-4">
                <h3 className="t-masthead text-2xl sm:text-3xl mb-1" style={{ color: 'var(--color-ink-set)' }}>
                  Công Báo Tiến Bộ
                </h3>
                <p className="t-label text-[0.5rem] italic tracking-[0.15em]">
                  Cơ quan ngôn luận của Văn minh Công nghiệp
                </p>
                <div className="rule-light mt-2" />
              </div>

              <h4 className="t-headline text-[1rem] sm:text-[1.1rem] text-center mb-4"
                style={{ color: '#7a5c14' }}
              >
                CHỦ NGHĨA TƯ BẢN: CỖ MÁY TẠO RA VĂN MINH HIỆN ĐẠI
              </h4>

              {positive.map((a, i) => (
                <div key={a.id} className="mb-4">
                  <h5 className="t-headline text-[0.9rem] mb-1">{a.headline}</h5>
                  <p className="t-body text-[0.8rem] text-justify" style={{ color: 'var(--color-ink-spread)' }}>
                    {a.body}
                  </p>
                  {i < positive.length - 1 && <div className="rule-light mt-3" />}
                </div>
              ))}
            </div>

            {/* CENTER DIVIDER */}
            <div className="hidden md:flex flex-col items-center justify-center w-[4%] relative"
              style={{ backgroundColor: 'var(--color-paper-foxed)' }}
            >
              <div className="w-[2px] h-full"
                style={{ backgroundImage: 'repeating-linear-gradient(to bottom, var(--color-ink-full) 0px, var(--color-ink-full) 6px, transparent 6px, transparent 12px)' }}
              />
              <div className="absolute top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap px-2 py-0.5"
                style={{
                  backgroundColor: 'var(--color-paper-foxed)',
                  fontFamily: 'var(--font-data)',
                  fontSize: '0.5rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-red-press)',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Mâu thuẫn cốt lõi
              </div>
            </div>

            {/* Mobile divider */}
            <div className="md:hidden flex items-center justify-center py-3" style={{ backgroundColor: 'var(--color-paper-foxed)' }}>
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-10" style={{ backgroundColor: 'var(--color-red-press)' }} />
                <span className="t-label" style={{ color: 'var(--color-red-press)', fontSize: '0.5rem' }}>Mâu thuẫn cốt lõi</span>
                <div className="h-[1px] w-10" style={{ backgroundColor: 'var(--color-red-press)' }} />
              </div>
            </div>

            {/* RIGHT — Báo Phê Bình */}
            <div className="diptych-dark md:w-[48%] p-6 sm:p-8 relative overflow-hidden">
              <RedBleed />
              <div className="relative z-10">
                <div className="text-center mb-4">
                  <h3 className="t-masthead text-2xl sm:text-3xl mb-1" style={{ color: '#e87070' }}>
                    Báo Phê Bình
                  </h3>
                  <p className="t-label text-[0.5rem] italic tracking-[0.15em]" style={{ color: '#9a9080' }}>
                    Sự thật mà họ không muốn bạn đọc
                  </p>
                  <div className="h-[1px] mt-2" style={{ backgroundColor: 'rgba(160,24,24,0.4)' }} />
                </div>

                <h4 className="t-headline text-[1rem] sm:text-[1.1rem] text-center mb-4"
                  style={{ color: '#e87070' }}
                >
                  GIÁ CỦA TIẾN BỘ: CHIẾN TRANH, BÓC LỘT VÀ HỐ SÂU GIÀU NGHÈO
                </h4>

                {negative.map((a, i) => (
                  <div key={a.id} className="mb-4">
                    <h5 className="t-headline text-[0.9rem] mb-1" style={{ color: '#f0a0a0' }}>
                      {a.headline}
                    </h5>
                    <p className="t-body text-[0.8rem] text-justify" style={{ color: '#b8b0a0' }}>
                      {a.body}
                    </p>
                    {i < negative.length - 1 && (
                      <div className="h-[1px] mt-3" style={{ backgroundColor: 'rgba(160,24,24,0.25)' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </InkSettle>

        {/* Core contradiction callout */}
        <InkSettle delay={300}>
          <div className="text-center mt-6 py-3 px-4"
            style={{ backgroundColor: 'rgba(160, 24, 24, 0.04)', border: '1px solid rgba(160, 24, 24, 0.12)' }}
          >
            <p className="t-deck text-[0.85rem]" style={{ color: 'var(--color-red-press)' }}>
              Mâu thuẫn cốt lõi: Tính xã hội hóa cao của lực lượng sản xuất ↔ Chế độ chiếm hữu tư nhân
            </p>
          </div>
        </InkSettle>

        <div className="rule-double mt-8" />
      </div>
    </section>
  );
}
