const mongoose = require("mongoose");

const { DB_HOST } = process.env;

const db = mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose Connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from DB");
});

process.on("SIGINT", async () => {
  mongoose.connection.close(() => {
    console.log("Mongoose disconnected from DB");
    process.exit(1);
  });
});

module.exports = db;
