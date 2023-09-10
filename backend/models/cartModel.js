const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    design: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Item',
    },
    cake: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Cake',
    },
    frosting: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Frosting',
    },
    filling: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Filling',
    },
    size: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Size',
    },
    sub_total: {
      type: Number,
      required: true,
      default: 0,
    },
    qty: {
      type: Number,
      required: true,
      default: 1,
    },
    total: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Order', orderSchema);
