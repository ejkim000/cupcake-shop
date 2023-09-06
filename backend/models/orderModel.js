const mongoose = require('mongoose');

const orderSchema = mongoose.Schema ({
    orderNo: {
        type: String,
        required: [true, 'Please add an order number']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderDetail: [{
        design: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Design'
        },
        cake: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Cake'
        },
        frosting: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Frosting'
        },
        filling: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Filling'
        },
        size: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Size'
        },
        qty: {
            type: Number,
            required: true,
            default: 1
        },
        subTotal: {
            type: Number,
            required: true,
            default: 0
        },
    }],
    total: {
        type: Number,
        required: true,
        default: 0
    },
    tax: {
        type: Number,
        required: true,
        default: 0
    },
    grand_total: {
        type: Number,
        required: true,
        default: 0
    },
    transaction: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Transaction'
    },
    status: {
        type: String,
        required: [true, 'Please add order status'],
        default: "Received"
    },
    billing_address: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
    },
    shipping_address: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
    },
    shipping_date: {
        type: Date,
        default: null
    }, 
},
{
    timestamps : true
})

module.exports = mongoose.model('Order', orderSchema);