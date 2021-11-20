const expenseModel = require("../models/expenseModel");
const userModel = require("../models/userModel");

exports.addExpense = async (req, res) => {
  const { cost, title, date, description, userId } = req.body;
  const currentUser = await userModel.findById(userId);

  if (!currentUser) return res.status(404).json({ msg: "User not found" });

  let expense = new expenseModel({
    cost,
    title,
    date,
    description,
    owner: currentUser._id,
  });

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

  console.log("the current expense is:", expense);
};
