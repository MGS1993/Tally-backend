const schedulerModel = require("../models/schedulerModel");
const userModel = require("../models/userModel");

exports.scheduleCharge = async (req, res) => {
  const { name, cost, date, userId } = req.body;

  const currentUser = await userModel.findById(userId);
  if (!currentUser) return res.status(404).json({ msg: "User not logged in" });

  let scheduledExpense = new schedulerModel({
    name,
    cost,
    chargeDate: date,
    owner: currentUser._id,
  });

  //checks for duplicates based on name and userId
  const isDuplicate = await schedulerModel.find({
    name: `${name}`,
    owner: `${currentUser._id}`,
  });
  console.log(isDuplicate);

  if (isDuplicate.length > 0) {
    console.log("this is a duplicate");
    return res
      .status(400)
      .json({ msg: "You already have a scheduled expense with that name" });
  }

  scheduledExpense.save();

  console.log(job);
};
