const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    if (process.env.NODE_ENV !== "test") {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Database connected");
    } else {
      await mongoose.connect(process.env.MONGO_URI_TEST);
      console.log("Connected testing database");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error when starting the database");
  }
};

module.exports = {
  dbConnection,
};