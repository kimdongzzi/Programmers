function solution(s) {
    let val = s.split(" ").map(n => +n)
    return `${Math.min(...val)} ${Math.max(...val)}`
}