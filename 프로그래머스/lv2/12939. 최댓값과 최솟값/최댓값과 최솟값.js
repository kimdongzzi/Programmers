function solution(s) {
    let val = s.split(" ")
    return `${Math.min(...val)} ${Math.max(...val)}`
}