function solution(s) {
   return s.toLowerCase().split(" ").map(val => val.charAt(0).toUpperCase() + val.substring(1)).join(" ")
}