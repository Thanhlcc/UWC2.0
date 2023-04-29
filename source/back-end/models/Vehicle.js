const mongoose = require('mongoose');
const connection = require('../config/database');
const Park = require('./Park');

/*
*-----------------Main Schemas--------------
*/
const VehicleSchema = mongoose.Schema({
    status: {
        type: Boolean,
        required: true
    },
    capacity: {
        type: Number,
        default: () => 100,
    },
    park: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Park,
        required: true
    },
    type: {
        type: String,
        enum: ['truck', 'troller'],
        required: true
    }
},{
    discriminatorKey: type,
    collection: "Vehicle"
})

const Vehicle = connection.model('Vehicle', VehicleSchema);

const Truck = Vehicle.discriminator('', mongoose.Schema({
    weight: Number,
    numberPlate: {
        type: String,
        unique: true,
        required: true
    }
}))


module.exports = {Vehicle, Truck};