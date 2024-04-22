import prisma from "./client";
const bcrypt = require("bcrypt");

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
