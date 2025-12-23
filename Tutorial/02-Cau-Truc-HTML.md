# 🏗️ Cấu Trúc HTML - File index.html

Trong chương này, chúng ta sẽ phân tích **TỪNG DÒNG** code trong file `index.html`.

---

## 📂 Toàn Bộ Cấu Trúc

```
index.html
├── <!DOCTYPE html>           ← Khai báo loại tài liệu
├── <html>                    ← Thẻ gốc
│   ├── <head>                ← Phần đầu (metadata)
│   │   ├── <meta>            ← Thông tin meta
│   │   ├── <title>           ← Tiêu đề trang
│   │   └── <link>            ← Liên kết CSS
│   └── <body>                ← Phần thân (nội dung)
│       ├── <div.container>   ← Hộp chứa chính
│       │   ├── <h1>          ← Tiêu đề
│       │   ├── Stopwatch display
│       │   ├── Controls (nút điều khiển)
│       │   ├── Lap times (danh sách vòng)
│       │   ├── Statistics (thống kê)
│       │   └── Features (tính năng)
│       └── <script>          ← Liên kết JavaScript
```

---

## 📝 Phân Tích Chi Tiết

### 🔹 Dòng 1: DOCTYPE Declaration

```html
<!DOCTYPE html>
```

**Giải thích:**
- Khai báo loại tài liệu là **HTML5**
- Bắt buộc phải có ở dòng đầu tiên
- Không phải thẻ HTML, chỉ là khai báo

**Tại sao cần?**
- Báo cho trình duyệt biết cách hiển thị trang
- Đảm bảo trang hoạt động đúng chuẩn HTML5

---

### 🔹 Dòng 2: Thẻ HTML Gốc

```html
<html lang="vi">
```

**Giải thích:**
- `<html>` = Thẻ gốc, chứa toàn bộ trang web
- `lang="vi"` = Thuộc tính ngôn ngữ (Tiếng Việt)

**Tại sao có lang="vi"?**
- Giúp công cụ tìm kiếm hiểu ngôn ngữ trang
- Hỗ trợ screen reader đọc đúng cách
- Tốt cho SEO (Search Engine Optimization)

---

## 📦 Phần HEAD (Dòng 3-11)

### 🔹 Dòng 4: Charset

```html
<meta charset="UTF-8">
```

**Giải thích:**
- `<meta>` = Thẻ metadata (thông tin về trang)
- `charset="UTF-8"` = Mã hóa ký tự

**Tại sao UTF-8?**
- Hỗ trợ Tiếng Việt (á, ă, â, đ, ê...)
- Hỗ trợ gần như mọi ngôn ngữ trên thế giới
- Chuẩn quốc tế

---

### 🔹 Dòng 5: Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Giải thích:**
- `name="viewport"` = Tên metadata
- `width=device-width` = Chiều rộng = chiều rộng thiết bị
- `initial-scale=1.0` = Zoom ban đầu = 100%

**Tại sao cần?**
- Để trang web **responsive** (hiển thị tốt trên mọi thiết bị)
- Điện thoại, tablet, máy tính đều hiển thị đẹp

**So sánh:**

```
❌ Không có viewport:
[___Trang web rất nhỏ trên điện thoại___]

✅ Có viewport:
[━━━Trang web vừa vặn màn hình━━━]
```

---

### 🔹 Dòng 6: Description (Mô tả)

```html
<meta name="description" content="Đồng hồ bấm giờ trực tuyến miễn phí...">
```

**Giải thích:**
- Mô tả ngắn gọn về trang web
- Hiển thị trên Google khi search

**Ví dụ kết quả Google:**
```
Stopwatch - Đồng hồ bấm giờ
www.example.com
Đồng hồ bấm giờ trực tuyến miễn phí với tính năng...
                    ↑ Đây là phần description
```

---

### 🔹 Dòng 7: Keywords (Từ khóa)

```html
<meta name="keywords" content="stopwatch, đồng hồ bấm giờ, timer, lap time...">
```

