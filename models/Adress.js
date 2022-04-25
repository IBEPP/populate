const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  streetName: { type: String },
  streetNumber: { type: String },
  postCode: { type: String },
  city: { type: String },
});

const Address = new mongoose.model("Address", addressSchema);

module.exports = { Address };
