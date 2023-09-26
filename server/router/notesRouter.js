import express from "express";
import verifyUser from "../Middleware/Verify-User.js";
import {
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
} from "../Controllers/notesController.js";
const router = express.Router();

router.route("/:id").get(verifyUser, getAllNotes).post(verifyUser, createNote);
router
  .route("/:id/:noteId")
  .delete(verifyUser, deleteNote)
  .patch(verifyUser, updateNote);

export default router;
