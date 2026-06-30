# ĐẶC TẢ TRANG WEB THUYẾT TRÌNH
## "Sinh vật không bao giờ chết" — Sự vận động của Chủ nghĩa Tư bản trong kỷ nguyên mới

> File này dành cho AI agent / developer đọc để dựng trang web. Bao gồm: ý tưởng sáng tạo tổng thể, hướng dẫn thiết kế chi tiết từng section, và toàn bộ nội dung văn bản gốc cần đưa vào.
> Bối cảnh sử dụng: trang web chạy trên trình duyệt desktop, dùng làm tài liệu hình ảnh hỗ trợ cho bài thuyết trình trước lớp (môn Kinh tế Chính trị Mác - Lênin, chủ đề: Chủ nghĩa tư bản độc quyền và độc quyền nhà nước trong giai đoạn hiện nay). Trang web là một trải nghiệm cuộn trang (scrollytelling) độc lập, không có cơ chế điều khiển slide hay trợ lý hỏi đáp đi kèm.

---

## 1. Ý TƯỞNG SÁNG TẠO TỔNG THỂ

**Concept chủ đạo:** Toàn bộ trang web được dựng theo motif **"một sinh vật biết biến hình"** — ẩn dụ cho chủ nghĩa tư bản độc quyền: không chết đi như Marx từng tiên đoán, không đứng yên, mà liên tục "lột xác" để sinh tồn qua các hình thái mới.

**Hình ảnh xuyên suốt:** Một khối hữu cơ dạng tua xúc tu (gợi nhớ tranh biếm họa "bạch tuộc tư bản" đầu thế kỷ 20, nhưng được làm lại theo phong cách data-visualization hiện đại — các đường mảnh, phát sáng như mạch điện/sơ đồ mạng lưới, không vẽ tả thực). Sinh vật này:
- **Xuất hiện** ở Hero (thức giấc, vươn ra từ tâm màn hình)
- **Vươn rộng** dần qua các section nội dung (mỗi section là một "xúc tu" hoặc một "lớp giải phẫu" của sinh vật)
- **Co lại / mờ dần** ở Footer như lời cảnh báo về giới hạn lịch sử tất yếu của nó

**Tinh thần trình bày:** Vì đây là trang web phục vụ thuyết trình trực tiếp (người thuyết trình đứng nói, lớp nhìn màn hình), trang web cần đóng vai trò "sân khấu hình ảnh" hỗ trợ giọng nói — không nhồi nhét chữ dày đặc. Ưu tiên:
- Mỗi section/slide: tối đa 1 ý chính lớn + hình ảnh/sơ đồ ẩn dụ mạnh
- Chữ trên màn hình là từ khóa gợi nhớ, không phải văn bản đầy đủ để đọc
- Có thể điều hướng dạng slide (next/prev bằng phím mũi tên hoặc click) để người thuyết trình kiểm soát nhịp độ trong 25 phút, đồng thời vẫn cuộn được như trang scrollytelling nếu xem lại sau

**Bảng màu:**
- Nền chủ đạo: tối, xanh than gần đen (`#0a0e1a` hoặc tương tự)
- Điểm nhấn 1 (quyền lực/tư bản): vàng đồng (`#c9a227` / `#d4af37`)
- Điểm nhấn 2 (cảnh báo/xung đột): đỏ cam (`#e8542a` / `#ff5e3a`)
- Tua xúc tu/đường mạch: trắng xanh phát sáng nhẹ (`#7fd8ff` hoặc gradient cyan-trắng), hiệu ứng glow/blur nhẹ

**Typography:**
- Tiêu đề: serif đậm, mang tính "tuyên ngôn/manifesto" (ví dụ Playfair Display, Source Serif, hoặc tương đương)
- Nội dung: sans-serif rõ ràng, dễ đọc từ xa (ví dụ Inter, Be Vietnam Pro — ưu tiên font hỗ trợ tiếng Việt tốt)

**Chuyển cảnh:** Khi chuyển section, dùng hiệu ứng "tua xúc tu kéo dài/mọc rễ" nối liền hai section, tạo cảm giác đây là một sinh vật duy nhất xuyên suốt toàn trang chứ không phải các khối nội dung rời rạc.

