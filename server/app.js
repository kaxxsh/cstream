// Folder Structure of Node.js App
// etting up an Express.js application
// A Complete Node.js APP
import Express from "express";
import dbConnection from "./db/dbConnection.js";
import {} from "dotenv/config.js";
import errorHandler from "./Middleware/error-handler.js";
import cors from "cors";
import notesRouter from "./router/notesRouter.js";


const app = Express();
app.use(cors());
app.use(Express.json());

// Creating API in Node.js
app.use("/api/v1/notes", notesRouter);
app.use(errorHandler);


// Schema implementation using Mongoose
// Establishing MongoDB Connection along Node.js
const connection = () => {
  try {
    dbConnection(process.env.MONGO_URL);
    app.listen(3001, (req, res) => {
      console.log("Server is running at port 3001");
    });
  } catch (error) {
    console.log("Error in connecting to DB", error);
  }
};

connection();
