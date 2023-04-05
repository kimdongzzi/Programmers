function solution(A,B){
    let aArr = A.sort((a,b) => a - b)
    let bArr = B.sort((a,b) => b - a)
    let answer = []
    
    for(i in aArr){
      answer.push(aArr[i] * bArr[i])
    }
    
    return answer.reduce((acc, val) => acc + val)

}