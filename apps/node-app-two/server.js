const express = require('express');

const PORT = 2222;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send(`App 2 port ${PORT}`);
})

app.listen(PORT, HOST);

console.log(`Express app listening at http://${HOST}:${PORT}`);
