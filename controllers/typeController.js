const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')


class typeController{
    async create(req,res) {
        const{name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }
    async getAll(req,res) {
        const types = await Type.findAll() //функция асинхронная поэтому swait
        return res.json(types)
    }

}

module.exports = new typeController()