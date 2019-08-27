var fs = require('fs')
var path = process.argv[2]
var extension = process.argv[3]
fs.readdir(path,callback)
function callback(error,lista){
    if(error) throw new Error('error en el proceso')
    lista.forEach(element => {
        if(element.endsWith('.'+extension))    console.log(element)
    });
}