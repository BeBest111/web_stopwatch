# Giải Thích Chi Tiết File script.js

## 1. Stopwatch Class - Constructor (Khởi tạo lớp)

```javascript
class Stopwatch {
    constructor() {
        this.startTime = 0;
        this.elapsedTime = 0;
        this.timerInterval = null;
        this.isRunning = false;
        this.laps = [];
        this.lastLapTime = 0;
    }
```

**Giải thích:**
- `class Stopwatch` - Định nghĩa lớp Stopwatch để quản lý đồng hồ bấm giờ
- `constructor()` - Hàm khởi tạo, chạy khi tạo object mới
- `this.startTime = 0` - Lưu thời điểm bắt đầu (timestamp)
- `this.elapsedTime = 0` - Thời gian đã trôi qua (milliseconds)
- `this.timerInterval = null` - Lưu ID của setInterval để có thể dừng sau này
- `this.isRunning = false` - Trạng thái đồng hồ (đang chạy hay không)
- `this.laps = []` - Mảng lưu các vòng (laps)
- `this.lastLapTime = 0` - Thời điểm của vòng cuối cùng

---

## 2. Start Method (Phương thức bắt đầu)

```javascript
start() {
    if (!this.isRunning) {
        this.startTime = Date.now() - this.elapsedTime;
        this.timerInterval = setInterval(() => this.updateDisplay(), 10);
        this.isRunning = true;
        // Add visual feedback
        document.querySelector('.stopwatch-display')?.classList.add('running');
    }
}
```

**Giải thích:**
- `start()` - Phương thức bắt đầu đồng hồ
- `if (!this.isRunning)` - Chỉ bắt đầu nếu chưa chạy
- `this.startTime = Date.now() - this.elapsedTime` - Tính thời điểm bắt đầu, trừ đi thời gian đã trôi (để tiếp tục từ nơi đã tạm dừng)
- `Date.now()` - Lấy timestamp hiện tại (milliseconds từ 1/1/1970)
- `setInterval(() => this.updateDisplay(), 10)` - Gọi updateDisplay() mỗi 10ms (100 lần/giây)
- `this.isRunning = true` - Đánh dấu đang chạy
- `document.querySelector('.stopwatch-display')` - Tìm phần tử hiển thị đồng hồ
- `?.classList.add('running')` - Optional chaining, thêm class 'running' (hiệu ứng visual)

---

## 3. Pause Method (Phương thức tạm dừng)

```javascript
pause() {
    if (this.isRunning) {
        clearInterval(this.timerInterval);
        this.elapsedTime = Date.now() - this.startTime;
        this.isRunning = false;
        // Remove visual feedback
        document.querySelector('.stopwatch-display')?.classList.remove('running');
    }
}
```

**Giải thích:**
- `pause()` - Phương thức tạm dừng đồng hồ
- `if (this.isRunning)` - Chỉ tạm dừng nếu đang chạy
- `clearInterval(this.timerInterval)` - Dừng interval đã tạo, không gọi updateDisplay() nữa
- `this.elapsedTime = Date.now() - this.startTime` - Lưu lại thời gian đã trôi
- `this.isRunning = false` - Đánh dấu đã dừng
- `classList.remove('running')` - Xóa class 'running' để bỏ hiệu ứng visual

---

## 4. Reset Method (Phương thức đặt lại)

```javascript
reset() {
    clearInterval(this.timerInterval);
    this.startTime = 0;
    this.elapsedTime = 0;
    this.isRunning = false;
    this.laps = [];
    this.lastLapTime = 0;
    this.updateDisplay();
    updateLapsList();
    updateStatistics();
    // Remove visual feedback
    document.querySelector('.stopwatch-display')?.classList.remove('running');
}
```

**Giải thích:**
- `reset()` - Đặt lại đồng hồ về 0
- `clearInterval(this.timerInterval)` - Dừng interval
- Đặt lại tất cả biến về 0 hoặc giá trị ban đầu
- `this.laps = []` - Xóa sạch mảng laps
- `this.updateDisplay()` - Cập nhật hiển thị về 00:00:00.00
- `updateLapsList()` - Cập nhật danh sách vòng (sẽ trống)
- `updateStatistics()` - Cập nhật thống kê (sẽ reset)
- Xóa class 'running'

---

