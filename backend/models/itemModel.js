const mongoose = require('mongoose');

const itemSchema = mongoose.Schema ({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    name: {
        type: String,
        required: [true, 'Please add item name']
    },
    pciture: {
        type: String,
        required: [true, 'Please add item picture']
    },
    desc: {
        type: Text,
        required: [true, 'Please add item description']
    },
    size: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Size'
    }
},
{
    timestamps : true
})

module.exports = mongoose.model('Item', itemSchema);