---

## 2. CẤU TRÚC CHI TIẾT TỪNG SECTION

### SECTION 1 — HERO: "Sinh vật thức giấc"

**Thiết kế:** Một khối tua hữu cơ render bằng SVG/Canvas (style mạch điện phát sáng), các đường tua uốn lượn chậm như đang "thở" (animation loop nhẹ nhàng). Khi trang tải: các tua từ từ vươn ra từ tâm màn hình, đồng thời tiêu đề fade-in theo từng chữ/từ. Hiệu ứng parallax nhẹ khi cuộn hoặc di chuột, để tua phản ứng như đang "quan sát" người xem.

**Nội dung text:**
- Tiêu đề lớn (H1): **SỰ VẬN ĐỘNG CỦA CHỦ NGHĨA TƯ BẢN TRONG KỶ NGUYÊN MỚI**
- Tiêu đề phụ (H2): Cạnh tranh, Độc quyền & Vai trò lịch sử
- Đoạn lead text: *"Trong bối cảnh toàn cầu hóa và cách mạng khoa học - công nghệ, chủ nghĩa tư bản độc quyền không hề đứng im mà luôn tự điều chỉnh để thích nghi. Sự vận động này tạo ra những biểu hiện vô cùng phức tạp ở cả cấp độ tư nhân lẫn nhà nước."*

**Gợi ý tương tác:** Có thể mở đầu bằng câu hook lớn xuất hiện trước cả tiêu đề (timing 1-2 giây): *"Nếu chủ nghĩa tư bản là một sinh vật, nó đã chết theo dự đoán của Marx chưa?"* — rồi fade sang tiêu đề chính. Tạo khoảng lặng hình ảnh để người thuyết trình tận dụng.

---

### SECTION 2 — 5 BIỂU HIỆN MỚI CỦA ĐỘC QUYỀN TƯ NHÂN: "Bản đồ tua xúc tu toàn cầu"

**Thiết kế:** Một bản đồ thế giới cách điệu (outline tối giản, không cần chi tiết địa lý thật) với **5 tua xúc tu vươn ra từ một điểm trung tâm** (đại diện "tư bản độc quyền"). Mỗi tua kết thúc ở một "đầu mút" tương ứng 1 trong 5 biểu hiện.

**Tương tác:** Hover/click vào đầu mút nào → tua đó sáng lên, các tua còn lại mờ đi → panel trượt ra chứa nội dung chi tiết.

**5 nhãn xúc tu + nội dung chi tiết:**

**Xúc tu 1 — Tích tụ & Tập trung tư bản**
- Xuất hiện các công ty độc quyền xuyên quốc gia (TNCs) hoạt động song song với các xí nghiệp vừa và nhỏ.
- Hình thành tổ chức độc quyền khổng lồ: **Concern** (đa ngành, chống rủi ro) và **Conglomerate** (tổ hợp kinh doanh tài chính, chứng khoán không liên quan trực tiếp về sản xuất).

**Xúc tu 2 — Sự bành trướng của Tư bản tài chính**
- Không chỉ gói gọn trong công nghiệp - ngân hàng, mà thâm nhập vào tổ hợp: công - nông - thương - tín - dịch vụ.
- Bổ sung "chế độ ủy nhiệm": đại cổ đông nắm quyền ủy nhiệm từ cổ đông nhỏ để chi phối hướng đi của công ty.

**Xúc tu 3 — Biến đổi trong Xuất khẩu tư bản**
- Hướng đi: luồng vốn chủ yếu chảy qua lại **giữa các nước tư bản phát triển với nhau** (thay vì chỉ đổ về nước kém phát triển như trước đây) — gợi ý hình ảnh mũi tên hai chiều thay vì một chiều.
- Hình thức mới: kết hợp xuất khẩu hàng hóa và xuất khẩu tư bản (FDI, BOT, BT).
- Tính chất: bỏ dần sự áp đặt thực dân, đề cao nguyên tắc cùng có lợi.