**Giải thích:**
- Các từ khóa liên quan đến trang
- Giúp SEO (tuy nhiên Google ít dùng nó nữa)

---

### 🔹 Dòng 8: Author (Tác giả)

```html
<meta name="author" content="Web Stopwatch">
```

**Giải thích:**
- Tên tác giả/người tạo trang
- Thông tin bổ sung

---

### 🔹 Dòng 9: Title (Tiêu đề)

```html
<title>Stopwatch - Đồng hồ bấm giờ</title>
```

**Giải thích:**
- Tiêu đề hiển thị trên **tab trình duyệt**
- Rất quan trọng cho SEO

**Ví dụ:**
```
┌─────────────────────────────┐
│ ◀ ▶ ↻ Stopwatch - Đồng hồ...│ ← Đây là title
└─────────────────────────────┘
```

---

### 🔹 Dòng 10: Link CSS

```html
<link rel="stylesheet" href="style.css">
```

**Giải thích:**
- `<link>` = Liên kết file bên ngoài
- `rel="stylesheet"` = Loại file là CSS
- `href="style.css"` = Đường dẫn đến file CSS

**Tại sao tách riêng CSS?**
- Code dễ quản lý
- Có thể dùng lại CSS cho nhiều trang
- Trang tải nhanh hơn (trình duyệt cache CSS)

---

## 🎨 Phần BODY (Dòng 12-65)

### 🔹 Dòng 12: Thẻ Body

```html
<body>
```

**Giải thích:**
- Chứa tất cả nội dung hiển thị trên trang
- Mọi thứ người dùng nhìn thấy đều trong `<body>`

---

### 🔹 Dòng 13: Container

```html
<div class="container">
```

**Giải thích:**
- `<div>` = Division (Phần/Hộp)
- `class="container"` = Đặt tên class để CSS trang trí

**Mục đích:**
- Nhóm tất cả nội dung vào 1 hộp
- CSS sẽ căn giữa, giới hạn chiều rộng...

---

### 🔹 Dòng 14: Tiêu Đề Chính

```html
<h1>Đồng Hồ Bấm Giờ</h1>
```

**Giải thích:**
- `<h1>` = Heading 1 (Tiêu đề cấp 1)
- Là tiêu đề lớn nhất, quan trọng nhất

**Các cấp heading:**
```html
<h1>Tiêu đề cấp 1</h1>  ← Lớn nhất
<h2>Tiêu đề cấp 2</h2>
<h3>Tiêu đề cấp 3</h3>
<h4>Tiêu đề cấp 4</h4>
<h5>Tiêu đề cấp 5</h5>
<h6>Tiêu đề cấp 6</h6>  ← Nhỏ nhất
```

---

## ⏱️ Phần Hiển Thị Đồng Hồ (Dòng 16-18)

```html
<div class="stopwatch-display" role="timer" aria-live="off" aria-atomic="true">
    <span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>.<span id="milliseconds">00</span>
</div>
```

### Phân Tích Dòng 16:

```html
<div class="stopwatch-display" role="timer" aria-live="off" aria-atomic="true">
```

**class="stopwatch-display"**
- Để CSS trang trí màn hình đồng hồ

**role="timer"**
- Báo với screen reader: "Đây là đồng hồ"
- Hỗ trợ người khiếm thị

**aria-live="off"**
- Không đọc lên khi số thay đổi (vì nó thay đổi liên tục)
- `aria-live="polite"` = Đọc khi rảnh
- `aria-live="assertive"` = Đọc ngay lập tức

**aria-atomic="true"**
- Khi đọc, đọc toàn bộ thời gian (không chỉ phần thay đổi)

### Phân Tích Dòng 17:

```html
<span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>.<span id="milliseconds">00</span>
```

**Cấu trúc:**
```
┌─────┬─────┬─────┬─────┐
│hours│  :  │mins │  :  │secs │  .  │ms   │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┘
  00     :    00     :    00     .    00
```

