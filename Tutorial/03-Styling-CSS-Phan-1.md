# 🎨 Styling CSS - File style.css (Phần 1/2)

Trong chương này, chúng ta sẽ phân tích **CSS** - phần trang trí giao diện.

File `style.css` có **349 dòng**, được chia thành nhiều phần. Chương này sẽ giải thích **phần đầu** (Variables, Base Styles, Container, Stopwatch Display, Controls).

---

## 📂 Cấu Trúc File CSS

```
style.css (349 dòng)
├── CSS Variables (:root)          ← Dòng 2-18: Biến màu sắc, khoảng cách
├── Dark Theme Variables           ← Dòng 20-35: Màu cho chế độ tối
├── Base Styles                    ← Dòng 37-50: Reset, font, background
├── Container                      ← Dòng 52-59: Hộp chứa chính
├── Heading                        ← Dòng 61-66: Tiêu đề
├── Stopwatch Display              ← Dòng 68-109: Màn hình đồng hồ
├── Controls                       ← Dòng 111-137: Vùng chứa nút
├── Buttons                        ← Dòng 139-254: Styling các nút
├── Lap Times                      ← Dòng 256-319: Danh sách vòng
├── Statistics                     ← Dòng 321-349: Thống kê
└── Responsive Design              ← Media queries cho mobile
```

---

## 🎨 Phần 1: CSS Variables (Dòng 2-18)

```css
:root {
    --primary-color: #4CAF50;
    --primary-dark: #45a049;
    --secondary-color: #2196F3;
    --secondary-dark: #1976D2;
    --danger-color: #f44336;
    --danger-dark: #da190b;
    --warning-color: #ff9800;
    --warning-dark: #e68900;
    --text-color: #333;
    --bg-color: #f5f5f5;
    --card-bg: #ffffff;
    --border-color: #ddd;
    --shadow: 0 2px 10px rgba(0,0,0,0.1);
    --border-radius: 10px;
    --spacing: 20px;
    --transition: all 0.3s ease;
}
```

### Giải Thích Chi Tiết:

#### `:root` là gì?

**`:root`** = Selector chọn phần tử gốc (thường là `<html>`)  
Dùng để khai báo **CSS Variables** (biến CSS) dùng chung toàn trang.

---

#### Cú Pháp CSS Variable:

```css
--tên-biến: giá-trị;
```

**Sử dụng:**
```css
.element {
    color: var(--tên-biến);
}
```

---

#### Phân Tích Từng Biến:

**1. `--primary-color: #4CAF50;`**

- Màu chủ đạo: Xanh lá (Green)
- Dùng cho: Nút "Bắt đầu", viền đồng hồ khi chạy
- `#4CAF50` = Mã màu HEX

```css
/* Cách dùng */
.btn-start {
    background-color: var(--primary-color);
}
```

---

**2. `--primary-dark: #45a049;`**

- Màu xanh lá đậm hơn
- Dùng khi hover (di chuột vào nút)

```css
.btn-start:hover {
    background-color: var(--primary-dark);
}
```

---

**3. `--secondary-color: #2196F3;`**

- Màu phụ: Xanh dương (Blue)
- Dùng cho: Nút "Ghi vòng"

---

**4. `--danger-color: #f44336;`**

- Màu nguy hiểm: Đỏ
- Dùng cho: Nút "Đặt lại" (xóa dữ liệu)

---

**5. `--warning-color: #ff9800;`**

- Màu cảnh báo: Cam
- Dùng cho: Nút "Tạm dừng"

---

**6. `--text-color: #333;`**

- Màu chữ: Xám đen
- `#333` = Xám rất đậm (gần đen)

---

**7. `--bg-color: #f5f5f5;`**

- Màu nền trang: Xám nhạt
- `#f5f5f5` = Xám rất nhạt (gần trắng)

---

**8. `--card-bg: #ffffff;`**

- Màu nền card/hộp: Trắng
- `#ffffff` = Trắng thuần

---

**9. `--border-color: #ddd;`**

- Màu viền: Xám nhạt
- `#ddd` = `#dddddd`

