const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const prisma = require("../utils/client.js");
dotenv.config();

const main = async () => {
  const { OWNER_EMAIL, OWNER_PASSWORD, OWNER_NAME } = process.env;
  const password = bcrypt.hashSync(OWNER_PASSWORD, 10);
  const owner = {
    name: OWNER_NAME,
    password,
    role: "ADMIN",
  };
  await prisma.user.upsert({
    where: { email: OWNER_EMAIL },
    update: owner,
    create: {
      ...owner,
      email: OWNER_EMAIL,
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
