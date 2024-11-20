import express from 'express'
const router = express.Router();
import {addToCart,getCart,emptyCart}  from '../controller/cart.controller.js'

router.post('/', addToCart); // Add items to cart
router.get('/:userId', getCart); // Get user's cart
router.delete('/:userId',emptyCart); // Empty cart

export default router;
