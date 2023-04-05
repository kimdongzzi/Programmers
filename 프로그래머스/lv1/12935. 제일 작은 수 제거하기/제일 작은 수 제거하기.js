function solution(arr) {
    const min = Math.min(...arr)
    return arr.length !== 1 ? arr.filter(val => val !== min) : [-1] 
}