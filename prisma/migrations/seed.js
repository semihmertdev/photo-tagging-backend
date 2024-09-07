const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Score verilerini ekleyin
  await prisma.score.createMany({
    data: [
      { name: 'Semih', time: 120000 }, // 2 dakika
      { name: 'Ahmet', time: 90000 },  // 1.5 dakika
      { name: 'Lukas', time: 300000 }, // 5 dakika
    ],
  });
  console.log('Scores added to the database');
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
