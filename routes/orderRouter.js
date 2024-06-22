const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')
const checkRole = require('../middleware/checkRoleMIddleware')

router.post('/',orderController.create)





module.exports = router