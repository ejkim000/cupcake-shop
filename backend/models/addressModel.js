const mongoose = require('mongoose');

const addressSchema = mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    street: {
        type: String,
        required: [true, 'Please add street']
    },
    street2: {
        type: String,
        default: null
    },
    city: {
        type: String,
        required: [true, 'Please add city']
    },
    state: {
        type: String,
        required: [true, 'Please add state']
    },
    zipcode: {
        type: String,
        required: [true, 'Please add zipcode']
    },
    default: {
        type: Boolean,
        default: false
    },
},
{
    timestamps : true
})

module.exports = mongoose.model('Address', addressSchema);