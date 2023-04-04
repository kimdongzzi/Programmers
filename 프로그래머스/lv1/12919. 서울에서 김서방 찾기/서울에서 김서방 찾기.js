function solution(seoul) {
    return seoul.map((val, idx) => val === "Kim" ? `김서방은 ${idx}에 있다`: "").join("")
}