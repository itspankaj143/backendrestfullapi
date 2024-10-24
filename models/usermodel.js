const mongoose = require("mongoose");
const validator = require("validator");

const userschema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address" + value);
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "useronedhfhsdf",
  },
  image: {
    type: String,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// export default mongoose.model("userInfo", userschema);
module.exports = new mongoose.model("userInfo", userschema);
