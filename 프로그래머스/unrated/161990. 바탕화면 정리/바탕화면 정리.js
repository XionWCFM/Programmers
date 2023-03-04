function solution(wallpaper) {
    let map = new Map()
    map.set('arrX',[])
    map.set('arrY',[])

    let answer = []
    wallpaper.forEach((ele,y) => {
        let spliter = ele.split('')
        spliter.forEach( (it,x) => {
            let pushx = map.get('arrX')
            let pushy = map.get('arrY')
            
            if(it === '#') {
                pushx.push(x)
                pushy.push(y)
            }
        }) 
    })
    answer.push(Math.min(...map.get('arrY')))
    answer.push(Math.min(...map.get('arrX')))
    answer.push(Math.max(...map.get('arrY')) +1 )
    answer.push(Math.max(...map.get('arrX')) +1)
    return answer
}

