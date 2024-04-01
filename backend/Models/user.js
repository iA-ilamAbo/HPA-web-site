const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true, trim: true },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: { type: String, require: true },
  role: {
    type: String,
    enum: ["admin", "user", "manger"],
    default: "user",
  },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
