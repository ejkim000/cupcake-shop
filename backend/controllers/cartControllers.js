const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel');

// @desc Get carts
// @route GET /api/carts/
// @access Private
const getCart = asyncHandler(async (req, res) => {
  // check user from middleware
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  const carts = await Cart.find({ user: req.user.id });
  res.status(200).json(carts);
});

// @desc Set cart
// @route POST /api/carts
// @access Private
const setCart = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  if (
    !req.body.design ||
    !req.body.cake ||
    !req.body.frosting ||
    !req.body.size ||
    !req.body.sub_total ||
    !req.body.qty
  ) {
    res.status(400);
    throw new Error('Please add all cart information');
  }

  const cart = await Cart.create({
    user: !req.user ? null : req.user,
    design: req.body.design,
    cake: req.body.cake,
    frosting: req.body.frosting,
    filling: !req.body.filling ? null : req.body.filling,
    size: req.body.size,
    sub_total: req.body.sub_total,
    qty: req.body.qty,
    total: req.body.qty * req.body.sub_total,
  });

  res.status(200).json(cart);
});

// @desc update Cart
// @route PUT /api/carts/:id
// @access Private
const updateCart = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  if (!req.params.id || !req.body.qty) {
    res.status(400);
    throw new Error('Wrong access');
  }

  const foundCart = await Cart.findById(req.params.id);

  if (!foundCart) {
    res.status(400);
    throw new Error('The cart was not found');
  }

  const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(cart);
});

// @desc delete cart
// @route DELETTE '/api/carts/:id'
// @access Private
const deleteCart = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  if (!req.params.id) {
    res.status(400);
    throw new Error('Wrong access');
  }

  const foundCart = await Cart.findById(req.params.id);

  if (!foundCart) {
    res.status(400);
    throw new Error('No cart found');
  }

  await foundCart.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCart,
  setCart,
  updateCart,
  deleteCart,
};
