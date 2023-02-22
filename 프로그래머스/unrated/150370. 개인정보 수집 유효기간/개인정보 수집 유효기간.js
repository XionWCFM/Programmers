function solution(today, terms, privacies) {
    let map = new Map()
    let answer = []
    today = today.split(".")
    
    terms.forEach(ele => {
        let [type , term] = ele.split(" ")
        map.set(type,+term)
    })
    
    privacies.forEach( (ele,i) => {
        let [time, type] = ele.split(" ")
        let [year,month,day] = time.split(".")
        month = map.get(type) + Number(month)
            while(month > 12) {
            if (month > 12) {
                month = month - 12
                year = +year + 1 
            }
        }
        if( year < today[0] ) return answer.push(i+1)
        if( year == today[0] && month < today[1]  ) return answer.push(i+1) 
        if( year == today[0] && month == today[1] && day <= today[2]) return answer.push(i+1)
    })
    return answer


}