function solution(wallpaper) {
    let [arrX,arrY,answer] = [[],[],[]] 
    wallpaper.forEach((ele,y) => {
        let min = ele.indexOf("#")
        let max = ele.lastIndexOf("#")
        if(min !== -1) {
            arrX.push(min)
            arrY.push(y)
        }
        
        if(max !== -1) {
            arrX.push(max)
            arrY.push(y)
        }
    })
    
    answer.push(Math.min(...arrY), Math.min(...arrX) , Math.max(...arrY)+1, Math.max(...arrX)+1)
    
    return answer
}

