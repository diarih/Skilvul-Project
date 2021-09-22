function isItNumeric(a){
    if(a == "" || a == " "){
        return false
    }
    else{
    return !isNaN(a)
    }
}

console.log(isItNumeric(22))