const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const opportunitySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  cordinator: { type: String, required: true },
  description: String
});
// WAS const bookSchema = title; author; synopsis, date
// date: { type: Date, default: Date.now }

const Opportunity = mongoose.model("Opportunity", opportunitySchema);

module.exports = Opportunity;
