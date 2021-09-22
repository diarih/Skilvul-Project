function firstNameOnly(a){
    let b = a.split(" ")
    return b[0] + " " + b[1].charAt(0) + "."
    
}
console.log(firstNameOnly("david Winalda"))