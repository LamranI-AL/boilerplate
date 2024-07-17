import mongoose from "mongoose";

const CondidateModel = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  CIN: { type: String, required: true },
  email: { type: String },
  phoneNumber: { type: String, required: true },
  dateNaissance: { type: Date, required: true },
  posteApplique: { type: String, required: true },
  motifApply: { type: String },
  dateApplication: { type: Date, default: Date.now },
  isSucceeded: { type: Boolean, default: "pending" },
  creatUser: { type: String, required: true },
  creatDate: { type: Date },
  UserApdate: { type: String },
  updateDate: { type: Date },
  UserDelete: { type: String },
  deleteDate: { type: Date },
});

export default mongoose.models.condidates ||
  mongoose.model("condidates", CondidateModel);
