# 📖 Kiến Thức Cơ Bản Cần Biết

Trước khi đi vào chi tiết code, bạn cần hiểu một số khái niệm nền tảng trong lập trình web.

---

## 🌐 Web Hoạt Động Như Thế Nào?

### Mô Hình Client-Server

```
┌──────────────┐                    ┌──────────────┐
│   Máy Bạn    │                    │   Máy Chủ    │
│  (Client)    │ ──── Yêu cầu ───→  │  (Server)    │
│              │                    │              │
│  Trình duyệt │ ←── Trả về ─────   │  Lưu trữ web │
└──────────────┘                    └──────────────┘
```

**Nhưng dự án này đặc biệt:**
- Không cần server! Chỉ chạy trên trình duyệt
- Mở file `index.html` trực tiếp là được
- Gọi là **Static Web** (Web tĩnh)

---

## 📝 HTML - Ngôn Ngữ Đánh Dấu

### HTML Là Gì?

**HTML** = HyperText Markup Language  
Dùng để tạo **cấu trúc** của trang web.

### Cú Pháp Cơ Bản

```html
<tên_thẻ thuộc_tính="giá_trị">Nội dung</tên_thẻ>
```

**Ví dụ thực tế:**
```html
<h1 class="title">Xin chào!</h1>
```

Phân tích:
- `<h1>` = Thẻ mở (heading 1 - tiêu đề cấp 1)
- `class="title"` = Thuộc tính (để CSS/JS nhận diện)
- `Xin chào!` = Nội dung hiển thị
- `</h1>` = Thẻ đóng

### Các Thẻ Quan Trọng Trong Dự Án

#### 1. `<div>` - Container (Hộp chứa)
```html
<div class="container">
    <!-- Chứa các phần tử khác -->
</div>
```
Giống như một cái hộp để nhóm các thứ lại.

#### 2. `<button>` - Nút Bấm
```html
<button id="startBtn" class="btn">BẮT ĐẦU</button>
```
- `id="startBtn"` → JavaScript tìm nút này bằng ID
- `class="btn"` → CSS trang trí nút này

#### 3. `<span>` - Phần Tử Inline
```html
<span id="hours">00</span>
```
Dùng để hiển thị giá trị nhỏ, JavaScript sẽ cập nhật nội dung.

#### 4. `<ul>` và `<li>` - Danh Sách
```html
<ul id="lapsList">
    <li>Vòng 1: 00:03.27</li>
    <li>Vòng 2: 00:04.31</li>
</ul>
```
- `<ul>` = Unordered List (danh sách không thứ tự)
- `<li>` = List Item (mục trong danh sách)

---

## 🎨 CSS - Ngôn Ngữ Tạo Kiểu

### CSS Là Gì?

**CSS** = Cascading Style Sheets  
Dùng để **trang trí** giao diện: màu sắc, kích thước, vị trí...

### Cú Pháp Cơ Bản

```css
selector {
    property: value;
}
```

**Ví dụ thực tế:**
```css
.btn {
    background-color: green;
    color: white;
    font-size: 16px;
}
```

Phân tích:
- `.btn` = Selector (chọn tất cả phần tử có class="btn")
- `background-color` = Thuộc tính (màu nền)
- `green` = Giá trị (màu xanh lá)

### Các Loại Selector

#### 1. **Class Selector** (Chọn theo class)
```css
.btn-start {
    background-color: green;
}
```
→ Chọn tất cả phần tử có `class="btn-start"`

#### 2. **ID Selector** (Chọn theo ID)
```css
#startBtn {
    width: 100px;
}
```
→ Chọn phần tử có `id="startBtn"`  
**Lưu ý:** ID phải duy nhất trong trang!

#### 3. **Element Selector** (Chọn theo tên thẻ)
```css
button {
    cursor: pointer;
}
```
→ Chọn TẤT CẢ các thẻ `<button>`

#### 4. **Pseudo-class** (Trạng thái đặc biệt)
```css
button:hover {
    background-color: darkgreen;
}
```
→ Khi di chuột vào nút, màu nền đổi

### CSS Variables (Biến CSS)

```css
:root {
    --primary-color: #4CAF50;
    --text-color: #333;
}

.btn {
    background-color: var(--primary-color);
    color: var(--text-color);
}
```

**Lợi ích:**
- Thay đổi 1 lần, áp dụng toàn bộ
- Dễ dàng đổi theme (sáng/tối)

---

## 💻 JavaScript - Ngôn Ngữ Lập Trình

### JavaScript Là Gì?

**JavaScript** = Ngôn ngữ lập trình chạy trên trình duyệt  
Dùng để tạo **tính năng tương tác**: tính toán, xử lý sự kiện...

### 1. Variables (Biến)

**3 cách khai báo biến:**

```javascript
var oldWay = "Cách cũ, không nên dùng";
let canChange = "Có thể thay đổi";
const cantChange = "Không thể thay đổi";
```

