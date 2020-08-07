// This file pulls in required dependencies, creates a Schema to represent a User, defining fields and types as objects of the Schema, and exports the model so we can access it outside of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  }

});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;