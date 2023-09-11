const express = require('express');
const router = express.Router();
const {
  getCart,
  setCart,
  updateCart,
  deleteCart,
} = require('../controllers/cartControllers');
const { protect } = require('../middleware/authMiddleware');


router.route('/').get(protect, getCart).post(protect, setCart);
router.route('/:id').put(protect, updateCart).delete(protect, deleteCart);

module.exports = router;