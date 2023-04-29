const router = require('express').Router();
const User = require('../models/User')
const {registerValidate, loginValidate} = require("../validation");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

router.post('/register', async (req, res) => {
    const {error} = registerValidate(req.body);
    // Validate the information from user
    if(error) return res.status(400).send({error: error.details[0].message});
    // Check database to know if the user exists or not
    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist) return res.status(400).send("Email already exists");
    // Hash the password before the storage
    const salt = await bcrypt.genSalt(10);
    const hashedPassw = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassw,
        role: req.body.role
    })
    try{
        const storedUser = await user.save(); // store into the database
        return res.send({user: user._id});
    }
    catch(err) {
        return res.status(400).send(err);
    }
})

router.post('/login', async (req, res) => {
    const {error} = loginValidate(req.body);
    // Validate the information from user
    if(error) return res.status(400).send({error: error.details[0].message});
    // Check database to know if the user exists or not
    const user = await User.findOne({ username: req.body.username }).lean();
    if(!user) return res.status(400).send("incorrect username or password");

    // Hash the password before the storage
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid){
        return res.json({
                status: 'fail',
                error: {
                    "message": "mismatch username and account"
                }
            });
    }
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    const {username, email, createdDate, role} = user;
    return res.header('Authorization', token).json({        access_token: token,
        token_type: "JWT",

            expires_in: "null",
            id_token: {
                username, email, createdDate, role
            },
            user_id: user._id,
            status: 'success',
            error: "null"
    });
})

module.exports = router;

