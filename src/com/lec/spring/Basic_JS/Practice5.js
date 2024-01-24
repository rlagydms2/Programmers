// <더 크게 합치기>
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
//
// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
//
// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.
// 1 ≤ a, b < 10,000
function solution(a, b) {
    var answer = 0;
    if(`${a}` + `${b}` < `${b}` + `${a}`) {
        answer = `${b}` + `${a}`;
    } else {answer = `${a}` + `${b}`}
    return console.log(parseInt(answer));
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