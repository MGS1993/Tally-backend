const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenseController");
const userController = require("../controllers/userController");

router.post("/login", userController.login);
router.post("/addExpense", expenseController.addExpense);

module.exports = router;
