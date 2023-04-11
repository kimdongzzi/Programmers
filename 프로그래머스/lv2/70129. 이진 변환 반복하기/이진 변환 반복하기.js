function solution(s) {
    let answer = [0, 0]
    while(s !== "1"){
        let len = s.length;
        s = s.match(/1/g).length;
        answer[0]++
        answer[1] += len - s
        s = s.toString(2)
    }
    return answer
}