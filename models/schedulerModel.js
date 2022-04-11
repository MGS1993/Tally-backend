const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchedulerSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: String, required: true },
  chargeDate: { type: Date, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "Users" },
});

module.exports = mongoose.model("SchedulerDates", SchedulerSchema);
