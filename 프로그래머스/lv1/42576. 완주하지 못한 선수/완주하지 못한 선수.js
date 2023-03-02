function solution(participant, completion) {
    let map = new Map()
    
    for(i=0 ; i<participant.length ;i++) {
        map.set(participant[i] , (map.get(participant[i])||0) +1 )
        
        if(completion[i]) {
            map.set(completion[i] , (map.get(completion[i])||0) -1)
        }
        
    }

    return [...map].filter(e => e[1] === 1)[0][0]
}
