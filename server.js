const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const passport = require("passport");
const users = require("./routes/api/users");
const todo = require("./routes/api/todo");
const path = require("path");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// DB Config
// const db = require("./config/keys").mongoURI;
// Connect to MongoDB
const uri = process.env.ATLAS_URI;
// const uri = null;
// console.log(uri);
mongoose
  .connect(uri || "mongodb://localhost/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api", users);
app.use("/api", todo);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
