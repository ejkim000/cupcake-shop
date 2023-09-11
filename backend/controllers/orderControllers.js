const Order = require('../models/myOrderModel');
const Transaction = require('../models/transactionModel');
const asyncHandler = require('express-async-handler');

// @desc Get orders
// @route GET /api/orders/
// @access Private
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
});

// @desc Set order
// @route POST /api/orders
// @access Private
const setOrder = asyncHandler(async (req, res) => {
  if (
    !req.body.category ||
    !req.body.name ||
    !req.body.picture ||
    !req.body.desc
  ) {
    res.status(400);
    throw new Error('Please add all order information');
  }

  const order = await Order.create({
    category: req.body.category,
    name: req.body.name,
    picture: req.body.picture,
    desc: req.body.desc,
  });

  res.status(200).json(order);
});

// @desc update Order
// @route PUT /api/orders/:id
// @access Private
const updateOrder = asyncHandler(async (req, res) => {
  if (
    !req.params.id ||
    !req.body.category ||
    !req.body.name ||
    !req.body.picture ||
    !req.body.desc
  ) {
    res.status(400);
    throw new Error('Wrong access');
  }

  const foundOrder = await Order.findById(req.params.id);

  if (!foundOrder) {
    res.status(400);
    throw new Error('The order was not found');
  }

  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // if don't exist, then create one
  });

  res.status(200).json(order);
});

// @desc delete order
// @route DELETTE '/api/orders/:id'
// @access Private
const deleteOrder = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error('Wrong access');
  }

  const foundOrder = await Order.findById(req.params.id);

  if (!foundOrder) {
    res.status(400);
    throw new Error('No order found');
  }

  await foundOrder.deleteOne();

  res.status(200).json({ id: req.params.id });
});


// @desc Get transaction of this order
// @route GET /api/transaction/:id
// @access Private
const getTransaction = asyncHandler(async (req, res) => {
    if (!req.params.id) {
      res.status(400);
      throw new Error('Wrong access');
    }
    const orders = await Transaction.findById(req.params.id);
    res.status(200).json(orders);
  });

// @desc set transaction info
// @route GET /api/transaction/:id
// @access Public
const setTransaction = asyncHandler(async (req, res) => {
  if (
    !req.body.order_id ||
    !req.body.method ||
    !req.body.trans_id ||
    !req.body.status
  ) {
    res.status(400);
    throw new Error('Please add all transaction information');
  }
  
  const order = await Order.create({
    category: req.body.order_id,
    name: req.body.method,
    picture: req.body.trans_id,
    desc: req.body.status,
  });

  res.status(200).json(order);
});

module.exports = {
  getOrders,
  setOrder,
  updateOrder,
  deleteOrder,
  getTransaction,
  setTransaction,
};