**Giải thích từng phần:**

1. **`<span id="hours">00</span>`**
   - `<span>` = Phần tử inline (nằm trên 1 hàng)
   - `id="hours"` = ID duy nhất, JavaScript sẽ tìm và cập nhật
   - `00` = Giá trị ban đầu

2. **`:`**
   - Ký tự phân cách giữa giờ:phút:giây
   - Không có thẻ bao, chỉ là text thuần

3. **`<span id="minutes">00</span>`**
   - Hiển thị phút (0-59)

4. **`<span id="seconds">00</span>`**
   - Hiển thị giây (0-59)

5. **`.`**
   - Phân cách giây và millisecond

6. **`<span id="milliseconds">00</span>`**
   - Hiển thị 1/100 giây (00-99)

**Tại sao dùng `<span>` với `id`?**
- JavaScript có thể tìm chính xác phần tử: `document.getElementById('hours')`
- Cập nhật chỉ nội dung bên trong, không ảnh hưởng các phần khác

---

## 🎮 Phần Nút Điều Khiển (Dòng 20-25)

```html
<div class="controls">
    <button id="startBtn" class="btn btn-start" aria-label="Bắt đầu đồng hồ">Bắt đầu</button>
    <button id="pauseBtn" class="btn btn-pause" disabled aria-label="Tạm dừng đồng hồ">Tạm dừng</button>
    <button id="resetBtn" class="btn btn-reset" aria-label="Đặt lại đồng hồ">Đặt lại</button>
    <button id="lapBtn" class="btn btn-lap" disabled aria-label="Ghi thời gian vòng">Ghi vòng</button>
</div>
```

### Phân Tích Từng Nút:

#### 1️⃣ Nút "Bắt đầu"

```html
<button id="startBtn" class="btn btn-start" aria-label="Bắt đầu đồng hồ">Bắt đầu</button>
```

**id="startBtn"**
- ID duy nhất, JavaScript dùng để gắn sự kiện click

**class="btn btn-start"**
- `btn` = Class chung cho tất cả nút (CSS chung)
- `btn-start` = Class riêng (CSS riêng cho nút này, ví dụ màu xanh lá)

**aria-label="Bắt đầu đồng hồ"**
- Screen reader đọc: "Nút Bắt đầu đồng hồ"
- Hỗ trợ người khiếm thị

**Bắt đầu** (nội dung)
- Text hiển thị trên nút

---

#### 2️⃣ Nút "Tạm dừng"

```html
<button id="pauseBtn" class="btn btn-pause" disabled aria-label="Tạm dừng đồng hồ">Tạm dừng</button>
```

**disabled**
- Thuộc tính vô hiệu hóa nút
- Không thể click vào
- CSS làm mờ nút

**Tại sao disabled?**
- Khi mới mở trang, đồng hồ chưa chạy
- Không cần nút "Tạm dừng"
- JavaScript sẽ bật lại khi đồng hồ chạy

```javascript
// Khi nhấn "Bắt đầu"
pauseBtn.disabled = false;  // Bật nút Tạm dừng
startBtn.disabled = true;   // Tắt nút Bắt đầu
```

---

#### 3️⃣ Nút "Đặt lại"

```html
<button id="resetBtn" class="btn btn-reset" aria-label="Đặt lại đồng hồ">Đặt lại</button>
```

- Luôn bật (không có `disabled`)
- Reset về 00:00:00.00

---

#### 4️⃣ Nút "Ghi vòng"

```html
<button id="lapBtn" class="btn btn-lap" disabled aria-label="Ghi thời gian vòng">Ghi vòng</button>
```

- Ban đầu `disabled`
- Chỉ bật khi đồng hồ đang chạy

---

## 🏁 Phần Danh Sách Vòng (Dòng 27-30)

```html
<div class="lap-times">
    <h2>Thời gian vòng</h2>
    <div id="lapsList"></div>
</div>
```

