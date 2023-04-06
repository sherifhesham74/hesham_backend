const mongoose = require("mongoose");

const accesssSchema = new mongoose.Schema({
  image: Array,
  id:Number,
  name:String,
  model:String,
  price:Date,
  transmission:String,
  motor:Number,
  color:String,
  year:Number,
  shopName:String,

  // owner:{type:mongoose.Schema.Types.ObjectId , ref:"CarsShop"}
});

accessModel = new mongoose.model("accesss", accesssSchema);
module.exports = accessModel;
