function solution(s) {
    let findnum = s.split(" ").map(v => +v)
    let answer = []
    for (i=0; i < 1 ; i++) {
        answer.push(Math.min.apply(null,findnum))
        answer.push(Math.max.apply(null,findnum))
    }
    return answer.join(" ")
}