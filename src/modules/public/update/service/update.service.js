const actorModel = require('../../../../models_mysql/sakila/actor')
const helpers = require('../helpers/update.helper')

const newUp = async(ctx) =>{

    let _attributes = await helpers.attributes()
}

module.exports = {
    newUp
}