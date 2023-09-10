const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema ({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Order'
    },
    method: {
        type: String,
        required: [true, 'Please add a transaction method']
    },
    trans_id: {
        type: String,
        required: [true, 'Please add a transaction id']
    },
    status: {
        type: String,
        required: true,
        default: "Pending"
    }
},
{
    timestamps : true
})

module.exports = mongoose.model('Transaction', transactionSchema);