import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import flowerRoute from "./route/flower.route.js"
import userRoute from "./route/user.route.js"
import cartRoute from "./route/cart.route.js"
import orderRoute from "./route/order.route.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 4000
const URI=process.env.MongoDBURI

try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  console.log("connected to MongoDB")
} catch (error) {
  console.log("error ",error)
}

app.use("/flower",flowerRoute)
app.use("/user",userRoute)
app.use("/cart",cartRoute)
app.use("/order",orderRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})