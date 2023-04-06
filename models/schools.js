const mongoose=require("mongoose");

const schoolsSchema=new mongoose.Schema({
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

schoolsModel=new mongoose.model("schools",schoolsSchema)
module.exports = schoolsModel;