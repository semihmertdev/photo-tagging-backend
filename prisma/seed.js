const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.character.createMany({
    data: [
      { name: 'Waldo', xPosition: 300, yPosition: 200 },
      { name: 'Wizard', xPosition: 500, yPosition: 100 },
      { name: 'Wilma', xPosition: 150, yPosition: 350 },
    ],
  });
  console.log('Characters added to the database');
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
