function solution(a, b) {
    var answer = 0;
    if(`${a}` + `${b}` < `${b}` + `${a}`) {
        answer = `${b}` + `${a}`;
    } else {answer = `${a}` + `${b}`}
    return console.log(answer);
}

solution(89, 9)

// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
// }  ---- 간단한 풀이 참고1

// function solution(a, b) {
//     var answer = 0;
//     let ab = '' + a + b;
//     let ba = '' + b + a;
//     answer = Math.max(ab,ba);
//     return answer;
// } ---- 간단한 풀이 참고2