const Sequelize = require('sequelize')

const sequelize = new Sequelize(env.MYSQL_DATABASE, env.MYSQL_USER, env.MYSQL_PASS,{
    host: env.MYSQL_HOST,
    dialect: 'mysql',
    port: env.MYSQL_PORT,
    define: {
        timestamps: false,
        freezeTableName: true,
    },
    pool: {
        max: 20,
        min: 10,
        acquire: 60000,
        idle: 60000,
        evict: 60000
    },
    logging: true
});

module.exports = async () =>{
    let promise = await new Promise(function(resolve, reject) {
        sequelize
          .authenticate()
          .then(() => {
            console.log('Connected to Schema ')
            resolve(sequelize)
          })
          .catch(err => {
            console.log('Not connected to Schema ')
            console.error(err)
            reject()
          })
      })
    
      return promise
}