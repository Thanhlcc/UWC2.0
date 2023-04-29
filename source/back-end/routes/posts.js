const router = require("express").Router();
const verify = require('../middlewares/verifyToken')

router.get('/', verify, (req, res)=>{
    return res.send("Protected route");
})

module.exports = router;