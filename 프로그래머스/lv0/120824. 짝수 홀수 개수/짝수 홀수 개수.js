function solution(num_list) {
    let single = 0
    let double = 0
    for(i=0 ; i < num_list.length ; i++) {
        if (num_list[i] % 2 == 0) {
            double += 1
        }
        else if (num_list[i] % 2 != 0){
            single += 1
        }
    }
    return [double, single]
}