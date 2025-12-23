# CHƯƠNG 2: PHÂN TÍCH YÊU CẦU HỆ THỐNG

## 2.1. YÊU CẦU CHỨC NĂNG

### 2.1.1. Chức năng đồng hồ bấm giờ cơ bản

**UC-01: Bắt đầu đếm thời gian**

*Mô tả:* Người dùng khởi động đồng hồ để bắt đầu đo thời gian

*Actors:* Người dùng

*Preconditions:*
- Ứng dụng đã được tải và hiển thị
- Đồng hồ đang ở trạng thái dừng hoặc đã được reset

*Main Flow:*
1. Người dùng nhấn nút "Bắt đầu"
2. Hệ thống ghi lại thời điểm hiện tại
3. Hệ thống bắt đầu cập nhật hiển thị thời gian mỗi 10ms
4. Nút "Bắt đầu" chuyển sang trạng thái disabled
5. Nút "Tạm dừng" được kích hoạt
6. Nút "Ghi vòng" được kích hoạt

*Postconditions:*
- Đồng hồ đang chạy
- Thời gian được hiển thị và cập nhật liên tục

*Alternative Flows:*
- A1: Nếu đang ở trạng thái tạm dừng, tiếp tục từ thời điểm đã dừng

**UC-02: Tạm dừng đồng hồ**

*Mô tả:* Người dùng tạm dừng đồng hồ để xem thời gian hiện tại

*Actors:* Người dùng

*Preconditions:*
- Đồng hồ đang chạy

*Main Flow:*
1. Người dùng nhấn nút "Tạm dừng"
2. Hệ thống dừng timer
3. Hệ thống lưu thời gian hiện tại
4. Nút "Tạm dừng" chuyển sang disabled
5. Nút "Bắt đầu" được kích hoạt lại
6. Thời gian hiển thị được giữ nguyên

*Postconditions:*
- Đồng hồ dừng lại
- Thời gian được lưu để có thể tiếp tục

*Alternative Flows:*
- Không có

**UC-03: Đặt lại đồng hồ**

*Mô tả:* Người dùng reset đồng hồ về trạng thái ban đầu

*Actors:* Người dùng

*Preconditions:*
- Ứng dụng đang hoạt động
- Đồng hồ không đang chạy

*Main Flow:*
1. Người dùng nhấn nút "Đặt lại"
2. Hệ thống reset thời gian về 00:00:00.00
3. Hệ thống xóa tất cả dữ liệu vòng
4. Hệ thống reset thống kê
5. Tất cả nút trở về trạng thái ban đầu

*Postconditions:*
- Đồng hồ về trạng thái 0
- Tất cả dữ liệu tạm thời bị xóa
- Sẵn sàng cho lần đo mới

*Alternative Flows:*
- A1: Nếu đồng hồ đang chạy, nút "Đặt lại" không khả dụng

### 2.1.2. Chức năng ghi thời gian vòng (Lap Time)

**UC-04: Ghi lại thời gian vòng**

*Mô tả:* Người dùng ghi lại thời gian của một vòng trong khi đồng hồ vẫn tiếp tục chạy

*Actors:* Người dùng

*Preconditions:*
- Đồng hồ đang chạy

*Main Flow:*
1. Người dùng nhấn nút "Ghi vòng"
2. Hệ thống lấy thời gian hiện tại
3. Hệ thống tính thời gian của vòng mới (current_time - last_lap_time)
4. Hệ thống thêm vòng mới vào danh sách
5. Hệ thống hiển thị vòng mới ở đầu danh sách
6. Hệ thống cập nhật thống kê
7. Đồng hồ tiếp tục chạy không bị gián đoạn

*Postconditions:*
- Vòng mới được thêm vào danh sách
- Thống kê được cập nhật
- Đồng hồ vẫn tiếp tục chạy

*Alternative Flows:*
- Không có

**UC-05: Xem danh sách vòng**

*Mô tả:* Người dùng xem lại các vòng đã ghi

*Actors:* Người dùng

*Preconditions:*
- Có ít nhất một vòng đã được ghi

*Main Flow:*
1. Hệ thống hiển thị danh sách vòng theo thứ tự mới nhất trước
2. Mỗi vòng hiển thị:
   - Số thứ tự vòng
   - Thời gian của vòng đó
   - Chênh lệch so với vòng trước (nếu có)
3. Vòng nhanh nhất được highlight màu xanh
4. Vòng chậm nhất được highlight màu đỏ

*Postconditions:*
- Danh sách vòng được hiển thị đầy đủ

