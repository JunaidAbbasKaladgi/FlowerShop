import mongoose from "mongoose"
import User from "../model/user.model.js"
import Flower from "../model/flower.model.js"

const orderSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
          required:true,
      },
      flowers: [
        {
          flower: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Flower,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
      totalAmount: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        default: 'Pending',
      },
      dateOrdered: {
        type: Date,
        default: Date.now,
      },
    });
    const Order=mongoose.model("Order",orderSchema)
    export default Order