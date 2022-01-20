const mongoose = require("mongoose");

const User = mongoose.model(
  "user",
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
      },
      password: {
        type: String,
      },
      status: {
        type: Number,
        default: 0,
      },
      token: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = User;
