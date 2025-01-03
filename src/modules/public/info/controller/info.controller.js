const service = require('../service/info.service')

const display = async (ctx, next) =>{
    ctx.status = 200

    let info = await service.list(ctx)

    ctx.json = info

    return ctx
}

module.exports = {display}