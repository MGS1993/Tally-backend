const expenseModel = require("../models/expenseModel");
const historicalExpenseModel = require("../models/historicalExpenseModel");
const userModel = require("../models/userModel");

const calculateExpense = require("../util/calExpenses");

exports.addExpense = async (req, res) => {
  let data = req.body;
  let {
    cost,
    title,
    date,
    description,
    userId,
    splitValue,
    initialCost,
    exLabelColor,
  } = req.body;

  const currentUser = await userModel.findById(userId);
  const autoDate = new Date().toISOString().split("T")[0];
  if (!currentUser) return res.status(404).json({ msg: "User not logged in" });

  if (date === "") date = autoDate;

  let expense = new expenseModel({
    cost,
    title,
    date,
    description,
    owner: currentUser._id,
    ownerName: currentUser.userName,
    splitValue,
    initialCost,
    exLabelColor,
  });

  addHistoricalExpense(data);

  expense.save((err) =>
    err
      ? res
          .status(500)
          .json({ msg: "Error in expense controller save function" })
      : res
          .status(200)
          .json({ msg: "Expense added to database", expense })
          .status(200)
  );
};

addHistoricalExpense = async (data) => {
  let { cost, title, date, description, userId, splitValue, initialCost } =
    data;
  //for testing purposes
  if (title === "test") return;
  const currentUser = await userModel.findById(userId);
  const autoDate = new Date().toISOString().split("T")[0];

  if (date === "") date = autoDate;

  let expense = new historicalExpenseModel({
    cost,
    title,
    date,
    description,
    owner: currentUser._id,
    ownerName: currentUser.userName,
    splitValue,
    initialCost,
  });
  expense.save();
};

exports.getExpenses = async (req, res) => {
  const { userId } = req.params;
  const { _id } = await userModel.findById(userId);

  const userExpenses = await expenseModel.find({ owner: _id });
  const otherUserExpenses = await expenseModel.find({ owner: { $ne: _id } });

  const calculatedUserExpenses = calculateExpense(userExpenses);
  const calculatedOtherUserExpenses = calculateExpense(otherUserExpenses);
  try {
    userExpenses !== undefined
      ? res.status(200).json({
          msg: "Expenses retrieved",
          userExpenses,
          otherUserExpenses,

          calculatedUserExpenses,
          calculatedOtherUserExpenses,
        })
      : res.status(404).json({ msg: "No user expenses found" });
  } catch (error) {
    console.log("error in expense controller:", error);
  }
};

exports.getHistoricalExpenses = async (req, res) => {
  const allHistoricalExpenses = await historicalExpenseModel.find({});
  try {
    allHistoricalExpenses !== undefined
      ? res.status(200).json({
          allHistoricalExpenses,
        })
      : res.status(404).json({ msg: "No historical expenses found" });
  } catch (error) {
    console.log("error in expense controller:", error);
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { userId, itemId } = req.params;

    const target = await expenseModel.findById(itemId);
    if (target === undefined) {
      return res.status(404).json({
        msg: "Error: Expense id not found",
      });
    }
    await expenseModel.findByIdAndRemove(target._id);

    const updatedList = await expenseModel.find({});

    return res.status(200).json({
      data: updatedList,
      msg: "Expense deleted",
    });
  } catch (error) {
    console.log(error);
  }
};
