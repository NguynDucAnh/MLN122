import { useState } from 'react';
import { InkSettle } from '../hooks';

/**
 * CHAPTER 1 — 5 Manifestations of Modern Monopoly
 * 
 * Design decisions:
 * - Columns have UNEQUAL default widths. Column 1 and 3 (the ones with
 *   the most data) are wider. This mirrors real newspaper layout where
 *   the lead story gets more space.
 * - Hover expands one column, compresses others — interaction reveals depth.
 * - Red accent used ONLY for definition terms (restraint).
 * - Comparison table in col3 uses Zilla Slab labels, not the body face.
 */

interface ColDef {
  id: string;
  headline: string;
  byline: string;
  summary: string;
  detail: {
    intro: string;
    items?: { term: string; definition: string }[];
    table?: { title: string; headers: string[]; rows: string[][] };
  };
}

const columns: ColDef[] = [
  {
    id: 'col1',
    headline: 'TẬP ĐOÀN XUYÊN QUỐC GIA: KHI MỘT CÔNG TY LỚN HƠN MỘT QUỐC GIA',
    byline: 'Concern & Conglomerate',
    summary: 'Concern và Conglomerate — hai hình thái tổ chức độc quyền khổng lồ chi phối nền kinh tế hiện đại.',
    detail: {
      intro: 'Quá trình liên kết độc quyền đã vượt khỏi giới hạn một ngành hay một quốc gia:',
      items: [
        { term: 'Concern', definition: 'Tổ chức độc quyền đa ngành, bao gồm hàng trăm xí nghiệp thuộc các ngành nghề khác nhau và phân bố ở nhiều quốc gia. Ra đời nhằm đối phó cạnh tranh gay gắt và lách luật chống độc quyền.' },
        { term: 'Conglomerate', definition: 'Kết hợp của hàng chục hãng vừa và nhỏ không có liên quan trực tiếp về sản xuất hay dịch vụ. Mục đích tối đa hóa lợi nhuận qua hoạt động chứng khoán và tài chính.' },
      ],
    },
  },
  {
    id: 'col2',
    headline: 'TÀI PHIỆT THÂU TÓM CẢ NÔNG - THƯƠNG - TÍN - DỊCH VỤ',
    byline: 'Chế độ ủy nhiệm',
    summary: 'Tư bản tài chính không còn gói gọn trong công nghiệp - ngân hàng mà thâm nhập toàn bộ nền kinh tế.',
    detail: {
      intro: 'Cách mạng khoa học công nghệ thúc đẩy dịch vụ, bảo hiểm, phần mềm phát triển mạnh:',
      items: [
        { term: 'Phạm vi liên kết mới', definition: 'Không chỉ công nghiệp - ngân hàng mà mở rộng sang: công - nông - thương - tín - dịch vụ, thậm chí công nghiệp - quân sự - dịch vụ quốc phòng.' },
        { term: 'Chế độ ủy nhiệm', definition: 'Cổ phiếu phát hành mệnh giá nhỏ, số cổ đông tăng lên. Đại cổ đông nắm quyền ủy nhiệm từ cổ đông nhỏ để chi phối hướng đi công ty — tinh vi hơn \'chế độ tham dự\' truyền thống.' },
      ],
    },
  },
  {
    id: 'col3',
    headline: 'DÒNG VỐN ĐẢO CHIỀU: TIỀN KHÔNG CÒN CHẢY VỀ NAM',
    byline: 'FDI & BOT',
    summary: 'Từ những năm 1970, luồng vốn chủ yếu chảy qua lại giữa các nước phát triển.',
    detail: {
      intro: 'Xuất khẩu tư bản có sự dịch chuyển lớn kể từ những năm 1970.',
      table: {
        title: 'Điểm khác biệt của xuất khẩu tư bản hiện nay',
        headers: ['Tiêu chí', 'Trước 1970', 'Từ 1970 đến nay'],
        rows: [
          ['Hướng', 'Phát triển → Kém phát triển', 'Qua lại giữa các nước phát triển'],
          ['Chủ thể', 'Nhà nước & tập đoàn quốc gia', 'Công ty xuyên quốc gia (TNCs)'],
          ['Hình thức', 'Khai thác tài nguyên', 'FDI, BOT, BT kết hợp xuất khẩu hàng hóa'],
          ['Tính chất', 'Áp đặt thực dân', 'Đề cao nguyên tắc cùng có lợi'],
        ],
      },
    },
  },
  {
    id: 'col4',
    headline: 'THỊ TRƯỜNG THẾ GIỚI: GIẰNG CO GIỮA TOÀN CẦU VÀ KHU VỰC',
    byline: 'EU, NAFTA, OPEC',
    summary: 'Toàn cầu hóa và khu vực hóa qua liên minh kinh tế đang chạy song song.',
    detail: {
      intro: 'Phân chia thị trường thế giới là kết quả đan xen của hai xu hướng:',
      items: [
        { term: 'Toàn cầu hóa', definition: 'Sức mạnh bành trướng của TNCs thúc đẩy quốc tế hóa và hình thành chủ nghĩa tư bản độc quyền quốc tế.' },
        { term: 'Khu vực hóa', definition: 'Liên minh kinh tế khu vực: EU, NAFTA, OPEC, MERCOSUR — các nước đang phát triển cũng liên kết lại.' },
      ],
    },
  },
  {
    id: 'col5',
    headline: 'BIÊN GIỚI MỀM: CHINH PHỤC KHÔNG CẦN ĐẠI BÁC',
    byline: 'Biên giới kinh tế',
    summary: 'Thay chiến tranh xâm lược bằng bành trướng "biên giới kinh tế" vô hình.',
    detail: {
      intro: 'Chủ nghĩa thực dân cũ sụp đổ, các cường quốc chuyển sang phương thức mới.',
      items: [
        { term: 'Chiến lược biên giới mềm', definition: 'Không chia cắt lãnh thổ bằng chiến tranh trực tiếp. Thay vào đó bành trướng \'biên giới kinh tế\' qua đầu tư, thương mại và ảnh hưởng chính trị.' },
        { term: 'Rủi ro tiềm ẩn', definition: 'Dù bề ngoài hòa bình, thế giới vẫn tiềm ẩn chạy đua vũ trang và xung đột thương mại do các tập đoàn lũng đoạn giật dây.' },
      ],
    },
  },
];

