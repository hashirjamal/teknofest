const app = require("./app.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log("Server has been connected on http://localhost:3000");
});
mongoose
  .connect(process.env.CONN_STR, {
    useNewUrlParser: true,
  })
  .then((doc) => {
    console.log("Mongo Db has been successfully connected");
  })
  .catch((err) => {
    console.log("MondoDb is not connected", err);
  });

module.exports = app;
