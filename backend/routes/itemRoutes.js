const express = require('express');
const router = express.Router();
const {
  getItems,
  setItem,
  updateItem,
  deleteItem,
  getItemWithSizes,
} = require('../controllers/itemControllers');

router.route('/').get(getItems).post(setItem);
router.route('/:id').put(updateItem).delete(deleteItem);
router.route('/item-size/:id').get(getItemWithSizes);

module.exports = router;