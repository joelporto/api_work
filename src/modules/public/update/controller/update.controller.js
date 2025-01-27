const service = require('../service/update.service')

const updateSekila = async (ctx, next) =>{
    ctx.status = 200

    let result = await service.newUp(ctx)
    
    return ctx    
}

module.exports = {
    updateSekila
}