### Phân Tích:

**`<h2>Thời gian vòng</h2>`**
- Tiêu đề cấp 2 (nhỏ hơn h1)

**`<div id="lapsList"></div>`**
- Div **rỗng**, không có nội dung ban đầu
- JavaScript sẽ thêm danh sách vòng vào đây

**Ví dụ JavaScript sẽ thêm:**
```html
<div id="lapsList">
    <div class="lap-item fastest">
        <span class="lap-number">Vòng 1</span>
        <span class="lap-time">00:03.27</span>
    </div>
    <div class="lap-item slowest">
        <span class="lap-number">Vòng 2</span>
        <span class="lap-time">00:04.31</span>
        <span class="lap-diff">+00:02.99</span>
    </div>
</div>
```

---

## 📊 Phần Thống Kê (Dòng 32-50)

```html
<div class="statistics">
    <h2>Thống kê</h2>
    <div class="stats-grid">
        <div class="stat-item">
            <span class="stat-label">Tổng vòng:</span>
            <span id="totalLaps" class="stat-value">0</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Vòng nhanh nhất:</span>
            <span id="fastestLap" class="stat-value">--:--:--</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Vòng chậm nhất:</span>
            <span id="slowestLap" class="stat-value">--:--:--</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Trung bình:</span>
            <span id="averageLap" class="stat-value">--:--:--</span>
        </div>
    </div>
</div>
```

### Cấu Trúc:

```
statistics
├── h2 (Tiêu đề)
└── stats-grid (Lưới 2x2)
    ├── stat-item (Tổng vòng)
    ├── stat-item (Vòng nhanh nhất)
    ├── stat-item (Vòng chậm nhất)
    └── stat-item (Trung bình)
```

### Phân Tích 1 Stat Item:

```html
<div class="stat-item">
    <span class="stat-label">Tổng vòng:</span>
    <span id="totalLaps" class="stat-value">0</span>
</div>
```

**Hiển thị:**
```
┌─────────────────────┐
│ Tổng vòng:       0  │
│   ↑ label    value ↑│
└─────────────────────┘
```

**`class="stat-label"`**
- Nhãn (label), CSS sẽ làm đậm, màu xám

**`id="totalLaps"`**
- JavaScript cập nhật số vòng: `totalLaps.textContent = 3;`

**`class="stat-value"`**
- Giá trị, CSS làm lớn hơn, màu nổi bật

**`0`**
- Giá trị ban đầu

**`--:--:--`**
- Giá trị mặc định khi chưa có dữ liệu

---

## 🎁 Phần Tính Năng Bổ Sung (Dòng 52-59)

```html
<div class="features">
    <h2>Tính năng bổ sung</h2>
    <div class="feature-controls">
        <button id="exportBtn" class="btn btn-secondary">Xuất dữ liệu</button>
        <button id="clearHistoryBtn" class="btn btn-secondary">Xóa lịch sử</button>
        <button id="themeToggle" class="btn btn-secondary">Đổi giao diện</button>
    </div>
</div>
```

### 3 Nút Bổ Sung:

1. **Xuất dữ liệu** (`exportBtn`)
   - Tải file CSV chứa thời gian các vòng
   - JavaScript tạo file và trigger download

2. **Xóa lịch sử** (`clearHistoryBtn`)
   - Xóa tất cả vòng đã ghi
   - Reset thống kê

3. **Đổi giao diện** (`themeToggle`)
   - Chuyển đổi theme sáng/tối
   - JavaScript toggle class `dark-theme`

**class="btn-secondary"**
- Nút phụ, màu sắc nhẹ hơn (xám thay vì màu chủ đạo)

---

## 📜 Phần Script (Dòng 62)

```html
<script src="script.js"></script>
```

**Giải thích:**
- `<script>` = Thẻ nhúng JavaScript
- `src="script.js"` = Liên kết đến file JavaScript

