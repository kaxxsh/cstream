import Notes from "../models/NotesSchema.js";

const getAllNotes = async (req, res, next) => {
  try {
    const data = await Notes.find({ user: req.params.id });
    if (!data) throw new badRequest("No Notes Found");
    res.status(200).json({ success: true, message: "All Notes" });
  } catch (error) {
    next(error);
  }
};
const createNote = async (req, res, next) => {
  try {
    req.body.user = req.params.id;
    const data = await Notes.create(req.body);
    if (!data) throw new badRequest("Note not created");
    res.status(200).json({ success: true, message: "Note Created" });
  } catch (error) {
    next(error);
  }
};
const updateNote = async (req, res, next) => {
  try {
    const data = await Notes.findByIdAndUpdate(req.params.noteId, req.body, {
      new: true,
    });
    if (!data) throw new badRequest("Note not updated");
    res.status(200).json({ success: true, message: "Note Updated" });
  } catch (error) {
    next(error);
  }
};
const deleteNote = async (req, res, next) => {
  try {
    const data = await Notes.findByIdAndDelete(req.params.noteId);
    if (!data) throw new badRequest("Note not updated");
    res.status(200).json({ success: true, message: "Note Deleted" });
  } catch (error) {
    next(error);
  }
};

export { getAllNotes, createNote, deleteNote, updateNote };
