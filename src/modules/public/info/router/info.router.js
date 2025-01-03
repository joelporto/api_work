const Router = require('koa-router')
let router = new Router()
const baseUrl = '/info'
const controller = require('../controller/info.controller')

router.get(`${baseUrl}`, async (ctx, next) => controller.display(ctx, next))

module.exports = router