**Tại sao đặt cuối `<body>`?**
- Trình duyệt tải HTML từ trên xuống dưới
- Đảm bảo tất cả phần tử HTML đã tải xong
- JavaScript mới chạy, tìm được các phần tử

**Nếu đặt trong `<head>`:**
```html
<head>
    <script src="script.js"></script>
</head>
<body>
    <button id="startBtn">Bắt đầu</button>
</body>
```

→ ❌ Lỗi! JavaScript chạy trước, `startBtn` chưa tồn tại!

**Đặt cuối `<body>`:**
```html
<body>
    <button id="startBtn">Bắt đầu</button>
    <script src="script.js"></script>
</body>
```

→ ✅ Đúng! `startBtn` đã tồn tại, JavaScript tìm được!

---

## 📊 Sơ Đồ Tổng Quan HTML

```
<!DOCTYPE html>
<html lang="vi">
  │
  ├─ <head>
  │   ├─ Meta tags (charset, viewport, description...)
  │   ├─ <title>Stopwatch - Đồng hồ bấm giờ</title>
  │   └─ <link rel="stylesheet" href="style.css">
  │
  └─ <body>
      └─ <div class="container">
          │
          ├─ <h1>Đồng Hồ Bấm Giờ</h1>
          │
          ├─ Stopwatch Display
          │   └─ 00:00:00.00 (hours:minutes:seconds.milliseconds)
          │
          ├─ Controls
          │   ├─ [Bắt đầu]
          │   ├─ [Tạm dừng] (disabled)
          │   ├─ [Đặt lại]
          │   └─ [Ghi vòng] (disabled)
          │
          ├─ Lap Times
          │   └─ <div id="lapsList"></div> (JavaScript sẽ thêm vào)
          │
          ├─ Statistics
          │   ├─ Tổng vòng: 0
          │   ├─ Vòng nhanh nhất: --:--:--
          │   ├─ Vòng chậm nhất: --:--:--
          │   └─ Trung bình: --:--:--
          │
          └─ Features
              ├─ [Xuất dữ liệu]
              ├─ [Xóa lịch sử]
              └─ [Đổi giao diện]
      
      <script src="script.js"></script>
```

---

## 🎯 Tóm Tắt HTML

| Phần | Thẻ Chính | Mục Đích |
|------|-----------|----------|
| DOCTYPE | `<!DOCTYPE html>` | Khai báo HTML5 |
| Head | `<head>` | Metadata, title, CSS link |
| Title | `<title>` | Tiêu đề tab trình duyệt |
| Meta | `<meta>` | Charset, viewport, SEO |
| Body | `<body>` | Nội dung hiển thị |
| Container | `<div class="container">` | Hộp chứa chính |
| Display | `.stopwatch-display` | Hiển thị 00:00:00.00 |
| Controls | `.controls` | 4 nút điều khiển |
| Laps | `#lapsList` | Danh sách vòng (rỗng ban đầu) |
| Stats | `.statistics` | Thống kê 4 mục |
| Features | `.features` | 3 nút bổ sung |
| Script | `<script src="script.js">` | Liên kết JavaScript |

---

## ✅ Kiến Thức Đạt Được

Sau khi đọc chương này, bạn đã hiểu:

✅ Cấu trúc cơ bản của HTML5  
✅ Vai trò của `<head>` và `<body>`  
✅ Các thẻ meta quan trọng (charset, viewport, description...)  
✅ Cách dùng `id` và `class`  
✅ Tại sao cần thuộc tính `disabled`  
✅ ARIA labels hỗ trợ accessibility  
✅ Tại sao `<script>` đặt cuối `<body>`  
✅ Cấu trúc phân cấp (hierarchy) của HTML  

---

## 🚀 Tiếp Theo

Bây giờ bạn đã hiểu **cấu trúc xương sống** (HTML). Tiếp theo, chúng ta sẽ học cách **trang trí** nó đẹp mắt với CSS!

➡️ **[03-Styling-CSS.md](03-Styling-CSS.md)** 🎨