**Ví dụ thực tế:**
```javascript
let time = 0;           // Thời gian ban đầu
time = time + 1;        // Tăng thêm 1 giây
console.log(time);      // In ra: 1

const PI = 3.14159;     // Hằng số, không đổi
// PI = 3.14;           // ❌ LỖI! Không thể thay đổi const
```

### 2. Data Types (Kiểu Dữ Liệu)

```javascript
// Number (Số)
let age = 25;
let price = 99.99;

// String (Chuỗi)
let name = "Nguyễn Văn A";
let message = 'Xin chào!';

// Boolean (Đúng/Sai)
let isRunning = true;
let isPaused = false;

// Array (Mảng)
let numbers = [1, 2, 3, 4, 5];
let names = ["An", "Bình", "Châu"];

// Object (Đối tượng)
let person = {
    name: "An",
    age: 20,
    city: "Hà Nội"
};
```

### 3. Operators (Toán Tử)

```javascript
// Toán tử số học
let sum = 5 + 3;        // 8
let diff = 10 - 4;      // 6
let product = 6 * 7;    // 42
let quotient = 20 / 4;  // 5
let remainder = 10 % 3; // 1 (phần dư)

// Toán tử so sánh
5 == "5"    // true (bằng giá trị)
5 === "5"   // false (bằng giá trị VÀ kiểu)
10 > 5      // true
10 <= 10    // true
5 != 3      // true (khác)

// Toán tử logic
true && false   // false (VÀ)
true || false   // true (HOẶC)
!true           // false (PHỦ ĐỊNH)
```

### 4. Functions (Hàm)

**Cách 1: Function Declaration**
```javascript
function tinhTong(a, b) {
    return a + b;
}

let ketQua = tinhTong(5, 3);  // 8
```

**Cách 2: Arrow Function (Hàm mũi tên)**
```javascript
const tinhTong = (a, b) => {
    return a + b;
};

// Hoặc viết ngắn gọn:
const tinhTong = (a, b) => a + b;
```

**Tham số và Giá trị trả về:**
```javascript
function chaoHoi(ten) {
    console.log("Xin chào " + ten);
}

chaoHoi("An");  // In ra: "Xin chào An"

function binhPhuong(x) {
    return x * x;
}

let kq = binhPhuong(5);  // 25
```

### 5. Conditional Statements (Câu Lệnh Điều Kiện)

```javascript
let age = 18;

if (age >= 18) {
    console.log("Đã trưởng thành");
} else {
    console.log("Chưa trưởng thành");
}

// Ternary operator (Toán tử 3 ngôi)
let status = (age >= 18) ? "Trưởng thành" : "Chưa trưởng thành";
```

### 6. Loops (Vòng Lặp)

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// While loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// forEach (với mảng)
let fruits = ["Táo", "Cam", "Chuối"];
fruits.forEach(fruit => {
    console.log(fruit);
});
```

---

## 🎯 DOM (Document Object Model)

### DOM Là Gì?

**DOM** = Cách trình duyệt biểu diễn trang web thành cây đối tượng.

```
document
  └─ html
      ├─ head
      │   ├─ title
      │   └─ link (CSS)
      └─ body
          ├─ div (container)
          │   ├─ h1
          │   ├─ button
          │   └─ span
```

### Tương Tác Với DOM

#### 1. **Lấy Phần Tử**

```javascript
// Lấy theo ID
const btn = document.getElementById('startBtn');

// Lấy theo Class (lấy phần tử đầu tiên)
const header = document.querySelector('.header');

// Lấy tất cả theo Class
const buttons = document.querySelectorAll('.btn');
```

#### 2. **Thay Đổi Nội Dung**

```javascript
const title = document.getElementById('title');

// Thay đổi text
title.textContent = "Xin chào!";

// Thay đổi HTML
title.innerHTML = "<strong>Xin chào!</strong>";
```

#### 3. **Thay Đổi Style**

```javascript
const box = document.getElementById('box');

box.style.backgroundColor = "red";
box.style.width = "200px";
box.style.display = "none";  // Ẩn
```

#### 4. **Thêm/Xóa Class**

```javascript
const element = document.querySelector('.box');

element.classList.add('active');       // Thêm class
element.classList.remove('hidden');    // Xóa class
element.classList.toggle('dark');      // Bật/tắt class
```

---

## 🎪 Events (Sự Kiện)

### Event Là Gì?

**Event** = Hành động xảy ra trên trang web:
- Click chuột
- Nhấn phím
- Di chuột vào/ra
- Tải trang xong...

### Lắng Nghe Sự Kiện

```javascript
const button = document.getElementById('myBtn');

// Cách 1: addEventListener
button.addEventListener('click', function() {
    console.log('Đã nhấn nút!');
});

// Cách 2: Arrow function
button.addEventListener('click', () => {
    console.log('Đã nhấn nút!');
});

// Cách 3: Gọi hàm riêng
function handleClick() {
    console.log('Đã nhấn nút!');
}

