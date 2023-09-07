const express = require('express');
const router = express.Router();
const {
  getItems,
  setItem,
  updateItem,
  deleteItem,
} = require('../controllers/itemControllers');

router.route('/').get(getItems).post(setItem);
router.route('/:id').put(updateItem).delete(deleteItem);

module.exports = router;