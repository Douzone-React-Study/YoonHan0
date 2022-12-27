// function solution(x, n) {
//     var answer = [];
//     let temp = x
//     for(var i=0; i<n; i++) {
//       answer[i] = x;
//       x= x+temp;
//     }
//   return answer;
// }

function solution(x, n) {
    let arr = [];
    let temp = x;
    for(let i = 0; i < n; i++) {
        arr = arr.concat(temp+(x*i));
    }
    return arr;
}