## 5. Lap Method (Phương thức ghi vòng)

```javascript
lap() {
    if (this.isRunning) {
        // Calculate current time accurately when running
        const currentTime = Date.now() - this.startTime;
        const lapTime = currentTime - this.lastLapTime;
        this.laps.push({
            total: currentTime,
            lap: lapTime,
            number: this.laps.length + 1
        });
        this.lastLapTime = currentTime;
        updateLapsList();
        updateStatistics();
    }
}
```

**Giải thích:**
- `lap()` - Ghi lại thời gian vòng hiện tại
- `if (this.isRunning)` - Chỉ ghi lap khi đồng hồ đang chạy
- `const currentTime = Date.now() - this.startTime` - Tính tổng thời gian từ lúc bắt đầu
- `const lapTime = currentTime - this.lastLapTime` - Thời gian của vòng này (từ vòng trước đến giờ)
- `this.laps.push({...})` - Thêm object vào mảng laps với:
  - `total` - Tổng thời gian từ đầu
  - `lap` - Thời gian vòng này
  - `number` - Số thứ tự vòng
- `this.lastLapTime = currentTime` - Cập nhật thời điểm vòng cuối
- Gọi các hàm update để cập nhật giao diện

---

## 6. Update Display Method (Cập nhật hiển thị)

```javascript
updateDisplay() {
    // Only calculate elapsed time if running
    if (this.isRunning) {
        this.elapsedTime = Date.now() - this.startTime;
    }
    
    const time = this.elapsedTime;
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));
```

**Giải thích:**
- `updateDisplay()` - Cập nhật hiển thị thời gian
- `if (this.isRunning)` - Chỉ tính lại elapsedTime khi đang chạy
- `const time = this.elapsedTime` - Lấy thời gian đã trôi (ms)
- `const milliseconds = Math.floor((time % 1000) / 10)` - Tính mili giây:
  - `time % 1000` - Lấy phần dư khi chia cho 1000 (0-999ms)
  - `/ 10` - Chia 10 để có 2 chữ số (0-99)
  - `Math.floor()` - Làm tròn xuống
- `const seconds = Math.floor((time / 1000) % 60)` - Tính giây (0-59)
- `const minutes = Math.floor((time / (1000 * 60)) % 60)` - Tính phút (0-59)
- `const hours = Math.floor(time / (1000 * 60 * 60))` - Tính giờ

---

## 7. Update Display - DOM Manipulation

```javascript
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const millisecondsEl = document.getElementById('milliseconds');
    
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    if (millisecondsEl) millisecondsEl.textContent = milliseconds.toString().padStart(2, '0');
}
```

**Giải thích:**
- Lấy các phần tử DOM theo ID
- `if (hoursEl)` - Kiểm tra phần tử có tồn tại không (defensive programming)
- `.textContent =` - Gán nội dung văn bản
- `.toString()` - Chuyển số thành string
- `.padStart(2, '0')` - Thêm '0' vào đầu nếu chưa đủ 2 ký tự (1 → '01')

---

## 8. Get Formatted Time Method (Định dạng thời gian)

```javascript
getFormattedTime(ms) {
    const milliseconds = Math.floor((ms % 1000) / 10);
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor(ms / (1000 * 60 * 60));

    if (hours > 0) {
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
}
```

**Giải thích:**
- `getFormattedTime(ms)` - Chuyển milliseconds thành string định dạng
- Tính toán tương tự updateDisplay()
- `if (hours > 0)` - Nếu có giờ, hiển thị format: HH:MM:SS.MS
- Nếu không có giờ: MM:SS.MS (gọn hơn)
- Template literals `` `${...}` `` - Nối chuỗi dễ đọc
- Kết quả: "01:23:45.67" hoặc "23:45.67"

---

## 9. Initialize Stopwatch & DOM Elements

```javascript
// Initialize stopwatch
const stopwatch = new Stopwatch();

// DOM elements
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const exportBtn = document.getElementById('exportBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const themeToggle = document.getElementById('themeToggle');

// Check if all elements exist
if (!startBtn || !pauseBtn || !resetBtn || !lapBtn || !exportBtn || !clearHistoryBtn || !themeToggle) {
    console.error('Some required DOM elements are missing!');
}
```

