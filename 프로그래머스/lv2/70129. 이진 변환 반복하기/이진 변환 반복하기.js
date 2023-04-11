function solution(s) {
    let answer = [0, 0]
    while(s !== "1"){
        s = s.split("")
        let one = s.filter(x => x === "1").length;
        answer[0]++
        answer[1] += s.length - one
        s = one.toString(2)
    }
    return answer
}