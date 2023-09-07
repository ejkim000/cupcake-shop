const mongoose = require('mongoose');

const itemSchema = mongoose.Schema ({
    category: {
        type: String,
        required: [true, 'Please add item category']
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
        type: String,
        required: [true, 'Please add item description']
    },
},
{
    timestamps : true
})

module.exports = mongoose.model('Item', itemSchema);