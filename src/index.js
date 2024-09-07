const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const characterRoutes = require('./routes/character');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api/characters', characterRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



