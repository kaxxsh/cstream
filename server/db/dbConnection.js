import mongoose from "mongoose";
// Establishing MongoDB Connection along Node.js
// MongoDB - Basic Connection
const dbConnection = (URL) => {
  try {
    mongoose.connect(URL);
  } catch (error) {
    console.log("Error in connecting to DB", error);
  }
};

export default dbConnection;
