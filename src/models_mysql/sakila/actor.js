const Sequelize = require('sequelize')

const actor = sequelizeSakila.define('actor', {
    id:{
        type: Sequelize.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        field: 'actor_id'
    },
    firtName:{
        type: Sequelize.INTEGER(45),
        field: 'first_name'
    },
    lastName:{
        type: Sequelize.INTEGER(45),
        field: 'last_name'
    },
    lastUpdate:{
        type: Sequelize.DATE,
        field: 'last_update'
    }
})

module.exports = actor