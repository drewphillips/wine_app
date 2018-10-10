
const examController = require("../../controllers/examController")
const router = require("express").Router();

router.get("/exam", examController.findExam);



module.exports = router;