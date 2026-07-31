import { createContext, useContext, createElement } from "react";
import type { ReactNode } from "react";

export interface BlocksMeta {
  order: string[];
  hidden: string[];
  media: Record<string, any[]>;
  custom: Record<string, { title: string; body: string }>;
}

export interface SkillCard {
  n: string;
  title: string;
  desc: string;
  warn?: string;
  gif?: string;
  youtubeId?: string;
  aspectRatio?: string;
}
export interface Stage { n: string; title: string; sub?: string; desc?: string; gif?: string }
export interface ValueLine { label: string; price: string }

export interface PageContent {
  _v?: number;
  price: string;
  value: string;

  heroBadge: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroAccentLine: string;
  heroSub: string;
  heroCta: string;
  heroSubPrice?: string;
  heroVideoYoutubeId?: string;
  heroPoem?: string[];

  painLabel: string;
  painHeading: string;
  painQuote: string;
  painSub: string;
  pains: string[];
  painConclusion?: string;

  // ── Attention (3 cách gây chú ý) ──
  attentionLabel: string;
  attentionHeading: string;
  attentionPara: string;
  attentionItems: { icon: string; title: string; desc: string }[];

  // ── Rule 7-11-4 ──
  ruleLabel: string;
  ruleHeading: string;
  rulePara: string;
  ruleItems: { fail: string; why: string }[];
  ruleConclusion: string;

  cycleLabel: string;
  cycleHeading: string;
  cyclePara: string;
  cycleItems: { fail: string; why: string }[];
  
  discoveryLabel: string;
  discoveryHeading: string;
  discoverySub: string;
  discoveryItems: { title: string; desc: string }[];

  solutionLabel: string;
  solutionHeading: string;
  solutionSub: string;
  solutionItems: string[];

  skillsLabel: string;
  skillsHeading: string;
  skillCards: SkillCard[];

  midCtaHeading: string;
  midCtaSub: string;
  midCtaBtn: string;

  baLabel: string;
  baHeading: string;
  baSub: string;
  baBeforeMedia?: string;
  baAfterMedia?: string;
  beforeLabel: string;
  afterLabel: string;
  beforeItems: string[];
  afterItems: string[];

  roadmapLabel: string;
  roadmapHeading: string;
  roadmapPreviewHeading?: string;
  roadmapPreviewDesc?: string;
  roadmapIframeUrl?: string;
  roadmapChaptersHeading?: string;
  stages: Stage[];

  instructorLabel: string;
  instructorHeading: string;
  instructorInitials: string;
  instructorName: string;
  instructorTitle: string;
  instructorBio: string[];
  instructorInsight?: string;
  instructorPhoto?: string;

  urgencyBar: string;
  ctaLabel: string;
  ctaHeading: string;
  ctaSub: string;
  countdownLabel: string;
  valueStackTitle: string;
  valueStack: ValueLine[];
  guarantee: string;

  footerBrand: string;
  footerDot: string;
  footerTagline: string;
  footerLinks: string[];
  footerCopyright?: string;
  bonusLabel: string;
  bonusHeading: string;
  bonusSub: string;
  bonusItems: { id: string; title: string; desc: string; audioDemo?: string }[];
  bonusesLabel?: string;
  bonusesHeading?: string;
  bonusesSub?: string;
  bonuses?: any[];
  checkoutTestimonials?: { name: string; role: string; text: string }[];
  checkoutFaqs?: { q: string; a: string }[];
  painPara?: string;
  painList?: string[];
  painBlockquote?: string;
  roadmapChaptersGif?: string;

  blocksMeta: BlocksMeta;
}

const CONTENT_SCHEMA_VERSION = 7;

