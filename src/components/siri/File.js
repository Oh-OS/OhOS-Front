const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;

const logFilePath = '/Users/haewon/Desktop/project/OhOS/OhOS-Front/src/components/siri/conversation_logs.txt';

app.use(cors());

function readLastLines(filePath, numLines, callback) {
    const stats = fs.statSync(filePath);
    const fileSize = stats.size;
    const readSize = Math.min(fileSize, numLines);
    const startPosition = fileSize - readSize > 0 ? fileSize - readSize : 0;

    const readStream = fs.createReadStream(filePath, { start: startPosition, end: fileSize });
    let data = '';

    readStream.on('data', (chunk) => {
        data += chunk;
    });

    readStream.on('end', () => {
        callback(null, data);
    });

    readStream.on('error', (err) => {
        callback(err);
    });
}

app.get('/api/logs', (req, res) => {
    readLastLines(logFilePath, 1024, (err, data) => {
        if (err) {
            console.error('Error reading the log file:', err);
            return res.status(500).send('파일 읽기 오류');
        }
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
