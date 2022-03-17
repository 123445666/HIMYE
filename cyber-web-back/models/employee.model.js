const mongoose = require("mongoose");
var _ = require('lodash');
const Schema = mongoose.Schema;

// Define the meal schema
const employeeSchema = new Schema({
  name:
  {
    type: String,
    required: true
  },
  name:
  {
    type: String,
    required: true
  },
  name:
  {
    type: String,
    required: true
  },
  linkedin:
  {
    type: String,
  },
  snippet: {
    type: String,
  },
  company:
  {
    type: String,
  },
  image:
  {
    type: String,
  },
  email_perso: {
    type: String
  },
  email_pro: {
    type: String,
  },
  phone: {
    type: String,
  },
  hobby: {
    type: Number,
  },
  social_account: {
    type: String,
  },
  web_account: {
    type: String,
  },
  images: {
    type: String,
  },
  role: {
    type: String,
  },
  location: {
    type: String,
  }
});

const employeeModel = mongoose.model("employees", employeeSchema);

module.exports = employeeModel;
