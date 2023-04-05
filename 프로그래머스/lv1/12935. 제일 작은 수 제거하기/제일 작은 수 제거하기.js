function solution(arr) {
    const min = [...arr].sort((a,b)=> b-a).filter((val,idx) => idx !== arr.length - 1)
    return min.length === 0 ? [-1] : arr.filter(val => min.includes(val))
}