---

**10. `--shadow: 0 2px 10px rgba(0,0,0,0.1);`**

- Bóng đổ (shadow)
- Phân tích:
  - `0` = X offset (không dịch ngang)
  - `2px` = Y offset (dịch xuống 2px)
  - `10px` = Blur radius (độ mờ 10px)
  - `rgba(0,0,0,0.1)` = Màu đen, độ trong suốt 10%

**Hiệu ứng:**
```
┌─────────────┐
│    Card     │
│             │
└─────────────┘
   └─ Shadow ─┘  ← Bóng mờ phía dưới
```

---

**11. `--border-radius: 10px;`**

- Bo tròn góc: 10px
- Làm các góc mềm mại, không vuông cứng

**So sánh:**
```
border-radius: 0px       border-radius: 10px
┌────────┐               ╭────────╮
│        │               │        │
└────────┘               ╰────────╯
 Vuông góc               Bo tròn
```

---

**12. `--spacing: 20px;`**

- Khoảng cách chuẩn: 20px
- Dùng cho margin, padding

---

**13. `--transition: all 0.3s ease;`**

- Hiệu ứng chuyển động
- Phân tích:
  - `all` = Áp dụng cho tất cả thuộc tính thay đổi
  - `0.3s` = Thời gian chuyển đổi 0.3 giây
  - `ease` = Chuyển động mượt (chậm → nhanh → chậm)

**Ví dụ:**
```css
.btn {
    background-color: green;
    transition: var(--transition);
}

.btn:hover {
    background-color: darkgreen;
}
```

Khi di chuột vào, màu chuyển từ `green` → `darkgreen` trong 0.3 giây mượt mà.

---

### 🌙 Phần 2: Dark Theme Variables (Dòng 20-35)

```css
.dark-theme {
    --text-color: #e0e0e0;
    --bg-color: #1a1a1a;
    --card-bg: #2d2d2d;
    --border-color: #444;
    --shadow: 0 2px 10px rgba(0,0,0,0.5);
}

body.dark-theme {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}
```

### Giải Thích:

#### `.dark-theme` Selector

Khi JavaScript thêm class `dark-theme` vào `<body>`:

```javascript
document.body.classList.add('dark-theme');
```

→ CSS sẽ ghi đè (override) các biến màu sắc!

---

#### So Sánh Light vs Dark:

| Biến | Light Mode | Dark Mode |
|------|------------|-----------|
| `--text-color` | `#333` (đen) | `#e0e0e0` (trắng xám) |
| `--bg-color` | `#f5f5f5` (trắng xám) | `#1a1a1a` (đen) |
| `--card-bg` | `#ffffff` (trắng) | `#2d2d2d` (xám đen) |
| `--border-color` | `#ddd` (xám nhạt) | `#444` (xám đậm) |
| `--shadow` | `0.1` opacity | `0.5` opacity (đậm hơn) |

---

#### `background: linear-gradient(...)`

**Gradient** = Chuyển màu dần

```css
background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
```

Phân tích:
- `135deg` = Góc 135 độ (từ trên trái → dưới phải)
- `#1a1a1a 0%` = Màu đen ở vị trí 0%
- `#2d2d2d 100%` = Màu xám đen ở vị trí 100%

**Hiệu ứng:**
```
╔════════════════╗
║#1a1a1a         ║ ← Góc trên trái
║    ↘           ║
║       ↘        ║
║          ↘     ║
║         #2d2d2d║ ← Góc dưới phải
╚════════════════╝
```

---

## 🎯 Phần 3: Base Styles (Dòng 37-50)

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: var(--text-color);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
```

### Giải Thích:

#### `* { }` - Universal Selector

**`*`** = Chọn **TẤT CẢ** phần tử

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

**Tại sao reset margin/padding?**
- Trình duyệt có margin/padding mặc định khác nhau
- Reset về 0 để kiểm soát hoàn toàn

**`box-sizing: border-box;`**

Thay đổi cách tính kích thước:

```
Mặc định (content-box):
width = content only
Total width = width + padding + border

