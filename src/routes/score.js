const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// Get all scores
router.get('/', async (req, res) => {
  const scores = await prisma.score.findMany({
    orderBy: {
      time: 'asc', // Süreye göre sıralama (küçükten büyüğe)
    },
  });
  res.json(scores);
});

// Create a score
router.post('/', async (req, res) => {
  const { name, time } = req.body;
  const newScore = await prisma.score.create({
    data: { name, time },
  });
  res.json(newScore);
});

module.exports = router;
