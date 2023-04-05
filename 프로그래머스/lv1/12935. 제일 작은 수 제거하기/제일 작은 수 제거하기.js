function solution(arr) {
    let newArr = [...arr]
    let sortArr = newArr.sort((a,b)=>b-a).filter((val,idx) => idx !== arr.length - 1)
    return sortArr.length === 0 ? [-1] : arr.filter((val,idx) => sortArr.includes(val))
}