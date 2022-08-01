const { mkdir } = require("fs/promises");
const app = require("./app");
const db = require("./config/db");

const { PORT } = process.env;

db.then(() =>
  app.listen(PORT, async () => {
    await mkdir(process.env.UPLOAD_PATH, {
      recursive: true,
    });
    console.log("Database connection successful");
  })
).catch((error) => {
  console.log(error.message);
  process.exit(1);
});
