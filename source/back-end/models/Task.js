const mongoose = require('mongoose');
const connection = require('../config/database');
const UserSchema = require('./User');

const TaskSchema = mongoose.Schema({
    status: {
        type: String,
        enum: ['not yet', 'progress', 'done'],
        required: true
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: UserSchema
    },
    createdDate: {
        type: Date,
        mutable: false
    },
    updateDate: {
        type: Date,
        default: () => this.createdDate
    },
    type: {
        type: String,
        enum: ['collector_task', 'janitor_task'],
        required: true
    }
},
{
    discriminatorKey: 'type',
    collection: 'Task'
})

const Task = connection.model('Task', TaskSchema);

const JanitorTask = Task.discriminator('janitor_task', new mongoose.Schema({
    area: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Area,
        required: true,
    },
    vehicle: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Vehicle,
        required: true,
        validate: {
            validator: function(value) {
                return value.type === 'troller'
            },
            message: 'VehicleTypeError: janitor task contains only vehicle::troller type'
        }
    }
}))


const CollectorTask = Task.discriminator('collector_task', new mongoose.Schema({
    route: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Route,
        required: true,
    },
    vehicle: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Vehicle,
        required: true,
        validate: {
            validator: function(value) {
                return value.type === 'truck'
            },
            message: 'VehicleTypeError: janitor task contains only vehicle::truck type'
        }
    }
}))

module.exports = {Task, JanitorTask, CollectorTask}