const express = require("express");
const mongoose = -require("mongoose");

const db = require("./db/conn.js");

const app = express();


app.use(express.json());

require("./routes/index.route.js")(app);

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`Srver is running at port ${port}`);
});
