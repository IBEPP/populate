const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongoose_populate");

const { Address } = require("./models/Adress");
const { Student } = require("./models/Student");

const adressBlog = new Address({
  streetName: "grest",
  streetNumber: "19",
  postCode: "65149",
  city: "tempt",
});

const studentBlog = new Student({
  firstName: "JHT",
  surname: "ibep",
  adress: Address._id,
});

Student.findOne({ _id: "6261626e3a9733308ddc5a86" })
  .populate("address")
  .exec(function (err, ad) {
    console.log(ad);
  });

// adressBlog.save();
// studentBlog.save();
