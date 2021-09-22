function text_truncate (str,length = 100, ending = "..."){
    return str.slice(0, length) + ending;
}

console.log(text_truncate("We are doing JS string exercises."))
console.log(text_truncate("We are doing JS string exercises.", 19))
console.log(text_truncate("We are doing JS string exercises.", 15, "!!"))