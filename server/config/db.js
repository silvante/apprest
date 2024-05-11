const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected to ${con.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectdb;
