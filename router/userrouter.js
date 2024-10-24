const express = require("express");
const router = express.Router();

// Assuming the corrected function name is `createUser`
const { createUser } = require("../controllers/usercontroller");

router.post("/", createUser);

module.exports = router;
