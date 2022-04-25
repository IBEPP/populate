const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: { type: String },
  surname: { type: String },
  address: {
    type: mongoose.Types.ObjectId,
    ref: "Adress",
  },
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = { Student };
