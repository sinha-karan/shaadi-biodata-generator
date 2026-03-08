import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password is very short"]
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  isPremium : {
    type: Boolean,
    default: false
  }
}, {timestamps: {
    createdAt: true,
    updatedAt: true
  }})

const User = mongoose.model("User", userSchema);

export default User;