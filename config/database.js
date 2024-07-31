const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo DB Connected ...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
