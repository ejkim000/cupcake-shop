const asyncHandler = require('express-async-handler');
const Size = require('../models/sizeModel');

// @desc Get sizes
// @route GET /api/sizes/
// @access Public
const getSizes = asyncHandler(async (req, res) => {
  const sizes = await Size.find();
  res.status(200).json(sizes);
});

// @desc Set size
// @route POST /api/sizes
// @access Public for now, later make Private for admin
const setSize = asyncHandler(async (req, res) => {
  if (
    !req.body.item ||
    !req.body.size ||
    !req.body.price
  ) {
    res.status(400);
    throw new Error('Please add all size information');
  }
  const size = await Size.create({
    item: req.body.category,
    size: req.body.size,
    price: req.body.price
  });

  res.status(200).json(size);
});

// @desc update Size
// @route PUT /api/sizes/:id
// @access Public for now, later make Private for admin
const updateSize = asyncHandler(async (req, res) => {
  if (
    !req.params.id ||
    !req.body.item ||
    !req.body.size ||
    !req.body.price
  ) {
    res.status(400);
    throw new Error('Wrong access');
  }

  const size = await Size.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // if don't exist, then create one
  });

  res.status(200).json(size);
});

// @desc delete size
// @route DELETTE '/api/sizes/:id'
// @access Public for now, later make Private for admin
const deleteSize = asyncHandler(async(req, res) => {
    if (!req.params.id) {
        res.status(400);
        throw new Error('Wrong access');
      }
    
      const size = await Size.findById(req.params.id);

      if (!size) {
        res.status(400);
        throw new Error('No size found');
      }

      await size.deleteOne();

      res.status(200).json({ id: req.params.id });
});

module.exports = {
  getSizes,
  setSize,
  updateSize,
  deleteSize
};
