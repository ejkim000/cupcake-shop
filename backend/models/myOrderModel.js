const mongoose = require('mongoose');

const myOrderSchema = mongoose.Schema(
  {
    order_no: {
      type: String,
      required: [true, 'Please add an order number'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    items: [
      {
        design: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Item',
        },
        cake: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Item',
        },
        frosting: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Item',
        },
        filling: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Item',
        },
        item_total: {
            type: Number,
            required: true,
            default: 0,
        },
        qty: {
            type: Number,
            required: true,
            default: 1,
        },
        sub_total: {
            type: Number,
            required: true,
            default: 0,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
      default: 0,
    },
    tax: {
      type: Number,
      required: true,
      default: 0,
    },
    grand_total: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      required: [true, 'Please add order status'],
      default: 'Received',
    },
    billing_address: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Address',
    },
    shipping_address: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Address',
    },
    shipping_date: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('MyOrder', myOrderSchema);
