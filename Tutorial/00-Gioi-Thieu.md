# 📚 Hướng Dẫn Chi Tiết - Dự Án Đồng Hồ Bấm Giờ Web

## Chào mừng bạn đến với Tutorial!

Tài liệu này được thiết kế để giúp **người hoàn toàn mới với lập trình** hiểu được từng phần, từng dòng code trong dự án Đồng Hồ Bấm Giờ Web này.

---

## 📋 Mục Lục Tutorial

1. **[00-Gioi-Thieu.md](00-Gioi-Thieu.md)** (File này) - Tổng quan dự án
2. **[01-Kien-Thuc-Co-Ban.md](01-Kien-Thuc-Co-Ban.md)** - Kiến thức nền tảng cần biết
3. **[02-Cau-Truc-HTML.md](02-Cau-Truc-HTML.md)** - Giải thích file index.html
4. **[03-Styling-CSS.md](03-Styling-CSS.md)** - Giải thích file style.css
5. **[04-Logic-JavaScript-Phan-1.md](04-Logic-JavaScript-Phan-1.md)** - Class Stopwatch
6. **[05-Logic-JavaScript-Phan-2.md](05-Logic-JavaScript-Phan-2.md)** - Event handlers & Functions
7. **[06-Lien-Ket-Va-Hoat-Dong.md](06-Lien-Ket-Va-Hoat-Dong.md)** - Cách mọi thứ hoạt động cùng nhau

---

## 🎯 Dự Án Này Là Gì?

**Đồng Hồ Bấm Giờ Web** là một ứng dụng web chạy trên trình duyệt, cho phép người dùng:

- ⏱️ **Bấm giờ chính xác** đến 1/100 giây
- ▶️ **Bắt đầu/Tạm dừng** đồng hồ
- 🔄 **Đặt lại** về 00:00:00.00
- 🏁 **Ghi vòng** (Lap) để đo các khoảng thời gian
- 📊 **Xem thống kê** (vòng nhanh nhất, chậm nhất, trung bình)
- 💾 **Xuất dữ liệu** ra file CSV
- 🌙 **Đổi giao diện** sáng/tối
- ⌨️ **Dùng phím tắt** để điều khiển

---

## 🏗️ Cấu Trúc Dự Án

Dự án bao gồm **3 file chính**:

```
web_stopwatch_long/
├── index.html       ← Cấu trúc giao diện (Nội dung trang web)
├── style.css        ← Trang trí, màu sắc, bố cục
└── script.js        ← Logic, chức năng, xử lý sự kiện
```

### 🧩 Vai Trò Của Từng File

#### 1️⃣ **index.html** - Bộ Khung Xương
- Định nghĩa **cấu trúc** của trang web
- Giống như bản thiết kế kiến trúc của ngôi nhà
- Chứa các phần tử: tiêu đề, nút bấm, hiển thị số...

#### 2️⃣ **style.css** - Lớp Trang Trí
- Quyết định **hình dáng, màu sắc, kích thước**
- Giống như sơn tường, đồ nội thất của ngôi nhà
- Làm cho giao diện đẹp mắt, dễ nhìn

#### 3️⃣ **script.js** - Bộ Não
- Chứa **logic, tính toán, xử lý**
- Giống như hệ thống điện, nước trong ngôi nhà
- Làm cho mọi thứ hoạt động được

---

## 🔧 Công Nghệ Sử Dụng

### HTML5 (HyperText Markup Language)
**Ngôn ngữ đánh dấu** để tạo cấu trúc trang web.

**Ví dụ đơn giản:**
```html
<button>Nhấn vào đây</button>
```
→ Tạo ra một nút bấm với chữ "Nhấn vào đây"

---

### CSS3 (Cascading Style Sheets)
**Ngôn ngữ tạo kiểu** để trang trí trang web.

**Ví dụ đơn giản:**
```css
button {
    background-color: green;
    color: white;
}
```
→ Nút bấm có nền xanh lá, chữ trắng

---

### JavaScript (ES6+)
**Ngôn ngữ lập trình** để tạo tính năng tương tác.

**Ví dụ đơn giản:**
```javascript
button.addEventListener('click', () => {
    alert('Bạn vừa nhấn nút!');
});
```
→ Khi nhấn nút, hiện thông báo "Bạn vừa nhấn nút!"

---

## 💡 Các Khái Niệm Quan Trọng

### 1. **DOM (Document Object Model)**
- Cách trình duyệt "hiểu" và quản lý trang web
- Mỗi thẻ HTML trở thành một "đối tượng" mà JavaScript có thể điều khiển

**Ví dụ:**
```javascript
document.getElementById('hours')
```
→ Tìm phần tử có id="hours" trong HTML

