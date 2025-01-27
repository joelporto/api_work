const Sequelize = require('sequelize')

const user = sequelizeSakila.define('user',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
    },
    status:{
        type: Sequelize.INTEGER
    },
    statusUser:{
        type: Sequelize.STRING,
        field: "status_user"
    },
    key:{
        type: Sequelize.STRING
    },
    auth:{
        type: Sequelize.TEXT
    },
    firstName:{
        type: Sequelize.STRING,
        field: "first_name"
    },
    lastName:{
        type: Sequelize.STRING,
        field: "last_name"
    }


})