import prisma from "./client";
const bcrypt = require("bcrypt");
import { faker } from '@faker-js/faker';

const saltRounds = 10;
const password = "Admin@123";

const internalUserSeedData = [
  {
    email: "johndoe@email.com",
    username: "John Doe",
  },
  {
    email: "janedoe@email.com",
    username: "Jane Doe",
  },
  {
    email: "heodoe@email.com",
    username: "Heo Doe",
  },
];

async function main() {
  internalUserSeedData.forEach(async (item) => {
    await prisma.internalUser.upsert({
      where: { email: item.email },
      update: {},
      create: {
        email: item.email,
        username: item.username,
        password: await bcrypt.hash(password, saltRounds),
      },
    });
  });

  seedUsers();
}

async function seedUsers() {
  const nbOfUsers = 1_000;
  const userPassword = "User@123";
  for (let i = 0; i < nbOfUsers; i++) {
    const email: string = faker.internet.email();
    await prisma.user.upsert({
      where: { email: email },
      update: {},
      create: {
        email: email,
        password: await bcrypt.hash(userPassword, saltRounds)
      }
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
