// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const db = require('./db/connection.js');
//const WolframAlphaAPI = require('wolfram-alpha-api');
//const waApi = WolframAlphaAPI('VWQ6YV-LL399286H2');
const axios = require('axios');
//const API = require('./api/api');




const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');



// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieSession({
  name: 'session',
  keys: ["key1", "key2"],
}))


// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const mainRoutes = require('./routes/mainpage');
const search = require('./routes/search')


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/mainpage', mainRoutes);
app.use('/search', search);

// index page
app.get('/', (req, res) => {
  return res.render('index');
});

app.get("/movie", function (req, res) {
  request("https://www.omdbapi.com/?s=star+wars&apikey=key",
    function (error, response, body) {
      // Setup an if statement to catch any errors
      if (!error && response.statusCode == 200) {
        // For now just print the body of the returned JSON
        res.send(body);
      }
    });
});

app.get("*", function (request, response) {
  response.render("error");
});

// Note: mount other resources here, using the same pattern above

//app.use('/mainpage', mainRoutes);

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).



// user login
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;
  res.redirect('/');
});
//user logout
app.post("/logout", (req, res) => {
  res.clearCookie('session');
  res.redirect("/");
});





app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});





