const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

//Use express.json() to get data into json format
app.use(express.json());

//Port
const PORT = process.env.PORT || 5500;

//importing routes
const ToDoItemRoute = require("./routes/todoitems.router");

//Connect to mongodb...
mongoose
  .set("strictQuery", false)
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/", ToDoItemRoute);

//Add port and connect to server
app.listen(PORT, () => console.log("Server connected"));
