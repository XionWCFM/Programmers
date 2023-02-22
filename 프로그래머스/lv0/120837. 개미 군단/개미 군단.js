function solution(hp) {
    
    let moji = hp % 5
    let answer = Math.floor(hp / 5) 

    if(moji !== 0 ) {
        answer += Math.floor(moji / 3)
        moji = moji % 3
    }
    
    return answer + moji
}