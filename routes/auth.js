const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    res.json({ message: "Login endpoint hit!" });
});

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    res.json({ message: "Register endpoint hit!" });
});

module.exports = router;
