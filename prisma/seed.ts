import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const existingUser = await prisma.user.findUnique({
    where: { email: 'admin@admin.com' },
  });

  if (!existingUser) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash('admin', saltRounds);

    const admin = await prisma.user.create({
      data: {
        email: 'admin@admin.com',
        password: hashedPassword,
        name: 'Admin',
      },
    });

    console.log(`Creating admin user: ${admin.email}`);
  } else {
    console.log('Admin user already created');
  }
}

main()
  .catch((e) => {
    console.error('Error while executing seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
