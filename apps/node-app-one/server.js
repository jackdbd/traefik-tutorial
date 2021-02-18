const express = require('express');

const PORT = 1111;
const HOST = 'localhost';

const app = express();

app.get('/', (req, res) => {
  res.send(`App 1 port ${PORT}`);
})

app.listen(PORT, HOST);

console.log(`Express app listening at http://${HOST}:${PORT}`);
