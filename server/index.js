import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hi, Welcome to Shop-Wise API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
