var myModule = require('./lesson6-module.js')
myModule(process.argv[2],process.argv[3],function(error,data){
    if(error)  {
        return console.log('error')
    }
    data.forEach(element => {
        console.log(element)
    });
})
