function solution(absolutes, signs) {
    let arr = absolutes
    for(i in arr){
       signs[i] ? arr[i] : arr[i] = -arr[i]
    }
    return arr.reduce((acc, cal) => acc + cal)
}