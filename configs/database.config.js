const { default: mongoose } = require("mongoose");
require('dotenv').config()
//Function to invoke connection to mongoDDb
mongoose.connect(process.env.MONGODB_URL);
const connectToMongoDb = () => {
  const connection = mongoose.connection;
  connection.on("error", (error) => {
    console.log("error connecting", error);
  });
  connection.once("open", () => {
    console.log("Connected to DB");
  });
};
module.exports = { connectToMongoDb };
