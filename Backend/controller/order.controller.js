// controllers/orderController.js
import Order from '../model/order.model.js';

export const placeOrder = async (req, res) => {
  const { items, total } = req.body;
  const userId = req.user.id; // Assuming you have user authentication middleware

  try {
    const order = new Order({ user: userId, items, total });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: "Error creating order", error });
  }
};

export const getUserOrders = async (req, res) => {
  const userId = req.user.id; // Assuming you have user authentication middleware

  try {
    const orders = await Order.find({ user: userId }).populate('items.flowerId');
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ message: "Error fetching orders", error });
  }
};
