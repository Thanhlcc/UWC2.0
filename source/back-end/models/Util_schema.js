/*
    The file contains all common subdocument schema for the others
*/
const mongoose = require('mongoose');


const AddressSchema = mongoose.Schema({
    street: {
        type: String,
        required: true,
        lowercase: true
    },
    ward: {
        type: String,
        required: true,
        lowercase: true
    },
    city: {
        type: String,
        required: true,
        lowercase: true
    }
})


module.exports = AddressSchema;