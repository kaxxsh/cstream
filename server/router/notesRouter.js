import express from "express";

// Setting up Routes for node.js app
import {
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
} from "../Controllers/notesController.js";
const router = express.Router();


// Setting up Routes for node.js app
// Application Logic using NodeJS and Mongoose

router.route("/").get(getAllNotes).post(createNote);
router.route("/:noteId").delete(deleteNote).patch(updateNote);

export default router;
