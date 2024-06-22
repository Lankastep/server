const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const orderRouter = require('./orderRouter')



router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/device',deviceRouter)
router.use('/brand',brandRouter)
router.use('/order',orderRouter)



module.exports = router