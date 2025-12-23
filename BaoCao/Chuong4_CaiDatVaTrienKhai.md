# CHƯƠNG 4: CÀI ĐẶT VÀ TRIỂN KHAI

## 4.1. MÔI TRƯỜNG PHÁT TRIỂN

### 4.1.1. Yêu cầu hệ thống

**Phần cứng tối thiểu:**
- CPU: Intel Core i3 hoặc tương đương
- RAM: 4GB
- Ổ cứng: 1GB dung lượng trống
- Màn hình: Độ phân giải tối thiểu 1024x768

**Phần cứng khuyến nghị:**
- CPU: Intel Core i5 hoặc cao hơn
- RAM: 8GB hoặc cao hơn
- SSD: 256GB
- Màn hình: Full HD (1920x1080) hoặc cao hơn

**Hệ điều hành:**
- Windows 10/11
- macOS 10.15 (Catalina) trở lên
- Ubuntu 20.04 LTS trở lên
- Hoặc bất kỳ OS nào có trình duyệt web hiện đại

### 4.1.2. Công cụ phát triển

**1. Code Editor: Visual Studio Code**

*Lý do chọn:*
- Miễn phí, mã nguồn mở
- Hỗ trợ tốt cho HTML, CSS, JavaScript
- Extensions phong phú
- IntelliSense mạnh mẽ
- Integrated terminal
- Git integration

*Cài đặt:*
```bash
# Download từ https://code.visualstudio.com/
# Hoặc sử dụng package manager

# Windows (Chocolatey)
choco install vscode

# macOS (Homebrew)
brew install --cask visual-studio-code

# Linux (Ubuntu/Debian)
sudo snap install code --classic
```

*Extensions cần thiết:*
1. **Live Server** (ritwickdey.LiveServer)
   - Auto-reload khi save file
   - Local development server
   
2. **Prettier** (esbenp.prettier-vscode)
   - Code formatter
   - Consistent code style
   
3. **ESLint** (dbaeumer.vscode-eslint)
   - JavaScript linting
   - Find và fix problems
   
4. **HTML CSS Support** (ecmel.vscode-html-css)
   - IntelliSense cho HTML/CSS
   - Class và ID suggestions

5. **JavaScript (ES6) code snippets** (xabikos.JavaScriptSnippets)
   - Code snippets
   - Faster coding

*Cấu hình VSCode (settings.json):*
```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.wordWrap": "on",
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 1000,
    "liveServer.settings.donotShowInfoMsg": true,
    "prettier.singleQuote": true,
    "prettier.semi": true
}
```

**2. Web Browsers**

*Browsers cần cài đặt:*
- Google Chrome (primary)
- Mozilla Firefox
- Microsoft Edge
- Safari (trên macOS)

*Developer Tools:*
- Chrome DevTools
- Firefox Developer Tools
- Responsive Design Mode
- Network monitoring
- Performance profiling

**3. Version Control: Git**

*Cài đặt Git:*
```bash
# Windows
choco install git

# macOS
brew install git

# Linux
sudo apt-get install git
```

*Cấu hình Git:*
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global core.editor "code --wait"
```

**4. Node.js (Optional - cho tools)**

*Cài đặt Node.js:*
```bash
# Download từ https://nodejs.org/
# Hoặc sử dụng nvm

# Windows
choco install nodejs

# macOS
brew install node

# Linux
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

*NPM packages hữu ích:*
```bash
# Live server alternative
npm install -g live-server

# HTTP server
npm install -g http-server
```

### 4.1.3. Cấu trúc thư mục dự án

```
web_stopwatch_long/
│
├── index.html              # File HTML chính
├── style.css               # File CSS styling
├── script.js               # File JavaScript logic
│
├── BaoCao/                 # Thư mục báo cáo
│   ├── Chuong1_TongQuan.md
│   ├── Chuong2_PhanTichYeuCau.md
│   ├── Chuong3_ThietKeHeThong.md
│   ├── Chuong4_CaiDatVaTrienKhai.md
│   ├── Chuong5_KiemThuVaDanhGia.md
│   └── Chuong6_KetLuan.md
│
├── assets/                 # Thư mục tài nguyên (nếu có)
│   ├── images/
│   └── icons/
│
├── docs/                   # Tài liệu
│   ├── USER_GUIDE.md
│   └── API_REFERENCE.md
│
├── tests/                  # Tests (nếu có)
│   └── manual_test_cases.md
│
├── README.md               # File README
├── .gitignore             # Git ignore file
└── LICENSE                # License file
```

## 4.2. CÀI ĐẶT MÃ NGUỒN

### 4.2.1. Cài đặt HTML Structure

