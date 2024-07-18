import mongoose from "mongoose";

const sanctionModel = new mongoose.Schema({
  EmployerId: { type: String, required: true },
  sanction: { type: String, required: true },
  date: { type: Date },
  faute: { type: String },
});

export default mongoose.models.sanctions ||
  mongoose.model("sanctions", sanctionModel);
