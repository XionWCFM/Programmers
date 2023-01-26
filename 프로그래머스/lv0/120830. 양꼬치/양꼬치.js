function solution(n, k) {
    var answer = 0;
    let bill = (n * 12000) + (k*2000)
    if (n/10 > 1) {
        for (i = 1 ; i <= parseInt(n/10) ; i++ ) {
            answer = answer - 2000
        }
    }
    return answer + bill;
}