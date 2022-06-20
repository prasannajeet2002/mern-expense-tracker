const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://babapadu:babapadu@cluster0.qkmr5.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log(`monboDb connected`.green.bold)
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB
