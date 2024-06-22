const ApiError = require('../error/ApiError');

module.exports = function(err,req,res,next){
    if(err instanceof ApiError) {// Если класс ошибки апиерор, тогда на клиент возвращаем ответ со статус кодом
         return res.status(err.status).json({message:err.message})
    }
    return res.status(500).json({message: "Непредвиденная ошибка!"})
}