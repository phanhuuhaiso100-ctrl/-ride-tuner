// Dữ liệu cấu hình xe siêu VIP
const bikesData = {
  "exciter155": {
    name: "Yamaha Exciter 155 VVA",
    brand: "Yamaha",
    basePrice: 48000000,
    bodyColors: [
      { id: "red", name: "Đỏ Racing", hex: "#dc2626", preview: "Màu đỏ thể thao chói lóa" },
      { id: "black", name: "Đen Nhám (Matte)", hex: "#18181b", preview: "Đen ngầu, huyền bí" },
      { id: "blue", name: "Xanh GP", hex: "#2563eb", preview: "Màu đặc trưng của Yamaha" },
      { id: "cyan", name: "Xanh Xi Măng", hex: "#0891b2", preview: "Màu hot trend năm nay" }
    ],
    wheels: [
      { id: "zin", name: "Mâm Zin 5 Chấu", price: 0, color: "#475569", brand: "Yamaha" },
      { id: "races", name: "Mâm CNC K7 Xương Cá", price: 3500000, color: "#eab308", brand: "K7" },
      { id: "daytona", name: "Mâm Daytona Bạc", price: 2800000, color: "#e2e8f0", brand: "Daytona" },
      { id: "rcb", name: "Mâm RCB 5 Cây Đen", price: 2100000, color: "#0f172a", brand: "Racing Boy" }
    ],
    exhausts: [
      { id: "zin", name: "Pô Zin Êm Ái", price: 0, type: "Tiêu chuẩn", color: "#334155" },
      { id: "akrapovic", name: "Akrapovic Carbon", price: 4500000, type: "Trầm ấm", color: "#171717" },
      { id: "leovince", name: "LeoVince Corsa", price: 3200000, type: "Đanh, Rát", color: "#d4d4d8" },
      { id: "uma", name: "Pô UMA Racing (Form Zin)", price: 1800000, type: "Thoáng máy", color: "#1e293b" }
    ],
    shocks: [
      { id: "zin", name: "Phuộc Zin", price: 0, color: "#334155", type: "Thường" },
      { id: "ohlins", name: "Ohlins Bình Dầu Rời", price: 8500000, color: "#fbbf24", type: "Cao cấp" },
      { id: "rcb_vd", name: "RCB VD Ty Vàng", price: 3800000, color: "#ef4444", type: "Thể thao" },
      { id: "nitron", name: "Nitron DNA Xanh", price: 7200000, color: "#06b6d4", type: "Cao cấp" }
    ],
    brakes: [
      { id: "zin", name: "Heo Zin Nissin 2 Pis", price: 0, color: "#94a3b8" },
      { id: "brembo", name: "Brembo Billet 2 Pis", price: 4200000, color: "#a3a3a3" },
      { id: "frando", name: "Frando Xám Xi Măng", price: 3500000, color: "#71717a" }
    ]
  },
  "vario160": {
    name: "Honda Vario 160",
    brand: "Honda",
    basePrice: 52000000,
    bodyColors: [
      { id: "black-gold", name: "Đen Nhám Mâm Vàng", hex: "#0f172a", preview: "Phong cách dân chơi" },
      { id: "white", name: "Trắng Ngọc Trai", hex: "#f8fafc", preview: "Thanh lịch, sang trọng" },
      { id: "red", name: "Đỏ Nhám", hex: "#b91c1c", preview: "Cá tính, nổi bật" }
    ],
    wheels: [
      { id: "zin", name: "Mâm Zin Vario", price: 0, color: "#334155", brand: "Honda" },
      { id: "rcb_8", name: "Mâm RCB 8 Cây Trắng", price: 2300000, color: "#f1f5f9", brand: "Racing Boy" },
      { id: "cnc", name: "Mâm CNC Kingspeed Vàng", price: 4500000, color: "#fbbf24", brand: "Kingspeed" }
    ],
    exhausts: [
      { id: "zin", name: "Pô Zin Vario", price: 0, type: "Tiêu chuẩn", color: "#1e293b" },
      { id: "4road", name: "Leovince 4Road", price: 6500000, type: "Uy lực tay ga", color: "#cbd5e1" },
      { id: "kkk", name: "Pô KKK Form Zin Mở Cổ", price: 1500000, type: "Thoáng máy", color: "#334155" }
    ],
    shocks: [
      { id: "zin", name: "Phuộc Zin", price: 0, color: "#000000", type: "Thường" },
      { id: "ohlins_ho", name: "Ohlins HO 831", price: 9200000, color: "#fbbf24", type: "Cao cấp" },
      { id: "profender", name: "Profender Air", price: 3100000, color: "#dc2626", type: "Êm ái" }
    ],
    brakes: [
      { id: "zin", name: "Heo Zin Tokico 1 Pis", price: 0, color: "#000000" },
      { id: "brembo", name: "Brembo Logo Đỏ 2 Pis", price: 3800000, color: "#404040" },
      { id: "nissin", name: "Nissin Samurai Xanh", price: 1800000, color: "#2563eb" }
    ]
  }
};

// Lưu vào biến toàn cục để file HTML lát nữa có thể gọi ra dùng
window.VIPBikesData = bikesData;
