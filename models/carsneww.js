const mongoose=require("mongoose");
const { array } = require("../middleware/multer");

const carsnewwSchema=new mongoose.Schema({
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
})

carsnewwModel=new mongoose.model("carsneww",carsnewwSchema)
module.exports = carsnewwModel;