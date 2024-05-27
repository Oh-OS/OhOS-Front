const fs = require('fs');

const filePath = '/Users/haewon/Downloads/playsound-master/conversation_logs.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 3000;

// const filePath = '/Users/haewon/Downloads/playsound-master/conversation_logs.txt';

// app.get('/conversation_logs', (req, res) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }
//         res.send(data);
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });
