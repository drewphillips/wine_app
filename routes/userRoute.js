let userController = require("../controllers/userController")
const router = require("express").Router();

router.get("/findUser/:id", userController.findUser);
router.post("/createUser", userController.createUser);
router.get("/allusers", userController.findAllUsers);

module.exports = router;