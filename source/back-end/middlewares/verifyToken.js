const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) return res.status(400).send("Access denied");
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user =  verified;
        console.log(req.user);
        next();
    }
    catch(error){
        return res.status(400).send("Invalid user");
    }
}

