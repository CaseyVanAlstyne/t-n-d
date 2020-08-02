const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config()
const app = express();

const userRoutes = require('./routes/api/users');
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use("/api", userRoutes);
// DB Config
// const db = require("./config/keys").mongoURI;
// Connect to MongoDB
const uri = process.env.ATLAS_URI;

console.log(uri);
mongoose
  .connect(uri
    //|| db, 
    ,{ useNewUrlParser: true, useUnifiedTopology: true },)
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3001; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
