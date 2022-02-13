const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistoricalExpenseSchema = new Schema({
  cost: { type: String, required: true },
  title: { type: String, required: false },
  date: { type: String, required: false },
  description: { type: String, required: false },
  owner: { type: Schema.Types.ObjectId, ref: "Users" },
  ownerName: { type: String, required: true },
  splitValue: { type: Number, required: true },
  initialCost: { type: String, required: true },
});

module.exports = mongoose.model("HistoricalExpenses", HistoricalExpenseSchema);
