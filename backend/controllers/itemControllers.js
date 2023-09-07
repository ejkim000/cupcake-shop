const asyncHandler = require('express-async-handler');
const Item = require('../models/itemModel');
const Category = require('../models/categoryModel');
const Size = require('../models/categorySize');

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
    !req.body.desc ||
    !req.body.size
  ) {
    res.status(400);
    throw new Error('Please add all item information');
  }
  const item = await Item.create({
    category: req.body.category,
    name: req.body.name,
    picture: req.body.picture,
    desc: req.body.desc,
    size: req.body.size,
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
    !req.body.desc ||
    !req.body.size
  ) {
    res.status(400);
    throw new Error('Wrong access');
  }

  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // if don't exist, then create one
  });

  res.status(200).json(item);
});

// @desc delete item
// @route DELETTE '/api/items/:id'
// @access Public for now, later make Private for admin
const deleteItem = asyncHandler(async(req, res) => {
    if (!req.params.id) {
        res.status(400);
        throw new Error('Wrong access');
      }
    
      const item = await Item.findById(req.params.id);

      if (!item) {
        res.status(400);
        throw new Error('No item found');
      }

      await item.deleteOne();

      res.status(200).json({ id: req.params.id });
});

module.exports = {
  getItems,
  setItem,
  updateItem,
  deleteItem
};