*Alternative Flows:*
- A1: Nếu chưa có vòng nào, hiển thị thông báo "Chưa có vòng nào được ghi lại"

### 2.1.3. Chức năng thống kê

**UC-06: Xem thống kê**

*Mô tả:* Hệ thống tự động tính toán và hiển thị thống kê

*Actors:* Hệ thống (tự động)

*Preconditions:*
- Có ít nhất một vòng đã được ghi

*Main Flow:*
1. Hệ thống tính tổng số vòng
2. Hệ thống tìm vòng nhanh nhất
3. Hệ thống tìm vòng chậm nhất
4. Hệ thống tính thời gian trung bình
5. Hệ thống cập nhật hiển thị các chỉ số

*Postconditions:*
- Thống kê được hiển thị chính xác

*Alternative Flows:*
- A1: Nếu chưa có vòng nào, hiển thị "--:--:--" cho các chỉ số

**Các chỉ số thống kê:**

1. **Tổng số vòng:**
   - Đếm số vòng đã ghi
   - Hiển thị dưới dạng số nguyên

2. **Vòng nhanh nhất:**
   - Tìm vòng có thời gian ngắn nhất
   - Hiển thị thời gian theo format MM:SS.ms

3. **Vòng chậm nhất:**
   - Tìm vòng có thời gian dài nhất
   - Hiển thị thời gian theo format MM:SS.ms

4. **Thời gian trung bình:**
   - Tính tổng thời gian tất cả vòng / số vòng
   - Hiển thị thời gian theo format MM:SS.ms

### 2.1.4. Chức năng xuất dữ liệu

**UC-07: Xuất dữ liệu ra file CSV**

*Mô tả:* Người dùng xuất tất cả dữ liệu thời gian ra file CSV

*Actors:* Người dùng

*Preconditions:*
- Có ít nhất một vòng đã được ghi

*Main Flow:*
1. Người dùng nhấn nút "Xuất dữ liệu"
2. Hệ thống thu thập tất cả dữ liệu:
   - Ngày giờ xuất
   - Tổng thời gian
   - Danh sách tất cả vòng
   - Thống kê
3. Hệ thống chuyển đổi dữ liệu sang format CSV
4. Hệ thống tạo file CSV với encoding UTF-8 BOM
5. Hệ thống trigger download file
6. File được lưu với tên: stopwatch_[timestamp].csv

*Postconditions:*
- File CSV được tải về máy người dùng
- Dữ liệu được giữ nguyên trong ứng dụng

*Alternative Flows:*
- A1: Nếu chưa có dữ liệu, hiển thị thông báo "Không có dữ liệu để xuất"

**Format file CSV:**
```
Dữ liệu Stopwatch
Ngày xuất: [date_time]
Tổng thời gian: [total_time]

Số vòng,Thời gian vòng,Tổng thời gian
1,[lap_time],[total_time]
2,[lap_time],[total_time]
...

Thống kê
Tổng số vòng,[value]
Vòng nhanh nhất,[value]
Vòng chậm nhất,[value]
Trung bình,[value]
```

### 2.1.5. Chức năng quản lý lịch sử

**UC-08: Xóa lịch sử**

*Mô tả:* Người dùng xóa toàn bộ lịch sử các vòng đã ghi

*Actors:* Người dùng

*Preconditions:*
- Có dữ liệu vòng trong hệ thống

*Main Flow:*
1. Người dùng nhấn nút "Xóa lịch sử"
2. Hệ thống hiển thị hộp thoại xác nhận
3. Người dùng xác nhận xóa
4. Hệ thống xóa tất cả vòng
5. Hệ thống reset thống kê
6. Hệ thống cập nhật hiển thị

*Postconditions:*
- Tất cả vòng đã bị xóa
- Thống kê về giá trị mặc định
- Đồng hồ vẫn giữ nguyên thời gian hiện tại (nếu đang chạy)

*Alternative Flows:*
- A1: Người dùng hủy bỏ - không có thay đổi nào

### 2.1.6. Chức năng giao diện

**UC-09: Chuyển đổi chế độ sáng/tối**

*Mô tả:* Người dùng thay đổi theme của ứng dụng

*Actors:* Người dùng

*Preconditions:*
- Ứng dụng đang hoạt động

*Main Flow:*
1. Người dùng nhấn nút "Đổi giao diện"
2. Hệ thống chuyển đổi giữa light theme và dark theme
3. Hệ thống áp dụng CSS variables tương ứng
4. Hệ thống lưu preference vào Local Storage
5. Giao diện cập nhật mượt mà với transition

