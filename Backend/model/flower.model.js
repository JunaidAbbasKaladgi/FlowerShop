import mongoose from "mongoose"

const flowerSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String
})

const Flower=mongoose.model("flower",flowerSchema)

export default Flower