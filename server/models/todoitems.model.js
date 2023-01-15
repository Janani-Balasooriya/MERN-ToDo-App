//import mongoose to create new schema
const mongoose = require("mongoose");

//create schema
const ToDoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
});

//export this Schema
module.exports = mongoose.model("todo", ToDoItemSchema);
