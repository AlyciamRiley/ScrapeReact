// Require Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require('./routes');
const app = express();
const db = mongoose.connection;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  mongoose.connect ('mongodb://heroku_kbdv0v69:860jh71jd1iu5m5639gjr0gg9l@ds129028.mlab.com:29028/heroku_kbdv0v69');
} else {
  mongoose.connect ('mongodb://localhost/nytreact');
}



// Show any Mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// Once logged in to the db through mongoose, log a success message 
db.once('open', function() {
  console.log('Mongoose connection successful');
});

const Article = require('./models/Article.js')

// Import Routes/Controller
// const router = require ('./controllers/controller.js');
// app.use('/', router);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
