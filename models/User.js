// This file pulls in required dependencies, creates a Schema to represent a User, defining fields and types as objects of the Schema, and exports the model so we can access it outside of this file

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
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
  // tasks: {
  //   quests: [],
  //   dailies: [],
  // }
  //   we can put an empty array to house the user's todos. This would be empty upon initial access to the application.
});
module.exports = User = mongoose.model("users", UserSchema);