**Xúc tu 4 — Phân chia thị trường thế giới**
- Đan xen giữa 2 xu hướng: **Toàn cầu hóa** (do sức mạnh bành trướng của TNCs) và **Khu vực hóa** (hình thành các liên minh kinh tế như EU, NAFTA để bảo vệ lợi ích).

**Xúc tu 5 — Phân chia lãnh thổ ảnh hưởng**
- Thay thế chiến tranh xâm lược trực tiếp bằng "chiến lược biên giới mềm" và bành trướng "biên giới kinh tế" — gợi ý vẽ đường đứt nét nối các châu lục trên bản đồ.

---

### SECTION 3 — BIỂU HIỆN MỚI CỦA ĐỘC QUYỀN NHÀ NƯỚC: "X-ray bộ máy nhà nước"

**Thiết kế:** Hình một tòa nhà/bộ máy nhà nước cách điệu dạng outline kiến trúc cổ điển (gợi tòa nhà quốc hội/ngân hàng trung ương). Khi cuộn/chuyển slide tới đâu, từng "tầng" của tòa nhà được "X-ray" lộ ra cơ chế bên trong:
- Tầng trên: cơ chế nhân sự đa nguyên
- Tầng giữa: sở hữu/ngân sách
- Tầng dưới: công cụ điều tiết

Ẩn dụ trực quan: nhà nước tư bản vận hành như một **công ty cổ phần**.

**Nội dung chi tiết:**

**Tầng 1 — Cơ chế quan hệ nhân sự**
- Sự xuất hiện của thể chế đa nguyên trong phân chia quyền lực.
- Các thế lực tư bản thiết lập cơ chế thỏa hiệp để cùng tồn tại, không cho phe phái nào độc tôn.

**Tầng 2 — Sự phân lập về Sở hữu Nhà nước**
- Quyền quyết định ngân sách thuộc về lập pháp, giới hành pháp bị quản lý chặt bằng luật.
- Nhà nước đứng ra gánh vác rủi ro lớn thay cho tư nhân (đầu tư nghiên cứu khoa học cơ bản, xây dựng hạ tầng, dùng ngân sách giải cứu tập đoàn nguy cơ phá sản).

**Tầng 3 — Công cụ điều tiết kinh tế mới**
- Bộ máy nhà nước được vận hành như một công ty cổ phần tư bản.
- Viện trợ nước ngoài: thực chất là công cụ điều tiết kinh tế trong nước (giải quyết hàng tồn đọng, công nghệ lỗi thời bằng cách buộc nước nhận viện trợ phải mua hàng của mình).

---

### SECTION 4 — VAI TRÒ LỊCH SỬ CỦA CHỦ NGHĨA TƯ BẢN: "Cán cân có nhịp tim"

**Thiết kế:** Màn hình chia đôi (split-screen), bên trái sáng (tích cực) — bên phải tối/cảnh báo (hạn chế), tạo tương phản thị giác mạnh.

**Chi tiết bổ sung sáng tạo:** Ở giữa hai bên, vẽ một đường biểu đồ dạng **nhịp tim (heartbeat line)** chạy ngang:
- Bên trái: nhịp đập đều, rộng — tượng trưng tăng trưởng công nghệ - sản xuất ổn định
- Bên phải: nhịp đập gấp, nhọn, màu đỏ — tượng trưng xung đột, bất bình đẳng

Có thể thêm **thanh trượt (slider) tương tác** ở giữa để người dùng/người thuyết trình "cân" hai mặt — tạo trải nghiệm tương tác thay vì chỉ đọc thụ động, truyền tải đúng tính biện chứng mâu thuẫn của chủ đề. Kim cân nên nghiêng nhẹ về bên phải để gợi mở thông điệp kết luận của bài.

**MẶT SÁNG (Tích cực):**
- **Bệ phóng công nghệ:** chuyển đổi lao động thủ công lên cơ khí hóa, tự động hóa và tin học hóa, là nền tảng cho các cuộc cách mạng công nghiệp.
- **Chuyển đổi nền sản xuất:** chuyển nền kinh tế hàng hóa giản đơn, nhỏ lẻ thành nền sản xuất tập trung quy mô lớn, tạo khối lượng của cải khổng lồ.
- **Xã hội hóa sản xuất:** đẩy mạnh phân công lao động sâu rộng, liên kết các ngành và quốc gia thành một hệ thống thống nhất.

