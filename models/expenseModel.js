const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  cost: { type: String, required: true },
  title: { type: String, required: false },
  date: { type: String, required: false },
  description: { type: String, required: false },
  owner: { type: Schema.Types.ObjectId, ref: "Users" },
  ownerName: { type: String, required: true },
  splitValue: { type: Number, required: true },
  initialCost: { type: String, required: true },
  exLabelColor: { type: String, required: true },
});

module.exports = mongoose.model("Expenses", ExpenseSchema);
