const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION);
    console.log(
      "database connected :",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log("error db", error.message);
  }
};

module.exports = connectDB;
