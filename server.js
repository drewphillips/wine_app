const express = require("express");
const path = require("path");
const examRoutes = require("./routes/examRoute");
const userRoutes = require("./routes/userRoute")
const PORT = process.env.PORT || 3001;

const app = express();

// bring in the models
var db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api/exam", examRoutes);
app.use("/api/user",userRoutes);
<<<<<<< HEAD
app.use("/login", apiRoute);
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});
=======
// app.use("/login", apiRoute);
>>>>>>> master

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// listen on port 3000
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});
