function solution(n) {
    let a = n.toString().split('').sort().reverse()
    let reverse_num = +a.join("")

    return reverse_num

}