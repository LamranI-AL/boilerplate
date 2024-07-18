import mongoose from "mongoose";

const PosteShema = new mongoose.Schema({
  name: { type: String, required: true },
  EmployerId: { type: String, required: true },
  EmployerCIN: { type: String },
  dateDebute: Date,
  dateFin: Date,
  motifDebut: { type: String, required: true },
});

export default mongoose.models.posts || mongoose.model("posts", PosteShema);
