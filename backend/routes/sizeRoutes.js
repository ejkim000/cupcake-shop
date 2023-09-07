const express = require('express');
const router = express.Router();
const {
  getSizes,
  setSize,
  updateSize,
  deleteSize,
} = require('../controllers/sizeControllers');

router.route('/').get(getSizes).post(setSize);
router.route('/:id').put(updateSize).delete(deleteSize);

module.exports = router;