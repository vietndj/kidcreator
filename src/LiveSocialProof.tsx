import { useEffect, useState } from "react";

const PROOFS = [
  // NHÓM 1: ĐĂNG KÝ HỌC & KÍCH HOẠT
  "Chị Thanh Hà (Hà Nội) vừa đăng ký bộ AI Kid Creator cho bé Bảo Nam (Lớp 5) 🎓",
  "Anh Hoàng Nam (HCM) vừa tải về Khóa Dựng Phim CapCut Mobile Dành Cho Học Sinh 📱",
  "Chị Ngọc Bích (Đà Nẵng) vừa nhận Kho 30 Mẫu Kịch Bản Ước Mơ cho bé 🎁",
  "Chị Phương (Đồng Nai) vừa quét QR thanh toán tự động, nhận Link Trợ Lý AI Kid Creator ⚡",
  "Anh Tuấn Anh (Hải Phòng) vừa mở khóa Bộ Thư Viện Âm Thanh Hoạt Hình Đáng Yêu 🎵",

  // NHÓM 2: SẢN PHẨM & KẾT QUẢ CỦA BÉ
  "Bé Minh Anh (Lớp 6 - HCM) vừa xuất bản video hoạt hình 2D đầu tay đăng YouTube Shorts 🎬",
  "Bé Khánh An (Lớp 4 - Đà Nẵng) vừa tạo xong Nhân vật Anime cá nhân hóa độc bản 👤",
  "Anh Đức Dũng (Hà Nội) vừa cùng con nộp bài thuyết trình môn Lịch sử bằng phim AI 🚀",
  "Chị Mai (Bắc Ninh) vừa xem bé tự ghép nhạc hoạt hình vào CapCut Mobile 🎶",
  "Bé Đức Anh (Lớp 5 - Cần Thơ) vừa tạo xong video hoạt hình 4 phân cảnh ước mơ 🎞️",

  // NHÓM 3: ĐỒNG HÀNH & KỸ THUẬT
  "Anh Sơn (Nha Trang) vừa được đội ngũ chuyên gia hỗ trợ Zalo 1-1 cài đặt cho bé 🤝",
  "Bác sĩ Khánh (Hà Nội) vừa đăng ký gói Kid Creator cho 2 bé nhà mình 🌟",
  "Chị Trâm Anh (Đà Lạt) vừa nhận quyền truy cập Trạm Kỹ Thuật Hỗ Trợ 1-1 Cho Phụ Huynh 🏛️",
  "Chị Thảo Vy (Hà Nội) vừa thanh toán 149.000đ, nhận tài liệu học cho bé sau 1 phút ⚡",
  "Bé Hoàng Dũng (Lớp 7 - Hải Dương) vừa tự tin đạt điểm 10 thuyết trình nhờ video phim AI 🏆"
];

const TIME_LABELS = [
  "vừa xong",
  "vài giây trước",
  "1 phút trước",
  "2 phút trước",
  "3 phút trước"
];

export default function LiveSocialProof() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLabel, setTimeLabel] = useState("vừa xong");
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let active = true;
    let nextTimeout: any;

    const showNext = () => {
      if (!active) return;
      
      setCurrentIdx(Math.floor(Math.random() * PROOFS.length));
      setTimeLabel(TIME_LABELS[Math.floor(Math.random() * TIME_LABELS.length)]);
      setVisible(true);

      // Hide after 4.5 seconds
      nextTimeout = setTimeout(() => {
        setVisible(false);

        // Wait random 20 to 40 seconds before showing next
        const nextDelay = Math.floor(Math.random() * 20000) + 20000; // 20s to 40s
        nextTimeout = setTimeout(showNext, nextDelay);
      }, 4500);
    };

    // Initial delay: 11 seconds (11000ms)
    const initialTimeout = setTimeout(showNext, 11000);

    return () => {
      active = false;
      clearTimeout(initialTimeout);
      clearTimeout(nextTimeout);
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: 24,
        zIndex: 9999,
        maxWidth: 340,
        width: "calc(100% - 48px)",
        background: "rgba(18, 22, 33, 0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 14,
        padding: "14px 18px 14px 14px",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "center",
        gap: 12,
        transform: visible ? "translateY(0) scale(1)" : "translateY(100px) scale(0.95)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
      }}
    >
      {/* Pulse Green Dot */}
      <div style={{ 
        position: "relative", 
        width: 40, 
        height: 40, 
        borderRadius: "50%", 
        background: "rgba(255, 255, 255, 0.04)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        flexShrink: 0 
      }}>
        <span style={{ fontSize: 18 }}>💡</span>
        <span
          style={{
            position: "absolute",
            bottom: 1,
            right: 1,
            width: 8,
            height: 8,
            background: "#10b981",
            borderRadius: "50%",
            border: "2px solid #121621",
            boxShadow: "0 0 6px #10b981",
            animation: "tw-pulse 2.2s infinite"
          }}
        />
      </div>

      {/* Message Info */}
      <div style={{ flex: 1, textAlign: "left" }}>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#f8fafc", lineHeight: 1.45 }}>
          {PROOFS[currentIdx]}
        </p>
        <span style={{ fontSize: 10.5, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 3, display: "inline-block" }}>
          {timeLabel}
        </span>
      </div>

      {/* Close button */}
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => setDismissed(true), 500);
        }}
        style={{
          position: "absolute",
          top: 6,
          right: 6,
          background: "none",
          border: "none",
          color: "#64748b",
          fontSize: 16,
          cursor: "pointer",
          padding: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          transition: "color 0.2s"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#cbd5e1")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
      >
        ×
      </button>

      {/* Keyframe stylesheet injection */}
      <style>{`
        @keyframes tw-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .4; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
