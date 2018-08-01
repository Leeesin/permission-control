let express = require('express')
let DAO = require('../dao')
let router = express.Router()
// 登录路由
router.post('/login', function (req, res, next) {
    console.log(req.body);

    let { username, password } = req.body;
    (username == 1 && password == 1)
        ? res.json({ token: 'success' })
        : ''

});
module.exports = router