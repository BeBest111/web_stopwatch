# CHƯƠNG 3: THIẾT KẾ HỆ THỐNG

## 3.1. KIẾN TRÚC HỆ THỐNG

### 3.1.1. Tổng quan kiến trúc

Web Stopwatch được thiết kế theo mô hình Client-Side Application, toàn bộ logic xử lý và dữ liệu được quản lý tại phía client (trình duyệt). Kiến trúc này mang lại nhiều lợi ích như không cần server, tải nhanh, và hoạt động độc lập.

**Kiến trúc 3 tầng (3-tier Architecture):**

```
┌─────────────────────────────────────────────┐
│        PRESENTATION LAYER (View)            │
│  ┌─────────────────────────────────────┐   │
│  │  HTML - Cấu trúc giao diện          │   │
│  │  CSS - Styling & Layout             │   │
│  │  DOM Events - User Interactions     │   │
│  └─────────────────────────────────────┘   │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│       BUSINESS LOGIC LAYER (Controller)     │
│  ┌─────────────────────────────────────┐   │
│  │  Event Handlers                     │   │
│  │  UI Controllers                     │   │
│  │  Data Formatters                    │   │
│  │  Utility Functions                  │   │
│  └─────────────────────────────────────┘   │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│          DATA LAYER (Model)                 │
│  ┌─────────────────────────────────────┐   │
│  │  Stopwatch Class                    │   │
│  │  Data Structures                    │   │
│  │  Calculations                       │   │
│  │  Local Storage Manager              │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### 3.1.2. Các thành phần chính

**1. Presentation Layer (Tầng giao diện):**

*Mục đích:* Hiển thị thông tin và nhận input từ người dùng

*Công nghệ:*
- HTML5: Cấu trúc semantic
- CSS3: Styling, animations, responsive
- DOM API: Manipulation và updates

*Thành phần:*
- Stopwatch Display: Hiển thị thời gian
- Control Buttons: Các nút điều khiển
- Lap List: Danh sách vòng
- Statistics Panel: Bảng thống kê
- Feature Controls: Các chức năng bổ sung

**2. Business Logic Layer (Tầng logic):**

*Mục đích:* Xử lý logic nghiệp vụ, điều phối giữa View và Model

*Thành phần:*
- Event Handlers: Xử lý sự kiện người dùng
- UI Controllers: Cập nhật giao diện
- Data Formatters: Chuyển đổi format dữ liệu
- Export Manager: Xuất dữ liệu
- Theme Manager: Quản lý theme

**3. Data Layer (Tầng dữ liệu):**

*Mục đích:* Quản lý state và data của ứng dụng

*Thành phần:*
- Stopwatch Class: Core logic đồng hồ
- Lap Manager: Quản lý vòng
- Statistics Calculator: Tính toán thống kê
- Storage Manager: Lưu/đọc Local Storage

### 3.1.3. Luồng dữ liệu

```
User Action
    │
    ▼
Event Listener (Presentation)
    │
    ▼
Event Handler (Business Logic)
    │
    ├──► Update Model (Data)
    │         │
    │         ▼
    │    Calculate/Process
    │         │
    └────────┤
              ▼
    Update View (Presentation)
              │
              ▼
    Display to User
```

**Ví dụ: Người dùng nhấn "Ghi vòng"**
```
1. User clicks "Ghi vòng" button
2. Click event listener triggered
3. lapBtn event handler called
4. stopwatch.lap() method executed
5. Lap data added to laps array
6. Statistics recalculated
7. updateLapsList() called
8. updateStatistics() called
9. DOM updated with new data
10. User sees new lap and statistics
```

## 3.2. THIẾT KẾ DỮ LIỆU

### 3.2.1. Class Diagram

```
┌─────────────────────────────────┐
│        Stopwatch                │
├─────────────────────────────────┤
│ - startTime: Number             │
│ - elapsedTime: Number           │
│ - timerInterval: Number         │
│ - isRunning: Boolean            │
│ - laps: Array<Lap>              │
│ - lastLapTime: Number           │
├─────────────────────────────────┤
│ + start(): void                 │
│ + pause(): void                 │
│ + reset(): void                 │
│ + lap(): void                   │
│ + updateDisplay(): void         │
│ + getFormattedTime(ms): String  │
└─────────────────────────────────┘
           │
           │ contains
           │
           ▼
