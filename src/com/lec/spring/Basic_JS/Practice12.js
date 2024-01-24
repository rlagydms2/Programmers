// <문자열 돌리기>
// 문자열 str이 주어집니다.
// 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
// 1 ≤ str의 길이 ≤ 10  ==> #######################질문#####################

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = ["abcde"];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let i in str){
        console.log(str[i]);
    }
    // [...str].forEach(c => console.log(c)) ---> 풀이2

});