const express = require('express');
const router = express.Router();
const {
  getCart,
  setCart,
  updateCart,
  deleteCart,
} = require('../controllers/cartControllers');
const { protect } = require('../middleware/authMiddleware');


router.route('/').get(getCart, protect).post(setCart, protect);
router.route('/:id').put(updateCart, protect).delete(deleteCart, protect);

module.exports = router;