**MẶT TỐI (Giới hạn tất yếu):**
- **Bản chất vị kỷ:** mục đích sản xuất không vì số đông nhân dân lao động mà để thu đoạt giá trị thặng dư cho thiểu số giai cấp tư sản.
- **Nguồn cơn xung đột:** nhằm tranh giành thuộc địa và thị trường, CNTB là nguyên nhân trực tiếp/gián tiếp gây ra chiến tranh và xung đột vũ trang.
- **Hố sâu bất bình đẳng:** khoét sâu sự phân hóa giàu nghèo trong nội bộ quốc gia và giữa các nước phát triển với các nước kém phát triển trên toàn cầu.

---

### SECTION 5 — FOOTER: "Sinh vật co lại"

**Thiết kế:** Giao diện tối giản, chữ trắng trên nền tối. Tua xúc tu từ Hero giờ co rút dần về một điểm trung tâm, mờ dần thành các hạt bụi ánh sáng/tro — ẩn dụ trực quan cho giới hạn lịch sử tất yếu.

**Nội dung text (thông điệp cốt lõi — nên xuất hiện như dòng chữ cuối cùng còn sót lại trên nền đen):**

> *"Dù độc quyền tư nhân hay độc quyền nhà nước có thiên biến vạn hóa để tự cứu lấy mình, mọi sự điều chỉnh này chủ yếu vẫn nhằm bảo vệ sự tồn tại của hệ thống tư bản. Với những mâu thuẫn cốt lõi không thể tự khắc phục (tính xã hội hóa cao của lực lượng sản xuất >< chế độ chiếm hữu tư nhân), chủ nghĩa tư bản mang trong mình giới hạn lịch sử tất yếu và không thể tồn tại vĩnh viễn."*

**Câu hỏi mở (xuất hiện sau cùng, để gợi suy ngẫm):** *"Vậy đến khi nào sinh vật này hết khả năng biến hình?"*

Cuối cùng: thông tin nhóm/cá nhân thực hiện (để placeholder cho người dùng tự điền tên, lớp, môn học, GV hướng dẫn).

---

## 3. YÊU CẦU KỸ THUẬT / TRẢI NGHIỆM CHO AGENT

- **Nền tảng duy nhất:** Trang web chạy trên trình duyệt desktop, dạng **scrollytelling thuần** — người dùng cuộn chuột để đi qua các section, không cần thêm bất kỳ cơ chế điều hướng nào khác.
- **KHÔNG thêm các thành phần dư thừa**, cụ thể:
  - Không có nút "next/prev" hay điều hướng dạng thuyết trình/slide control.
  - Không có chatbox AI hay bất kỳ widget trò chuyện/hỏi đáp nào.
  - Không có progress indicator đếm thời gian hay đếm section.
  - Giao diện chỉ gồm các section nội dung và hiệu ứng hình ảnh đã mô tả ở trên — tối giản, không thêm UI điều khiển ngoài thanh trượt tương tác ở Section 4 (cán cân) đã nêu.
- **Responsive:** Tối ưu cho màn hình desktop (độ rộng phổ biến 1280px trở lên), không cần tối ưu riêng cho mobile.
- **Hiệu ứng chuyển động:** Animation mượt, kích hoạt theo vị trí cuộn (scroll-triggered), giữ hiệu ứng "tua xúc tu mọc/nối" giữa các section để xuyên suốt mạch ẩn dụ.
- **Tối giản chữ trên màn hình:** Văn bản hiển thị là từ khóa/luận điểm chính, không phải đoạn văn dài dòng. Nội dung chi tiết đầy đủ vẫn cần được đưa vào trang (ví dụ hiển thị khi hover vào từng "đầu mút xúc tu", hoặc hiển thị trực tiếp dưới dạng đoạn ngắn gọn súc tích) để không mất dữ liệu gốc.
- **Ngôn ngữ:** Toàn bộ nội dung bằng tiếng Việt, đảm bảo font chữ hiển thị đúng dấu tiếng Việt.