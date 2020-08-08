// This file pulls in required dependencies, creates a Schema to represent a User, defining fields and types as objects of the Schema, and exports the model so we can access it outside of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  totalHealth: {
    type: Number,
    required: true,
    default: 100,
  },
  currentHealth: {
    type: Number,
    required: true,
    default: 100,
  },
  experience: {
    type: Number,
    required: true,
    default: 0,
  },
  quests: [{
        name: {type: String, required: true,},
        experience: { type: Number, required: true, default: 20,},
        date: {type: Date, default: Date.now,}
      }],
  dailies: [],
  //   we can put an empty array to house the user's todos. This would be empty upon initial access to the application.
});

const User = mongoose.model("User", userSchema);

module.exports = User;