export function ManifestationSection() {
  return (
    <section
      id="chapter1"
      className="paper-grain relative py-14"
      style={{ backgroundColor: 'var(--color-paper-aged)' }}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">

        {/* Page header */}
        <InkSettle>
          <div className="flex items-baseline justify-between mb-1">
            <span className="t-label">Trang 2 — Kinh tế Thế giới</span>
            <span className="t-label">Chương 1</span>
          </div>
          <div className="rule-heavy mb-5" />
        </InkSettle>

        {/* Headline */}
        <InkSettle delay={80}>
          <h2 className="t-headline t-headline-lg text-center mb-2">
            NĂM XÚC TU CỦA BẠCH TUỘC ĐỘC QUYỀN<br className="hidden sm:block" />
            ĐANG VƯƠN TỚI MỌI NGÓC NGÁCH THỊ TRƯỜNG
          </h2>
          <p className="t-deck text-center mb-8">
            Phóng viên tiết lộ những biểu hiện mới nhất của tư bản độc quyền trong điều kiện ngày nay
          </p>
        </InkSettle>

        <div className="rule-light mb-7" />

        {/* 5-column newspaper spread */}
        <div className="col-group">
          {columns.map((col, idx) => (
            <InkSettle key={col.id} delay={120 + idx * 80} className="col-item rule-col px-3 py-2">
                {/* Column headline */}
                <h3 className="t-headline t-headline-sm mb-1">
                  {col.headline}
                </h3>

                {/* Byline */}
                <p className="t-label mb-2" style={{ fontSize: '0.55rem' }}>
                  {col.byline}
                </p>

                {/* Summary — always visible */}
                <p className="t-body text-[0.8rem] leading-relaxed mb-1"
                  style={{ color: 'var(--color-ink-spread)' }}
                >
                  {col.summary}
                </p>

                {/* Detail — revealed on hover (desktop) */}
                <div className="col-body">
                  <div className="rule-light my-2" />
                  <p className="t-body text-[0.78rem] mb-2" style={{ color: 'var(--color-ink-full)' }}>
                    {col.detail.intro}
                  </p>

                  {col.detail.items?.map((item, i) => (
                    <div key={i} className="mb-2 pl-3" style={{ borderLeft: '2px solid var(--color-red-press)' }}>
                      <p className="t-label mb-0.5" style={{ color: 'var(--color-red-press)', fontSize: '0.6rem' }}>
                        {item.term}
                      </p>
                      <p className="t-body text-[0.72rem]" style={{ color: 'var(--color-ink-spread)' }}>
                        {item.definition}
                      </p>
                    </div>
                  ))}

                  {col.detail.table && (
                    <div className="mt-2">
                      <p className="t-label mb-1.5" style={{ fontSize: '0.55rem' }}>{col.detail.table.title}</p>
                      <table className="w-full text-[0.7rem] border-collapse" style={{ fontFamily: 'var(--font-body)' }}>
                        <thead>
                          <tr className="rule-heavy">
                            {col.detail.table.headers.map((h, i) => (
                              <th key={i} className="text-left py-1 px-1.5 t-label" style={{ fontSize: '0.55rem' }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {col.detail.table.rows.map((row, ri) => (
                            <tr key={ri} style={{ borderBottom: '1px solid rgba(74,63,46,0.12)' }}>
                              {row.map((cell, ci) => (
                                <td key={ci} className="py-1 px-1.5" style={{ color: 'var(--color-ink-spread)' }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
            </InkSettle>
          ))}
        </div>

        <div className="rule-double mt-10" />
      </div>
    </section>
  );
}
