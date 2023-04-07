function solution(a, b) {
    return a.reduce((acc,cal,idx) => acc + cal * (b[idx]), 0)
}