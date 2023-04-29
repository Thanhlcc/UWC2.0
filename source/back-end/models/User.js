const mongoose = require('mongoose')
const AddressSchema = require('./Util_schema')
const AutoIncrement = require('mongoose-sequence')(mongoose)



const UserNameSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    } ,
    lastname: {
        type: String,
        required: true 
    }
})


// const UserSchema = mongoose.Schema({
//     _id: false,
//     username: {
//         type: String,
//         required: true
//     },
//     hash: {
//         type: String,
//         required: true
//     },
//     salt: {
//         type: String,
//         required: true
//     },
//     empId: {
//         type: Number,
//         unique: true
//     },
//     fullname: {
//         type: UserNameSchema,
//         required: true
//     },
//     dob: Date,
//     role: {
//         type: String,
//         enum: ['admin', 'collector', 'janitor'],
//         required: true
//     }
//
// })

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 20
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'collector', 'janitor']
    },
    email: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

// UserSchema.plugin(AutoIncrement, {inc_field: 'empId'})

module.exports = mongoose.model('User', UserSchema);