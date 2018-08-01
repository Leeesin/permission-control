let express = require('express')
let DAO = require('../dao')
let router = express.Router()
// 登录路由
router.post('/login', function (req, res, next) {
    let data = req.body
    console.log(data);

    // let dao = new DAO('mongodb://localhost:27017/my', 'login')
    res.json({ status: data });

});
module.exports = router