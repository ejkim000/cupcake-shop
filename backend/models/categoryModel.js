const mongoose = require('mongoose');

const categorySchema = mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Please add category name']
    }
})

module.exports = mongoose.model('Category', categorySchema);