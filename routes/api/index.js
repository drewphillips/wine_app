const router = require("express").Router();
const loginRoutes = require("./login");
const userRoutes = require ("./users");
const examRoutes = require ("./exams");

// Routes
router.use("/login", loginRoutes);
router.use("/users", userRoutes);
router.use("/exams", examRoutes);


module.exports = router;
