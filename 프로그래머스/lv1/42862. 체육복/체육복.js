function solution(n, lost, reserve) {
    let arr = new Array(n).fill(1)
    for(i=0 ; i < Math.max(lost.length,reserve.length) ; i++ ) {
        arr[ lost[i] -1 ]--
        arr[ reserve[i] -1 ]++
    }
    
    for(i=0 ; i < arr.length ; i++) {
        if(arr[i] == 2 && arr[i-1] ==0) {
            arr[i]--;
            arr[i-1]++
        }
        
        else if(arr[i] == 2 && arr[i+1] == 0 ) {
           arr[i]--;
           arr[i+1]++;
        }

    }
    return arr.filter(ele => ele!=0).length
}