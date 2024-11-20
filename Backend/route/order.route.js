import express from 'express'
const router = express.Router();
import {placeOrder,getUserOrders} from "../controller/order.controller.js"

router.post('/', placeOrder); // Place an order
router.get('/', getUserOrders); // Get user's orders

export default router
