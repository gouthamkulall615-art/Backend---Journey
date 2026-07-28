const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side', app: 'natours' });
});

app.post('/', (req, res) => {
  res.send('you can post to this endpoint...');
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server running on 3000...');
});