┌─────────────────────────────────┐
│           Lap                   │
├─────────────────────────────────┤
│ - number: Number                │
│ - lap: Number                   │
│ - total: Number                 │
└─────────────────────────────────┘
```

### 3.2.2. Data Flow Diagram

**Level 0: Context Diagram**

```
                    ┌──────────────┐
                    │              │
    User Input ────►│  Stopwatch   │────► Display Output
                    │  Application │
    User Actions───►│              │────► Exported Data
                    └──────────────┘
```

**Level 1: Major Processes**

```
┌────────────┐
│   User     │
└─────┬──────┘
      │
      │ Actions
      ▼
┌─────────────────────────────────────────────┐
│  1.0                                        │
│  Handle User Input                          │
│  (Event Listeners)                          │
└────┬────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────┐
│  2.0                                        │
│  Process Stopwatch Logic                    │
│  (Start/Pause/Reset/Lap)                    │
└────┬────────────────────────────────────────┘
     │
     ├──────────────┬──────────────┐
     ▼              ▼              ▼
┌─────────┐   ┌──────────┐   ┌──────────┐
│  3.0    │   │   4.0    │   │   5.0    │
│ Update  │   │Calculate │   │  Export  │
│ Display │   │   Stats  │   │   Data   │
└─────────┘   └──────────┘   └──────────┘
```

### 3.2.3. Entity-Relationship (Conceptual)

```
┌──────────────┐
│  Stopwatch   │
│   Session    │
└──────┬───────┘
       │
       │ has many
       │
       ▼
┌──────────────┐
│     Lap      │
│    Record    │
└──────┬───────┘
       │
       │ generates
       │
       ▼
┌──────────────┐
│  Statistics  │
└──────────────┘
```

### 3.2.4. State Machine Diagram

```
        ┌─────────────┐
        │   INITIAL   │
        │  00:00:00   │
        └──────┬──────┘
               │
          [start()]
               │
               ▼
    ┌──────────────────┐
    │     RUNNING      │◄─────────┐
    │   Counting...    │          │
    └──┬───────────┬───┘          │
       │           │              │
  [pause()]    [lap()]       [start()]
       │           │              │
       │           │              │
       ▼           ▼              │
  ┌────────┐  ┌────────┐     ┌───────┐
  │ PAUSED │  │RUNNING │     │ PAUSED│
  │ Frozen │  │+ Lap   │     │+ Laps │
  └───┬────┘  └────────┘     └───────┘
      │
  [reset()]
      │
      ▼
  ┌─────────────┐
  │   INITIAL   │
  └─────────────┘