button.addEventListener('click', handleClick);
```

### Các Event Phổ Biến

```javascript
// Click chuột
element.addEventListener('click', handler);

// Nhấn phím
document.addEventListener('keydown', handler);

// Di chuột vào
element.addEventListener('mouseenter', handler);

// Thay đổi input
input.addEventListener('input', handler);

// Tải trang xong
window.addEventListener('load', handler);
```

### Event Object

```javascript
button.addEventListener('click', (event) => {
    console.log(event.target);     // Phần tử được click
    console.log(event.type);       // "click"
    event.preventDefault();        // Ngăn hành động mặc định
});
```

---

## 🏗️ Object-Oriented Programming (OOP)

### Class (Lớp)

**Class** = Bản thiết kế để tạo đối tượng

```javascript
class Person {
    // Constructor (Hàm khởi tạo)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method (Phương thức)
    greet() {
        console.log(`Xin chào, tôi là ${this.name}`);
    }
    
    getAge() {
        return this.age;
    }
}

// Tạo đối tượng từ class
const person1 = new Person("An", 20);
person1.greet();  // "Xin chào, tôi là An"
console.log(person1.getAge());  // 20
```

**Trong dự án:**
```javascript
class Stopwatch {
    constructor() {
        this.startTime = 0;
        this.isRunning = false;
    }
    
    start() {
        this.isRunning = true;
        this.startTime = Date.now();
    }
    
    pause() {
        this.isRunning = false;
    }
}

const stopwatch = new Stopwatch();
stopwatch.start();
```

---

## ⏰ Thời Gian Trong JavaScript

### Date.now()

```javascript
const now = Date.now();
console.log(now);  // 1703318400000 (milliseconds từ 1/1/1970)
```

- Trả về **số millisecond** từ ngày 1/1/1970
- 1 giây = 1000 milliseconds
- Dùng để tính thời gian đã trôi qua

**Ví dụ tính thời gian:**
```javascript
const startTime = Date.now();

// ... Làm gì đó ...

const endTime = Date.now();
const elapsed = endTime - startTime;  // Thời gian đã trôi qua (ms)
```

### setInterval() và clearInterval()

```javascript
// Chạy hàm mỗi 1000ms (1 giây)
const intervalId = setInterval(() => {
    console.log("1 giây đã trôi qua");
}, 1000);

// Dừng interval
clearInterval(intervalId);
```

**Trong dự án:**
```javascript
// Cập nhật màn hình mỗi 10ms
this.timerInterval = setInterval(() => {
    this.updateDisplay();
}, 10);
```

---

## 📦 Local Storage

### Local Storage Là Gì?

**Lưu trữ dữ liệu** trên trình duyệt, không mất khi tắt trang.

```javascript
// Lưu dữ liệu
localStorage.setItem('theme', 'dark');

// Đọc dữ liệu
const theme = localStorage.getItem('theme');  // "dark"

// Xóa dữ liệu
localStorage.removeItem('theme');

// Xóa tất cả
localStorage.clear();
```

**Trong dự án:**
```javascript
// Lưu theme
localStorage.setItem('theme', 'dark');

// Đọc theme khi tải trang
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}
```

---

## 🧮 Các Hàm Toán Học

```javascript
Math.floor(4.7);   // 4 (Làm tròn xuống)
Math.ceil(4.1);    // 5 (Làm tròn lên)
Math.round(4.5);   // 5 (Làm tròn gần nhất)
Math.max(1, 5, 3); // 5 (Số lớn nhất)
Math.min(1, 5, 3); // 1 (Số nhỏ nhất)
```

**Trong dự án:**
```javascript
const milliseconds = Math.floor((time % 1000) / 10);
// time = 2350ms → 2350 % 1000 = 350 → 350/10 = 35 → floor = 35
```

---

## 📊 Template Literals

```javascript
// Cách cũ
const name = "An";
const message = "Xin chào " + name + "!";

// Cách mới (Template Literal)
const message = `Xin chào ${name}!`;

// Nhiều dòng
const html = `
    <div>
        <h1>Tiêu đề</h1>
        <p>Nội dung</p>
    </div>
`;
```

---

## ✅ Tóm Tắt Kiến Thức

| Khái Niệm | Mục Đích | Ví Dụ |
|-----------|----------|-------|
| HTML | Cấu trúc trang | `<button>Nhấn</button>` |
| CSS | Trang trí | `.btn { color: red; }` |
| JavaScript | Logic | `let x = 5;` |
| DOM | Tương tác HTML | `document.getElementById()` |
| Event | Xử lý hành động | `.addEventListener('click')` |
| Class | Tạo đối tượng | `class Stopwatch {}` |
| Local Storage | Lưu dữ liệu | `localStorage.setItem()` |

---

## 🎯 Sẵn Sàng Tiếp Tục?

Bạn đã nắm được các kiến thức nền tảng! Tiếp theo, chúng ta sẽ phân tích file **HTML** trong **[02-Cau-Truc-HTML.md](02-Cau-Truc-HTML.md)**! 🚀
