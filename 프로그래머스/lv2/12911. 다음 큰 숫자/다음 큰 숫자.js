function solution(n) {
//    answer > n
//     answer.toString(2).match(/1/g).length === n.toString(2).match(/1/g).length
    let answer = 0
    const nLen = n.toString(2).match(/1/g).length
    while(true){
        n++
        if(n.toString(2).match(/1/g).length === nLen) return answer = n
    }
    return answer
}