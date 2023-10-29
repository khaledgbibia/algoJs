function invrs(str) {
    let revers=str.split(' ').reverse().join('')
    if (str===revers) {
        return true
    }else{return false}
    console.log(str)
}
console.log(invrs('khaled'))
