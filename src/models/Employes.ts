import mongoose from "mongoose";

const EmployerSchema = new mongoose.Schema({
  CIN: { type: String, required: true, unique: true },
  FerstName: { type: String, required: true },
  lastName: { type: String, required: true },
  posteName: { type: String, required: true },
  email: { type: String },
  phoneNumber: { type: String, required: true },
  dateNaissance: { type: Date, required: true },
  employerDepartment: { type: String },
  isRejected: { type: Boolean, default: false },
  rejectMotif: { type: String },
  isArchive: { type: Boolean },
  raison: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  creatUser: { type: String },
  UserApdate: { type: String },
  UserDelete: { type: String },
  deleteDate: { type: Date },
});
export default mongoose.models.EmployerModel ||
  mongoose.model("EmployerModel", EmployerSchema);
