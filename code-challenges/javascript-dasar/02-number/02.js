function chooseDecimals(n,d){
    let e = parseFloat(n) 
    return e.toFixed(d)
}

console.log(chooseDecimals(2.100212, 2));
console.log(chooseDecimals(2.100212, 3));
console.log(chooseDecimals(2100, 2));