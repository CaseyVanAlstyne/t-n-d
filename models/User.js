// This file pulls in required dependencies, creates a Schema to represent a User, defining fields and types as objects of the Schema, and exports the model so we can access it outside of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  // User base information
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
  // user stats
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
  // user tasks
  quests: [
    {
      name: { type: String, required: true },
      experience: { type: Number, required: true, default: 20 },
      date: { type: String},
      id: {type: String, required: true}
    },
  ],
  dailies: [
    {
      name: { type: String, required: true },
      experience: { type: Number, required: true, default: 20 },
      date: { type: String},
      id: {type: String, required: true}
    },
  ],
<<<<<<< HEAD
  dailies: [
    {
      name: { type: String, required: true },
      experience: { type: Number, required: true, default: 20 },
      date: { type: Date, default: Date.now },
      id: {type: String, required: true}
    },
  ],
=======
>>>>>>> 143477dfb7ea79955275b66c889bdff530ac9d11
});

const User = mongoose.model("User", userSchema);

module.exports = User;
