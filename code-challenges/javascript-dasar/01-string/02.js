function truncate_string(a,b){
    if ((a.constructor === String) && (b>0)){
        return a.slice(0,b)
    }
}
console.log(truncate_string("terra skilvul",5))