*Postconditions:*
- Theme được thay đổi
- Preference được lưu lại
- Lần mở sau sẽ dùng theme đã chọn

*Alternative Flows:*
- Không có

**UC-10: Sử dụng phím tắt**

*Mô tả:* Người dùng sử dụng phím tắt để thao tác nhanh

*Actors:* Người dùng

*Preconditions:*
- Ứng dụng đang active (focused)

*Main Flow:*
1. Người dùng nhấn phím tắt
2. Hệ thống nhận diện phím
3. Hệ thống thực hiện hành động tương ứng

*Phím tắt:*
- `Space`: Bắt đầu/Tạm dừng
- `R`: Reset (chỉ khi đồng hồ đang dừng)
- `L`: Ghi vòng (chỉ khi đồng hồ đang chạy)

*Postconditions:*
- Hành động được thực hiện như khi nhấn nút

*Alternative Flows:*
- A1: Phím tắt không khả dụng trong điều kiện hiện tại - không có gì xảy ra

## 2.2. YÊU CẦU PHI CHỨC NĂNG

### 2.2.1. Yêu cầu về hiệu năng

**Performance Requirements:**

1. **Thời gian tải trang:**
   - Trang chủ phải tải hoàn toàn trong vòng 2 giây trên kết nối 3G
   - Tối ưu cho First Contentful Paint < 1 giây
   - Time to Interactive < 2 giây

2. **Độ chính xác thời gian:**
   - Độ phân giải: 10 milliseconds
   - Sai số cho phép: < 50ms trên 1 phút
   - Không có độ trễ khi hiển thị

3. **Hiệu suất runtime:**
   - CPU usage < 5% khi đồng hồ đang chạy
   - Memory usage < 50MB
   - Không có memory leaks
   - Smooth animation (60fps)

4. **Thời gian phản hồi:**
   - Click/Tap response: < 100ms
   - Button feedback: Immediate
   - Animation duration: 200-300ms

### 2.2.2. Yêu cầu về khả năng sử dụng

**Usability Requirements:**

1. **Học và nhớ:**
   - Người dùng mới có thể sử dụng ngay không cần hướng dẫn
   - Các nút phải rõ ràng về chức năng
   - Sử dụng icons phổ biến

2. **Hiệu quả:**
   - Thao tác chính chỉ cần 1 click
   - Không yêu cầu nhiều bước không cần thiết
   - Hỗ trợ phím tắt cho người dùng nâng cao

3. **Xử lý lỗi:**
   - Thông báo lỗi rõ ràng, dễ hiểu
   - Hướng dẫn khắc phục khi có lỗi
   - Xác nhận trước khi thực hiện hành động quan trọng

4. **Accessibility:**
   - Contrast ratio đạt chuẩn WCAG AA (4.5:1)
   - Font size tối thiểu 14px cho text thường
   - Hỗ trợ keyboard navigation
   - Responsive touch targets (min 44x44px)

### 2.2.3. Yêu cầu về tính tương thích

**Compatibility Requirements:**

1. **Trình duyệt:**
   - Chrome 90+
   - Firefox 88+
   - Safari 14+
   - Edge 90+
   - Opera 76+

2. **Hệ điều hành:**
   - Windows 10/11
   - macOS 10.15+
   - iOS 14+
   - Android 9+
   - Linux (các distro phổ biến)

3. **Thiết bị:**
   - Desktop: Độ phân giải từ 1024x768 trở lên
   - Tablet: iPad, Android tablets
   - Mobile: iPhone 6 trở lên, Android phones

4. **Responsive breakpoints:**
   - Mobile: 320px - 767px
   - Tablet: 768px - 1023px
   - Desktop: 1024px+

### 2.2.4. Yêu cầu về bảo mật và quyền riêng tư

**Security & Privacy Requirements:**

1. **Dữ liệu người dùng:**
   - Không thu thập thông tin cá nhân
   - Không sử dụng cookies tracking
   - Không gửi dữ liệu về server
   - Tất cả dữ liệu lưu local

2. **Local Storage:**
   - Chỉ lưu preferences và theme
   - Không lưu thông tin nhạy cảm
   - Có thể xóa bất cứ lúc nào

3. **XSS Protection:**
   - Sanitize user input (nếu có)
   - Không sử dụng eval() hoặc innerHTML với dữ liệu động
   - Content Security Policy

### 2.2.5. Yêu cầu về khả năng bảo trì

**Maintainability Requirements:**

1. **Code quality:**
   - Code phải clean, readable
   - Tuân thủ coding conventions
   - Comment đầy đủ cho logic phức tạp
   - Consistent naming conventions

