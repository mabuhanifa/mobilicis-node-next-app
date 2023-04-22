const usersController = require("../controllers/userController");

const router = require("express").Router();

router.route("/").get(usersController);

module.exports = router;
