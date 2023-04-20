function solution(n, m) {
    let answer = [];
    let a;
    let b = n * m 
    while(m > 0){
        let r = n % m
        n = m
        m = r
        a = n
    }
    
    answer.push(a, b / a)
    
    return answer;
}