2. **Modularity:**
   - Tách biệt concerns (HTML, CSS, JS)
   - Functions có single responsibility
   - Class-based architecture
   - Reusable components

3. **Documentation:**
   - README.md đầy đủ
   - Code comments cho các phần phức tạp
   - API documentation (nếu có)
   - User guide

4. **Version control:**
   - Sử dụng Git
   - Commit messages rõ ràng
   - Branching strategy hợp lý

### 2.2.6. Yêu cầu về khả năng mở rộng

**Scalability Requirements:**

1. **Feature expansion:**
   - Dễ dàng thêm tính năng mới
   - Không phá vỡ code hiện tại
   - Plugin-friendly architecture

2. **Data scaling:**
   - Xử lý được danh sách vòng lớn (>1000 items)
   - Pagination hoặc virtual scrolling cho danh sách dài
   - Efficient data structures

3. **Internationalization:**
   - Cấu trúc hỗ trợ đa ngôn ngữ
   - Separating text từ code
   - Date/time formatting theo locale

## 2.3. PHÂN TÍCH USE CASE CHI TIẾT

### 2.3.1. Biểu đồ Use Case tổng quan

```
┌─────────────────────────────────────────────────────┐
│                  Web Stopwatch System                │
│                                                      │
│  ┌──────────────────────────────────────────────┐  │
│  │                                              │  │
│  │  ○ Bắt đầu đồng hồ                          │  │
│  │  ○ Tạm dừng đồng hồ                         │  │
│  │  ○ Đặt lại đồng hồ                          │  │
│  │  ○ Ghi thời gian vòng                       │  │
│  │  ○ Xem danh sách vòng                       │  │
│  │  ○ Xem thống kê                             │  │
│  │  ○ Xuất dữ liệu                             │  │
│  │  ○ Xóa lịch sử                              │  │
│  │  ○ Đổi theme                                │  │
│  │  ○ Sử dụng phím tắt                         │  │
│  │                                              │  │
│  └──────────────────────────────────────────────┘  │
│                                                      │
│                    [Người dùng]                      │
└─────────────────────────────────────────────────────┘
```

### 2.3.2. Luồng xử lý chính (Main Flow)

**Scenario 1: Đo thời gian một hoạt động đơn giản**

```
1. Người dùng mở ứng dụng
2. Đồng hồ hiển thị 00:00:00.00
3. Người dùng nhấn "Bắt đầu"
4. Đồng hồ bắt đầu đếm
5. Khi hoàn thành hoạt động, người dùng nhấn "Tạm dừng"
6. Thời gian hiển thị: VD: 00:05:23.45
7. Người dùng nhấn "Đặt lại" để sẵn sàng cho lần đo tiếp theo
```

**Scenario 2: Đo thời gian chạy nhiều vòng**

```
1. Người dùng mở ứng dụng
2. Người dùng nhấn "Bắt đầu"
3. Sau vòng 1, người dùng nhấn "Ghi vòng"
   - Vòng 1: 00:01:23.45 được thêm vào danh sách
4. Sau vòng 2, người dùng nhấn "Ghi vòng"
   - Vòng 2: 00:01:20.12 được thêm vào danh sách
5. Sau vòng 3, người dùng nhấn "Ghi vòng"
   - Vòng 3: 00:01:25.78 được thêm vào danh sách
6. Người dùng nhấn "Tạm dừng"
7. Xem thống kê:
   - Tổng vòng: 3
   - Nhanh nhất: 00:01:20.12 (Vòng 2)
   - Chậm nhất: 00:01:25.78 (Vòng 3)
   - Trung bình: 00:01:23.12
8. Người dùng nhấn "Xuất dữ liệu" để lưu kết quả
```

### 2.3.3. Các trạng thái của hệ thống

**State Diagram:**

```
                    ┌─────────┐
                    │ Initial │
                    └────┬────┘
                         │
                    [Start]
                         │
                         ▼
                    ┌─────────┐
           ┌────────┤ Running ├────────┐
           │        └────┬────┘        │
        [Pause]          │          [Lap]
           │          [Pause]           │
           │             │              │
           ▼             ▼              │
      ┌────────┐    ┌────────┐         │
      │ Paused │    │Running │◄────────┘
      └────┬───┘    │with Lap│
           │        └───┬────┘
        [Start]         │
           │         [Pause]
           │            │
           └────┬───────┘
                │
             [Reset]
                │
                ▼
           ┌─────────┐
           │ Initial │
           └─────────┘
```

