import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isSuperAdmin: { type: Boolean },
  dateChangeRole: Date,
});
export default mongoose.models.User || mongoose.model("User", UserSchema);
