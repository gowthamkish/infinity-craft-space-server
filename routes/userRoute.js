const express = require("express");
const { loginUser, registerUser } = require("../controllers/userController");
const router = express.Router();

// Login
router.post("/login", loginUser);

// Signup

router.post("/register", registerUser);

module.exports = router;