**Giải thích:**
- `const stopwatch = new Stopwatch()` - Tạo instance của class Stopwatch
- Lấy tất cả các nút điều khiển từ DOM bằng `getElementById()`
- Kiểm tra tất cả phần tử có tồn tại không
- `console.error()` - In lỗi ra console nếu thiếu phần tử (debugging)

---

## 10. Start Button Event Listener

```javascript
startBtn.addEventListener('click', () => {
    stopwatch.start();
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    lapBtn.disabled = false;
});
```

**Giải thích:**
- `addEventListener('click', ...)` - Lắng nghe sự kiện click
- Arrow function `() => {...}` - Hàm callback khi click
- `stopwatch.start()` - Gọi phương thức start của stopwatch
- `startBtn.disabled = true` - Vô hiệu hóa nút Start (không thể bấm lại)
- `pauseBtn.disabled = false` - Kích hoạt nút Pause
- `lapBtn.disabled = false` - Kích hoạt nút Lap

---

## 11. Pause Button Event Listener

```javascript
pauseBtn.addEventListener('click', () => {
    stopwatch.pause();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
});
```

**Giải thích:**
- Lắng nghe click vào nút Pause
- `stopwatch.pause()` - Gọi phương thức pause
- `startBtn.disabled = false` - Kích hoạt lại nút Start (để tiếp tục)
- `pauseBtn.disabled = true` - Vô hiệu hóa nút Pause

---

## 12. Reset Button Event Listener

```javascript
resetBtn.addEventListener('click', () => {
    stopwatch.reset();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    lapBtn.disabled = true;
});
```

**Giải thích:**
- Lắng nghe click vào nút Reset
- `stopwatch.reset()` - Gọi phương thức reset
- Kích hoạt lại nút Start
- Vô hiệu hóa nút Pause và Lap

---

## 13. Lap & Export Button Event Listeners

```javascript
lapBtn.addEventListener('click', () => {
    stopwatch.lap();
});

exportBtn.addEventListener('click', () => {
    exportData();
});
```

**Giải thích:**
- `lapBtn` - Gọi `stopwatch.lap()` khi click
- `exportBtn` - Gọi hàm `exportData()` (sẽ giải thích sau)

---

## 14. Clear History Button Event Listener

```javascript
clearHistoryBtn.addEventListener('click', () => {
    if (stopwatch.laps.length === 0) {
        alert('Không có lịch sử để xóa!');
        return;
    }
    
    if (confirm('Bạn có chắc muốn xóa toàn bộ lịch sử?')) {
        stopwatch.laps = [];
        stopwatch.lastLapTime = 0;
        updateLapsList();
        updateStatistics();
    }
});
```

**Giải thích:**
- Kiểm tra `stopwatch.laps.length === 0` - Nếu không có lap nào
- `alert()` - Hiển thị cảnh báo
- `return` - Thoát hàm sớm
- `confirm()` - Hộp thoại xác nhận, trả về true/false
- Nếu xác nhận: xóa sạch mảng laps, reset lastLapTime
- Cập nhật lại giao diện

---

## 15. Theme Toggle Event Listener

```javascript
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
```

**Giải thích:**
- `classList.toggle('dark-theme')` - Thêm/xóa class (toggle)
- `classList.contains('dark-theme')` - Kiểm tra có class không
- Toán tử ternary `? :` - If ngắn gọn: nếu có dark-theme → 'dark', không → 'light'
- `localStorage.setItem('theme', theme)` - Lưu theme vào localStorage (persistent)

---

## 16. Update Laps List Function - Part 1

```javascript
function updateLapsList() {
    const lapsList = document.getElementById('lapsList');
    
    if (stopwatch.laps.length === 0) {
        lapsList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Chưa có vòng nào được ghi lại</p>';
        return;
    }

    // Find fastest and slowest lap
    let fastestIndex = -1;
    let slowestIndex = -1;
    let minTime = Infinity;
    let maxTime = -Infinity;

    stopwatch.laps.forEach((lap, index) => {
        if (lap.lap < minTime) {
            minTime = lap.lap;
            fastestIndex = index;
        }
        if (lap.lap > maxTime) {
            maxTime = lap.lap;
            slowestIndex = index;
        }
    });
```

