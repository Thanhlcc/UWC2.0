const Joi = require('joi');


// Register Validation
function registerValidate(data){
    const schema = Joi.object({
        username: Joi.string().min(6).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        role: Joi.string().valid('admin', 'collector', 'janitor').required()
    });
    return schema.validate(data);
}

// Login Validation
function loginValidate(data){
    const schema = Joi.object({
        username: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}


module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;
