import mongoose from "mongoose";


// Create a data base model
// Create a data base model

const Schema = mongoose.Schema(
  {
    notes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Notes = mongoose.model("Notes", Schema);

export default Notes;
