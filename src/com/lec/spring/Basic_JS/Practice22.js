// <원소들의 곱과 합>
// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다
// 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9

function solution(num_list) {
    var answer = 0;
    let sum1 = 1;
    let sum2 = 0;
    for (let i of num_list) { // 배열 num_list의 각 원소를 순회하는 for...of 반복문. 각 원소는 반복할 때마다 변수 i에 할당된다.
        sum1 *= i;
        sum2 += i;
        answer = sum1 < (sum2**2) ? 1 : 0;
    }
    return console.log(answer);
}
solution([3,4,5,2,1])