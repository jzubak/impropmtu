const express = require("express");
const sequelize = require("sequelize");
const routes = require("./routes");
const axios = require("axios");
const app = express();
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
// app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

// // Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
// // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

//routes
// var authRoute = require('./routes/auth.js')(app, passport);
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

const models = require("./models");

//load passport strategies
// require('./config/passport/passport.js')(passport, models.user);

var syncOptions = { force: false };



// Starting the server, syncing our models ------------------------------------/
models.sequelize.sync(syncOptions).then(function() {
  console.log("\nlet's plan a trip y'all!\n")
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
