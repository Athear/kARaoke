const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const Grid = require("gridfs");
const app = express();
const PORT = process.env.PORT || 3001;
const multer = require('multer');
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Grid.mongo = mongoose.mongo;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/karaoke"),
{
  useNewUrlParser: true,
  useFindAndModify: false
};

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
