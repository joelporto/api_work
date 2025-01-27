const Router = require('koa-router')
let router = new Router()
const baseUrl = '/update'
const controller = require('../controller/update.controller')

router.put(`${baseUrl}`, async (ctx, next) => controller.update(ctx, next))

module.exports = router