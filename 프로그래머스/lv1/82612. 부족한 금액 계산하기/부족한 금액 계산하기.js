function solution(price, money, count) {
    let cost = new Array(count).fill(price)
    let result = cost.reduce((acc, cal, idx) => acc + (cal * (idx + 1)), 0)
    return result <= money ? 0 : result - money
}