```

## 3.3. THIẾT KẾ GIAO DIỆN

### 3.3.1. Wireframe Structure

**Desktop Layout (1024px+):**

```
┌────────────────────────────────────────────────┐
│           Đồng Hồ Bấm Giờ                      │
├────────────────────────────────────────────────┤
│                                                │
│        ┌──────────────────────────┐            │
│        │    00:00:00.00           │            │
│        │  (Large Display)         │            │
│        └──────────────────────────┘            │
│                                                │
│    [Bắt đầu] [Tạm dừng] [Đặt lại] [Ghi vòng]  │
│                                                │
├───────────────────┬────────────────────────────┤
│                   │                            │
│  Thời gian vòng   │      Thống kê              │
│                   │                            │
│  Vòng 3: 01:23    │  Tổng vòng: 3              │
│  Vòng 2: 01:20 ✓  │  Nhanh nhất: 01:20         │
│  Vòng 1: 01:25    │  Chậm nhất: 01:25          │
│                   │  Trung bình: 01:22         │
│                   │                            │
└───────────────────┴────────────────────────────┘
│                                                │
│  [Xuất dữ liệu] [Xóa lịch sử] [Đổi giao diện] │
│                                                │
└────────────────────────────────────────────────┘
```

**Mobile Layout (< 768px):**

```
┌────────────────────┐
│  Đồng Hồ Bấm Giờ   │
├────────────────────┤
│                    │
│  ┌──────────────┐  │
│  │  00:00:00.00 │  │
│  └──────────────┘  │
│                    │
│   [Bắt đầu]        │
│   [Tạm dừng]       │
│   [Đặt lại]        │
│   [Ghi vòng]       │
│                    │
├────────────────────┤
│  Thời gian vòng    │
│                    │
│  Vòng 3: 01:23     │
│  Vòng 2: 01:20 ✓   │
│  Vòng 1: 01:25     │
│                    │
├────────────────────┤
│  Thống kê          │
│  Tổng: 3           │
│  Min: 01:20        │
│  Max: 01:25        │
│  Avg: 01:22        │
├────────────────────┤
│  [Xuất] [Xóa]      │
│  [Theme]           │
└────────────────────┘
```

### 3.3.2. Color Scheme Design

**Light Theme:**
```css
Primary Color:    #4CAF50 (Green)
Secondary Color:  #2196F3 (Blue)
Danger Color:     #f44336 (Red)
Warning Color:    #ff9800 (Orange)
Background:       #f5f5f5 (Light Gray)
Card Background:  #ffffff (White)
Text Color:       #333333 (Dark Gray)
Border Color:     #e0e0e0 (Light Gray)
```

**Dark Theme:**
```css
Primary Color:    #66BB6A (Light Green)
Secondary Color:  #42A5F5 (Light Blue)
Danger Color:     #ef5350 (Light Red)
Warning Color:    #FFA726 (Light Orange)
Background:       #1a1a1a (Very Dark Gray)
Card Background:  #2d2d2d (Dark Gray)
Text Color:       #e0e0e0 (Light Gray)
Border Color:     #404040 (Medium Gray)
```

### 3.3.3. Typography Design

**Font Stack:**
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

**Display Font (Stopwatch):**
```css
font-family: 'Courier New', monospace;
font-size: 4rem (Desktop), 2.5rem (Mobile)
font-weight: bold
```

**Heading Sizes:**
```css
H1: 2.5rem (Title)
H2: 1.5rem (Section Headers)
```

**Body Text:**
```css
Base: 1rem (16px)
Small: 0.9rem
```

**Button Text:**
```css
Size: 1rem
Weight: bold
Transform: uppercase
Letter-spacing: 1px
```

### 3.3.4. Spacing System

**Padding/Margin Scale:**
```css
xs:  5px
sm:  10px
md:  15px
lg:  20px
xl:  30px
xxl: 40px
```

**Container Padding:**
```css
Desktop: 25px
Mobile:  15px
```

**Button Padding:**
```css
Desktop: 15px 30px
Mobile:  12px 25px
```

### 3.3.5. Component Design

**Button States:**
```
Normal:   Background color + shadow
Hover:    Transform translateY(-2px) + larger shadow
Active:   Transform translateY(0)
Disabled: Opacity 0.5 + cursor not-allowed
```

**Card Styling:**
```
Background: var(--card-bg)
Border-radius: 15px
Padding: 25px
Box-shadow: 0 4px 6px rgba(0,0,0,0.1)
Hover: translateY(-5px) + larger shadow
```

**Input/Display Styling:**
```
Stopwatch Display:
  - Large, centered
  - Monospace font
  - High contrast
  - Border with card background
  - Rounded corners
  - Hover effect
```

## 3.4. THIẾT KẾ CHỨC NĂNG

### 3.4.1. Stopwatch Core Logic

**Algorithm: Time Calculation**

```javascript
function calculateElapsedTime() {
    currentTime = Date.now()
    elapsedTime = currentTime - startTime
    return elapsedTime
}

function updateDisplay() {
    elapsedTime = calculateElapsedTime()
    
    milliseconds = floor((elapsedTime % 1000) / 10)
    seconds = floor((elapsedTime / 1000) % 60)
    minutes = floor((elapsedTime / (1000 * 60)) % 60)
    hours = floor(elapsedTime / (1000 * 60 * 60))
    
    displayTime(hours, minutes, seconds, milliseconds)
}
```

**Timing Mechanism:**
```javascript
// Sử dụng setInterval với interval 10ms
timerInterval = setInterval(() => {
    updateDisplay()
}, 10)

// Khi pause:
clearInterval(timerInterval)
elapsedTime = Date.now() - startTime

