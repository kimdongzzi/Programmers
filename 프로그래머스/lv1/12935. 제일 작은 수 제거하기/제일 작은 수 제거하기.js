function solution(arr) {
    const min = Math.min(...arr)
    let answer = arr.filter(val => val !== min)
    return answer.length === 0 ? [-1] : answer
}