export const DEFAULT_CONTENT: PageContent = {
  _v: CONTENT_SCHEMA_VERSION,
  price: "149.000",
  value: "799.000",

  // ── Hero ──
  heroBadge: "DÀNH CHO HỌC SINH TỪ LỚP 3 ĐẾN LỚP 8 — KỶ NGUYÊN AI",
  heroHeadline1: "Đưa Con Dẫn Đầu Kỷ Nguyên AI",
  heroHeadline2: "Thành 'Nhà Sáng Tạo Nội Dung Nhí'\nXây Kênh Social & Tỏa Sáng Tại Trường Học.",
  heroPoem: [
    "Không game vô bổ hàng ngày,",
    "Biến thành Đạo diễn, đắp xây tương lai."
  ],
  heroAccentLine: "Kỹ năng AI tương lai giúp bé biến ý tưởng & bài tập trường học thành phim hoạt hình 2D sống động.",
  heroSub: "Chỉ với 1 tấm ảnh và 3 bước bấm nút đơn giản: Bé tự khóa mặt nhân vật Anime, lập phân cảnh 4 ô và xuất bản bộ phim hoạt hình độc đáo trên TikTok/YouTube Shorts hay các bài thuyết trình ở trường.",
  heroCta: "SỞ HỮU BỘ GIẢI PHÁP AI KID CREATOR NGAY",
  heroVideoYoutubeId: "YOUR_HERO_VIDEO_ID",
  heroSubPrice: "(Bao gồm Khóa Dựng Phim CapCut Học Sinh + Trợ Lý AI Kid Creator + Kho Kịch Bản Mẫu & Tài Nguyên Âm Thanh. Truy cập trọn đời)",

  // ── Pain (Nỗi đau phụ huynh) ──
  painLabel: "NỖI LO CỦA BỐ MẸ HỌC SINH THỜI ĐẠI SỐ",
  painHeading: "Bạn có lo lắng khi thấy con ngốn hàng giờ xem game & TikTok vô bổ?",
  painQuote: "Tôi muốn con làm chủ công nghệ và tự tin trình bày ý tưởng, chứ không phải chỉ là người xem mạng xã hội thụ động...",
  painSub: "Rất nhiều học sinh khao khao thể hiện bản thân nhưng lại vướng vào các rào cản:",
  pains: [
    "❌ Tiêu thụ nội dung thụ động: Xem game, YouTube Shorts vô bổ cả ngày mà không rèn luyện được kỹ năng sáng tạo nào.",
    "❌ Ngại làm bài thuyết trình ở trường: Bài tập rập khuôn, chiếu PowerPoint khô khan làm bé thiếu tự tin trước thầy cô và bạn bè.",
    "❌ Lo sợ quy trình rắc rối: Bố mẹ sợ con không theo kịp các công cụ dựng phim rườm rà hay phải lộ mặt trước ống kính."
  ],
  painConclusion: "Thay vì cấm đoán công nghệ, hãy chuyển hóa con thành một Nhà Sáng Tạo Nội Dung Nhí (AI Kid Creator) dẫn đầu lớp!",

  // ── Attention ──
  attentionLabel: "3 ĐỘT PHÁ CỦA AI KID CREATOR",
  attentionHeading: "Ba giá trị vượt trội giúp bé đi trước bạn bè đồng trang lứa",
  attentionPara: "Dù bé chưa từng chạm vào phần mềm dựng phim, AI Kid Creator sẽ giúp con:",
  attentionItems: [
    {
      icon: "✦",
      title: "Xây kênh Social cá nhân (TikTok / YouTube)",
      desc: "Tự tạo các video hoạt hình 2D kể chuyện hấp dẫn, thu hút lượt xem mà không cần lộ mặt."
    },
    {
      icon: "✦",
      title: "Tỏa sáng trong dự án & bài tập ở trường",
      desc: "Nộp bài thuyết trình dạng phim hoạt hình 2D sống động khiến thầy cô và bạn bè ngạc nhiên."
    },
    {
      icon: "✦",
      title: "Làm chủ tư duy AI & kỹ năng CapCut từ nhỏ",
      desc: "Trang bị cho bé tư duy công nghệ AI hàng đầu ngay từ cấp 1 và cấp 2."
    }
  ],

  // ── Rule ──
  ruleLabel: "TƯ DUY KỶ NGUYÊN SỐ",
  ruleHeading: "Vì sao trẻ em biết dùng AI làm phim có lợi thế cạnh tranh vượt trội?",
  rulePara: "Học sinh biết kết hợp Kể chuyện + Công cụ AI sớm có khả năng diễn đạt logic và tự tin gấp 3 lần bạn bè.",
  ruleItems: [
    {
      fail: "Nhà sáng tạo (Creator) vs Người xem (Consumer)",
      why: "Chuyển từ việc xem video người khác sang tự tay làm ra sản phẩm giúp bé phát triển tư duy làm chủ."
    },
    {
      fail: "Hình ảnh Anime Ghibli kích thích trí tưởng tượng",
      why: "Phong cách hoạt hình nghệ thuật giúp bé tự do thể hiện thế giới ước mơ và ký ức học đường."
    },
    {
      fail: "Quy trình 3 bước siêu ngắn phù hợp độ tuổi",
      why: "Chỉ 4-6 phân cảnh ngắn gọn, không cầu kỳ rườm rà giúp bé làm xong phim ngay trong 15-20 phút."
    }
  ],
  ruleConclusion: "Hãy trao cho con chiếc chìa khóa dẫn đầu công nghệ ngay hôm nay!",

  // ── Cycle ──
  cycleLabel: "CÁCH HỌC CỦU VS CÁCH HỌC MỚI",
  cycleHeading: "Sự khác biệt khi con sở hữu kỹ năng AI Kid Creator...",
  cyclePara: "So sánh trải nghiệm học tập của bé:",
  cycleItems: [
    { fail: "Cố ép con học lý thuyết khô khan", why: "Bé nhanh chán và coi đó là bài tập bắt buộc." },
    { fail: "Để con tự lướt máy tính không định hướng", why: "Bé dễ sa vào game online và video độc hại." },
    { fail: "Dạy phần mềm đồ họa rắc rối của người lớn", why: "Hàng trăm nút bấm khiến bé bỏ cuộc ngay sau 10 phút." }
  ],

  // ── Discovery ──
  discoveryLabel: "BỘ GIẢI PHÁP ĐỘT PHÁ",
  discoveryHeading: "Trọn gói Kỹ năng CapCut Mobile + Trợ lý AI Kid Creator",
  discoverySub: "Không rắc rối, không rườm rà — thiết kế riêng cho học sinh từ Lớp 3 đến Lớp 8:",
  discoveryItems: [
    {
      title: "Học CapCut Mobile 3 nút cơ bản",
      desc: "Bé thao tác kéo thả trên iPad hoặc điện thoại một cách dễ dàng và hào hứng."
    },
    {
      title: "Biến ảnh thật của bé thành Anime 2D",
      desc: "Chụp 1 tấm ảnh chân dung bé, AI tự chuyển thành nhân vật Anime hoạt hình giữ nguyên nét mặt."
    }
  ],

  // ── Solution ──
  solutionLabel: "HỆ THỐNG AI KID CREATOR",
  solutionHeading: "Lộ trình 3 bước gọn nhẹ — Bé tự làm 100%",
  solutionSub: "Ba trụ cột giúp bé làm chủ bộ phim hoạt hình đầu tay:",
  solutionItems: [
    "🎓 Bước 1 — Khóa Học CapCut Mobile Cho Học Sinh: Cầm tay chỉ việc 3 thao tác kéo thả cơ bản, chèn nhạc và phụ đề tự động.",
    "🛠️ Bước 2 — Trợ Lý AI Kid Creator: Khóa nét mặt Anime của bé, tự chọn 4 mẫu phân cảnh siêu ngắn.",
    "🎬 Bước 3 — Khóa Hướng Dẫn Phim Hoạt Hình & Xây Kênh: Hướng dẫn bé xuất phim nộp bài ở trường và đăng TikTok/Reels."
  ],

  // ── Skills ──
  skillsLabel: "3 KỸ NĂNG BÉ SẼ SỞ HỮU",
  skillsHeading: "Ba năng lực vượt trội của học sinh thế hệ AI:",
  skillCards: [
    { n: "01", title: "Kỹ Năng Edit CapCut Mobile", desc: "Nắm vững kỹ năng cắt ghép, chèn hiệu ứng hoạt hình và phụ đề tự động trên điện thoại/iPad." },
    { n: "02", title: "Tạo Nhân Vật Anime Cá Nhân Hóa", desc: "Biến chính bé thành nhân vật chính trong bộ phim hoạt hình 2D với khuôn mặt đồng nhất." },
    { n: "03", title: "Xây Dựng Bài Thuyết Trình Học Đường", desc: "Tự tin dùng phim hoạt hình để trình bày các bài tập lịch sử, văn học, khoa học ở trường." }
  ],

  // ── Mid CTA ──
  midCtaHeading: "Hãy chứng kiến bộ phim hoạt hình đầu tay do chính con bạn tạo ra!",
  midCtaSub: "Đầu tư một lần, bé sở hữu trọn bộ Khóa học CapCut + Trợ lý AI + Bộ Kịch bản mẫu & Âm thanh. Truy cập trọn đời.",
  midCtaBtn: "Đăng Ký Cho Bé Ngay",

  // ── Before & After ──
  baLabel: "SỰ THAY ĐỔI VƯỢT TRỘI",
  baHeading: "Sự khác biệt khi bé tham gia AI Kid Creator:",
  baSub: "",
  baBeforeMedia: "",
  baAfterMedia: "",
  beforeLabel: "Trước khi tham gia",
  afterLabel: "Sau khi tham gia",
  beforeItems: [
    "Xem game, lướt TikTok thụ động ngốn 2-3 tiếng mỗi ngày",
    "Ngại thuyết trình trước lớp, bài tập PowerPoint đơn điệu",
    "Không biết cách thể hiện ý tưởng sáng tạo cá nhân",
    "Thụ động với các công nghệ AI mới"
  ],
  afterItems: [
    "Trở thành Nhà sáng tạo nội dung nhí tự làm ra phim",
    "Tự tin nộp bài tập dạng phim hoạt hình khiến thầy cô khen ngợi",
    "Sở hữu kênh Social cá nhân (TikTok/Shorts) chất lượng",
    "Làm chủ công nghệ AI đi trước bạn bè đồng trang lứa"
  ],

  // ── Roadmap ──
  roadmapLabel: "LỘ TRÌNH 3 BƯỚC CHO BÉ",
  roadmapHeading: "Bên trong bộ giải pháp có gì?",
  roadmapPreviewHeading: "Xem trước trải nghiệm làm phim hoạt hình của bé",
  roadmapPreviewDesc: "Video thực tế hướng dẫn học sinh từ Lớp 3 đến Lớp 8 tự thao tác tạo phim hoạt hình 2D trong 15 phút.",
  roadmapIframeUrl: "https://www.youtube.com/embed/YOUR_TUTORIAL_VIDEO_ID?rel=0&modestbranding=1",
  roadmapChaptersHeading: "Lộ trình học mà chơi của bé:",
  stages: [
    { n: "[1]", title: "Làm Chủ CapCut Mobile Dễ Như Chơi Game", desc: "Bé học 3 thao tác kéo thả cắt ghép, chèn nhạc và ứng dụng phụ đề tự động trên điện thoại/iPad.", sub: "Chặng 1 — Nền tảng edit video nhí" },
    { n: "[2]", title: "Tạo Nhân Vật Anime Giống Bé 95%", desc: "Chụp 1 tấm ảnh của bé, AI tự chuyển đổi thành nhân vật Anime hoạt hình độc bản.", sub: "Chặng 2 — Sở hữu nhân vật Anime cá nhân" },
    { n: "[3]", title: "Viết Kịch Bản 4 Cảnh & Xuất Phim Hoàn Chỉnh", desc: "Bé chọn mẫu kịch bản ước mơ/bài tập trường học, xuất video 30 giây để đăng TikTok hoặc nộp ở trường.", sub: "Chặng 3 — Xuất bản phim & tỏa sáng" }
  ],

  // ── Instructor ──
  instructorLabel: "NGƯỜI ĐỒNG HÀNH",
  instructorHeading: "Người đồng hành cùng bé\ntrên hành trình chinh phục AI",
  instructorInitials: "NĐV",
  instructorName: "Nguyễn Đức Việt",
  instructorTitle: "Chuyên gia đào tạo làm phim, thiết kế đồ họa & Founder FEDU Academy (fedu.vn)",
  instructorBio: [
    "Với hơn 10 năm kinh nghiệm giảng dạy Multimedia và hàng ngàn học viên, mình thiết kế riêng chương trình AI Kid Creator này dành cho lứa tuổi học sinh cấp 1 và cấp 2. Triết lý của mình là: Đơn giản — Trực quan — Học mà chơi. Giúp các bé không chỉ yêu thích công nghệ mà còn tự hào ra mắt những sản phẩm hoạt hình đầu tay!"
  ],

  // ── Bonus ──
  bonusLabel: "BỘ TÀI NGUYÊN ĐẶC QUYỀN CHO BÉ",
  bonusHeading: "Tặng kèm bộ \"vũ khí\" sáng tạo trị giá 500.000đ",
  bonusSub: "Dành riêng cho các học sinh đăng ký trong đợt này",
  bonusItems: [
    {
      id: "01",
      title: "Kho 30 Mẫu Kịch Bản Ước Mơ & Bài Tập Trường Học",
      desc: "Các mẫu kịch bản dạng \"điền vào chỗ trống\" về chủ đề ước mơ tương lai, chuyến dã ngoại, bài học lịch sử/văn học... Giúp bé tạo kịch bản phim trong 3 phút."
    },
    {
      id: "02",
      title: "Thư Viện Âm Thanh & Nhạc Nền Hoạt Hình Đáng Yêu",
      desc: "Kho hiệu ứng âm thanh hoạt hình nhí nhảnh, vui tươi để bé kéo thả vào CapCut."
    },
    {
      id: "03",
      title: "Bộ Mẫu Phụ Đề & Chuyển Cảnh Hoạt Hình CapCut",
      desc: "Các mẫu chữ tô màu, hiệu ứng sticker hoạt hình sẵn có cho bé chèn vào video."
    },
    {
      id: "04",
      title: "Quyền Truy Cập Trạm Kỹ Thuật Hỗ Trợ 1-1 Cho Phụ Huynh",
      desc: "Nơi hỗ trợ cài đặt và gỡ rối kỹ thuật 1-1 trực tiếp từ đội ngũ chuyên gia cho bố mẹ và bé."
    }
  ],

  // ── CTA ──
  urgencyBar: "⚠ ĐẶC QUYỀN ĐĂNG KÝ HÔM NAY — CHỈ CÒN 149.000 VNĐ",
  ctaLabel: "// BƯỚC CUỐI CÙNG",
  ctaHeading: "Hãy trao cho con kỹ năng AI dẫn đầu ngay hôm nay.",
  ctaSub: "Sở hữu trọn bộ Khóa CapCut Mobile Học Sinh + Trợ Lý AI Kid Creator + Kho Kịch Bản Mẫu & Tài Nguyên Âm Thanh — chỉ với mức phí 149.000đ. Truy cập trọn đời.",
  countdownLabel: "⏳ Ưu đãi kết thúc sau:",
  valueStackTitle: "TỔNG GIÁ TRỊ BẠN NHẬN ĐƯỢC:",
  valueStack: [
    { label: "Trợ lý AI Kid Creator (Bản tối giản cho bé)", price: "399.000 VNĐ" },
    { label: "Khóa Học Dựng Phim CapCut Mobile Dành Cho Học Sinh", price: "300.000 VNĐ" },
    { label: "Kho 30 Mẫu Kịch Bản Ước Mơ & Bài Tập Học Đường", price: "200.000 VNĐ" }
  ],
  guarantee: "Cam kết đồng hành: Bất kể bé hay bố mẹ gặp khó khăn nào khi thao tác, nhắn Zalo mình sẽ gỡ rối 1-1 ngay lập tức.",

  checkoutTestimonials: [
    { 
      name: "Chị Thanh Hà", 
      role: "Phụ huynh bé Bảo Nam (Lớp 5 - Hà Nội)", 
      text: "Thực sự bất ngờ! Bé nhà mình trước đây rảnh ra là đòi chơi iPad. Từ ngày học khóa AI Kid Creator này, bé tự chụp ảnh góc bàn học rồi nhờ AI biến thành phim hoạt hình Anime. Tuần trước bé nộp bài thuyết trình môn Lịch sử bằng phim hoạt hình tự làm, cô giáo khen nức nở trước cả lớp!" 
    },
    { 
      name: "Anh Hoàng Nam", 
      role: "Phụ huynh bé Minh Anh (Lớp 6 - TP. HCM)", 
      text: "Ban đầu cứ sợ công cụ AI rắc rối con không theo được. Ai ngờ bài giảng CapCut Mobile với Trợ lý AI thiết kế cực kỳ ngắn gọn, bé thao tác vèo vèo. Giờ bé đã tự xây kênh TikTok hoạt hình kể chuyện tuổi học trò được hơn 5.000 follower!" 
    },
    { 
      name: "Chị Ngọc Bích", 
      role: "Phụ huynh bé Khánh An (Lớp 4 - Đà Nẵng)", 
      text: "Khóa học quá đáng giá! Bé nhà mình vốn rất ngại nói trước đám đông, nhưng khi được làm phim hoạt hình lồng tiếng giọng mình vào thì bé hào hứng lắm. Giờ tự tin sáng tạo bài tập ở trường mà không cần mẹ phải nhắc nhở nữa." 
    }
  ],

  checkoutFaqs: [
    {
      q: "1. \"Học sinh từ Lớp 3 đến Lớp 8 chưa từng làm video có tự làm được không?\"",
      a: "Hoàn toàn được! Chương trình được thiết kế dạng 'Học mà chơi', chỉ cần xem video ngắn 1-2 phút là bé có thể tự kéo thả CapCut Mobile trên điện thoại hoặc iPad một cách dễ dàng."
    },
    {
      q: "2. \"Bộ sản phẩm này bao gồm những nội dung gì?\"",
      a: "Bộ sản phẩm bao gồm 3 phần chính: (1) Khóa học dựng phim CapCut Mobile cho học sinh; (2) Công cụ Trợ lý AI Kid Creator; (3) Kho 30 mẫu kịch bản ước mơ & bài tập trường học + Kho âm thanh hiệu ứng hoạt hình."
    },
    {
      q: "3. \"Có phải tốn thêm chi phí phần mềm hàng tháng không?\"",
      a: "Không. AI Kid Creator hướng dẫn khai thác các công cụ AI hoàn toàn miễn phí của Google để tạo ảnh & video mà không phát sinh thêm bất kỳ chi phí duy trì nào."
    },
    {
      q: "4. \"Thanh toán 149.000đ xong bé sẽ nhận bài học như thế nào?\"",
      a: "Thanh toán quét QR tự động 100%. Ngay sau khi chuyển khoản, bạn sẽ nhận được email truy cập kho bài giảng video, phần mềm Trợ lý AI và tài nguyên học tập ngay lập tức."
    },
    {
      q: "5. \"Bố mẹ hoặc bé gặp khó khăn thì có ai hỗ trợ không?\"",
      a: "Đích thân tác giả Nguyễn Đức Việt và đội ngũ sẽ hỗ trợ 1-1 qua Zalo & Trạm Kỹ Thuật. Bất kỳ vướng mắc nào của phụ huynh hay bé đều được giải đáp nhanh chóng."
    }
  ],

  footerBrand: "KID CREATOR",
  footerDot: ".",
  footerTagline: "\"Không game vô bổ hàng ngày,\nBiến thành Đạo diễn, đắp xây tương lai.\"",
  footerLinks: [],
  footerCopyright: "COPYRIGHT 2026 | AI KID CREATOR STUDIO",

  blocksMeta: {
    order: ["hero", "pain", "cycle", "discovery", "solution", "skills", "midCta", "before-after", "roadmap", "instructor", "bonus", "cta", "footer"],
    hidden: ["attention", "rule", "solutions"],
    media: {},
    custom: {},
  },
};

export const ContentCtx = createContext<PageContent>(DEFAULT_CONTENT);

export function useContent(): PageContent {
  return useContext(ContentCtx);
}

export function ContentProvider({ children }: { children: ReactNode }) {
  return createElement(ContentCtx.Provider, { value: DEFAULT_CONTENT }, children);
}
