function solution(k, tangerine) {
    let map = new Map()
    let counter = 0
    let answer = 0
    
    for(i=0; i<tangerine.length; i++) {
        map.set(tangerine[i], map.get(tangerine[i]) +1 || 0 +1 ) 
    }
    
    let sorter = [...map.values()].sort((a,b) => b - a)
    
    for(i=0; i<sorter.length; i++) {
        counter += sorter[i]
        answer++
        if(counter >= k) return i+1
    }
    return answer
}