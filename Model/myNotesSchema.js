  //Importing Mongoose
  const mongoose = require("mongoose");

  //Connecting to MongoDB
mongoose
  .connect("mongodb://localhost:27017/IntellectNotes")
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));
  //DB connection successful!

//Creating Schema
const myNotesSchema = new mongoose.Schema(
  {
    notesID: {
      type: Number,
      unique: true,
      required: [true, "Required field"],
    },
    name: {
      type: String,
      required: [true, "Required field"],
    },
    data: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

//Creating Model
const NotesModel = mongoose.model("mynotes", myNotesSchema);

// Exporting Model
module.exports = NotesModel;