---

### 2. **Event (Sự kiện)**
- Hành động của người dùng: click chuột, nhấn phím...
- JavaScript "lắng nghe" và phản ứng lại

**Ví dụ:**
```javascript
button.addEventListener('click', handleClick)
```
→ Khi nhấn nút, gọi hàm `handleClick()`

---

### 3. **Class (Lớp)**
- Bản thiết kế để tạo ra các đối tượng
- Giống như "khuôn mẫu" để tạo ra nhiều thứ giống nhau

**Ví dụ:**
```javascript
class Stopwatch {
    start() { /* code */ }
    pause() { /* code */ }
}
```
→ Tạo một lớp Stopwatch với các phương thức start, pause

---

### 4. **Variable (Biến)**
- "Hộp đựng" để lưu trữ dữ liệu
- Có thể thay đổi giá trị

**Ví dụ:**
```javascript
let time = 0;        // Biến lưu thời gian
time = time + 1;     // Tăng thêm 1
```

---

### 5. **Function (Hàm)**
- Một "công thức" để thực hiện một công việc
- Có thể gọi lại nhiều lần

**Ví dụ:**
```javascript
function cong(a, b) {
    return a + b;
}

cong(2, 3)  // Kết quả: 5
```

---

## 📊 Luồng Hoạt Động Tổng Quan

```
┌─────────────────────────────────────────────┐
│  1. Người dùng mở index.html                │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  2. Trình duyệt tải style.css               │
│     → Trang web có màu sắc, bố cục          │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  3. Trình duyệt tải script.js               │
│     → Trang web có chức năng                │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  4. JavaScript tạo đối tượng Stopwatch      │
│     → Đồng hồ sẵn sàng hoạt động            │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  5. Người dùng nhấn "BẮT ĐẦU"               │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  6. JavaScript bắt đầu đếm thời gian        │
│     → Cập nhật màn hình mỗi 0.01 giây       │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  7. Người dùng nhấn "GHI VÒNG"              │
│     → JavaScript lưu thời gian vòng         │
│     → Hiển thị trong danh sách              │
└─────────────────────────────────────────────┘
```

---

## 🎓 Cách Sử Dụng Tutorial Này

### Bước 1: Đọc Tuần Tự
Đọc từ file **01** đến **06** theo thứ tự. Mỗi file xây dựng dựa trên kiến thức của file trước.

### Bước 2: Thực Hành
Mở file code thật (index.html, style.css, script.js) cùng lúc với tutorial để đối chiếu.

### Bước 3: Thử Nghiệm
Thay đổi các giá trị trong code để xem điều gì xảy ra:
- Đổi màu sắc trong CSS
- Thay đổi thời gian cập nhật
- Thêm console.log() để xem giá trị biến

### Bước 4: Đặt Câu Hỏi
Nếu không hiểu phần nào, hãy:
1. Đọc lại chậm rãi
2. Tra Google về khái niệm đó
3. Thử nghiệm code đó

---

## 🌟 Mục Tiêu Học Tập

Sau khi hoàn thành tutorial này, bạn sẽ:

✅ Hiểu cấu trúc cơ bản của một trang web  
✅ Biết HTML tạo nội dung như thế nào  
✅ Hiểu CSS trang trí giao diện ra sao  
✅ Nắm được JavaScript xử lý logic và sự kiện  
✅ Biết cách các file liên kết với nhau  
✅ Có thể tự sửa đổi và mở rộng dự án  
✅ Tự tin bắt đầu các dự án web khác  

---

## 📌 Lưu Ý Quan Trọng

### 🐌 Học Chậm, Hiểu Sâu
Đừng vội vàng. Mỗi khái niệm cần thời gian để thấm. Đọc lại nhiều lần nếu cần.

### 💪 Thực Hành Là Chìa Khóa
Code không học được bằng đọc. Phải **gõ code**, **chạy thử**, **sửa lỗi**.

### 🔍 Tìm Hiểu Thêm
Tutorial này chỉ giải thích code trong dự án. Để hiểu sâu hơn, hãy:
- Đọc MDN Web Docs
- Xem video trên YouTube
- Làm các bài tập nhỏ

### 🚀 Từng Bước Một
Đừng cố gắng hiểu hết mọi thứ cùng lúc. Học từng phần, từng file một.

---

## 🎉 Sẵn Sàng Bắt Đầu?

Tiếp theo, hãy chuyển sang **[01-Kien-Thuc-Co-Ban.md](01-Kien-Thuc-Co-Ban.md)** để học các kiến thức nền tảng cần thiết!

---

**Chúc bạn học vui! 🚀📚**
