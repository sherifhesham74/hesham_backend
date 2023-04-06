const mongoose=require("mongoose");

const carsUseddSchema=new mongoose.Schema({
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


    owner:{type:mongoose.Schema.Types.ObjectId , ref:"CarsShop"}
})

carsUseddModel=new mongoose.model("carsusedd",carsUseddSchema)
module.exports = carsUseddModel;