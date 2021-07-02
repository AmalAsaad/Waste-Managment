const authControllers = require("../Controllers/auth");
const express = require("express");
const router = express.Router();

router.post("/register", authControllers.signUp);
router.post("/login",authControllers.signIn);
router.get("/logout", authControllers.signOut);


module.exports = router;