**File: index.html**

*Phần Document Head:*
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch - Đồng hồ bấm giờ</title>
    <link rel="stylesheet" href="style.css">
</head>
```

**Giải thích:**
- `<!DOCTYPE html>`: Khai báo HTML5
- `lang="vi"`: Ngôn ngữ Tiếng Việt
- `charset="UTF-8"`: Encoding UTF-8 hỗ trợ tiếng Việt
- `viewport`: Responsive design cho mobile
- `link rel="stylesheet"`: Import CSS

*Phần Stopwatch Display:*
```html
<div class="stopwatch-display">
    <span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>.<span id="milliseconds">00</span>
</div>
```

**Giải thích:**
- Chia nhỏ thành các span riêng biệt để dễ cập nhật
- IDs để JavaScript có thể truy cập
- Format: HH:MM:SS.ms

*Phần Control Buttons:*
```html
<div class="controls">
    <button id="startBtn" class="btn btn-start">Bắt đầu</button>
    <button id="pauseBtn" class="btn btn-pause" disabled>Tạm dừng</button>
    <button id="resetBtn" class="btn btn-reset">Đặt lại</button>
    <button id="lapBtn" class="btn btn-lap" disabled>Ghi vòng</button>
</div>
```

**Giải thích:**
- Mỗi button có ID riêng
- Classes cho styling
- Buttons disabled ban đầu theo logic
- Semantic naming

*Phần Lap Times:*
```html
<div class="lap-times">
    <h2>Thời gian vòng</h2>
    <div id="lapsList"></div>
</div>
```

**Giải thích:**
- Container cho danh sách vòng
- `lapsList` sẽ được populate bởi JavaScript
- Semantic structure với h2

*Phần Statistics:*
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

**Giải thích:**
- Grid layout cho responsive
- Các span với IDs để JavaScript update
- Default values phù hợp
- Semantic HTML với labels

### 4.2.2. Cài đặt CSS Styling

**CSS Variables (Theme System):**
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
- CSS Custom Properties cho easy theming
- Light theme là default (`:root`)
- Dark theme override values với class
- Consistent naming convention

**Reset & Base Styles:**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, var(--bg-color) 0%, #e3f2fd 100%);
    color: var(--text-color);
    min-height: 100vh;
    padding: 20px;
    transition: all 0.3s ease;
}
```

**Giải thích:**
- Universal reset cho consistency
- `box-sizing: border-box` để padding/border không thay đổi kích thước
- Gradient background đẹp mắt
- Transition cho smooth theme switching

**Stopwatch Display Styling:**
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

.stopwatch-display:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
```

**Giải thích:**
- Monospace font cho số
- Large, bold, centered
- Hover effect cho interactivity
- Box shadow cho depth
- CSS variables cho theming

**Button Styling:**
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

.btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.btn:active:not(:disabled) {
    transform: translateY(0);
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-start {
    background: var(--primary-color);
    color: white;
}
```

**Giải thích:**
- Base `.btn` class cho common styles
- Modifier classes (`.btn-start`, etc.) cho specific styles
- Hover/Active states cho feedback
- Disabled state rõ ràng
- Transitions cho smooth animations

**Responsive Design:**
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
}
```

**Giải thích:**
- Mobile breakpoint tại 768px
- Font sizes nhỏ hơn cho mobile
- Buttons full-width trên mobile
- Single column layout cho stats
- Reduced padding

### 4.2.3. Cài đặt JavaScript Logic

**Stopwatch Class Implementation:**
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

    start() {
        if (!this.isRunning) {
            this.startTime = Date.now() - this.elapsedTime;
            this.timerInterval = setInterval(() => this.updateDisplay(), 10);
            this.isRunning = true;
        }
    }

    pause() {
        if (this.isRunning) {
            clearInterval(this.timerInterval);
            this.elapsedTime = Date.now() - this.startTime;
            this.isRunning = false;
        }
    }

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
    }
}
```

**Giải thích:**
- ES6 Class syntax
- Constructor khởi tạo state
- `start()`: Calculate startTime để có thể resume
- `pause()`: Lưu elapsedTime
- `reset()`: Clear tất cả, về initial state
- `this.isRunning`: Guard clause để tránh duplicate intervals

**Time Display Update:**
```javascript
updateDisplay() {
    this.elapsedTime = Date.now() - this.startTime;
    
    const time = this.elapsedTime;
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));

    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('milliseconds').textContent = milliseconds.toString().padStart(2, '0');
}
```

**Giải thích:**
- Tính elapsed time từ current time và start time
- Modulo (%) để extract từng đơn vị
- `Math.floor()` để làm tròn xuống
- `padStart(2, '0')` để format 2 digits (01, 02, etc.)
- Direct DOM manipulation với `textContent`

