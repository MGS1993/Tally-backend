const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenseController");
const userController = require("../controllers/userController");
const schedulerController = require("../controllers/schedulerController");

router.post("/login", userController.login);
router.get("/getLinkedUsers/:userId", userController.getLinkedUsers);
router.post("/addExpense", expenseController.addExpense);
router.get("/getExpenses/:userId", expenseController.getExpenses);
router.get("/getHistoricalExpenses", expenseController.getHistoricalExpenses);
router.post("/scheduleExpense", schedulerController.scheduleCharge);
router.delete(
  "/deleteExpense/:userId/:itemId",
  expenseController.deleteExpense
);

module.exports = router;
