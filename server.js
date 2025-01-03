const Q = require('q')

let env = require("dotenv").config();
env = env.parsed;
process.env.TZ = "UTC";
global.env = env

const init = async () => {
    Q.fcall(async () =>{
        let mysqlConnection = require('./src/config/mysql_sekila')
        global.sequelizeSakila = await mysqlConnection()
    }).then(async () =>{
        let Koa = require("koa");
        let convert = require("koa-convert");
        let corsError = require("koa-cors-error");
        let body = require("koa-body");
        let compress = require("koa-compress");
        let loggerMiddleware = require("koa-logger");
        let koaCors = require("koajs-cors");
        let http = require("http");

        let port = require('./src/config/constants').port;
        let dictionaryError = require('./src/dictionary/error');

        global.dictionaryError = dictionaryError

        let app = new Koa();

      // config koa Portal
      app.use(convert(corsError));

      app.use(body({ multipart: true }));
      app.use(convert(compress()));

      app.use(loggerMiddleware());

      app.use(
        koaCors({
          origin: true,
          methods: ["GET", "POST", "PUT", "OPTIONS", "DELETE"],
        })
      );

      /* Public ROUTES */
      app = require("./public")(app);

      http.createServer(app.callback()).listen(port,()=>{
        console.log(`Server M2M APP listening at port: ${port}`);
      })

    })
    .catch((e) =>{
        console.log(e)
    })
}

init()