let express = require('express')
let DAO = require('../dao')
let router = express.Router()
// 登录路由
router.post('/login', function (req, res, next) {

    let { username, password } = req.body;
    (username == 1 && password == 1)
        ? res.json({ status: 1, token: 'admin' })
        : res.json({ status: 0, token: '' })
});
router.post('/getInfo', (req, res) => {
    res.json({
        role: 'admin'
    })


})
module.exports = router