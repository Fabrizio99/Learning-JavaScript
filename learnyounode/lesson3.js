function numberOfLines(process){
    var fs = require('fs')
    var buf = fs.readFileSync(process[2])
    var str = buf.toString().split('\n')
    return str.length-1
}
console.log(numberOfLines(process.argv))