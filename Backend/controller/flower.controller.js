import Flower from "../model/flower.model.js"

export const getFlower=async(req,res)=>{
    try {
        const flower=await Flower.find()
        res.status(200).json(flower)
    } catch (error) {
        console.log("Error :",error)
        res.status(500).json(error)
    }
}