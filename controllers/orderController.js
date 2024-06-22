const {Order} = require('../models/models')
const ApiError = require('../error/ApiError');

class OrderController {
    async create(req, res, next) {
        try {
            let {userName, userEmail, userPhone, productName, comment} = req.body

            const order = await Order.create({userName, userEmail, userPhone, productName, comment});


            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}
    module.exports = new OrderController()