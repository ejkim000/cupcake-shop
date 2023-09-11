const express = require('express');
const router = express.Router();
const {
  getOrders,
  setOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderControllers');
const { protect } = require('../middleware/authMiddleware');


router.route('/').get(protect, getOrders).post(protect, setOrder);
router.route('/:id').put(protect, updateOrder).delete(protect,deleteOrder);

module.exports = router;