**Giải thích:**
- `updateLapsList()` - Hàm cập nhật danh sách vòng
- Lấy phần tử `lapsList` từ DOM
- Nếu không có lap: hiển thị thông báo inline style
- Tìm vòng nhanh nhất và chậm nhất:
  - `Infinity` - Vô cực (giá trị lớn nhất)
  - `-Infinity` - Âm vô cực (giá trị nhỏ nhất)
  - `forEach((lap, index) => {...})` - Duyệt qua từng lap với index
  - So sánh và lưu index của lap nhanh/chậm nhất

---

## 17. Update Laps List Function - Part 2

```javascript
    lapsList.innerHTML = stopwatch.laps.map((lap, index) => {
        const reversedIndex = stopwatch.laps.length - index;
        const actualIndex = stopwatch.laps.length - 1 - index;
        
        let className = 'lap-item';
        if (actualIndex === fastestIndex && stopwatch.laps.length > 1) className += ' fastest';
        if (actualIndex === slowestIndex && stopwatch.laps.length > 1) className += ' slowest';

        let diffHtml = '';
        if (actualIndex > 0) {
            const prevLap = stopwatch.laps[actualIndex - 1];
            const diff = lap.lap - prevLap.lap;
            const diffClass = diff < 0 ? 'faster' : 'slower';
            const diffSign = diff < 0 ? '-' : '+';
            diffHtml = `<span class="lap-diff ${diffClass}">${diffSign}${stopwatch.getFormattedTime(Math.abs(diff))}</span>`;
        }
```

**Giải thích:**
- `stopwatch.laps.map((lap, index) => {...})` - Biến đổi mảng laps thành HTML
- `reversedIndex` - Số thứ tự hiển thị (đảo ngược, mới nhất lên đầu)
- `actualIndex` - Index thực trong mảng
- Xác định className:
  - Thêm 'fastest' nếu là vòng nhanh nhất (và có >1 vòng)
  - Thêm 'slowest' nếu là vòng chậm nhất
- Tính chênh lệch với vòng trước:
  - `if (actualIndex > 0)` - Không tính cho vòng đầu tiên
  - `const diff = lap.lap - prevLap.lap` - Chênh lệch thời gian
  - `diff < 0` - Nhanh hơn (âm), `diff > 0` - Chậm hơn (dương)
  - `Math.abs(diff)` - Giá trị tuyệt đối (bỏ dấu)

---

## 18. Update Laps List Function - Part 3

```javascript
        return `
            <div class="${className}">
                <span class="lap-number">Vòng ${reversedIndex}</span>
                <span class="lap-time">${stopwatch.getFormattedTime(lap.lap)}</span>
                ${diffHtml}
            </div>
        `;
    }).reverse().join('');
}
```

**Giải thích:**
- Template literal để tạo HTML cho mỗi lap
- `<div class="${className}">` - Class động (fastest/slowest)
- `Vòng ${reversedIndex}` - Số thứ tự vòng
- `${stopwatch.getFormattedTime(lap.lap)}` - Thời gian vòng đã format
- `${diffHtml}` - HTML chênh lệch (có thể rỗng)
- `.reverse()` - Đảo ngược mảng (vòng mới nhất lên đầu)
- `.join('')` - Nối các phần tử thành chuỗi HTML duy nhất

---

## 19. Update Statistics Function

```javascript
function updateStatistics() {
    const totalLapsEl = document.getElementById('totalLaps');
    const fastestLapEl = document.getElementById('fastestLap');
    const slowestLapEl = document.getElementById('slowestLap');
    const averageLapEl = document.getElementById('averageLap');

    if (stopwatch.laps.length === 0) {
        totalLapsEl.textContent = '0';
        fastestLapEl.textContent = '--:--:--';
        slowestLapEl.textContent = '--:--:--';
        averageLapEl.textContent = '--:--:--';
        return;
    }

    totalLapsEl.textContent = stopwatch.laps.length;

    const lapTimes = stopwatch.laps.map(lap => lap.lap);
    const fastest = Math.min(...lapTimes);
    const slowest = Math.max(...lapTimes);
    const average = lapTimes.reduce((a, b) => a + b, 0) / lapTimes.length;

    fastestLapEl.textContent = stopwatch.getFormattedTime(fastest);
    slowestLapEl.textContent = stopwatch.getFormattedTime(slowest);
    averageLapEl.textContent = stopwatch.getFormattedTime(average);
}
```

