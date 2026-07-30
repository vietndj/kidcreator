import { useEffect, useState } from "react";

const PROOFS = [
  // NHÓM 1: CÀI ĐẶT EXTENSION & KÍCH HOẠT SẢN PHẨM
  "Tuấn Anh (Hà Nội) vừa cài đặt thành công Trợ lý GIBI AI Studio trên Chrome 🎬",
  "Chị Lan (HCM) vừa kích hoạt trọn bộ Trợ lý GIBI AI + 5 Quà tặng độc quyền 🎁",
  "Hoàng Dũng (Đà Nẵng) vừa tải về Thư viện Âm thanh Hoạt hình Ghibli Độc quyền 🎵",
  "Trang Phạm (Hải Phòng) vừa lưu Cheat Sheet Phím tắt & Lệnh GIBI AI Studio ⚡",
  "Thảo Vy (Đà Lạt) vừa mở khóa Bộ Video Hướng Dẫn Dựng Phim Ghibli bằng CapCut ✂️",

  // NHÓM 2: TIẾN ĐỘ THỰC HÀNH & KẾT QUẢ
  "Anh Minh (Hà Nội) vừa tạo xong Nhân vật Ghibli độc bản Khóa mặt bất biến 100% 👤",
  "Vy (Chủ Spa - Bình Dương) vừa xuất phim hoạt hình Ghibli 16 khung hình đầu tiên 🎞️",
  "Đức Dũng (HCM) đang xem hướng dẫn Quét Live-action sang Anime 1-Click 🚀",
  "Chị Mai (Bắc Ninh) vừa tạo chuyển động mượt mà qua Google Flow Veo 3 🎥",
  "Team Media Tuấn (Cần Thơ) đang ghép nhạc Ghibli vào CapCut cho video triệu view 🎶",

  // NHÓM 3: GIAO DỊCH & KHO PROMPT SKOOL
  "Hải Đăng (Hà Nội) vừa nhận quyền truy cập Kho Prompt & Trạm Bảo Hành GIBI 🏛️",
  "Chị Trâm Anh (Đà Lạt) vừa thanh toán 149.000đ, nhận ID kích hoạt sau 1 phút ⚡",
  "Anh Sơn (Nha Trang) vừa được tác giả Viet Mac hỗ trợ Zalo 1-1 gỡ rối cài Extension 🤝",
  "Bác sĩ Khánh (Hà Nội) vừa xuất bản video hoạt hình Ghibli kể chuyện cực nghệ thuật 🌟",
  "Chị Phương (Đồng Nai) vừa quét QR thanh toán tự động, nhận Link Extension & Kho Prompt ⚡"
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
