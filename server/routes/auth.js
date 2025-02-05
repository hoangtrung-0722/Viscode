const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth");
const verifySignUp = require("../middlewares/verifySignUp");

router.post("/signup", verifySignUp.checkDuplicateUsername, controller.signUp);
router.post("/signin", controller.signIn);

module.exports = router;