**Giải thích:**
- `updateStatistics()` - Cập nhật phần thống kê
- Lấy các phần tử DOM cho thống kê
- Nếu không có lap: hiển thị '0' và '--:--:--'
- `const lapTimes = stopwatch.laps.map(lap => lap.lap)` - Lấy mảng các thời gian lap
- `Math.min(...lapTimes)` - Tìm min (spread operator `...` để unpack mảng)
- `Math.max(...lapTimes)` - Tìm max
- `.reduce((a, b) => a + b, 0)` - Tính tổng (accumulator a, giá trị b, bắt đầu từ 0)
- `/ lapTimes.length` - Chia cho số lượng để có trung bình
- Hiển thị các giá trị đã format

---

## 20. Export Data Function - Part 1

```javascript
function exportData() {
    if (stopwatch.laps.length === 0) {
        alert('Không có dữ liệu để xuất!');
        return;
    }

    const data = {
        exportDate: new Date().toLocaleString('vi-VN'),
        totalTime: stopwatch.getFormattedTime(stopwatch.elapsedTime),
        laps: stopwatch.laps.map((lap, index) => ({
            lapNumber: index + 1,
            lapTime: stopwatch.getFormattedTime(lap.lap),
            totalTime: stopwatch.getFormattedTime(lap.total)
        })),
        statistics: {
            totalLaps: stopwatch.laps.length,
            fastest: stopwatch.getFormattedTime(Math.min(...stopwatch.laps.map(l => l.lap))),
            slowest: stopwatch.getFormattedTime(Math.max(...stopwatch.laps.map(l => l.lap))),
            average: stopwatch.getFormattedTime(stopwatch.laps.reduce((a, b) => a + b.lap, 0) / stopwatch.laps.length)
        }
    };
```

**Giải thích:**
- `exportData()` - Xuất dữ liệu ra file CSV
- Kiểm tra có dữ liệu không
- Tạo object `data` chứa tất cả thông tin:
  - `exportDate` - Ngày xuất, format theo locale Việt Nam
  - `new Date()` - Tạo object Date hiện tại
  - `.toLocaleString('vi-VN')` - Chuyển thành string theo định dạng VN
  - `totalTime` - Tổng thời gian đã format
  - `laps` - Mảng các vòng đã format
  - `statistics` - Thống kê tổng hợp

---

## 21. Export Data Function - Part 2 (Create CSV)

```javascript
    // Create CSV format
    let csv = 'Dữ liệu Stopwatch\n';
    csv += `Ngày xuất: ${data.exportDate}\n`;
    csv += `Tổng thời gian: ${data.totalTime}\n\n`;
    csv += 'Số vòng,Thời gian vòng,Tổng thời gian\n';
    data.laps.forEach(lap => {
        csv += `${lap.lapNumber},${lap.lapTime},${lap.totalTime}\n`;
    });
    csv += '\nThống kê\n';
    csv += `Tổng số vòng,${data.statistics.totalLaps}\n`;
    csv += `Vòng nhanh nhất,${data.statistics.fastest}\n`;
    csv += `Vòng chậm nhất,${data.statistics.slowest}\n`;
    csv += `Trung bình,${data.statistics.average}\n`;
```

**Giải thích:**
- Tạo chuỗi CSV (Comma-Separated Values)
- `\n` - Ký tự xuống dòng
- Header: Tiêu đề, ngày, tổng thời gian
- Header cột: 'Số vòng,Thời gian vòng,Tổng thời gian'
- `forEach()` - Duyệt qua từng lap và thêm vào CSV
- Phần thống kê: Thêm các giá trị thống kê
- Mỗi dòng phân tách bằng dấu phảy `,`

---

## 22. Export Data Function - Part 3 (Download)

