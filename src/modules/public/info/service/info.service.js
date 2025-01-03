const actorModel = require('../../../../models_mysql/sakila/actor')
const helpers = require('../helpers/info.helper')

const list = async (ctx) => {

    let _attributes = await helpers.attributes()

    let result = await actorModel.findAll({
        attributes: _attributes,
        limit: 1000,
        logging: true
    }).then(async data =>{

        if(!data){
            ctx.body = [dictionaryError.not_found]
            return ctx.status = 400
        }
        ctx.body = await data
        
    }).catch(err =>{
        ctx.status = 500
        console.error(err.sql)
        console.error(err.stack)
        return [dictionaryError.error_on_list]
    })

    return result
}

module.exports = {
    list
}