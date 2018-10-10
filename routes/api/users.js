const router = require("express").Router();
const userController = require("../../controllers/userController")

// Get all Users in json format
router.get("/allusers", userController.findAllUsers);
// Get a single user in json format
router.get("/findUser/:id", userController.findUser);
// Create a new user
router.post("/createUser", userController.createUser);


module.exports = router;