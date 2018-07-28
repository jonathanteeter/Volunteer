// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production".trim()) {
  console.log((path.join(__dirname, "/client/build")));
  app.use(express.static(path.join(__dirname, "/client/build")));
}

console.log(process.env.NODE_ENV + 'theres a space here!');
// Add routes, both API and view
app.use(routes);
app.get('/*', (req, res) => {
  console.log(path.join(__dirname, 'client/build'));
  res.sendFile(path.join(__dirname, 'client/build'));
});

//Route for scraping
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/volunteerApp");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