## 2.4. YÊU CẦU DỮ LIỆU

### 2.4.1. Cấu trúc dữ liệu

**1. Stopwatch Object:**
```javascript
{
  startTime: Number,        // Timestamp khi bắt đầu
  elapsedTime: Number,      // Thời gian đã trôi qua (ms)
  isRunning: Boolean,       // Trạng thái đang chạy
  timerInterval: Number,    // ID của interval
  laps: Array,             // Mảng các vòng
  lastLapTime: Number      // Thời gian của vòng cuối
}
```

**2. Lap Object:**
```javascript
{
  number: Number,          // Số thứ tự vòng
  lap: Number,            // Thời gian của vòng này (ms)
  total: Number           // Tổng thời gian tại thời điểm ghi vòng (ms)
}
```

**3. Statistics Object:**
```javascript
{
  totalLaps: Number,      // Tổng số vòng
  fastest: Number,        // Thời gian vòng nhanh nhất (ms)
  slowest: Number,        // Thời gian vòng chậm nhất (ms)
  average: Number         // Thời gian trung bình (ms)
}
```

**4. User Preferences (Local Storage):**
```javascript
{
  theme: String          // 'light' hoặc 'dark'
}
```

### 2.4.2. Lưu trữ dữ liệu

**Local Storage Structure:**
```javascript
localStorage = {
  'theme': 'dark' | 'light'
}
```

**Session Data (trong memory):**
- Tất cả dữ liệu stopwatch lưu trong biến JavaScript
- Không persist qua các session
- Khi reload trang, dữ liệu bị mất

**Export Data:**
- Format: CSV (UTF-8 with BOM)
- Encoding: UTF-8
- Line ending: CRLF (Windows-compatible)

## 2.5. RÀNG BUỘC HỆ THỐNG

### 2.5.1. Ràng buộc kỹ thuật

1. **Không sử dụng framework:**
   - Chỉ dùng Vanilla JavaScript
   - Không jQuery, React, Vue, etc.
   - Lý do: Học tập, hiệu suất, kích thước

2. **Không có backend:**
   - Hoàn toàn client-side
   - Không API calls
   - Không database server

3. **Browser APIs:**
   - Chỉ sử dụng APIs được hỗ trợ rộng rãi
   - Polyfill nếu cần thiết
   - Graceful degradation

### 2.5.2. Ràng buộc về giao diện

1. **Responsive design:**
   - Mobile-first approach
   - Breakpoints: 320px, 768px, 1024px
   - Touch-friendly (min 44x44px)

2. **Color scheme:**
   - Hỗ trợ cả light và dark mode
   - Contrast ratio đạt chuẩn
   - Màu sắc nhất quán

3. **Typography:**
   - Font size tối thiểu 14px
   - Line height tối thiểu 1.5
   - Readable font family

### 2.5.3. Ràng buộc về hiệu năng

1. **File size:**
   - HTML: < 10KB
   - CSS: < 20KB
   - JS: < 30KB
   - Total: < 60KB (uncompressed)

2. **Network:**
   - Không có external dependencies
   - Không load từ CDN
   - Tất cả resources local

3. **Runtime:**
   - Interval: 10ms (không thấp hơn)
   - DOM updates: Efficient, không redundant
   - Event listeners: Properly managed

## 2.6. KẾT LUẬN CHƯƠNG 2

Chương 2 đã phân tích chi tiết các yêu cầu của hệ thống Web Stopwatch, bao gồm:

**Yêu cầu chức năng:**
- 10 use cases chính được mô tả đầy đủ
- Luồng xử lý main và alternative flows
- Preconditions và postconditions rõ ràng

**Yêu cầu phi chức năng:**
- Hiệu năng: Thời gian tải, độ chính xác, runtime performance
- Khả năng sử dụng: Dễ học, hiệu quả, xử lý lỗi
- Tương thích: Đa trình duyệt, đa thiết bị, responsive
- Bảo mật: Privacy-first, no tracking
- Bảo trì: Clean code, documentation, version control
- Mở rộng: Scalable architecture, i18n ready

**Yêu cầu dữ liệu:**
- Cấu trúc dữ liệu rõ ràng
- Phương thức lưu trữ hợp lý
- Format xuất dữ liệu chuẩn

**Ràng buộc:**
- Kỹ thuật: Vanilla JS, no backend
- Giao diện: Responsive, accessible
- Hiệu năng: File size, network, runtime

Chương tiếp theo sẽ trình bày thiết kế hệ thống dựa trên các yêu cầu đã phân tích.
