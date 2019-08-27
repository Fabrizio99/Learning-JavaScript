const stats = (arr,init=true)=>{
    if(arr.length===0) return 0
    if (init)   return (arr[0].edad+stats(arr.slice(1),false))/arr.length
    return (arr[0].edad+stats(arr.slice(1),false))
}

console.log(stats([{edad:1},{edad:2},{edad:12}]))