// Khi resume:
startTime = Date.now() - elapsedTime
timerInterval = setInterval(...)
```

### 3.4.2. Lap Time Management

**Algorithm: Record Lap**

```javascript
function recordLap() {
    currentTime = elapsedTime
    lapTime = currentTime - lastLapTime
    
    lap = {
        number: laps.length + 1,
        lap: lapTime,
        total: currentTime
    }
    
    laps.push(lap)
    lastLapTime = currentTime
    
    updateLapsList()
    updateStatistics()
}
```

**Display Laps:**
```javascript
function updateLapsList() {
    // Clear existing list
    lapsList.innerHTML = ''
    
    // Find fastest and slowest
    fastestIndex = findFastestLapIndex()
    slowestIndex = findSlowestLapIndex()
    
    // Reverse order (newest first)
    reversedLaps = laps.reverse()
    
    for each lap in reversedLaps:
        element = createLapElement(lap)
        
        if lap.index == fastestIndex:
            element.classList.add('fastest')
        if lap.index == slowestIndex:
            element.classList.add('slowest')
            
        lapsList.append(element)
}
```

### 3.4.3. Statistics Calculation

**Algorithm: Calculate Statistics**

```javascript
function calculateStatistics() {
    if laps.length == 0:
        return defaultStats
    
    lapTimes = laps.map(lap => lap.lap)
    
    stats = {
        totalLaps: laps.length,
        fastest: Math.min(...lapTimes),
        slowest: Math.max(...lapTimes),
        average: sum(lapTimes) / lapTimes.length
    }
    
    return stats
}
```

**Update Statistics Display:**
```javascript
function updateStatistics() {
    stats = calculateStatistics()
    
    document.getElementById('totalLaps').textContent = stats.totalLaps
    document.getElementById('fastestLap').textContent = formatTime(stats.fastest)
    document.getElementById('slowestLap').textContent = formatTime(stats.slowest)
    document.getElementById('averageLap').textContent = formatTime(stats.average)
}
```

### 3.4.4. Data Export

**Algorithm: Export to CSV**

```javascript
function exportData() {
    if laps.length == 0:
        alert('Không có dữ liệu để xuất')
        return
    
    // Build CSV content
    csv = buildCSVHeader()
    csv += buildCSVLaps(laps)
    csv += buildCSVStatistics(stats)
    
    // Create blob with UTF-8 BOM
    blob = new Blob(['\uFEFF' + csv], {
        type: 'text/csv;charset=utf-8;'
    })
    
    // Trigger download
    downloadFile(blob, 'stopwatch_' + timestamp + '.csv')
}
```

**CSV Format:**
```
Dữ liệu Stopwatch
Ngày xuất: DD/MM/YYYY HH:mm:ss
Tổng thời gian: HH:MM:SS.ms

Số vòng,Thời gian vòng,Tổng thời gian
1,00:01:23.45,00:01:23.45
2,00:01:20.12,00:02:43.57
3,00:01:25.78,00:04:09.35

Thống kê
Tổng số vòng,3
Vòng nhanh nhất,00:01:20.12
Vòng chậm nhất,00:01:25.78
Trung bình,00:01:23.12
```

### 3.4.5. Theme Management

**Algorithm: Toggle Theme**

```javascript
function toggleTheme() {
    body = document.body
    
    // Toggle class
    body.classList.toggle('dark-theme')
    
    // Get current theme
    currentTheme = body.classList.contains('dark-theme') 
        ? 'dark' 
        : 'light'
    
    // Save to localStorage
    localStorage.setItem('theme', currentTheme)
}

function loadTheme() {
    savedTheme = localStorage.getItem('theme')
    
    if savedTheme == 'dark':
        document.body.classList.add('dark-theme')
}
```

**CSS Variables Approach:**
```css
:root {
    --primary-color: #4CAF50;
    --bg-color: #f5f5f5;
    /* ... other variables */
}

.dark-theme {
    --primary-color: #66BB6A;
    --bg-color: #1a1a1a;
    /* ... override variables */
}

/* Usage in styles */
.element {
    background: var(--bg-color);
    color: var(--primary-color);
}
```

## 3.5. THIẾT KẾ TƯƠNG TÁC

### 3.5.1. Event Handling Design

**Event Listeners Setup:**

```javascript
// Button events
startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
resetBtn.addEventListener('click', handleReset)
lapBtn.addEventListener('click', handleLap)
exportBtn.addEventListener('click', handleExport)
clearHistoryBtn.addEventListener('click', handleClearHistory)
themeToggle.addEventListener('click', handleThemeToggle)

// Keyboard events
document.addEventListener('keydown', handleKeyboard)

// Initialization
document.addEventListener('DOMContentLoaded', initialize)
```

**Event Handler Pattern:**

```javascript
function handleStart() {
    // 1. Update model
    stopwatch.start()
    
    // 2. Update UI
    startBtn.disabled = true
    pauseBtn.disabled = false
    lapBtn.disabled = false
    
    // 3. Optional: Analytics, logging, etc.
}
```

### 3.5.2. Keyboard Shortcuts

**Shortcut Mapping:**

```javascript
const KEYBOARD_SHORTCUTS = {
    'Space': toggleStartPause,
    'KeyR': reset,
    'KeyL': lap
}

