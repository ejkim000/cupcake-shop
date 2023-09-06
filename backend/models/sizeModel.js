const mongoose = require('mongoose');

const sizeSchema = mongoose.Schema ({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Item'
    },
    name: {
        type: String,
        required: [true, 'Please add size name']
    },
    price: {
        type: Number,
        required: [true, 'Please add price']
    }
},
{
    timestamps : true
})

module.exports = mongoose.model('Size', sizeSchema);