const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const characterRoutes = require('./routes/character');
const scoreRoutes = require('./routes/score');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api/characters', characterRoutes);
app.use('/api/scores', scoreRoutes); // Bu satırın doğru olduğundan emin olun

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
