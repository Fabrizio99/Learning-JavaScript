// I/O asincrona
var fs = require('fs')
var path = process.argv[2]

// option 1
fs.readFile(path,callback)
function callback(error,data){
    if(error) throw new Error('error')
    var str = data.toString() .split('\n')
    console.log(str.length-1)
}

// option 2, using the uft8
fs.readFile(path,'utf8',callback)
function callback(error,data){
    if(error) throw new Error('error')
    var str = data.split('\n')
    console.log(str.length-1)
}