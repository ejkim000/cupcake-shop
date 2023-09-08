const asyncHandler = require('express-async-handler');
const Item = require('../models/itemModel');
const Size = require('../models/sizeModel');

// @desc Get items
// @route GET /api/items/
// @access Public
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find();
  res.status(200).json(items);
});

// @desc Set item
// @route POST /api/items
// @access Public for now, later make Private for admin
const setItem = asyncHandler(async (req, res) => {
  if (
    !req.body.category ||
    !req.body.name ||
    !req.body.picture ||
    !req.body.desc
  ) {
    res.status(400);
    throw new Error('Please add all item information');
  }
  const item = await Item.create({
    category: req.body.category,
    name: req.body.name,
    picture: req.body.picture,
    desc: req.body.desc,
  });

  res.status(200).json(item);
});

// @desc update Item
// @route PUT /api/items/:id
// @access Public for now, later make Private for admin
const updateItem = asyncHandler(async (req, res) => {
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

  const foundItem = await Item.findById(req.params.id);

  if (!foundItem) {
    res.status(400);
    throw new Error('The item was not found');
  }

  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // if don't exist, then create one
  });

  res.status(200).json(item);
});

// @desc delete item
// @route DELETTE '/api/items/:id'
// @access Public for now, later make Private for admin
const deleteItem = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error('Wrong access');
  }

  const foundItem = await Item.findById(req.params.id);

  if (!foundItem) {
    res.status(400);
    throw new Error('No item found');
  }

  await foundItem.deleteOne();

  res.status(200).json({ id: req.params.id });
});

// @desc get an item information with size(price) information
// @route GET /api/items/detail
// @access Public
const getItemWithSizes = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  if (!req.params.id) {
    res.status(400);
    throw new Error('Wrong access');
  }

  const foundItem = await Item.findById(req.params.id);
  if (!foundItem) {
    res.status(400);
    throw new Error('No item found');
  }

  const foundSizes = await Size.find({ item: foundItem._id });
  if (!foundSizes) {
    res.status(400);
    throw new Error('No sizes found');
  }

  res.status(200).json({ item: foundItem, sizes: foundSizes });
});

module.exports = {
  getItems,
  setItem,
  updateItem,
  deleteItem,
  getItemWithSizes,
};