**Lap Recording:**
```javascript
lap() {
    if (this.isRunning) {
        const currentTime = this.elapsedTime;
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
- Chỉ ghi khi đang chạy
- `lapTime` = current - last lap
- Push object vào array
- Update `lastLapTime` cho lần sau
- Trigger UI updates

**Format Time Helper:**
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
- Reusable formatter
- Conditional format (với/không hours)
- Template literals cho clean string
- Consistent 2-digit padding

**Event Listeners Setup:**
```javascript
const stopwatch = new Stopwatch();

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');

startBtn.addEventListener('click', () => {
    stopwatch.start();
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    lapBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
    stopwatch.pause();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
});

resetBtn.addEventListener('click', () => {
    stopwatch.reset();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    lapBtn.disabled = true;
});

lapBtn.addEventListener('click', () => {
    stopwatch.lap();
});
```

**Giải thích:**
- Single stopwatch instance
- Cache DOM references
- Arrow functions cho handlers
- Update button states theo flow
- Clean separation of concerns

**Update Laps List:**
```javascript
function updateLapsList() {
    const lapsList = document.getElementById('lapsList');
    
    if (stopwatch.laps.length === 0) {
        lapsList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Chưa có vòng nào được ghi lại</p>';
        return;
    }

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

    lapsList.innerHTML = stopwatch.laps.map((lap, index) => {
        const reversedIndex = stopwatch.laps.length - index;
        const actualIndex = stopwatch.laps.length - 1 - index;
        
        let className = 'lap-item';
        if (actualIndex === fastestIndex && stopwatch.laps.length > 1) className += ' fastest';
        if (actualIndex === slowestIndex && stopwatch.laps.length > 1) className += ' slowest';

        let diffHtml = '';
        if (index < stopwatch.laps.length - 1) {
            const prevLap = stopwatch.laps[stopwatch.laps.length - index];
            const diff = lap.lap - prevLap.lap;
            const diffClass = diff < 0 ? 'faster' : 'slower';
            const diffSign = diff < 0 ? '-' : '+';
            diffHtml = `<span class="lap-diff ${diffClass}">${diffSign}${stopwatch.getFormattedTime(Math.abs(diff))}</span>`;
        }

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
- Empty state message
- Find fastest/slowest để highlight
- Map array thành HTML strings
- Reverse để newest first
- Calculate diff với vòng trước
- Conditional classes cho styling

**Statistics Calculation:**
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
- Cache DOM elements
- Handle empty state
- Spread operator với Math.min/max
- Reduce cho average
- Update all statistics at once

**Export Data Function:**
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

    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `stopwatch_${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
```

**Giải thích:**
- Validate có data
- Build data object
- Format thành CSV string
- `\uFEFF`: UTF-8 BOM để Excel đọc đúng tiếng Việt
- Blob API để tạo file
- Programmatic download với hidden link
- Cleanup sau khi download

**Theme Management:**
```javascript
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
```

**Giải thích:**
- Toggle dark-theme class
- Save preference to localStorage
- Load saved theme on page load
- DOMContentLoaded để đảm bảo DOM ready

**Keyboard Shortcuts:**
```javascript
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (stopwatch.isRunning) {
            pauseBtn.click();
        } else {
            startBtn.click();
        }
    }
    if (e.code === 'KeyR' && !stopwatch.isRunning) {
        resetBtn.click();
    }
    if (e.code === 'KeyL' && stopwatch.isRunning) {
        lapBtn.click();
    }
});
```

**Giải thích:**
- Global keydown listener
- Space: toggle start/pause
- R: reset (chỉ khi dừng)
- L: lap (chỉ khi chạy)
- preventDefault() cho Space để tránh scroll
- Reuse button click handlers

## 4.3. TESTING VÀ DEBUGGING

### 4.3.1. Unit Testing (Manual)

**Test Case 1: Start/Pause/Resume**
```
Input: Click Start -> Wait 5s -> Click Pause -> Click Start
Expected: Time continues from paused value
Actual: [Pass/Fail]
```

**Test Case 2: Reset**
```
Input: Start -> Wait -> Reset
Expected: Time = 00:00:00.00, buttons reset
Actual: [Pass/Fail]
```

**Test Case 3: Lap Recording**
```
Input: Start -> Wait 1s -> Lap -> Wait 1s -> Lap
Expected: 2 laps recorded, times shown
Actual: [Pass/Fail]
```

**Test Case 4: Statistics**
```
Input: Record 3 laps with different times
Expected: Fastest/slowest highlighted, average calculated
Actual: [Pass/Fail]
```

### 4.3.2. Browser Compatibility Testing

**Checklist:**
- [ ] Chrome 90+: All features work
- [ ] Firefox 88+: All features work
- [ ] Safari 14+: All features work
- [ ] Edge 90+: All features work
- [ ] Mobile Chrome: Responsive, touch works
- [ ] Mobile Safari: Responsive, touch works

### 4.3.3. Responsive Testing

**Breakpoints to test:**
- 320px (iPhone SE)
- 375px (iPhone X)
- 768px (iPad)
- 1024px (iPad Pro)
- 1920px (Desktop)

**Tools:**
- Browser DevTools Responsive Mode
- Real devices
- BrowserStack (optional)

### 4.3.4. Performance Testing

**Metrics to check:**
- Load time: < 2s
- Time to Interactive: < 2s
- CPU usage: < 5% when running
- Memory: No leaks after multiple start/stop cycles

**Tools:**
- Chrome DevTools Performance tab
- Lighthouse audit
- Memory profiler

## 4.4. TRIỂN KHAI (DEPLOYMENT)

### 4.4.1. Chuẩn bị Deploy

**1. Code Review:**
```bash
# Check for console.log statements
grep -r "console.log" *.js

# Check for TODO comments
grep -r "TODO" *

# Validate HTML
# Use W3C Validator: https://validator.w3.org/

# Validate CSS
# Use W3C CSS Validator: https://jigsaw.w3.org/css-validator/
```

**2. Minification (Optional):**
```bash
# Install terser for JS minification
npm install -g terser

# Minify JavaScript
terser script.js -o script.min.js -c -m

# Install cssnano for CSS minification
npm install -g cssnano-cli

# Minify CSS
cssnano style.css style.min.css
```

**3. Final Structure:**
```
web_stopwatch_long/
├── index.html
├── style.css (hoặc style.min.css)
├── script.js (hoặc script.min.js)
└── README.md
```

### 4.4.2. Deployment Options

**Option 1: GitHub Pages**

```bash
# 1. Khởi tạo Git repo
git init
git add .
git commit -m "Initial commit"

# 2. Create repo trên GitHub

# 3. Push to GitHub
git remote add origin https://github.com/username/web-stopwatch.git
git branch -M main
git push -u origin main

# 4. Enable GitHub Pages
# Vào Settings -> Pages -> Source: main branch -> Save

# 5. Access tại: https://username.github.io/web-stopwatch/
```

**Option 2: Netlify**

```bash
# 1. Create account tại netlify.com

# 2. Drag & drop folder vào Netlify Drop

# 3. Hoặc deploy từ Git:
# - Connect to Git repository
# - Configure build settings (không cần build commands)
# - Deploy

# 4. Custom domain (optional):
# - Domain settings -> Add custom domain
```

**Option 3: Vercel**

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
cd web_stopwatch_long
vercel

# 3. Follow prompts
# Project name: web-stopwatch
# Deploy to: production

# 4. Access tại provided URL
```

**Option 4: Local Server**

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000

# Access tại: http://localhost:8000
```

### 4.4.3. Post-Deployment Checklist

**Functionality:**
- [ ] Stopwatch starts and stops correctly
- [ ] Lap times are recorded
- [ ] Statistics calculate correctly
- [ ] Export function works
- [ ] Theme toggle works
- [ ] Keyboard shortcuts work
- [ ] Clear history works

**Performance:**
- [ ] Page loads in < 2 seconds
- [ ] No console errors
- [ ] No memory leaks
- [ ] Smooth animations

**Compatibility:**
- [ ] Works on Chrome
- [ ] Works on Firefox
- [ ] Works on Safari
- [ ] Works on Edge
- [ ] Works on mobile devices

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Buttons have proper states
- [ ] Text is readable
- [ ] Contrast ratios are good

## 4.5. KẾT LUẬN CHƯƠNG 4

Chương 4 đã trình bày chi tiết quá trình cài đặt và triển khai ứng dụng Web Stopwatch:

**Môi trường phát triển:**
- Yêu cầu hệ thống
- Công cụ và extensions
- Cấu trúc thư mục

**Cài đặt mã nguồn:**
- HTML structure với semantic tags
- CSS styling với variables và responsive design
- JavaScript logic với ES6 classes
- Event handling và DOM manipulation
- Helper functions và utilities

**Testing:**
- Manual unit tests
- Browser compatibility testing
- Responsive testing
- Performance testing

**Deployment:**
- Chuẩn bị code
- Multiple deployment options
- Post-deployment checklist

Chương tiếp theo sẽ trình bày về kiểm thử và đánh giá chi tiết hơn.
