const mongoose = require('mongoose');
const connection = require('../config/database');
const AddressSchema = require('./Util_schema');

const ParkSchema = mongoose.Schema({
    address: {
        type: AddressSchema,
        required: true
    },
    noCars: {
        type: Number,
        minValue: 1,
        required: true
    }
})

module.exports = connection.model("Park", ParkSchema);