function handleKeyboard(event) {
    const action = KEYBOARD_SHORTCUTS[event.code]
    
    if (action && isActionAvailable(action)) {
        event.preventDefault()
        action()
    }
}
```

### 3.5.3. Animation & Transitions

**Button Interactions:**
```css
.btn {
    transition: all 0.3s ease;
}

.btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.btn:active:not(:disabled) {
    transform: translateY(0);
}
```

**Lap Item Animation:**
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

**Theme Transition:**
```css
body {
    transition: all 0.3s ease;
}
```

### 3.5.4. Responsive Behavior

**Breakpoint Strategy:**

```css
/* Mobile First */
.controls {
    flex-direction: column;
}

.btn {
    width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
    .controls {
        flex-direction: row;
    }
    
    .btn {
        width: auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .stopwatch-display {
        font-size: 4rem;
    }
}
```

## 3.6. THIẾT KẾ BẢO MẬT VÀ TỐI ƯU

### 3.6.1. Security Considerations

**1. XSS Prevention:**
```javascript
// Sử dụng textContent thay vì innerHTML
element.textContent = userInput

// Không sử dụng eval()
// Không sử dụng innerHTML với dữ liệu động
```

**2. Data Validation:**
```javascript
function validateLapData(lap) {
    if (typeof lap.number !== 'number' || lap.number < 1) {
        return false
    }
    if (typeof lap.lap !== 'number' || lap.lap < 0) {
        return false
    }
    return true
}
```

### 3.6.2. Performance Optimization

**1. DOM Updates:**
```javascript
// Batch DOM updates
function updateLapsList() {
    const fragment = document.createDocumentFragment()
    
    laps.forEach(lap => {
        const element = createLapElement(lap)
        fragment.appendChild(element)
    })
    
    lapsList.innerHTML = ''
    lapsList.appendChild(fragment)
}
```

**2. Debouncing/Throttling:**
```javascript
// Không cần debounce cho interval 10ms
// Đã tối ưu với setInterval cố định
```

**3. Memory Management:**
```javascript
function reset() {
    // Clear interval
    clearInterval(timerInterval)
    timerInterval = null
    
    // Clear arrays
    laps = []
    
    // Reset references
    startTime = 0
    elapsedTime = 0
}
```

**4. Code Minification:**
- Sử dụng tools như UglifyJS hoặc Terser
- Minify CSS với cssnano
- Minify HTML

**5. Lazy Loading:**
```javascript
// Load theme preference khi cần
function loadTheme() {
    const theme = localStorage.getItem('theme')
    if (theme) {
        document.body.classList.add(theme + '-theme')
    }
}

// Call only once on DOMContentLoaded
document.addEventListener('DOMContentLoaded', loadTheme)
```

### 3.6.3. Error Handling

**Try-Catch Blocks:**
```javascript
function exportData() {
    try {
        if (laps.length === 0) {
            throw new Error('Không có dữ liệu để xuất')
        }
        
        const csv = generateCSV(laps)
        downloadFile(csv)
        
    } catch (error) {
        console.error('Export error:', error)
        alert('Lỗi khi xuất dữ liệu: ' + error.message)
    }
}
```

**Graceful Degradation:**
```javascript
// Check localStorage support
function isLocalStorageAvailable() {
    try {
        const test = '__test__'
        localStorage.setItem(test, test)
        localStorage.removeItem(test)
        return true
    } catch (e) {
        return false
    }
}

// Use with fallback
if (isLocalStorageAvailable()) {
    // Use localStorage
} else {
    // Use fallback (session only)
}
```

## 3.7. KẾT LUẬN CHƯƠNG 3

Chương 3 đã trình bày chi tiết thiết kế hệ thống Web Stopwatch:

**Kiến trúc:**
- 3-tier architecture (Presentation, Business Logic, Data)
- Client-side application
- Component-based design

**Dữ liệu:**
- Class diagram với Stopwatch và Lap
- State machine diagram
- Data flow diagrams
- Clear data structures

**Giao diện:**
- Responsive wireframes
- Color scheme cho light/dark theme
- Typography system
- Component styling

**Chức năng:**
- Algorithms cho core features
- Event handling pattern
- Animation và transitions
- Keyboard shortcuts

**Tối ưu:**
- Performance optimization
- Security considerations
- Error handling
- Memory management

Chương tiếp theo sẽ mô tả quá trình cài đặt và triển khai hệ thống dựa trên thiết kế đã trình bày.
