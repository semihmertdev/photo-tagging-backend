const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// Get all characters
router.get('/', async (req, res) => {
  const characters = await prisma.character.findMany();
  res.json(characters);
});

// Create a character
router.post('/', async (req, res) => {
  const { name, xPosition, yPosition } = req.body;
  const newCharacter = await prisma.character.create({
    data: { name, xPosition, yPosition },
  });
  res.json(newCharacter);
});

// Karakterin doğru yerde olup olmadığını doğrulama
router.post('/validate', async (req, res) => {
    const { characterName, xPosition, yPosition } = req.body;
  
    // Karakterin veritabanındaki doğru konumu alınır
    const character = await prisma.character.findFirst({
      where: { name: characterName },
    });
  
    // Basit bir doğrulama, koordinatlar çok yakınsa karakter doğru kabul edilir
    const threshold = 20; // 20 piksel hata payı
  
    if (
      character &&
      Math.abs(character.xPosition - xPosition) <= threshold &&
      Math.abs(character.yPosition - yPosition) <= threshold
    ) {
      return res.json({ success: true });
    } else {
      return res.json({ success: false });
    }
  });

module.exports = router;