```javascript
    // Download CSV
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `stopwatch_${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up - revoke object URL to prevent memory leak
    setTimeout(() => URL.revokeObjectURL(url), 100);
}
```

**Giải thích:**
- `new Blob([...], {...})` - Tạo Blob (Binary Large Object) từ text
- `\uFEFF` - BOM (Byte Order Mark) cho UTF-8, giúp Excel đọc đúng tiếng Việt
- `type: 'text/csv;charset=utf-8;'` - MIME type cho CSV
- `document.createElement('a')` - Tạo thẻ `<a>` ảo
- `URL.createObjectURL(blob)` - Tạo URL tạm thời cho blob
- `setAttribute('href', url)` - Gán URL cho link
- `setAttribute('download', ...)` - Tên file tải về (có timestamp)
- `style.visibility = 'hidden'` - Ẩn link
- `appendChild(link)` - Thêm vào DOM
- `link.click()` - Tự động click để tải file
- `removeChild(link)` - Xóa link sau khi tải
- `setTimeout(() => URL.revokeObjectURL(url), 100)` - Giải phóng bộ nhớ sau 100ms

---

## 23. Load Theme from LocalStorage

```javascript
// Load theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
```

**Giải thích:**
- `document.addEventListener('DOMContentLoaded', ...)` - Lắng nghe sự kiện DOM đã load xong
- Chạy sau khi HTML được parse hoàn toàn
- `localStorage.getItem('theme')` - Lấy giá trị theme đã lưu
- Nếu là 'dark': thêm class 'dark-theme' vào body
- Đảm bảo theme được khôi phục khi reload trang

---

## 24. Keyboard Shortcuts - Part 1

```javascript
// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Space - Start/Pause
    if (e.code === 'Space') {
        e.preventDefault();
        if (stopwatch.isRunning && !pauseBtn.disabled) {
            pauseBtn.click();
        } else if (!stopwatch.isRunning && !startBtn.disabled) {
            startBtn.click();
        }
    }
```

**Giải thích:**
- `addEventListener('keydown', (e) => {...})` - Lắng nghe sự kiện nhấn phím
- `e` - Event object chứa thông tin về sự kiện
- `e.code === 'Space'` - Kiểm tra phím Space
- `e.preventDefault()` - Ngăn hành động mặc định (tránh scroll trang)
- Logic Space:
  - Nếu đang chạy và pauseBtn enabled → click Pause
  - Nếu không chạy và startBtn enabled → click Start
- Toggle giữa Start/Pause bằng Space

---

## 25. Keyboard Shortcuts - Part 2

```javascript
    // R - Reset
    if (e.code === 'KeyR' && !stopwatch.isRunning && !resetBtn.disabled) {
        resetBtn.click();
    }
    // L - Lap
    if (e.code === 'KeyL' && stopwatch.isRunning && !lapBtn.disabled) {
        lapBtn.click();
    }
});
```

**Giải thích:**
- `e.code === 'KeyR'` - Phím R
- Điều kiện: không đang chạy và resetBtn enabled
- Tự động click resetBtn
- `e.code === 'KeyL'` - Phím L
- Điều kiện: đang chạy và lapBtn enabled
- Tự động click lapBtn
- **Keyboard shortcuts:**
  - **Space** - Start/Pause
  - **R** - Reset (khi dừng)
  - **L** - Lap (khi đang chạy)

---

## Tổng Kết

File JavaScript này tạo ra một ứng dụng stopwatch hoàn chỉnh với:

### Các Tính Năng Chính:
1. **Stopwatch Class** - OOP với các phương thức start, pause, reset, lap
2. **Thời gian chính xác** - Sử dụng `Date.now()` và `setInterval(10ms)`
3. **Ghi vòng (Laps)** - Lưu các vòng với thời gian lap và tổng
4. **Thống kê** - Tính vòng nhanh/chậm nhất, trung bình
5. **Highlight** - Đánh dấu vòng nhanh/chậm nhất
6. **Chênh lệch** - Hiển thị chênh lệch giữa các vòng
7. **Export CSV** - Xuất dữ liệu ra file CSV với BOM UTF-8
8. **Theme Toggle** - Chuyển đổi dark/light mode, lưu vào localStorage
9. **Clear History** - Xóa lịch sử với xác nhận
10. **Keyboard Shortcuts** - Space (Start/Pause), R (Reset), L (Lap)
11. **Defensive Programming** - Kiểm tra phần tử tồn tại, optional chaining
12. **Memory Management** - Revoke object URLs để tránh rò rỉ bộ nhớ

### Kỹ Thuật Sử dụng:
- ES6+ (Classes, Arrow Functions, Template Literals)
- DOM Manipulation
- Event Handling
- LocalStorage API
- Blob & File Download
- Array Methods (map, reduce, forEach, filter)
- Spread Operator
- Optional Chaining