box-sizing: border-box:
width = content + padding + border
Total width = width
```

**Ví dụ:**
```css
.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}

/* content-box (default) */
Total width = 200 + (20*2) + (5*2) = 250px

/* border-box */
Total width = 200px (đã bao gồm padding + border)
```

---

#### `body { }` - Styling Body

**1. `font-family`**

```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

Danh sách font ưu tiên:
1. Segoe UI (Windows font đẹp)
2. Tahoma (fallback)
3. Geneva (Mac font)
4. Verdana (cross-platform)
5. sans-serif (font hệ thống)

Trình duyệt dùng font đầu tiên có sẵn.

---

**2. `background: linear-gradient(...)`**

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Nền gradient đẹp mắt:
- Tím xanh (#667eea) → Tím đậm (#764ba2)

---

**3. `color: var(--text-color);`**

Màu chữ dùng biến CSS (linh hoạt cho dark mode)

---

**4. `min-height: 100vh;`**

- `100vh` = 100% Viewport Height (chiều cao màn hình)
- Đảm bảo body ít nhất bằng chiều cao màn hình
- Gradient đầy màn hình

---

**5. Flexbox Centering**

```css
display: flex;
justify-content: center;  /* Căn giữa ngang */
align-items: center;      /* Căn giữa dọc */
```

**Hiệu ứng:**
```
╔══════════════════════╗
║                      ║
║                      ║
║      Container       ║ ← Căn giữa hoàn toàn
║                      ║
║                      ║
╚══════════════════════╝
```

---

**6. `padding: 20px;`**

Khoảng cách viền tránh nội dung chạm sát mép màn hình (đặc biệt trên mobile).

---

## 📦 Phần 4: Container (Dòng 52-59)

```css
.container {
    background-color: var(--card-bg);
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    max-width: 600px;
    width: 100%;
}
```

### Giải Thích:

**1. `background-color: var(--card-bg);`**

Nền trắng (light mode) hoặc xám đen (dark mode)

---

**2. `padding: 40px;`**

Khoảng cách bên trong hộp (40px tất cả 4 phía)

---

**3. `border-radius: var(--border-radius);`**

Bo tròn góc 10px

---

**4. `box-shadow: var(--shadow);`**

Bóng đổ mềm mại

---

**5. `max-width: 600px;`**

Chiều rộng tối đa 600px (tránh quá rộng trên màn hình lớn)

---

**6. `width: 100%;`**

Chiều rộng 100% (nhưng không vượt quá `max-width`)

**Kết hợp:**
- Màn hình nhỏ (< 600px): width = 100%
- Màn hình lớn (> 600px): width = 600px

---

## 🔤 Phần 5: Heading (Dòng 61-66)

```css
h1 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 30px;
    font-size: 2.5em;
}
```

### Giải Thích:

- `text-align: center;` = Căn giữa
- `color: var(--primary-color);` = Màu xanh lá
- `margin-bottom: 30px;` = Khoảng cách dưới 30px
- `font-size: 2.5em;` = Kích thước 2.5 lần font mặc định

**`em` là gì?**
- Đơn vị tương đối
- `1em` = kích thước font của phần tử cha
- `2.5em` = 2.5 lần → Khoảng 40px (nếu font mặc định 16px)

---

**File này quá dài, tôi sẽ tiếp tục ở phần 2! ⏭️**

---

## ✅ Tóm Tắt Phần 1

Đã học:

✅ CSS Variables (`:root`) để tái sử dụng giá trị  
✅ Dark theme override variables  
✅ Universal selector (`*`) reset margin/padding  
✅ `box-sizing: border-box` thay đổi cách tính kích thước  
✅ Flexbox căn giữa (`justify-content`, `align-items`)  
✅ `linear-gradient` tạo nền chuyển màu  
✅ `vh` unit (viewport height)  
✅ `em` unit (tương đối font-size)  

---

## 🚀 Tiếp Theo

➡️ **[03-Styling-CSS-Phan-2.md](03-Styling-CSS-Phan-2.md)** - Stopwatch Display, Buttons, Animations! 🎨
