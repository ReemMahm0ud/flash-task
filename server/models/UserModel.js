const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please add the first name"],
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please add the email address"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Please add the phone"],
    },
    password: {
      type: String,
      required: [true, "Please add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserSchema);
