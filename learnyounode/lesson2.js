// knowledge about process
function add(process){
    let suma = 0;
    for (let index = 2; index < process.length; index++) {
        suma+=Number(process[index])
    }
    return suma
}
console.log(add(process.argv))