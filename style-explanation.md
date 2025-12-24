# Giải Thích Chi Tiết File style.css

## 1. CSS Variables (Biến CSS)

```css
:root {
    --primary-color: #4CAF50;
    --secondary-color: #2196F3;
    --danger-color: #f44336;
    --warning-color: #ff9800;
    --bg-color: #f5f5f5;
    --card-bg: #ffffff;
    --text-color: #333333;
    --border-color: #e0e0e0;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

**Giải thích:**
- `:root` - Selector cho phần tử gốc của tài liệu, định nghĩa các biến CSS toàn cục
- `--primary-color` - Màu chính (xanh lá): #4CAF50
- `--secondary-color` - Màu phụ (xanh dương): #2196F3
- `--danger-color` - Màu nguy hiểm (đỏ): #f44336
- `--warning-color` - Màu cảnh báo (cam): #ff9800
- `--bg-color` - Màu nền: #f5f5f5 (xám nhạt)
- `--card-bg` - Màu nền thẻ: #ffffff (trắng)
- `--text-color` - Màu chữ: #333333 (xám đậm)
- `--border-color` - Màu viền: #e0e0e0 (xám nhạt)
- `--shadow` - Bóng đổ: 0 4px 6px với độ trong suốt 0.1

---

## 2. Dark Theme (Chế độ tối)

```css
.dark-theme {
    --primary-color: #66BB6A;
    --secondary-color: #42A5F5;
    --danger-color: #ef5350;
    --warning-color: #FFA726;
    --bg-color: #1a1a1a;
    --card-bg: #2d2d2d;
    --text-color: #e0e0e0;
    --border-color: #404040;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
```

**Giải thích:**
- `.dark-theme` - Class cho chế độ tối, ghi đè các biến CSS
- Các màu được điều chỉnh để phù hợp với nền tối
- `--bg-color: #1a1a1a` - Nền đen gần như hoàn toàn
- `--card-bg: #2d2d2d` - Nền thẻ xám đậm
- `--text-color: #e0e0e0` - Chữ màu sáng để dễ đọc trên nền tối
- `--shadow` - Bóng đổ đậm hơn (opacity 0.3)

---

## 3. Reset CSS

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

**Giải thích:**
- `*` - Selector chọn tất cả các phần tử
- `margin: 0` - Xóa margin mặc định
- `padding: 0` - Xóa padding mặc định
- `box-sizing: border-box` - Tính toán kích thước bao gồm padding và border

---

## 4. Body Styling (Định dạng body)

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--bg-color);
    color: var(--text-color);
    min-height: 100vh;
    padding: 20px;
    transition: all 0.3s ease;
}
```

**Giải thích:**
- `font-family` - Sử dụng font Segoe UI, fallback là Tahoma, Geneva, Verdana, sans-serif
- `background` - Sử dụng biến màu nền
- `color` - Màu chữ từ biến CSS
- `min-height: 100vh` - Chiều cao tối thiểu là 100% viewport height
- `padding: 20px` - Khoảng đệm 20px xung quanh
- `transition: all 0.3s ease` - Hiệu ứng chuyển đổi mượt 0.3 giây

---

## 5. Background Gradient (Nền gradient)

```css
body:not(.dark-theme) {
    background: linear-gradient(135deg, var(--bg-color) 0%, #e3f2fd 100%);
}

body.dark-theme {
    background: linear-gradient(135deg, var(--bg-color) 0%, #0d47a1 100%);
}
```

**Giải thích:**
- `body:not(.dark-theme)` - Áp dụng cho body không có class dark-theme
- `linear-gradient(135deg, ...)` - Gradient tuyến tính góc 135 độ
- Chế độ sáng: gradient từ xám nhạt đến xanh dương nhạt (#e3f2fd)
- Chế độ tối: gradient từ đen đến xanh dương đậm (#0d47a1)

---

## 6. Container (Khung chứa)

```css
.container {
    max-width: 800px;
    margin: 0 auto;
}
```

**Giải thích:**
- `max-width: 800px` - Chiều rộng tối đa 800px
- `margin: 0 auto` - Căn giữa container (margin trái phải auto)

---

## 7. Heading 1 (Tiêu đề chính)

```css
h1 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 30px;
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
```

**Giải thích:**
- `text-align: center` - Căn giữa văn bản
- `color` - Màu chủ đạo từ biến CSS
- `margin-bottom: 30px` - Khoảng cách phía dưới 30px
- `font-size: 2.5rem` - Kích thước font 2.5 lần root font
- `text-shadow` - Bóng chữ: 2px phải, 2px xuống, blur 4px, độ mờ 0.1

---

## 8. Heading 2 (Tiêu đề phụ)

```css
h2 {
    color: var(--text-color);
    margin-bottom: 15px;
    font-size: 1.5rem;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 10px;
}
```

**Giải thích:**
- `color` - Màu chữ từ biến CSS
- `margin-bottom: 15px` - Khoảng cách dưới 15px
- `font-size: 1.5rem` - Kích thước font 1.5 lần root
- `border-bottom` - Viền dưới 2px màu primary
- `padding-bottom: 10px` - Khoảng đệm dưới 10px

---

## 9. Stopwatch Display (Màn hình đồng hồ)

```css
.stopwatch-display {
    background: var(--card-bg);
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Courier New', monospace;
    box-shadow: var(--shadow);
    margin-bottom: 30px;
    color: var(--primary-color);
    border: 3px solid var(--border-color);
    transition: all 0.3s ease;
}
```

**Giải thích:**
- `background` - Nền từ biến card-bg
- `border-radius: 20px` - Bo góc 20px
- `padding: 40px` - Khoảng đệm trong 40px
- `text-align: center` - Căn giữa chữ
- `font-size: 4rem` - Font lớn 4rem
- `font-weight: bold` - Chữ đậm
- `font-family: 'Courier New', monospace` - Font monospace (độ rộng cố định)
- `box-shadow` - Bóng đổ từ biến CSS
- `margin-bottom: 30px` - Khoảng cách dưới 30px
- `color` - Màu chữ chính
- `border: 3px solid` - Viền 3px
- `transition` - Hiệu ứng chuyển đổi mượt

---

## 10. Stopwatch Running State (Trạng thái đang chạy)

```css
.stopwatch-display.running {
    border-color: var(--primary-color);
    box-shadow: 0 0 20px rgba(76, 175, 80, 0.3);
}
```

**Giải thích:**
- `.running` - Class thêm vào khi đồng hồ đang chạy
- `border-color` - Viền đổi sang màu chính
- `box-shadow: 0 0 20px` - Hiệu ứng phát sáng (glow effect) màu xanh lá

---

## 11. Stopwatch Hover Effect (Hiệu ứng hover)

```css
.stopwatch-display:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
```

**Giải thích:**
- `:hover` - Khi chuột di chuyển lên phần tử
- `transform: translateY(-5px)` - Dịch lên trên 5px
- `box-shadow` - Bóng đổ lớn hơn khi hover

---

## 12. Stopwatch Display Span

```css
.stopwatch-display span {
    display: inline-block;
}

#milliseconds {
    font-size: 2.5rem;
    color: var(--secondary-color);
}
```

**Giải thích:**
- `display: inline-block` - Hiển thị inline-block cho các span
- `#milliseconds` - ID cho phần mili giây
- `font-size: 2.5rem` - Font nhỏ hơn thời gian chính
- `color` - Màu phụ (xanh dương)

---

## 13. Controls (Nút điều khiển)

```css
.controls {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
    flex-wrap: wrap;
}
```

**Giải thích:**
- `display: flex` - Sử dụng flexbox layout
- `justify-content: center` - Căn giữa theo trục chính
- `gap: 15px` - Khoảng cách giữa các phần tử 15px
- `margin-bottom: 30px` - Khoảng cách dưới 30px
- `flex-wrap: wrap` - Cho phép xuống dòng khi không đủ chỗ

---

## 14. Button Base Style (Style nút cơ bản)

```css
.btn {
    padding: 15px 30px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
}
```

**Giải thích:**
- `padding: 15px 30px` - Đệm trên/dưới 15px, trái/phải 30px
- `font-size: 1rem` - Kích thước font 1rem
- `font-weight: bold` - Chữ đậm
- `border: none` - Không viền
- `border-radius: 10px` - Bo góc 10px
- `cursor: pointer` - Con trỏ chuột dạng tay
- `transition` - Hiệu ứng chuyển đổi mượt
- `box-shadow` - Bóng đổ
- `text-transform: uppercase` - Chữ in hoa
- `letter-spacing: 1px` - Khoảng cách giữa các chữ 1px

---

## 15. Button Hover Effect (Hiệu ứng hover nút)

```css
.btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.btn:active:not(:disabled) {
    transform: translateY(0);
}
```

**Giải thích:**
- `:hover:not(:disabled)` - Hover khi nút không bị disabled
- `transform: translateY(-2px)` - Nâng nút lên 2px
- `:active` - Khi nút được nhấn
- `transform: translateY(0)` - Trả về vị trí ban đầu

---

## 16. Button Disabled & Focus States

```css
.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn:focus-visible {
    outline: 3px solid var(--primary-color);
    outline-offset: 2px;
}
```

**Giải thích:**
- `:disabled` - Trạng thái nút bị vô hiệu hóa
- `opacity: 0.5` - Độ mờ 50%
- `cursor: not-allowed` - Con trỏ cấm
- `:focus-visible` - Khi nút được focus (keyboard navigation)
- `outline` - Viền outline 3px màu chính
- `outline-offset: 2px` - Khoảng cách từ viền đến outline 2px

---

## 17. Button Color Variants (Biến thể màu nút)

```css
.btn-start {
    background: var(--primary-color);
    color: white;
}

.btn-pause {
    background: var(--warning-color);
    color: white;
}

.btn-reset {
    background: var(--danger-color);
    color: white;
}

.btn-lap {
    background: var(--secondary-color);
    color: white;
}

.btn-secondary {
    background: #9e9e9e;
    color: white;
    padding: 10px 20px;
    font-size: 0.9rem;
}
```

**Giải thích:**
- `.btn-start` - Nút Start màu xanh lá (primary)
- `.btn-pause` - Nút Pause màu cam (warning)
- `.btn-reset` - Nút Reset màu đỏ (danger)
- `.btn-lap` - Nút Lap màu xanh dương (secondary)
- `.btn-secondary` - Nút phụ màu xám, size nhỏ hơn
- Tất cả đều có chữ màu trắng

---

## 18. Lap Times Container (Khung hiển thị vòng)

```css
.lap-times {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: var(--shadow);
    min-height: 200px;
}

#lapsList {
    max-height: 300px;
    overflow-y: auto;
}
```

**Giải thích:**
- `.lap-times` - Container cho danh sách vòng
- `border-radius: 15px` - Bo góc 15px
- `padding: 25px` - Đệm trong 25px
- `min-height: 200px` - Chiều cao tối thiểu 200px
- `#lapsList` - Danh sách các vòng
- `max-height: 300px` - Chiều cao tối đa 300px
- `overflow-y: auto` - Thanh cuộn dọc tự động

---

## 19. Lap Item (Mục vòng)

```css
.lap-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    margin: 8px 0;
    background: var(--bg-color);
    border-radius: 8px;
    border-left: 4px solid var(--secondary-color);
    transition: all 0.2s ease;
}

.lap-item:hover {
    transform: translateX(5px);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
```

**Giải thích:**
- `display: flex` - Layout flexbox
- `justify-content: space-between` - Căn đều 2 đầu
- `align-items: center` - Căn giữa theo trục phụ
- `padding: 12px 15px` - Đệm trong
- `margin: 8px 0` - Khoảng cách trên/dưới 8px
- `border-left: 4px solid` - Viền trái 4px màu phụ
- `:hover` - Khi hover, dịch phải 5px và thêm bóng

---

## 20. Lap Item Special States (Trạng thái đặc biệt)

```css
.lap-item.fastest {
    border-left-color: var(--primary-color);
    background: rgba(76, 175, 80, 0.1);
}

.lap-item.slowest {
    border-left-color: var(--danger-color);
    background: rgba(244, 67, 54, 0.1);
}
```

**Giải thích:**
- `.fastest` - Vòng nhanh nhất
- Viền trái màu xanh lá, nền xanh lá nhạt (opacity 0.1)
- `.slowest` - Vòng chậm nhất
- Viền trái màu đỏ, nền đỏ nhạt (opacity 0.1)

---

## 21. Lap Details Elements

```css
.lap-number {
    font-weight: bold;
    color: var(--secondary-color);
    min-width: 80px;
}

.lap-time {
    font-family: 'Courier New', monospace;
    font-weight: bold;
    font-size: 1.1rem;
}

.lap-diff {
    font-size: 0.9rem;
    color: #757575;
    min-width: 100px;
    text-align: right;
}

.lap-diff.faster {
    color: var(--primary-color);
}

.lap-diff.slower {
    color: var(--danger-color);
}
```

**Giải thích:**
- `.lap-number` - Số thứ tự vòng, chữ đậm, màu xanh dương, min-width 80px
- `.lap-time` - Thời gian vòng, font monospace, đậm, size 1.1rem
- `.lap-diff` - Chênh lệch thời gian, size nhỏ, căn phải, min-width 100px
- `.faster` - Nhanh hơn, màu xanh lá
- `.slower` - Chậm hơn, màu đỏ

---

## 22. Statistics Section (Phần thống kê)

```css
.statistics {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: var(--shadow);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}
```

**Giải thích:**
- `.statistics` - Container thống kê
- `.stats-grid` - Grid layout cho các thống kê
- `repeat(auto-fit, minmax(200px, 1fr))` - Tự động chia cột, mỗi cột min 200px
- `gap: 20px` - Khoảng cách giữa các cột 20px

---

## 23. Stat Item (Mục thống kê)

```css
.stat-item {
    background: var(--bg-color);
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    border: 2px solid var(--border-color);
}

.stat-label {
    display: block;
    font-size: 0.9rem;
    color: #757575;
    margin-bottom: 5px;
}

.stat-value {
    display: block;
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary-color);
    font-family: 'Courier New', monospace;
}
```

**Giải thích:**
- `.stat-item` - Khung mỗi thống kê, căn giữa
- `.stat-label` - Nhãn (label), màu xám, size 0.9rem
- `.stat-value` - Giá trị, lớn 1.3rem, đậm, màu chính, font monospace

---

## 24. Features Section (Phần tính năng)

```css
.features {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 25px;
    box-shadow: var(--shadow);
}

.feature-controls {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
}
```

**Giải thích:**
- `.features` - Container tính năng
- `.feature-controls` - Flexbox cho các nút điều khiển
- `gap: 15px` - Khoảng cách 15px
- `flex-wrap: wrap` - Cho phép xuống dòng
- `justify-content: center` - Căn giữa

---

## 25. Scrollbar Styling (Webkit)

```css
#lapsList::-webkit-scrollbar {
    width: 8px;
}

#lapsList::-webkit-scrollbar-track {
    background: var(--bg-color);
    border-radius: 10px;
}

#lapsList::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 10px;
}

#lapsList::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color);
}
```

**Giải thích:**
- `::-webkit-scrollbar` - Thanh cuộn cho Chrome/Safari
- `width: 8px` - Độ rộng thanh cuộn 8px
- `::-webkit-scrollbar-track` - Track (đường ray) của thanh cuộn
- `::-webkit-scrollbar-thumb` - Phần di chuyển (thumb)
- `border-radius: 10px` - Bo góc cho đẹp
- `:hover` - Khi hover, đổi màu sang secondary

---

## 26. Firefox Scrollbar

```css
#lapsList {
    scrollbar-width: thin;
    scrollbar-color: var(--primary-color) var(--bg-color);
}
```

**Giải thích:**
- `scrollbar-width: thin` - Thanh cuộn mỏng (Firefox)
- `scrollbar-color` - Màu thumb và track cho Firefox

---

## 27. Responsive Design (Thiết kế đáp ứng)

```css
@media (max-width: 768px) {
    .stopwatch-display {
        font-size: 2.5rem;
        padding: 30px 20px;
    }
    
    #milliseconds {
        font-size: 1.5rem;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    .controls {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .feature-controls {
        flex-direction: column;
    }
    
    .feature-controls .btn {
        width: 100%;
    }
}
```

**Giải thích:**
- `@media (max-width: 768px)` - Áp dụng khi màn hình ≤ 768px (mobile/tablet)
- Giảm font-size của stopwatch display và milliseconds
- Giảm size h1
- `.controls` - Chuyển sang flex-direction: column (nút xếp dọc)
- `.btn` - Nút chiếm 100% chiều rộng
- `.stats-grid` - Chỉ 1 cột
- Tất cả điều chỉnh để phù hợp màn hình nhỏ

---

## 28. Fade In Animation (Hiệu ứng xuất hiện)

```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.lap-item {
    animation: fadeIn 0.3s ease;
}
```

**Giải thích:**
- `@keyframes fadeIn` - Định nghĩa animation fadeIn
- `from` - Trạng thái bắt đầu: trong suốt, dịch xuống 10px
- `to` - Trạng thái kết thúc: hiện rõ, vị trí gốc
- `.lap-item` - Áp dụng animation fadeIn trong 0.3s với easing
- Tạo hiệu ứng mỗi lap item xuất hiện mượt mà

---

## 29. Print Styles (Style in ấn)

```css
@media print {
    body {
        background: white;
    }
    
    .controls, .features {
        display: none;
    }
    
    .stopwatch-display, .lap-times, .statistics {
        box-shadow: none;
        border: 1px solid #000;
    }
}
```

**Giải thích:**
- `@media print` - Áp dụng khi in trang
- `body` - Đổi nền thành trắng
- `.controls, .features` - Ẩn các nút điều khiển (không cần in)
- Các phần tử khác: Bỏ bóng đổ, chỉ giữ viền đen 1px
- Tối ưu cho in ấn, tiết kiệm mực và rõ ràng

---

## Tổng Kết

File CSS này tạo ra một giao diện đồng hồ bấm giờ (stopwatch) với:
- **Chế độ sáng/tối** qua CSS variables
- **Responsive design** cho mobile
- **Hiệu ứng animations** mượt mà
- **Accessibility** với focus states
- **Print optimization** cho in ấn
- **Custom scrollbars** đẹp mắt
- **Color-coded indicators** cho fastest/slowest laps
