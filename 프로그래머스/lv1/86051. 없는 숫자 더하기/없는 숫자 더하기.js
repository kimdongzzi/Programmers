function solution(numbers) {
    var answer = Array(10).fill(0, 0).map((val, idx) => idx)
    let num = numbers.sort((a,b) => a - b)
    return answer.filter((val, idx) => !num.includes(val)).reduce((acc, val) => acc + val, 0)
}