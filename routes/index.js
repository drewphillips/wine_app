const path = require("path");
const router = require("express").Router();
<<<<<<< HEAD
const apiRoutes = require("./api");
var passport = require('passport');
require('../config/passport')(passport);

=======
const routes = require("./routes");
>>>>>>> master

// API Routes
router.use("/api", routes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;
