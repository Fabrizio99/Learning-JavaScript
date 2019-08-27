var fs = require('fs')

function modul(path,extension,callback){
    fs.readdir(path,function (error,lista){
        if(error) {
            callback(error)
            return
        }
        const archivos = []
        lista.forEach(element => {
            if(element.endsWith('.'+extension))     archivos.push(element)
        })
        return callback(null,archivos)
    })
}
module.exports = modul