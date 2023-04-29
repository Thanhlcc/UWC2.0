const mongoose = require('mongoose')
const AddressSchema = require('./Util_schema')
const connection = require('../config/database')

const MCPSchema = mongoose.Schema({
    capacity: {
        type: Number,
        minValue: 0,
        required: true
    },
    freeSpace: {
        type: Number,
        minValue: 0,
        maxValue: 1,
    },
    address: {
        type: AddressSchema,
        required: true
    },
    coordinate: {
        lat: String,
        lng: String
    }
})

const RouteSchema = mongoose.Schema({
    mcpList : {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
        ref: MCPSchema
    },
    length: Number
})

const AreaSchema = mongoose.Schema({
    mcpList : {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
        ref: MCPSchema
    }
})

module.exports = {
    MCP: connection.model("MCP", MCPSchema),
    Area: connection.model("Area", AreaSchema),
    Route: connection.model('Route', RouteSchema)
}