const fs = require('fs')
const path = require('path')
const mount = require('koa-mount')

const modelsPath = path.resolve('src/modules/public')

function readDir(srcpath) {
  let files = []
  fs.readdirSync(srcpath).filter(function(file) {
    files.push(`${file}`)
  });
  return files
}

module.exports = (app) => {
  fs
    .readdirSync(modelsPath)
    .forEach(file => {
      let dirs = readDir(`${modelsPath}/${file}`)
      dirs.forEach(function(sub) {
        let subdir = readDir(`${modelsPath}/${file}/${sub}`)
        subdir.forEach(function(subfile) {
          if (/\.router.js$/.test(`${modelsPath}/${file}/${sub}/${subfile}`))
            app.use(mount('/public', require(`${modelsPath}/${file}/${sub}/${subfile}`).routes()))
        })
      })
    })

  return app
}