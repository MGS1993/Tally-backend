const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenseController");
const userController = require("../controllers/userController");

router.post("/login", userController.login);
router.get("/getAllUsers", userController.getAllUsers);
router.post("/addExpense", expenseController.addExpense);
router.get("/getExpenses/:userId", expenseController.getExpenses);

router.delete(
  "/deleteExpense/:userId/:itemId",
  expenseController.deleteExpense
);

module.exports = router;
