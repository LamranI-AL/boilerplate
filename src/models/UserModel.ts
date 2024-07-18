import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isSuperAdmin: { type: Boolean },
  dateChangeRole: Date,
  lastLoginDate: Date,
});
export default mongoose.models.Users || mongoose.model("Users", UserSchema);
