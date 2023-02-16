function solution(word) {
    let answer = []
    
    function maker(n,word,words) {
        if(n === 0 ) {
            words.push(word)
            return
        }    
        for(let i=0; i<5; i++) {
            maker(n-1, word + ['A','E','I','O','U'][i] , words)
        }
        
    }
    
    for(let i=1; i<=5 ; i++) {
        maker(i, '', answer)
    }
    
    answer.sort()
    
   for(let i=0 ; i<answer.length ;i++) {
       if(answer[i] === word) return i+1
   }
}