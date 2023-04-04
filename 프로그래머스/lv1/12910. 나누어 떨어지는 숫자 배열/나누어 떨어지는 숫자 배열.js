function solution(arr, divisor) {
    let newArr = arr.filter((val) => val % divisor === 0).sort((a,b) => a-b)
    return newArr.length !== 0 ? newArr : newArr = [-1]
}