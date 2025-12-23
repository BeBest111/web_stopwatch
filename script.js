// Stopwatch class
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
            // Add visual feedback
            document.querySelector('.stopwatch-display')?.classList.add('running');
        }
    }

    pause() {
        if (this.isRunning) {
            clearInterval(this.timerInterval);
            this.elapsedTime = Date.now() - this.startTime;
            this.isRunning = false;
            // Remove visual feedback
            document.querySelector('.stopwatch-display')?.classList.remove('running');
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
        // Remove visual feedback
        document.querySelector('.stopwatch-display')?.classList.remove('running');
    }

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

        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        const millisecondsEl = document.getElementById('milliseconds');
        
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
        if (millisecondsEl) millisecondsEl.textContent = milliseconds.toString().padStart(2, '0');
    }

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
}

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

// Event listeners
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

exportBtn.addEventListener('click', () => {
    exportData();
});

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

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Update laps list
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

        return `
            <div class="${className}">
                <span class="lap-number">Vòng ${reversedIndex}</span>
                <span class="lap-time">${stopwatch.getFormattedTime(lap.lap)}</span>
                ${diffHtml}
            </div>
        `;
    }).reverse().join('');
}

// Update statistics
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

// Export data function
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

// Load theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

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
    // R - Reset
    if (e.code === 'KeyR' && !stopwatch.isRunning && !resetBtn.disabled) {
        resetBtn.click();
    }
    // L - Lap
    if (e.code === 'KeyL' && stopwatch.isRunning && !lapBtn.disabled) {
        lapBtn.click();
    }
});
