const express = require("express");
const users = require("../controllers/users");

const router = express.Router();

router.post("/signup", users.signup);
router.post("/login", users.login);
router.post("/postchat", users.postChat);
router.get("/getchat", users.getChat);

module.exports = router;
