const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://sahil:Bharatbhai1%40@cluster0.bwhnp.mongodb.net/test";

const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("Connected to mongoDB successfully !!");
  });
};

module.exports = connectToMongo;
