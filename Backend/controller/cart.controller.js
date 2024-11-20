import Cart from "../model/cart.model.js";

export const addToCart = async (req, res) => {
  const { flowerId, quantity } = req.body;

  try {
    // Find the cart for the logged-in user
    let cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
      // Check if the flower already exists in the cart
      const itemIndex = cart.items.findIndex(item => item.flower.toString() === flowerId);

      if (itemIndex > -1) {
        // Update the quantity if flower exists in cart
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Add new flower to the cart
        cart.items.push({ flower: flowerId, quantity });
      }

      cart = await cart.save();
      return res.status(200).json(cart);
    } else {
      // If no cart exists, create a new cart for the user
  const newCart = await Cart.create({
        user: req.user._id,
        items: [{ flower: flowerId, quantity }],
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getCart = async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user._id }).populate('items.flower');
      if (!cart) {
        return res.status(404).json({ message: 'Cart is empty' });
      }
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Remove item from cart
  export const emptyCart = async (req, res) => {
    const { flowerId } = req.body;
  
    try {
      const cart = await Cart.findOne({ user: req.user._id });
  
      if (cart) {
        cart.items = cart.items.filter(item => item.flower.toString() !== flowerId);
        await cart.save();
        return res.status(200).json(cart);
      } else {
        return res.status(404).json({ message: 'Cart not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
