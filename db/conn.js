const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/Knovator")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Fail to connect DB...");
  });
