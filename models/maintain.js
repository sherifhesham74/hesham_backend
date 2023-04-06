const mongoose=require("mongoose");

const maintainSchema=new mongoose.Schema({
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

maintainModel=new mongoose.model("maintain",maintainSchema)
module.exports = maintainModel;