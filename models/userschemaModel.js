const mongoose = require("mongoose");
const validator = require("validator");

const userDetailsSchema = new mongoose.Schema({
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
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  photoUrl: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    default:
      "Welcome to New world in It's with Felix it's system for you new carrier ",
  },
  skills: {
    type: [String],
  },
  messages: {
    type: String,
    required: true,
  },
  phone: {
    type: "String",
    required: true,
  },
  author: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isAdmin: {
    type: "Boolean",
    default: false,
  },
  role: {
    type: String,
    default: "useronedhfhsdf",
  },

  available: {
    type: Boolean,
    default: true,
  },
});

// export default mongoose.model("USERDetail", userDetailsSchema);
module.exports = new mongoose.model("USERDetail", userDetailsSchema);
