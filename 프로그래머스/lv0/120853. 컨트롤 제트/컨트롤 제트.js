function solution(s) {
    let zMaker = s.split(' ')
    return zMaker.reduce((acc,cur,idx,src) => {
        if(cur === "Z") {
            acc -= src[idx-1]
        }
        else {
            acc += parseInt(cur)
        }
        return acc
    },0)
    
}